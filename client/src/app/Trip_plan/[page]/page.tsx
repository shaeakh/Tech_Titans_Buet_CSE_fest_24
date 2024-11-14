"use client";
import { NotebookPen } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import AccordionComponent from '@/app/components/Trip_plan/AccordionComponent';
import axios from 'axios';
import { useSearchParams } from "next/navigation";

function Page() {
    interface Itinerary {
        [x: string]: any;
        days: any;
        tripTitle: string;
    }

    const searchParams = useSearchParams();
    const tripID = searchParams.get('tripID');
    const [itinerary, setItinerary] = useState<Itinerary | null>(null);

    useEffect(() => {
        const data: Itinerary = {
            message: "Itinerary generated and saved successfully",
            itinerary: [
                {
                    day: 1,
                    date: "2021-06-01T00:00:00.000Z",
                    weatherCondition: "sunny",
                    activities: [
                        {
                            time: "8:00AM",
                            title: "Visit Kolpolok (কল্পলোক) Karnaphuli Riverside Tourist spot",
                            description: "Enjoy your time at Kolpolok, known for its scenic beauty along the Karnaphuli riverside.",
                            location: "8VW8+CQ6, Chattogram",
                            lat: 22.3460359,
                            long: 91.8669003,
                            estimatedCost: 0,
                            duration: "2 hours",
                            transportation: "Local transport",
                            name: "Kolpolok (কল্পলোক) Karnaphuli Riverside Tourist spot",
                            isVisited: false,
                            _id: "671b730f8cadcbc8633387f6"
                        },
                        {
                            time: "11:00AM",
                            title: "Visit Barabkund Hill",
                            description: "Explore the natural beauty of Barabkund Hill and enjoy the panoramic views.",
                            location: "Barabkunda",
                            lat: 22.5823125,
                            long: 91.7033125,
                            estimatedCost: 0,
                            duration: "3 hours",
                            transportation: "Car/Bus",
                            name: "Barabkund Hill",
                            isVisited: false,
                            _id: "671b730f8cadcbc8633387f7"
                        },
                        {
                            time: "3:00PM",
                            title: "Explore Sonaichori Waterfall",
                            description: "Witness the mesmerizing beauty of Sonaichori Waterfall and relax in nature.",
                            location: "PJMG+WR6",
                            lat: 22.7347873,
                            long: 91.6270132,
                            estimatedCost: 0,
                            duration: "2 hours",
                            transportation: "Walk",
                            name: "Sonaichori Waterfall",
                            isVisited: false,
                            _id: "671b730f8cadcbc8633387f8"
                        }
                    ],
                    _id: "671b730f8cadcbc8633387f5"
                },
                {
                    day: 2,
                    date: "2021-06-02T00:00:00.000Z",
                    weatherCondition: "sunny",
                    activities: [
                        {
                            time: "9:00AM",
                            title: "Visit I Love Kaptai",
                            description: "Explore the beauty of I Love Kaptai and enjoy the scenic lake view.",
                            location: "G6GH+78, Kaptai",
                            lat: 22.5257098,
                            long: 92.22833229999999,
                            estimatedCost: 0,
                            duration: "3 hours",
                            transportation: "Boat ride",
                            name: "I Love Kaptai",
                            isVisited: false,
                            _id: "671b730f8cadcbc8633387fa"
                        },
                        {
                            time: "1:00PM",
                            title: "Visit Nilachal Tourist Center",
                            description: "Experience the charm of Nilachal Tourist Center and enjoy the cultural vibes.",
                            location: "Bandarban",
                            lat: 22.1670622,
                            long: 92.2119189,
                            estimatedCost: 0,
                            duration: "2 hours",
                            transportation: "Local transport",
                            name: "Nilachal Tourist Center",
                            isVisited: false,
                            _id: "671b730f8cadcbc8633387fb"
                        },
                        {
                            time: "4:00PM",
                            title: "Relax at Patenga Sea Beach",
                            description: "Unwind at the beautiful Patenga Sea Beach and enjoy the sunset views.",
                            location: "Sea Beach Rd, Chattogram",
                            lat: 22.2350808,
                            long: 91.7915721,
                            estimatedCost: 0,
                            duration: "2 hours",
                            transportation: "Walk",
                            name: "Patenga Sea Beach",
                            isVisited: false,
                            _id: "671b730f8cadcbc8633387fc"
                        }
                    ],
                    _id: "671b730f8cadcbc8633387f9"
                }
            ],
            days: null,
            tripTitle: 'Your Trip Plan'
        };

        setItinerary(data); // Initialize itinerary data

    }, []);

    return (
        <div className='h-full w-screen flex flex-row justify-start items-center' style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1494804265872-476520fd1a21?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwcGxhbnxlbnwwfHwwfHx8MA%3D%3D")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className='w-2/3 p-10 h-full space-y-5'>
                <div className='w-min bg-white whitespace-nowrap h-min flex flex-row items-center space-x-2 px-4 py-2 rounded-full'>
                    <div className='h-5 w-5 bg-blue-500 hover:bg-blue-700 rounded-full'></div>
                    <label
                        htmlFor="accommodation"
                        className="text-xl text-black flex items-center gap-2"
                    >
                        <NotebookPen className='text-[#53AB8B]' height={20} width={20} /> {itinerary ? itinerary.tripTitle : 'Your Trip Plan'}
                    </label>
                </div>
                {itinerary && itinerary.itinerary && itinerary.itinerary.map((day: any, index: number) => (
                    <AccordionComponent key={index} day={day.day} date={day.date} weather_condition={day.weatherCondition} activities={day.activities} />
                ))}
            </div>
            <div className='w-1/3 space-y-4 h-full flex flex-col justify-center items-center'>
                <div className='bg-white whitespace-nowrap h-min border-input flex flex-row items-center space-x-2 px-4 py-2 rounded-full'>
                    <div className='h-5 w-5 bg-blue-500 hover:bg-blue-700 rounded-full'></div>
                    <label
                        htmlFor="accommodation"
                        className="text-xl text-black flex items-center gap-2"
                    >
                        <NotebookPen className='text-red-600' height={30} width={30} /> Your Trip Plan in finer details
                    </label>
                </div>
                <div className='w-11/12 bg-white rounded-xl p-2'>
                    <Image
                        src="https://techpp.com/wp-content/uploads/2023/03/How-To-Drop-A-Pin-In-Google-Maps.jpg"
                        height={250}
                        width={250}
                        className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </div>
            </div>
        </div>
    );
}

export default Page;
