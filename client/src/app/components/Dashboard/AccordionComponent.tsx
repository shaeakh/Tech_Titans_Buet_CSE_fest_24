"use client"
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { Clock } from 'lucide-react'
function AccordionComponent(props: any) {
    return (
        <div className='w-full ' ><Accordion className='bg-white rounded-lg px-5  ' type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className='space-x-5'>
                    <div className='bg-[#F5BF25] h-5 w-5 rounded-full'></div>
                    <label className='text-2xl' htmlFor="">
                        Your previous plans
                    </label>
                </AccordionTrigger>

                <AccordionContent className='space-y-2 '>
                    <a href="#">
                        <div className='w-full flex flex-col justify-between '>
                            <div className='w-full rounded-lg border-2 border-input p-5'>
                                <div className='font-bold text-lg'>Place Name</div>
                                <div className='flex flex-row items-center space-x-2'><Clock width={15} className='text-bold' /><div>24 Sep,2024</div> < div className='h-2 w-2 bg-black rounded-full'></div><div>Sylhet</div> </div>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className='w-full flex flex-col justify-between '>
                            <div className='w-full rounded-lg border-2 border-input p-5'>
                                <div className='font-bold text-lg'>Place Name</div>
                                <div className='flex flex-row items-center space-x-2'><Clock width={15} className='text-bold' /><div>24 Sep,2024</div> < div className='h-2 w-2 bg-black rounded-full'></div><div>Sylhet</div> </div>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className='w-full flex flex-col justify-between ' onClick={() => {
                            console.log("alksdnalsdnlaskndlaksnd");
                        }}>
                            <div className='w-full rounded-lg border-2 border-input p-5'>
                                <div className='fo nt-bold text-lg'>Place Name</div>
                                <div className='flex flex-row items-center space-x-2'><Clock width={15} className='text-bold' /><div>24 Sep,2024</div> < div className='h-2 w-2 bg-black rounded-full'></div><div>Sylhet</div> </div>
                            </div>
                        </div>
                    </a>
                </AccordionContent>
            </AccordionItem>
        </Accordion></div>
    )
}

export default AccordionComponent