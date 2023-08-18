"use client"
import React from 'react'
import { CustomProjectPreviewCardProps } from '@/types'
import { CustomButton } from '..'
export default function CustomProjectPreviewCard({projectImage, projectName, projectDesc, route}: CustomProjectPreviewCardProps) {
  return (
    <div className='w-full flex flex-col h-full bg-golden rounded-3xl items-center'>
        <div className='w-full h-56'>
            <img className='w-full' src={projectImage}></img>
        </div>
        <div className='w-full pt-2 pb-2 text-center text-black text-lg font-bold'>
            <h1>{projectName}</h1>
        </div>
        <div>
            <p className='text-black text-[13px] font-normal p-10'>{projectDesc}</p>
        </div>


        <CustomButton title='Read more' styles='w-[150px] h-[50px] bg-black rounded-[50px] text-[12px] font-bold text-golden mt-5 mb-5' handleClick={()=> console.log(route)}/>
    </div>
  )
}
