import React from 'react'
import ChannelImage from './ChannelImage'
import { SideNavMenuTypes } from '../../types/side-nav-menu-types'
import { menuoptions } from '../../utils/side-nav-menu'
import IconContainer from '../IconContainer'

const SideNavbar = () => {
  return (
    <div className="bg-primary-dark flex flex-col justify-center items-center space-y-3">
      <ChannelImage />
      <ul className="flex flex-col justify-center items-center gap-4">
        {menuoptions.map((value: SideNavMenuTypes, key: string | number) => (
          <IconContainer
            className="h-[55px] w-[55px]"
            key={key}
            icon={value?.icon}
            title={value?.title}
            link={value?.link}
          />
        ))}
      </ul>
    </div>
  )
}

export default SideNavbar
