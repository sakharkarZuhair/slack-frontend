import { SideNavMenuTypes } from '../types/side-nav-menu-types'
import { MdHome } from 'react-icons/md'
import { TiMessages } from 'react-icons/ti'
import { FaBell, FaBookmark } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

export const menuoptions: SideNavMenuTypes[] = [
  {
    icon: <MdHome size={23} />,
    title: 'Home',
    tooltip: 'Go to Home',
    link: '/',
  },
  {
    icon: <TiMessages size={22} />,
    title: 'DMs',
    tooltip: 'Direct Messages',
    link: '/',
  },
  {
    icon: <FaBell size={20} />,
    title: 'Activity',
    tooltip: 'Activity',
    link: '/',
  },
  {
    icon: <FaBookmark size={18} />,
    title: 'Later',
    tooltip: 'Later',
    link: '/',
  },
  {
    icon: <BsThreeDots size={22} />,
    title: 'More',
    tooltip: 'More',
    link: '/',
  },
]
