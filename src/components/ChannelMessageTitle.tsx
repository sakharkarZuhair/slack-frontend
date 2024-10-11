import React from 'react'
import { Link } from 'react-router-dom'
import Image from './Image'
import { cardFour } from '../assets'

interface ChannelMessageTitleTypes {
  type: string
  id: string
  name: string
}

const ChannelMessageTitle = ({ id, name, type }: ChannelMessageTitleTypes) => {
  return (
    <div className="flex items-center gap-2 px-2 py-1 hover:bg-white/10 transition-all rounded-md">
      {type == 'client' && (
        <div className="h-[20px] w-[20px] rounded-md overflow-hidden">
          <Image
            src={cardFour}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <Link to={type == 'channel' ? `/channel/${id}` : `/client/${id}`}>
        <p className='text-[14px] text-white/70'>
          {type == 'channel' && '#'} {name}
        </p>
      </Link>
    </div>
  )
}

export default ChannelMessageTitle
