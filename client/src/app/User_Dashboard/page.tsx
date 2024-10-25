"use client"
import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AccordionComponent from '../components/User_dashboard/AccordionComponent';
import axios from 'axios';
import { useRouter } from "next/navigation";

function Page() {
    const router = useRouter();
    interface Trip {
        tripProgress: number;
        // Add other properties of the trip object if needed
    }

    const [trips, setTrips] = useState<Trip[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrips = async () => {
            try {
                const res = await axios.get("http://localhost:6001/api/trip-list?userID=671a472fcd875e841377ecc0");
                setTrips(res.data.trips);
            } catch (error) {
                console.error("Error fetching trip data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTrips();
    }, []);

    // Filter trips based on their progress
    const p = trips.filter(trip => trip.tripProgress <= 100);
    const c = trips.filter(trip => trip.tripProgress === 100);

    if (loading) {
        return <div>Loading...</div>; // Optionally handle loading state
    }

    return (
        <div className='h-screen w-screen flex flex-col justify-start '>
            <div className='px-10 space-x-5 flex flex-row items-center justify-end w-full h-16 bg-green-500'>
                <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/102303488?v=4" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='flex flex-col'>
                    <div className='font-bold text-white text-md'>
                        Shaeakh
                    </div>
                    <div className='text-white text-sm'>
                        Shaeakh12@gmail.com
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row justify-end p-5'>
                <div onClick={()=>{router.push(`/trip_planner`)}} className='bg-green-500 text-white text-bg font-bold p-5 rounded-lg'>Create A new plan</div>
            </div>

            <div className='flex flex-row w-full p-5'>
                <div className='w-1/4'>
                    <div className='w-min whitespace-nowrap rounded-lg border-2 border-input flex items-center p-5 space-x-5'>
                        <AccordionComponent text={"Your current plan"} color={"bg-green-400"} trips={p} check={0} />
                    </div>
                    <div className='flex flex-col px-10 space-y-1 my-2'>
                        <div className='bg-[#939393] h-2 w-2 rounded-full'></div>
                        <div className='bg-[#939393] h-2 w-2 rounded-full'></div>
                        <div className='bg-[#939393] h-2 w-2 rounded-full'></div>
                        <div className='bg-[#939393] h-2 w-2 rounded-full'></div>
                        <div className='bg-[#939393] h-2 w-2 rounded-full'></div>
                    </div>
                    <div className='w-min whitespace-nowrap rounded-lg border-2 border-input flex items-center p-5 space-x-5'>
                        <AccordionComponent trips={c} color={"bg-[#F7CD00]"} text="Your previous plans" check={100} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
