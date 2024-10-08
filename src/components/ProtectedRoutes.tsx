import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  const location = useLocation()

  if (!isLoggedIn) {
    return <Navigate to="/register" state={{ from: location }} replace />
  }

  return <>{children}</>
}

export default ProtectedRoute
