import axiosInstance from '../../utils/axios-instance'

export const getUsers = async () => {
  try {
    const users = await axiosInstance.get('/user')
    console.log('Users', users)
  } catch (error) {
    console.log('Error', error)
  }
}
