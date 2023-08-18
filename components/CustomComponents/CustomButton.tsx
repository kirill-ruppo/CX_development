"use client"
import React from 'react'
import { CustomButtonProps } from '@/types'
export default function CustomButton({title, styles, handleClick}: CustomButtonProps) {
  return (
    <button
    disabled={false}
    type={'button'}
    className={styles}
    onClick={()=> {handleClick}}
    >
        <span className='flex-1'>
            {title}
        </span>

    </button>
  )
}
