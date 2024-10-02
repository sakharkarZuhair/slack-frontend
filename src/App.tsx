import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'

import Home from './pages/Home/Home'
import Channel from './pages/Channel/Channel'
import Feature from './pages/Features/Feature'
import Register from './pages/Register/Register'
import MainLayout from './layouts/MainLayout'
import ProtectedRoute from './components/ProtectedRoutes'
import Authentication from './pages/Authentication'
import { useSelector } from 'react-redux'
import { RootState } from './store'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/feature', element: <Feature /> },
  { path: '/register', element: <Register /> },
  { path: '/authentication', element: <Authentication /> },
  {
    path: '/channel',
    element: (
      <ProtectedRoute>
        <Channel />
      </ProtectedRoute>
    ),
  },
]

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  const location = useLocation()

  return (
    <MainLayout
      isLoggedIn={isLoggedIn}
      isRegisterPage={location.pathname === '/register'}
    >
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              path !== '/channel' && isLoggedIn ? (
                <Navigate to="/channel" replace />
              ) : (
                element
              )
            }
          />
        ))}
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
