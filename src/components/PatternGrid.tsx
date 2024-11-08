import React from 'react'

const PatternGrid = () => {
  return (
    <div className='absolute [mask-image:linear-gradient(to_bottom,transparent,white)] h-96 inset-x-0 opacity-100 rotate-100 text-gray-500/20 top-0'>
      <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute h-full inset-0 w-full"
          >
            <defs>
              <pattern
                height="32"
                id="grid-pattern"
                patternTransform="translate(0 -1)"
                patternUnits="userSpaceOnUse"
                width="32"
                x="50%"
                y="100%"
              >
                <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
              </pattern>
            </defs>
            <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
          </svg>
    </div>
  )
}

export default PatternGrid
