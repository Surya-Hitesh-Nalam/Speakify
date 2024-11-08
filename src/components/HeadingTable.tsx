import React from 'react'

const HeadingTable = ({lableText}:{lableText:string}) => {
  return (
    <div className='w-fit'>
      <h5 className='custom_button'>
        <span>{lableText}</span>
      </h5>
    </div>
  )
}

export default HeadingTable
