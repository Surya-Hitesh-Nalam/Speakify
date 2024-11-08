/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link'
import React from 'react'

const PrimaryButton = ({title}:{title:string}) => {
  return (
    <div className='w-fit flex gap-x-5 ms-3'>
        <Link href={'/#'} className='custom_button items-center group relative'>
            <span className='relative z-[2] flex items-center font-bold text-white text-xs lg:text-md xl:text-md'>
                Create Now
            </span>
        </Link>
    </div>
  )
}

export default PrimaryButton
