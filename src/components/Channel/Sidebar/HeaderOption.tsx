import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'

interface HeaderOptionTypes {
  heading: string
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  onClick?: () => void
  children?: React.ReactNode
  className?: string
}

const HeaderOption = ({
  heading,
  isOpen,
  setIsOpen,
  children,
  className = '',
}: HeaderOptionTypes) => {
  const [showOption, setShowOption] = useState(false)

  const toggleIsOpen = () => setIsOpen(!isOpen)
  const toggleShowOption = () => setShowOption(!showOption)

  return (
    <section className="relative flex items-center gap-0 mt-[20px]">
      <div
        onClick={toggleIsOpen}
        className="text-white/70 cursor-pointer hover:bg-white/10 transition-all p-1 rounded-md"
      >
        {isOpen ? (
          <IoMdArrowDropup size={18} />
        ) : (
          <IoMdArrowDropdown size={18} />
        )}
      </div>
      <div
        onClick={toggleShowOption}
        className="flex items-center gap-2 text-[14px] text-white/70 cursor-pointer hover:bg-white/10 transition-all p-1 rounded-md"
      >
        {heading}
        <IoIosArrowDown size={14} />
      </div>
      {showOption && (
        <div
          className={`absolute bg-white top-[28px] left-0 rounded-lg ${className}`}
        >
          {children}
        </div>
      )}
    </section>
  )
}

export default HeaderOption
