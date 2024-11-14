"use client";
import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AccordionComponent from '../components/User_dashboard/AccordionComponent';
import { useRouter } from "next/navigation";

function Page() {
    const router = useRouter();

    interface Trip {
        tripTitle: string;
        tripID: string;
        tripProgress: number;
    }

    const [trips, setTrips] = useState<Trip[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTrips([
            {
                tripTitle: "2 day Trip from Dhaka to Chittagong",
                tripID: "671b6a5c8cadcbc8633387df",
                tripProgress: 0
            },
            {
                tripTitle: "4 day Trip from Sylhet to Chittagong",
                tripID: "671b6a5381bc11b375f0d9ff",
                tripProgress: 0
            },
            {
                tripTitle: "4 day Trip from Sylhet to Chittagong",
                tripID: "671b656f6e79f94805358c19",
                tripProgress: 0
            },
            {
                tripTitle: "2 day Trip from Dhaka to Chittagong",
                tripID: "671b5291642bd5a8ba0a5583",
                tripProgress: 0
            },
            {
                tripTitle: "4 day Trip from Sylhet to Chittagong",
                tripID: "671b003b9f2770dd2ae60a0e",
                tripProgress: 0
            },
            {
                tripTitle: "4 day Trip from Sylhet to Barisal",
                tripID: "671ae677d82c9f088c38622c",
                tripProgress: 0
            },
            {
                tripTitle: "1 day Trip from Dhaka to Sylhet",
                tripID: "671a7f2015c797931db80d3e",
                tripProgress: 0
            }
        ]);
        setLoading(false);
    }, []);

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
                <div onClick={() => { router.push(`/trip_planner`) }} className='bg-green-500 text-white text-bg font-bold p-5 rounded-lg'>Create A new plan</div>
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
