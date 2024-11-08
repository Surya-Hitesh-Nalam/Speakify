import React from 'react'

const LightGlow = ({classes}:{classes:string}) => {
  return (
    <>
     <span className={`${classes} fixed z-10 blur-[150px] w-[180px] h-[180px] rounded-full -translate-y-1/2 start-1/2`}>
    </span> 
    </>
  )
}

export default LightGlow
