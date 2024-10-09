import { SideNavMenuTypes } from '../types/side-nav-menu-types'
import { MdHome } from 'react-icons/md'
import { TiMessages } from 'react-icons/ti'

export const menuoptions: SideNavMenuTypes[] = [
  {
    icon: <MdHome />,
    title: 'Home',
    tooltip: 'Go to Home',
    link: '/',
  },
  {
    icon: <TiMessages />,
    title: 'DMs',
    tooltip: 'Direct Messages',
    link: '/',
  },
  {
    icon: <TiMessages />,
    title: 'Activity',
    tooltip: 'Activity',
    link: '/',
  },
  {
    icon: <TiMessages />,
    title: 'Later',
    tooltip: 'Later',
    link: '/',
  },
  {
    icon: <TiMessages />,
    title: 'More',
    tooltip: 'More',
    link: '/',
  },
]
