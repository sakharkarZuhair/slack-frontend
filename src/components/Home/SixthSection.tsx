import React from 'react'
import Image from '../Image'
import Button from '../Button'
import Container from '../Container'
import { curve } from '../../assets'
import { CiGlobe } from 'react-icons/ci'
import { IoIosArrowDown } from 'react-icons/io'
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const iconList = [
  { icons: <FaLinkedinIn size={19} />, link: '/' },
  { icons: <FaInstagram size={19} />, link: '/' },
  { icons: <FaFacebook size={19} />, link: '/' },
  { icons: <FaXTwitter size={19} />, link: '/' },
  { icons: <FaYoutube size={19} />, link: '/' },
  { icons: <FaTiktok size={19} />, link: '/' },
]

const SixthSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="rotate-180 w-[120%] ml-[-205px] mt-[-100px] -z-10">
        <Image src={curve} />
      </div>
      <div className="relative z-50 mt-[-280px]">
        <p className="text-[55px] font-bold text-white text-center">
          See all that you can accomplish with Slack
        </p>
        <div className="mb-[200px] flex justify-center items-center gap-4 mt-8">
          <Button variant="white" className="px-12 py-4">
            GET STARTED
          </Button>
          <Button
            variant="outline"
            className="px-12 py-4 border-white text-white hover:text-white"
          >
            TALK TO SALES
          </Button>
        </div>
        <Container>
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-1">
              <div>
                <CiGlobe size={22} />
              </div>
              <p className="text-[14px] font-semibold">Change Region</p>
              <div>
                <IoIosArrowDown />
              </div>
            </div>
            <SocialLogo />
          </div>
        </Container>
      </div>
    </div>
  )
}

const SocialLogo = () => {
  return (
    <div className="flex items-center gap-4">
      {iconList.map((value, key) => (
        <Link key={key} to={value?.link}>
          {value?.icons}
        </Link>
      ))}
    </div>
  )
}

export default SixthSection
