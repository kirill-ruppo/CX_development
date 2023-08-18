import React from 'react'
import { CustomStepCardProps } from '@/types'
export default function CustomStepCard({index, text}: CustomStepCardProps) {
    console.log(index+1)
  return (
    <div className='h-28 bg-golden rounded-2xl'>
        <span className='absolute text-opacity-30 text-black font-montserrat text-6xl font-normal leading-normal'>0{index+1}</span>
        <div className='w-full h-full flex justify-center items-center text-black font-montserrat text-xl font-medium'>
            <p>{text}</p>
        </div>
    </div>
  )
}
