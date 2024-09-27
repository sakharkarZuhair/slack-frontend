import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const CustomLink = ({ link, desc }: { link: string; desc: string }) => {
  return (
    <div className="mt-4 flex items-center gap-4 cursor-pointer">
      <Link
        to={link}
        className="relative text-[20px] text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full after:right-0"
      >
        {desc}
      </Link>
      <div className="text-blue-500 text-[28px]">
        <IoIosArrowRoundForward size={28} />
      </div>
    </div>
  )
}

export default CustomLink
