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
import DirectMessage from './pages/Dms/DirectMessage'

// Define paths that should redirect to "/channel" when the user is logged in
const redirectPaths = ['/feature', '/register', '/authentication', '/']

const routes = [
  { path: '/', element: <Home /> },
  { path: '/register', element: <Register /> },
  { path: '/authentication', element: <Authentication /> },
  { path: '/feature', element: <Feature /> },
  {
    path: '/channel',
    element: (
      <ProtectedRoute>
        <Channel />
      </ProtectedRoute>
    ),
  },
  {
    path: '/direct-message',
    element: (
      <ProtectedRoute>
        <DirectMessage />
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
              isLoggedIn && redirectPaths.includes(path) ? (
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
