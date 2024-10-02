import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
    AxiosRequestHeaders,
    InternalAxiosRequestConfig,
  } from 'axios';
  import Cookies from 'js-cookie';
  import store from '../store'; // Ensure this is the correct path to your Redux store
  import { logout } from '../store/authSlice'; // Path to your auth actions
  
  // Create Axios instance
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api/v1', // Update with your backend URL
    withCredentials: true, // Ensures cookies are included with requests
  });
  
  // Request Interceptor
  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const accessToken = Cookies.get('accessToken');
      console.log("HEREEE", accessToken)
  
      // Ensure headers is of type AxiosRequestHeaders
      if (config.headers) {
        (config.headers as AxiosRequestHeaders)['Authorization'] = accessToken
          ? `Bearer ${accessToken}`
          : '';
      } else {
        config.headers = {
          Authorization: accessToken ? `Bearer ${accessToken}` : '',
        } as AxiosRequestHeaders;
      }

  
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );
  
  // Response Interceptor
  axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        console.log("BEFORE RRROR")
      return response;
    },
    async (error: AxiosError) => {
        console.log("ERRORSECTIOn", error)
      const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };
  
      // Check for 401 Unauthorized response and if retry flag is not already set
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const refreshToken = Cookies.get('refreshToken');
          if (refreshToken) {
            const { data } = await axios.post('/auth/generate-new-access-token', {
              token: refreshToken,
            });
  
            console.log("Received new tokens:", data);
  
            // Update cookies with new tokens
            Cookies.set('accessToken', data.accessToken, {
              expires: 30 / (60 * 60 * 24), // 30 seconds in days
              secure: true,
              sameSite: 'Strict',
            });
            Cookies.set('refreshToken', data.refreshToken, {
              expires: 7, // 7 days
              secure: true,
              sameSite: 'Strict',
            });
  
            // Retry original request with new access token
            if (originalRequest.headers) {
              originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;
            }
  
            return axiosInstance(originalRequest); // Retry the request
          }
        } catch (err) {
          console.log("Axios Instance Error", err);
          store.dispatch(logout()); // Handle logout if refresh fails
          window.location.href = '/register'; // Redirect to the login page
        }
      }
  
      return Promise.reject(error); // Reject if it's not a 401 error
    }
  );
  
  export default axiosInstance;
  