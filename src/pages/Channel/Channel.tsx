import React, { useEffect } from 'react'
import { getUsers } from '../../services/users'
import { getCookie } from '../../utils/cookie-util'

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
  return <div>Channel</div>
}

export default Channel
