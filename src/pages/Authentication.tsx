import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'

const Authentication = () => {
  const params = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const tokenValues = new URLSearchParams(params.search)
    const accessToken = tokenValues.get('accessToken')
    const refreshToken = tokenValues.get('refreshToken')

    if (accessToken && refreshToken) {
      Cookies.set('accessToken', accessToken, {
        expires: 30 / (60 * 60 * 24),
        secure: true,
        sameSite: 'Strict',
      })
      Cookies.set('refreshToken', refreshToken, {
        expires: 7,
        secure: true,
        sameSite: 'Strict',
      })
      dispatch(login({ accessToken, refreshToken }))
      navigate('/channel', { replace: true })
    } else {
      console.error('Access or refresh token missing in the URL')
    }
  }, [params.search, navigate, dispatch])

  return (
    <div className="flex justify-center items-center w-full m-auto">
      Loading...
    </div>
  )
}

export default Authentication
