import React from 'react'
import {Heading2} from './Heading2'
import Image from 'next/image'
import PrimaryButton from './PrimaryButton'

const QuickSelection = () => {
  return (
    <section className='w-full relative overflow-hidden'>
      <div className='mt-40 flex w-full justify-center text-center items-center'>
        <Heading2 mainTitle="Quick Tutorial" title="This is just 3-4 steps easy to generate AI voice" desc={''}/>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center mt-10 z-20'>
        <div className='w-full flex items-center justify-center'>
          <div className='w-fit relative p-2 rounded-3xl'>
            <div className='grid items-center p-4 gap-12 rounded-2xl'>
              <div className='aspect-w-16 aspect-h-9 lg:aspect-none'>
                <Image src={'/singing.webp'} alt="women-voice" width={300} height={300} className='object-contain rounded-2xl'/>
              </div>
            </div>
          </div>
        </div>
        <div className='pr-10'>
          <div className='flex gap-x-5 ms-1'>
            <div className='relative last:after:hidden after:top-8 after:bottom-8 after:absolute after:start-4 after:w-px after:translate-x-[0.5px] after:bg-neutral-800'>
              <div className='relative z-10 size-8 flexx justify-center items-center'>
                <span className='flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 font-semibold text-xs uppercase rounded-full bg-[#f7f9fc]'>
                  1
                </span>
              </div>
            </div>
            <div className='grow pt-0.5 pb-8'>
              <p className='flex flex-col text-md text-[#9ca3af]'>
                <span className='text-lg font-bold text-white'>
                  Enter Text
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nostrum. 
              </p>
            </div>
          </div>
          <div className='flex gap-x-5 ms-1'>
            <div className='relative last:after:hidden after:top-8 after:bottom-8 after:absolute after:start-4 after:w-px after:translate-x-[0.5px] after:bg-neutral-800'>
              <div className='relative z-10 size-8 flexx justify-center items-center'>
                <span className='flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 font-semibold text-xs uppercase rounded-full bg-[#f7f9fc]'>
                  2
                </span>
              </div>
            </div>
            <div className='grow pt-0.5 pb-8'>
              <p className='flex flex-col text-md text-[#9ca3af]'>
                <span className='text-lg font-bold text-white'>
                  Select Language and voice
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nostrum. 
              </p>
            </div>
          </div>
          <div className='flex gap-x-5 ms-1'>
            <div className='relative last:after:hidden after:top-8 after:bottom-8 after:absolute after:start-4 after:w-px after:translate-x-[0.5px] after:bg-neutral-800'>
              <div className='relative z-10 size-8 flexx justify-center items-center'>
                <span className='flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 font-semibold text-xs uppercase rounded-full bg-[#f7f9fc]'>
                  3
                </span>
              </div>
            </div>
            <div className='grow pt-0.5 pb-8'>
              <p className='flex flex-col text-md text-[#9ca3af]'>
                <span className='text-lg font-bold text-white'>
                  Convert text to speech
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nostrum. 
              </p>
            </div>
          </div>
          <div className='flex gap-x-5 ms-1'>
            <div className='relative last:after:hidden after:top-8 after:bottom-8 after:absolute after:start-4 after:w-px after:translate-x-[0.5px] after:bg-neutral-800'>
              <div className='relative z-10 size-8 flexx justify-center items-center'>
                <span className='flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 font-semibold text-xs uppercase rounded-full bg-[#f7f9fc]'>
                  4
                </span>
              </div>
            </div>
            <div className='grow pt-0.5 pb-8'>
              <p className='flex flex-col text-md text-[#9ca3af]'>
                <span className='text-lg font-bold text-white'>
                  Listen and download
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nostrum. 
              </p>
            </div>
          </div>
          <PrimaryButton title={'Create Row'}/>
        </div>
      </div>
    </section>
  )
}

export default QuickSelection
