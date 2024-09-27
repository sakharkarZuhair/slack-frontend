import React from 'react'
import classNames from 'classnames'

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' // Sizes
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' // Font weights
  children: React.ReactNode
  className?: string
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  size,
  weight = 'normal',
  children,
  className,
}) => {
  // Tailwind classes for variants (basic structure without size)
  const variantClasses = classNames({
    'font-bold': variant === 'h1',
    'font-semibold': variant === 'h2',
    'font-medium': variant === 'h3',
    'text-base': variant === 'p',
    'text-sm': variant === 'span',
  })

  // Tailwind classes for size (prioritizes size if provided)
  const sizeClasses = size
    ? classNames({
        'text-xs': size === 'xs',
        'text-sm': size === 'sm',
        'text-base': size === 'md',
        'text-lg': size === 'lg',
        'text-xl': size === 'xl',
        'text-2xl': size === '2xl',
        'text-3xl': size === '3xl',
        'text-4xl': size === '4xl',
      })
    : ''

  // Tailwind classes for font weight
  const weightClasses = classNames({
    'font-light': weight === 'light',
    'font-normal': weight === 'normal',
    'font-medium': weight === 'medium',
    'font-semibold': weight === 'semibold',
    'font-bold': weight === 'bold',
  })

  // Combine all classes
  const combinedClasses = `${variantClasses} ${sizeClasses} ${weightClasses} ${className || ''}`

  // Render the appropriate tag with the combined classes
  switch (variant) {
    case 'h1':
      return <h1 className={combinedClasses}>{children}</h1>
    case 'h2':
      return <h2 className={combinedClasses}>{children}</h2>
    case 'h3':
      return <h3 className={combinedClasses}>{children}</h3>
    case 'p':
      return <p className={combinedClasses}>{children}</p>
    case 'span':
      return <span className={combinedClasses}>{children}</span>
    default:
      return <p className={combinedClasses}>{children}</p>
  }
}

export default Typography
