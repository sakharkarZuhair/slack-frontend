import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`${className} max-w-[1350px] w-full flex justify-center items-center m-auto`}
    >
      {children}
    </div>
  )
}

export default Container
