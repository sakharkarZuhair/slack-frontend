import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './pages/Home/Home'
import Channel from './pages/Channel/Channel'
import Feature from './pages/Features/Feature'
import Register from './pages/Register/Register'
import MainLayout from './layouts/MainLayout'
function App() {
  // const location = useLocation()
  // console.log('LOCATION', window.location?.pathname)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [isRegisterPage, setIsRegisterPage] = useState<boolean>(false)

  useEffect(() => {
    if (window.location?.pathname == '/register') {
      setIsLoggedIn(false)
      setIsRegisterPage(true)
    }
  }, [])

  // const handleLogin = () => setIsLoggedIn(true)
  // const handleLogout = () => setIsLoggedIn(false)

  return (
    <Router>
      <MainLayout isLoggedIn={isLoggedIn} isRegisterPage={isRegisterPage}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/register" element={<Register />} />
          <Route path="/channle" element={<Channel />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
