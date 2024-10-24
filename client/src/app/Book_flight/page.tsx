"use client"
import { Car, Hotel } from 'lucide-react'
import React from 'react'
import { useSearchParams } from "next/navigation";
import { CardContainer } from '@/components/ui/3d-card';
import ThreeDCardDemo_Hotel from '@/app/components/Book_flight/ThreeDCardDemo_Hotel';
import ThreeDCardDemo_Vehicle from '@/app/components/Book_flight/ThreeDCardDemo_Vehicle';
import Image from "next/image";
import { Button } from '@/components/ui/button';

function page() {
    const searchParams = useSearchParams();
    const response = searchParams.get("response");
    const parsedResponse = response ? JSON.parse(response) : null;
    const res = {
        "transport": {
            "vehicle": "bus",
            "duration": "8 hours",
            "price": "$50"
        },
        "accommodation": {
            "hotel": "The Ritz",
            "duration": "3 nights",
            "price": "$200"
        },
        "activities": [
            {
                "name": "hiking",
                "duration": "2 hours",
                "price": "$0"
            },
            {
                "name": "sightseeing",
                "duration": "3 hours",
                "price": "$0"
            },
            {
                "name": "shopping",
                "duration": "1 hour",
                "price": "$50"
            }
        ],
        "mealPlan": [
            {
                "day": 1,
                "meals": [
                    { "type": "breakfast", "price": "$10", "time": "9AM" },
                    { "type": "lunch", "price": "$15", "time": "2PM" },
                    { "type": "dinner", "price": "$20", "time": "9PM" }
                ]
            },
            {
                "day": 2,
                "meals": [
                    { "type": "breakfast", "price": "$10", "time": "9AM" },
                    { "type": "lunch", "price": "$15", "time": "2PM" },
                    { "type": "dinner", "price": "$20", "time": "9PM" }
                ]
            },
            {
                "day": 3,
                "meals": [
                    { "type": "breakfast", "price": "$10", "time": "9AM" },
                    { "type": "lunch", "price": "$15", "time": "2PM" },
                    { "type": "dinner", "price": "$20", "time": "9PM" }
                ]
            }
        ],
        "total_estimated_Cost": "$400"
    }
    return (
        // <div>
        //     <h1>Response Data:</h1>
        //     <pre>{JSON.stringify(parsedResponse, null, 2)}</pre>
        // </div>
        <div style={{
            backgroundImage:
                'url("https://raw.githubusercontent.com/shaeakh/code-share/refs/heads/main/hotel_vechicle%20bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }} className='flex flex-col justify-start items-center p-4 '>
            <div className='bg-white h-min w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12  border-input flex flex-row items-center space-x-2 px-4 py-2 rounded-full' >
                <div className='h-5 w-5 bg-blue-500 hover:bg-blue-700 rounded-full'></div>
                <label
                    htmlFor="accommodation"
                    className="text-xl text-black flex items-center gap-2"
                >
                    <Hotel className='text-red-600' height={30} width={30} /> Details about your accommodation
                </label>
            </div>
            <div className='flex flex-row   space-x-2 '>
                <ThreeDCardDemo_Hotel name="The Ritz" details="3 nights" cost={200} image="https://hoteldel.com/wp-content/uploads/2021/01/hotel-del-coronado-views-suite-K1TOS1-K1TOJ1-1600x900-1.jpg" hotel_link="#" />
                <ThreeDCardDemo_Hotel name="Baper Hotel" details="Amar basha" cost={100} image="https://hoteldel.com/wp-content/uploads/2021/01/hotel-del-coronado-views-suite-K1TOS1-K1TOJ1-1600x900-1.jpg" hotel_link="#" />
                <ThreeDCardDemo_Hotel name="The Ritz" details="3 nights" cost={200} image="https://hoteldel.com/wp-content/uploads/2021/01/hotel-del-coronado-views-suite-K1TOS1-K1TOJ1-1600x900-1.jpg" hotel_link="#" />
            </div>
            <div className='bg-white h-min w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12  border-input flex flex-row items-center space-x-2 px-4 py-2 rounded-full' >
                <div className='h-5 w-5 bg-[#F7D63A] hover:bg-[#F7D63A] rounded-full'></div>
                <label
                    htmlFor="accommodation"
                    className="text-xl text-black flex items-center gap-2"
                >
                    <Car className='text-red-600' height={30} width={30} /> Details about your traveling vehicle
                </label>
            </div>
            <div className='w-max '>
                <div className=' w-full flex flex-row justify-end  space-x-2 '>
                    <ThreeDCardDemo_Vehicle name="Bus_name" S_time="10.30 PM" E_time="01.30 PM" cost={100} image="https://hoteldel.com/wp-content/uploads/2021/01/hotel-del-coronado-views-suite-K1TOS1-K1TOJ1-1600x900-1.jpg" Bus_link="#" />
                    <ThreeDCardDemo_Vehicle name="Bus_name" S_time="10.30 PM" E_time="01.30 PM" cost={100} image="https://hoteldel.com/wp-content/uploads/2021/01/hotel-del-coronado-views-suite-K1TOS1-K1TOJ1-1600x900-1.jpg" Bus_link="#" />
                    <ThreeDCardDemo_Vehicle name="Bus_name" S_time="10.30 PM" E_time="01.30 PM" cost={100} image="https://hoteldel.com/wp-content/uploads/2021/01/hotel-del-coronado-views-suite-K1TOS1-K1TOJ1-1600x900-1.jpg" Bus_link="#" />
                </div>
            </div>
            <div className='w-full flex justify-end px-10 '><Button className='bg-[#0AB06E] font-bold text-white hover:text-[#0AB06E] hover:bg-white'>Next</Button></div>
        </div>
    )
}

export default page