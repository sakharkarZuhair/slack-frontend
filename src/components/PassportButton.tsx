import React from 'react'

interface PassportButtonProps {
  icon: React.ReactNode
  text: string
  onClick?: () => void
}

const PassportButton: React.FC<PassportButtonProps> = ({
  icon,
  text,
  onClick,
}) => {
  return (
    <button
      className="w-full flex items-center gap-2 justify-center px-2 py-3 bg-white text-gray-900 rounded-2xl border-[2px] border-gray-400 hover:shadow-md transition-all"
      onClick={onClick}
    >
      <span className="mr-2">{icon}</span>
      <span className='font-semibold'>{text}</span>
    </button>
  )
}

export default PassportButton
