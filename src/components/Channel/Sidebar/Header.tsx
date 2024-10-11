import React from 'react'
import IconContainer from '../../IconContainer'
import { IoFilterSharp } from 'react-icons/io5'
import { LuPenSquare } from 'react-icons/lu'
import { IoIosArrowDown } from 'react-icons/io'

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className='flex items-center gap-1 px-4 py-1 cursor-pointer rounded-md hover:bg-white/10'>
        <h2 className='font-semibold text-[15px] text-white'>Desio</h2>
        <IoIosArrowDown className='text-white' size={16} />
      </div>
      <div className="flex items-center gap-3">
        <IconContainer
          className="h-[35px] w-[35px] text-white/70"
          icon={<IoFilterSharp />}
        />
        <IconContainer
          className="h-[35px] w-[35px] text-white/70"
          icon={<LuPenSquare />}
        />
      </div>
    </div>
  )
}

export default Header
