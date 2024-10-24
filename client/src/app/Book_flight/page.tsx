"use client"
import { Car, MapPin } from 'lucide-react'
import React from 'react'
import { useSearchParams } from "next/navigation";

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
        <div className='w-screen h-screen flex flex-col justify-center items-center'>

            <div className='h-min w-4/12 border-2 border-black flex flex-row items-center space-x-2 px-4 py-2 rounded-full' >
                <div className='h-5 w-5 bg-blue-500 hover:bg-blue-700  rounded-full'></div>
                <label 
                    htmlFor="source"
                    className="text-xl text-black flex items-center gap-2"
                >
                    <Car height={30} width={30} /> Details about your vehicle 
                </label>
                
            </div>
            <div > Vehicle : {"Bus"}  </div>
            <div > Vehicle : {"duration"}  </div>
            <div > Vehicle : {"price"}  </div>
        </div>
    )
}

export default page