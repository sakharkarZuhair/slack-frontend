import React from 'react'
import Image from '../Image'
import { curve } from '../../assets'
import Button from '../Button'

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
        <div className='mb-[200px] flex justify-center items-center gap-4 mt-8'>
          <Button variant="white" className='px-12 py-4'>GET STARTED</Button>
          <Button variant="outline" className='px-12 py-4 border-white text-white hover:text-white'>TALK TO SALES</Button>
        </div>
      </div>
    </div>
  )
}

export default SixthSection
