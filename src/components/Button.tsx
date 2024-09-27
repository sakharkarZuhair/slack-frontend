// src/components/Button.tsx
import React from 'react'
import classNames from 'classnames'

interface ButtonProps {
  variant: 'link' | 'outline' | 'primary' | 'white'
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  onClick,
  href,
  className,
}) => {
  const baseClasses =
    'px-4 py-2 rounded-sm focus:outline-none transition duration-200 ease-in-out'

  const variantClasses = classNames({
    'text-black hover:underline': variant === 'link',
    'border-2 border-primary text-[#611f69] hover:text-[#611f69] focus:outline-none':
      variant === 'outline',
    'bg-[#611f69] text-white hover:bg-[#611f69]/90': variant === 'primary',
    'bg-[#FFFFFF] text-[#611f69]': variant === 'white',
  })

  if (href) {
    return (
      <a
        className={`${baseClasses} ${variantClasses} ${className}`}
        href={href}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
