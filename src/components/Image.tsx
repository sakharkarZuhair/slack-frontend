import React from 'react'
import classNames from 'classnames'

interface ImageProps {
  src: string
  alt?: string
  className?: string
  onError?: () => void // Optional error handling
}

const Image: React.FC<ImageProps> = ({
  src,
  alt = 'Image',
  className,
  onError,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={classNames('w-full', 'h-full', className)}
      onError={onError ? () => onError() : undefined}
      loading="lazy" // Lazy loading for better performance
    />
  )
}

export default Image
