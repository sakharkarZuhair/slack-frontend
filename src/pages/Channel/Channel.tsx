import React, { useEffect } from 'react'
import { getUsers } from '../../services/users'
import { getCookie } from '../../utils/cookie-util'
// import SideNavbar from '../../components/Navbars/SideNavbar'
// import ChannelBar from '../../components/Navbars/ChannelBar'

const Channel = () => {
  const cookies = getCookie('accessToken')
  console.log('Access cookie', cookies)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers()
        console.log('Users', users)
      } catch (error) {
        console.error('Error fetching users', error)
      }
    }

    fetchUsers()
  }, [])
  return (
    <div className="flex items-start">
      {/* <div className="bg-primary-dark w-[80px] h-calc-screen">
        <SideNavbar />
      </div>
      <div className="bg-primary-light h-calc-screen w-[400px]">
        <ChannelBar />
      </div> */}
      <div className="bg-white h-calc-screen w-full">All Chat</div>
    </div>
  )
}

export default Channel
