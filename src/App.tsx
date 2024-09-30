import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Channel from './pages/Channel/Channel'
import Feature from './pages/Features/Feature'
import Register from './pages/Register/Register'
import MainLayout from './layouts/MainLayout'

function App() {
  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [isRegisterPage, setIsRegisterPage] = useState<boolean>(false)

  useEffect(() => {
    if (location.pathname === '/register') {
      setIsLoggedIn(false)
      setIsRegisterPage(true)
    } else {
      setIsRegisterPage(false)
    }
  }, [location.pathname])

  return (
    <MainLayout isLoggedIn={isLoggedIn} isRegisterPage={isRegisterPage}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/register" element={<Register />} />
        <Route path="/channle" element={<Channel />} />
      </Routes>
    </MainLayout>
  )
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}
