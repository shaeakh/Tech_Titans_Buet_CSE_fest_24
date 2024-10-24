import { Car, MapPin } from 'lucide-react'
import React from 'react'

function page() {
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
        <div className='w-screen h-screen flex justify-center items-center'>

            <div className='h-min w-7/12 border-2 border-black flex flex-row items-center space-x-2 ' >
                <div className='h-10 w-10 bg-blue-500 hover:bg-blue-700  rounded-full'></div>
                <label 
                    htmlFor="source"
                    className="text-lg text-2xl text-black flex items-center gap-2"
                >
                    <Car height={50} width={50} /> Details about your vehicle 
                </label>

            </div>
        </div>
    )
}

export default page