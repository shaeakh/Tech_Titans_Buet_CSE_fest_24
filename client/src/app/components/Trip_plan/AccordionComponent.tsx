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
        <div className='w-full ' ><Accordion className='bg-white rounded-lg px-5 py-5' type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <div className='w-full flex flex-row justify-between '>
                        <div className='flex flex-col'>
                            <div className='font-bold text-2xl'>Day 1</div>
                            <div className=' '>10 Sep,2024</div>
                        </div>
                        <div className='mr-5'>Weather Details</div>
                    </div>
                </AccordionTrigger>

                <AccordionContent className='space-y-2 '>
                    <div className='w-full flex flex-col justify-between '>
                        <div className='w-full rounded-lg border-2 border-input p-5'>
                            <div className='font-bold text-lg'>Place Name</div>
                            <div className=' text-md'>Place NamePlace NamePlace NamePlace NamePlace NamePlace NamePlace NamePlace NamePlace NamePlace NamePlace NamePlace Name</div>
                            <div className='flex flex-row items-center space-x-2'><Clock width={15} className='text-bold' /><div>2 hr 30 mins</div> < div className='h-2 w-2 bg-black rounded-full'></div><div>Sylhet</div> </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-between '>
                        <div className='w-full rounded-lg border-2 border-input p-5'>
                            <div className='font-bold text-lg'>Place Name</div>
                            <div className=' text-md'>Place NamePlace NamePlace NamePlace NamePlace NamePlace NamePlace NamePlace NamePlace NamePlace NamePlace NamePlace Name</div>
                            <div className='flex flex-row items-center space-x-2'><Clock width={15} className='text-bold' /><div>2 hr 30 mins</div> < div className='h-2 w-2 bg-black rounded-full'></div><div>Sylhet</div> </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-between '>
                        <div className='w-full rounded-lg border-2 border-input p-5'>
                            <div className='font-bold text-lg'>Place Name</div>
                            <div className=' text-md'>Place NamePlace NamePlace NamePlace NamePlace NamePlace NamePlace NamePlace NamePlace NamePlace NamePlace NamePlace Name</div>
                            <div className='flex flex-row items-center space-x-2'><Clock width={15} className='text-bold' /><div>2 hr 30 mins</div> < div className='h-2 w-2 bg-black rounded-full'></div><div>Sylhet</div> </div>
                        </div>
                    </div>
                    
                </AccordionContent>
            </AccordionItem>
        </Accordion></div>
    )
}

export default AccordionComponent