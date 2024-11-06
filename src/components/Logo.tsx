import React from 'react'
import Wave from './Wave'

const Logo = () => {
  return (
    <div className='flex gap-2'>
      <Wave/>
      <span className="text-white font-bold text-lg">Text to Voice</span>
    </div>
  )
}

export default Logo
