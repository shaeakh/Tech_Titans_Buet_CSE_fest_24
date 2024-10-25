"use client"
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AccordionComponent from '../components/Dashboard/AccordionComponent'

function page() {
    return (
        <div className='h-screen w-screen flex flex-col justify-start '>
            <div className='px-10 space-x-5 flex flex-row items-center justify-end w-full h-16 bg-green-500'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='flex flex-col'>
                    <div className='font-bold text-white text-md'>
                        User Name
                    </div>
                    <div className='text-white text-sm'>
                        User Email
                    </div>
                </div>

            </div>
            <div className='flex flex-row w-full p-5' >
                <div className='w-1/4'>
                    <div className='w-min whitespace-nowrap rounded-lg border-2 border-input flex items-center p-5 space-x-5'>
                        <div className='bg-green-400 h-5 w-5 rounded-full'></div>
                        <label className='text-2xl' htmlFor="">
                            Your current plan
                        </label>
                    </div>
                    <div className='flex flex-col px-10 space-y-1 my-2'>
                        <div className='bg-[#939393] h-2 w-2 rounded-full'></div>
                        <div className='bg-[#939393] h-2 w-2 rounded-full'></div>
                        <div className='bg-[#939393] h-2 w-2 rounded-full'></div>
                        <div className='bg-[#939393] h-2 w-2 rounded-full'></div>
                        <div className='bg-[#939393] h-2 w-2 rounded-full'></div>
                    </div>
                    <div className='w-min whitespace-nowrap rounded-lg border-2 border-input flex items-center p-5 space-x-5'>
                        <AccordionComponent/>
                    </div>
                </div>
                <div>a</div>
            </div>

        </div>
    )
}

export default page