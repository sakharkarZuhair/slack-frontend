import React from 'react'

interface InputProps {
  type: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="px-3 py-3 border rounded-xl border-gray-400 w-full focus:outline-none focus:ring-4 focus:ring-blue-200 transition"
    />
  )
}

export default Input
