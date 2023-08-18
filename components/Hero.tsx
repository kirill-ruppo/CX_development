"use client"
import React from 'react'
import { CustomButton } from '.'
export default function Hero() {
    const handleClick = () =>{
        console.log('click')
    }
  return (
    <div className='w-full h-full flex  justify-center items-center p-[26px]'>
        <div className='md:w-3/4 w-[90%] flex flex-col lg:flex-row justify-between items-center'>
            <div className='text-golden w-[80%] sm:p-10 p-3'>
                <h1 className='font-montserrat font-semibold text-4xl lg:text-5xl xl:text-6xl'>We create and develop your business to bring it to the moon</h1>
                <div className='flex md:flex-row flex-col w-80 justify-between mt-8'>
                    <CustomButton
                    title='Our Projects'
                    handleClick={handleClick}
                    styles={'bannerButton'}
                    />
                    <CustomButton
                    title='Get In Touch'
                    handleClick={handleClick}
                    styles={'bannerButton'}
                    />
                </div>
            </div>

            <div className='md:w-[500px] w-[100%] h-[450px] bg-golden flex flex-col justify-center items-center'>
            <h1 className='text-center font-montserrat font-bold text-base text-black'>Fill in the answers  and your company finds the best way for your bussines</h1>
                <form className='w-[90%] h-full flex flex-col justify-evenly items-center'>
                    <div className='w-full'>
                        <p className=' font-montserrat font-normal text-base text-black'> What industry do you work in?</p>
                        <input className='w-full h-10 bg-golden border border-black'></input>
                    </div>
                    
                    <div className='w-full'>
                        <p className='font-montserrat font-normal text-base text-black'> What industry do you work in?</p>
                        <input className='w-full h-10 bg-golden border border-black'></input>
                    </div>

                    <div className='w-full'>
                        <p className='font-montserrat font-normal text-base text-black'> What industry do you work in?</p>
                        <input className='w-full h-10 bg-golden border border-black'></input>
                    </div>
                   <CustomButton title='Submit Answers' styles='w-[45%] bg-black h-12 text-golden rounded-2xl text-center font-montserrat font-bold text-xs' />
                </form>
            </div>
        </div>
    </div>
  )
}
