import React from 'react'
import { IoIosRocket } from 'react-icons/io'

const SubscriptionButton = () => {
  return (
    <button className=" mt-4 flex gap-2 justify-center items-center w-full bg-white px-4 py-[6px] rounded-md">
      <IoIosRocket className="text-primary-dark" size={20} />
      <p className="text-primary-dark font-medium text-[15px]">Upgrade subscription</p>
    </button>
  )
}

export default SubscriptionButton
