import CommonNavbar from '../components/Navbars/CommonNavbar'
import LoggedInNavbar from '../components/Navbars/LoggedInNavbar'

interface MainLayoutProps {
  isLoggedIn: boolean
  isRegisterPage: boolean
  children: React.ReactNode
}

const MainLayout = ({
  isLoggedIn,
  isRegisterPage,
  children,
}: MainLayoutProps) => {
  const renderNavbar = () => {
    if (isRegisterPage) {
      return null
    }
    if (isLoggedIn) {
      return <LoggedInNavbar />
    }
    return <CommonNavbar />
  }

  return (
    <div className="w-full">
      {renderNavbar()}
      <div className="">{children}</div>
    </div>
  )
}

export default MainLayout
