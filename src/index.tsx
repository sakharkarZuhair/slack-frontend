import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
import { initializeAuth } from './store/authSlice'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
store.dispatch(initializeAuth())
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
