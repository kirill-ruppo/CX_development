import { CustomTitle } from '@/types'
import React from 'react'

export default function CustomTitle({text, float}: CustomTitle) {
  return (
    <div className='w-full '>
        <div className='w-auto'>
            <h1 className={float === 'left' ? 'text-left font-montserrat font-bold text-6xl text-golden pt-8 pr-0 pb-8 pl-0' : float === 'rigth' ? 'text-right font-montserrat font-bold text-6xl text-golden' : 'text-center font-montserrat font-bold text-6xl text-golden p-10'}>{text}</h1>
        </div>
    </div>
  )
}
