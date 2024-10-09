import React from 'react'
import {
  IoMdArrowForward,
  IoMdArrowBack,
  IoMdTime,
  IoIosSearch,
} from 'react-icons/io'

const LoggedInNavbar = () => {
  return (
    <div className="w-full flex items-center m-auto bg-primary-dark h-[50px] p-2 gap-4 z-50">
      <div className="flex items-center justify-end gap-1 w-[480px]">
        <IconContainer navigation icon={<IoMdArrowBack size={22} />} />
        <IconContainer navigation icon={<IoMdArrowForward size={22} />} />
        <IconContainer icon={<IoMdTime size={22} />} />
      </div>
      <div className='w-full'>
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
    <div className="flex w-[600px] justify-between items-center text-white bg-primary-light px-3 py-1 rounded-md">
      <input
        type="text"
        placeholder="search"
        className="bg-transparent outline-none placeholder:text-white placeholder:text-sm"
      />
      <div className='text-white/50'>
        <IoIosSearch size={20} />
      </div>
    </div>
  )
}

export default LoggedInNavbar
