import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

interface AuthState {
  accessToken: string | null
  refreshToken: string | null | undefined
  isLoggedIn: boolean
}

const initialState: AuthState = {
  accessToken: Cookies.get('accessToken') || null,
  refreshToken: Cookies.get('refreshToken') || null,
  isLoggedIn: !!Cookies.get('accessToken'), // Check if accessToken exists
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) {
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
      state.isLoggedIn = true
    },
    logout(state) {
      state.accessToken = null
      state.refreshToken = null
      state.isLoggedIn = false
    },
    initializeAuth(state) {
      const accessToken = Cookies.get('accessToken')
      const refreshToken = Cookies.get('refreshToken')

      if (accessToken) {
        state.accessToken = accessToken
        state.refreshToken = refreshToken || null
        state.isLoggedIn = true
      } else {
        state.accessToken = null
        state.refreshToken = null
        state.isLoggedIn = false
      }
    },
  },
})

export const { login, logout, initializeAuth } = authSlice.actions
export default authSlice.reducer
