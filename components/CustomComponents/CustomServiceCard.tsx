import React from 'react'
import { CustomServiceCardProps } from '@/types'
export default function CustomServiceCard({title, text}: CustomServiceCardProps ) {
  return (
    <div className='bg-golden w-full h-full p-3 flex flex-col items-center rounded-3xl'>
        <div>
            <h1 className='text-black font-montserrat text-2xl font-medium'>{title}</h1>
        </div>

        <div className='text-black font-montserrat text-base font-medium'>
            <p>
                {text}
            </p>
        </div>
    </div>
  )
}
