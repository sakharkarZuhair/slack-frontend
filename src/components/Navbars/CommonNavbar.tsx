import React from 'react'
import Image from '../Image'
import { Link } from 'react-router-dom'
import { slackLogo } from '../../assets'
import { commonNavLinks } from '../../utils/nav-links'
import { IoSearch } from 'react-icons/io5'
import Button from '../Button'

const CommonNavbar = () => {
  return (
    <nav className="max-w-[1350px] w-full justify-center items-center m-auto bg-white py-6 px-3">
      <section className="w-full flex justify-between items-center">
        <div className="flex items-center gap-8">
          <SlackLogo />
          <NavLinks />
        </div>
        <div className="flex items-center">
          <Search />
          <div className='flex items-center gap-6'>
            <Button variant="link">Sign in</Button>
            <Button variant='outline'>TALK TO SALES</Button>
            <Button variant='primary'>GET STARTED</Button>
          </div>
        </div>
      </section>
    </nav>
  )
}

const NavLinks = () => {
  return (
    <ul className="flex gap-6 items-center">
      {commonNavLinks.map((value, key) => (
        <li className="text-[16px] font-medium cursor-pointer" key={key}>
          <Link to={value?.path}>{value.name}</Link>
        </li>
      ))}
    </ul>
  )
}

const SlackLogo = () => {
  return (
    <div>
      <Image src={slackLogo} />
    </div>
  )
}

const Search = () => {
  return (
    <div className="cursor-pointer">
      <IoSearch size={22} />
    </div>
  )
}

export default CommonNavbar
