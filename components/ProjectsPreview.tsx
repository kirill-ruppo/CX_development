"use client"
import React from 'react'
import { CustomTitle } from '.'
import {CustomButton} from '.'
import {CustomProjectPreviewCard} from '.'

const projects = [
    {
        title:'Amigos Grooming',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cu',
        image:'../prev.png',
        route:'new',
        id:1
    },
    {
        title:'Amigos Grooming',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cu',
        image:'../prev.png',
        route:'new',
        id:1
    },
    {
        title:'Amigos Grooming',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cu',
        image:'../prev.png',
        route:'new',
        id:1
    }
]

export default function ProjectsPreview() {
  return (
    <div className='w-full flex items-center flex-col'>
        <CustomTitle text='Our finished projects' float='center'/>
            <div className='w-[95%] h-full flex flex-row  justify-center gap-2'>
                {projects.map(({title, desc, image, route, id})=>(
                    <CustomProjectPreviewCard key={id+1} projectDesc={desc} projectImage={image} projectName={title} route={route}/>
                ))
                }
            </div>

        <CustomButton title='See more projects' styles='w-[345px] h-[55px] bg-golden rounded-[50px] mt-5 mb-5'/>
    </div>
  )
}
