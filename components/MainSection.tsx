"use client"
import React from 'react'
import { CustomServiceCard } from '.'
import Image from 'next/image'
import {CustomTitle} from '.'
import {CustomStepCard} from '.'
const services = [
    {
        id: 1,
        title: 'UI/UX Design',
        text: 'Our skilled UI/UX designers create visually appealing and user-centric interfaces. By leveraging the latest technologies and best practices, we develop intuitive designs that ensure seamless interactions with your products and services. Our goal is to enhance the overall user experience, resulting in increased user satisfaction and engagement.',
    },
    {
        id:2,
        title: 'Web Development',
        text: 'Our skilled UI/UX designers create visually appealing and user-centric interfaces. By leveraging the latest technologies and best practices, we develop intuitive designs that ensure seamless interactions with your products and services. Our goal is to enhance the overall user experience, resulting in increased user satisfaction and engagement.',
    },
    {
        id:3,
        title: 'Mobile Development',
        text: 'Our skilled UI/UX designers create visually appealing and user-centric interfaces. By leveraging the latest technologies and best practices, we develop intuitive designs that ensure seamless interactions with your products and services. Our goal is to enhance the overall user experience, resulting in increased user satisfaction and engagement.',
    },
    {
        id:4,
        title: 'SEO',
        text: 'Our skilled UI/UX designers create visually appealing and user-centric interfaces. By leveraging the latest technologies and best practices, we develop intuitive designs that ensure seamless interactions with your products and services. Our goal is to enhance the overall user experience, resulting in increased user satisfaction and engagement.',
    },

]
const tech = ['../css.svg', '../js.svg', '../ai.svg', '../next.svg', '../akar-icons_html-fill.svg', '../mdi_nodejs.svg', '../mdi_react.svg', '../solar_figma-outline.svg']
const steps = ['Tell us your idea and we`ll develop a custom approach that works for you.', 'Meet your team and collaborate throughout the creative process.', 'Delight your customers with an exceptional product and experience.']
export default function MainSection() {
  return (
    <div className='w-full h-full flex flex-col justify-center p-2'>
        <div className='w-full flex justify-center items-center content-between gap-3'>
            {services.map(({title, text, id})=> (
                <CustomServiceCard key={id+1}  text={text} title={title} />
            ))
            }
        </div>
        <div className='w-full flex flex-row h-full'>
            <div className='w-full flex flex-col items-start'>
                <CustomTitle text='Technologies' float='left'/>
                    <div className='w-full grid grid-cols-4 grid-rows-2 gap-5 '>
                        {tech.map((image, i)=>(
                            <div key={i} className='bg-golden h-full p-1 flex justify-center'>
                                <Image key={i} src={image} alt='techIcon' width={200} height={200}/>
                            </div>
                        ))}
                        
                    </div>
            </div>

            <div className='w-[55%] flex flex-col pl-3'>
                <CustomTitle text='Steps' float='left'/>
                <div className='flex flex-col h-full justify-between'>
                    {steps.map((step, index)=>(
                        <CustomStepCard key={1+1} text={step} index={index}/>
                    ))
                    }
                </div>
            </div>


        </div>
       
    </div>
  )
}
