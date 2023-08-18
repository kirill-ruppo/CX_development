"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Spiral as Hamburger } from 'hamburger-react'
import { CustomButton } from '.'

export default function NavBar() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className='w-full bg-golden'>

      <div className={`fixed left-0 top-0 w-full h-full bg-golden flex flex-col justify-center items-center ease-in ${isOpen ? 'duration-500 top-0' : 'duration-500 top-[-100%]'}`}>
        <CustomButton title='Main' styles='text-black text-6xl' />
        <CustomButton title='About Us' styles='text-black text-6xl' />
        <CustomButton title='Projects' styles='text-black text-6xl' />
      </div>

      <div className={`flex w-full justify-between items-center shrink-0 px-[50px] py-[6px]`}>
        <Image src='/Logo.png' alt='CX development' width={150} height={100} />
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </div>
  )
}
