import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const GoogleAuthCallback = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Extract query params (if the tokens are passed in the URL)
    // const queryParams = new URLSearchParams(window.location.search)

    // Alternatively, if you're sending the tokens in JSON from backend,
    // you may need to make a GET request to fetch user details.

    fetch('http://localhost:4000/auth/google/callback', {
      method: 'GET',
      credentials: 'include', // To handle cookies if needed
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.accessToken) {
          // Store tokens in localStorage or Redux store
          localStorage.setItem('accessToken', data.accessToken)
          localStorage.setItem('refreshToken', data.refreshToken)

          // Optionally store user details
          localStorage.setItem('user', JSON.stringify(data.user))

          // Redirect to the app's dashboard or homepage
          navigate('/dashboard')
        }
      })
      .catch((error) => {
        console.error('Error during Google authentication:', error)
        navigate('/login') // Redirect to login if there’s an error
      })
  }, [navigate])

  return <div>Loading...</div>
}

export default GoogleAuthCallback
