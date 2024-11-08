import React from 'react'

const Heading = ({title,desc}:{title:string;desc:string}) => {
  return (
    <div>
      <h1 className='mt-3 mb-4 block font-extrabold font-sans !leading-tight text-[3.5rem] text-white'>
        <span dangerouslySetInnerHTML={{__html:title}} />
      </h1>
      <p className='text-md font-medium text-white/60'>{desc}</p>
    </div>
  )
}

export default Heading
