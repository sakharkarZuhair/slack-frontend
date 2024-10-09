import ChannelBar from '../components/Navbars/ChannelBar'
import CommonNavbar from '../components/Navbars/CommonNavbar'
import LoggedInNavbar from '../components/Navbars/LoggedInNavbar'
import SideNavbar from '../components/Navbars/SideNavbar'

interface MainLayoutProps {
  isLoggedIn: boolean
  isRegisterPage: boolean
  children: React.ReactNode
  className?: string
}

const MainLayout = ({
  isLoggedIn,
  isRegisterPage,
  children,
  className,
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
    <div className={`w-full ${className}`}>
      {renderNavbar()}
      <div className="flex items-start">
        {isLoggedIn && (
          <>
            {' '}
            <div className="bg-primary-dark w-[80px] h-calc-screen">
              <SideNavbar />
            </div>
            <div className="bg-primary-light h-calc-screen w-[400px]">
              <ChannelBar />
            </div>
          </>
        )}

        {children}
      </div>
    </div>
  )
}

export default MainLayout
