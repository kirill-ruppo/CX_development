import React from 'react'
import { CustomButton } from '.'
import {IconsBlock} from '.'
function Footer() {
  return (
    <div className='w-full h-full'>
        <div className='w-full h-80 bg-golden flex flex-col justify-center items-center'>
          <h1 className='text-black text-[70px] font-bold'>Have a project in mind?</h1>
          <CustomButton title='Let`s talk' styles='w-[306px] h-[62px] bg-black rounded-[50px] text-xl font-bold text-golden'/>
        </div>
        <div className='w-full h-[40px] flex flex-row items-center justify-around'>
            <div>
               <a  className='decoration-golden text-xl font-bold text-golden'>cx.development.partner@gmail.com</a>
            </div>
            <IconsBlock/>

            
        </div>
    </div>
  )
}

export default Footer