"use client"
import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { CldUploadButton } from "next-cloudinary";

import { UploadCloud, Pencil, CloudHail, Clock, MapPin, Sun, Fullscreen } from 'lucide-react'
import { Button } from '@/components/ui/button';
import axios from 'axios';
function AccordionComponent(props: any) {
    const [activity_done, setActivity_done] = useState<boolean[]>([]);
    const [picUrl, setPicUrl] = useState<string | null>(null);
    
    useEffect(() => {
        setActivity_done(new Array(props.activities.length).fill(false));
    }, [props.activities]);

    const mark_done =async (index: any, Activity: any) => {

        // Create a new array to avoid mutation issues
        const updatedActivityDone = activity_done.map((done, i) =>
            i === index ? true : done
        );

        setActivity_done(updatedActivityDone); // Update the state
        console.log('Activity marked as done:', index);
        console.log('Activity marked as done:', Activity._id);
        
        const res = await fetch(`http://localhost:6001/api/toggle-activity/${Activity._id}`, {
            method: 'GET'
        });

        const data = await res.json();
        console.log('Activity marked as done:', data);

        // console.log('Activity marked as done:', res);
    };

    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();
        const daySuffix = (day: number) => {
            if (day > 3 && day < 21) return 'th';
            switch (day % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        };

        return `${day}${daySuffix(day)} ${month}, ${year}`;
    }
    const handleUploadSuccess = async (result: any) => {
        if (result.info?.secure_url) {
            setPicUrl(result.info.secure_url);
            
            const payload = {
                userID: "671a472fcd875e841377ecc0",
                tripID: "671a87bde5d9451fc44a2c7d",
                activityID: "671a87c6e5d9451fc44a2c81",
                url: result.info.secure_url
            };

            try {
                const response = await axios.post('http://localhost:7000/api/save-img', payload);
                console.log('Image saved successfully:', response.data);
            } catch (error) {
                console.error('Error saving image:', error);
            }

        }
    };
    return (
        <div className='w-full ' ><Accordion className='bg-white rounded-lg px-5 py-5' type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <div className='w-full flex flex-row justify-between '>
                        <div className='flex flex-col'>
                            <div className='font-bold text-2xl'>Day {props.day}</div>
                            <div className=' '>{formatDate(props.date)}</div>
                        </div>
                        <div className='mr-5 flex'>Weather Condition : {props.weather_condition} {props.weather_condition == "sunny" ? <Sun className='text-[#F1A900] ml-2' /> : <CloudHail className='text-[#026A96] ml-2' />}</div>
                    </div>
                </AccordionTrigger>

                <AccordionContent className='space-y-2 '>
                    {props.activities.map((Activity: any, index: any) => (

                        <div className='w-full flex flex-col justify-between ' key={index}>

                            <div className='w-full rounded-lg border-2 border-input p-5'>
                                <div className={`font-bold text-xl flex space-x-1  ${activity_done[index] == true && 'line-through'}`}>{Activity.title} <a href={`https://maps.google.com/maps?q=${Activity.lat},${Activity.long}`}><MapPin className='text-red-600' /></a> </div>
                                <div className={`text-lg  ${activity_done[index] == true && 'line-through'}`} >Place name : {Activity.name}</div>
                                <div className={`text-md ${activity_done[index] == true && 'line-through'}`}>Transportation : {Activity.transportation}</div>
                                <div className={`text-md ${activity_done[index] == true && 'line-through'}`}>{Activity.description}</div>
                                <div className='flex flex-row items-center space-x-2'><Clock width={15} className='text-bold' /><div>{Activity.time}</div> < div className='h-2 w-2 bg-black rounded-full'></div><div>Duration : {Activity.duration}</div> </div>
                                <div className='w-full flex justify-end '>
                                    <CldUploadButton onSuccess={handleUploadSuccess} className='border-2 border-input p-3 rounded-lg mx-2' uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}>Upload</CldUploadButton>

                                    
                                    <AlertDialog>
                                        <AlertDialogTrigger className='bg-[#0AB06E] p-2 rounded-lg font-bold text-white'>Mark done</AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Do you want to add any photo ?</AlertDialogTitle>
                                                <AlertDialogDescription>


                                                    This action cannot be undone. This will permanently delete your account
                                                    and remove your data from our servers.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={(e) => { mark_done(index,Activity) }} >Continue</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>

                                </div>
                            </div>

                        </div>
                    ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion></div>
    )
}

export default AccordionComponent