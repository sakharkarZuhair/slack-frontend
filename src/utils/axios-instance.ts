import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosRequestHeaders,
  InternalAxiosRequestConfig,
} from 'axios'
import Cookies from 'js-cookie'
import store from '../store' // Ensure this is the correct path to your Redux store
import { login, logout } from '../store/authSlice'

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/v1', // Update with your backend URL
  withCredentials: true, // Ensures cookies are included with requests
})

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = Cookies.get('accessToken')
    // console.log('HEREEE', accessToken)

    // Ensure headers is of type AxiosRequestHeaders
    if (config.headers) {
      (config.headers as AxiosRequestHeaders)['Authorization'] = accessToken
        ? `Bearer ${accessToken}`
        : ''
    } else {
      config.headers = {
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      } as AxiosRequestHeaders
    }

    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // console.log('BEFORE ERROR HANDLING', response);

    // Check if the response indicates the access token has expired
    if (response?.data?.message === 'access-token-expired') {
      // Update the access token in cookies
      Cookies.set('accessToken', response.data.accessToken, {
        expires: 7, // Set the expiration for 7 days
        secure: true,
        sameSite: 'Strict',
      });

      // Dispatch the login action to update the store with new tokens
      store.dispatch(login({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken // Ensure this is defined in your response
      }));
      

      // console.log('Access token refreshed and login dispatched');
    }

    return response; // Return the response to the calling code
  },
  async (error: AxiosError) => {
    // console.log('ERROR SECTION', error);
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    // Handle 401 Unauthorized errors and retry the request if not already retried
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Set a retry flag
      try {
        const refreshToken = Cookies.get('refreshToken');
        // console.log('Current Refresh Token:', refreshToken);

        if (refreshToken) {
          // Request a new access token using the refresh token
          const { data } = await axios.post('/auth/generate-new-access-token', {
            token: refreshToken,
          });

          // console.log('Received new tokens:', data);

          // Update cookies with the new tokens
          Cookies.set('accessToken', data.accessToken, {
            expires: 7, // 7 days
            secure: true,
            sameSite: 'Strict',
          });
          Cookies.set('refreshToken', data.refreshToken, {
            expires: 7, // 7 days
            secure: true,
            sameSite: 'Strict',
          });

          // Update the Authorization header with the new access token
          if (originalRequest.headers) {
            originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;
            // console.log('Retrying request with new headers:', originalRequest.headers);
          }

          return axiosInstance(originalRequest); // Retry the original request with the new token
        }
      } catch (err) {
        console.error('Error refreshing token:', err);
        store.dispatch(logout()); // Handle logout if refresh fails
        window.location.href = '/register'; // Redirect to the login page
      }
    }

    return Promise.reject(error); // Reject if not a 401 error
  }
);


export default axiosInstance
