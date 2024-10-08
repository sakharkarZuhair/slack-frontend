import React from 'react'
import { IoMdArrowForward, IoMdArrowBack, IoMdTime } from 'react-icons/io'

const LoggedInNavbar = () => {
  return (
    <div className="w-full flex items-center m-auto bg-primary-dark p-2">
      <div className="flex items-center justify-end gap-1 w-[500px]">
        <IconContainer navigation icon={<IoMdArrowBack size={22} />} />
        <IconContainer navigation icon={<IoMdArrowForward size={22} />} />
        <IconContainer icon={<IoMdTime size={22} />} />
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  )
}

const IconContainer = ({
  icon,
  navigation,
}: {
  icon: React.ReactNode
  navigation?: boolean
}) => {
  return (
    <div
      className={`p-1 cursor-pointer rounded ${navigation ? 'text-white/60' : 'text-white hover:bg-primary-light/60'}`}
    >
      {icon}
    </div>
  )
}

const SearchBar = () => {
  return (
    <div className='flex w-[600px] justify-between items-center text-white'>
      <input type="text" placeholder='search' className='bg-transparent outline-none placeholder:text-white placeholder:text-sm' />
      <div>Search</div>
    </div>
  )
}

export default LoggedInNavbar
