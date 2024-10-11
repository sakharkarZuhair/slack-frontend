import React from 'react'
import { Link } from 'react-router-dom'
import { SideNavMenuTypes } from '../types/side-nav-menu-types'

const IconContainer = ({
  icon,
  title,
  link,
  className = '',
  ...rest
}: SideNavMenuTypes & { className?: string }) => {
  const content = (
    <li
      className={`flex flex-col justify-center items-center text-white gap-1 rounded-xl hover:bg-white/10 transition-all cursor-pointer ${className}`}
      {...rest}
    >
      {icon}
      {title && <p className="text-[10px]">{title}</p>}
    </li>
  )

  return link ? <Link to={link}>{content}</Link> : content
}

export default IconContainer
