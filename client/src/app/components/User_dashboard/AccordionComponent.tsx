"use client"
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Clock } from 'lucide-react'
import { useRouter } from "next/navigation";
import Link from "next/link";
function AccordionComponent(props: any) {
    const router = useRouter();
    return (
        <div className='w-full'>
            <Accordion className='bg-white rounded-lg px-5' type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className='space-x-5'>
                        <div className={`${props.color} h-5 w-5 rounded-full`}></div>
                        <label className='text-2xl'>
                            {props.text}
                        </label>
                    </AccordionTrigger>

                    {props.trips.map((trip: any, index: any) => (
                        <AccordionContent key={index} className='space-y-2'>
                            <div className='w-full flex flex-col justify-between'>
                                    <div className='w-full rounded-lg border-2 border-input p-5'>
                                        <Link href={
                                            {
                                                pathname: '/Trip_plan',
                                                query: {tripID: trip.tripID}
                                                
                                            }
                                        } > <div  className='font-bold text-lg'>{trip.tripTitle || "Place Name"}</div></Link>
                                        
                                        {/* <div className='flex flex-row items-center space-x-2'>
                                            <Clock width={15} className='text-bold' />
                                            <div>{trip.date || "24 Sep,2024"}</div>
                                            <div className='h-2 w-2 bg-black rounded-full'></div>
                                            <div>{trip.location || "Sylhet"}</div>
                                        </div> */}
                                    </div>
                                </div>
                        </AccordionContent>
                    ))}
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default AccordionComponent;
