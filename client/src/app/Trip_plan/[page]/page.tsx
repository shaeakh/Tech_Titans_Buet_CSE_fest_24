"use client"
import { NotebookPen } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import AccordionComponent from '@/app/components/Trip_plan/AccordionComponent'
import axios from 'axios'
import { useSearchParams } from "next/navigation";
function page() {
    interface Itinerary {
        [x: string]: any
        days: Itinerary | null
        tripTitle: string;
        // Add other properties if needed
    }
    

    const searchParams = useSearchParams();
    const tripID = searchParams.get('tripID');
    const [itinerary, setItinerary] = React.useState<Itinerary | null>(null);

    useEffect(() => {
        const fetchItinerary = async () => {
          console.log(tripID);
          
            try {
                const res = await axios.get(`http://172.28.31.202:6000/api/itinerary?tripID=${tripID}`);
                if (res.status !== 200) {   
                    throw new Error(`Error: ${res.status} ${res.statusText}`);
                }
                setItinerary(res.data);
                console.log('Fetched itinerary:', res.data);
                
                console.log('Fetched itinerary:', res.data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (error.response) {
                        // Server responded with a status other than 200
                        
                    } else if (error.request) {
                        // Request made but no response received
                        // console.error('Request Error:', error.request);
                    } else {
                        // Something else happened
                        console.error('Error:', error.message);
                    }
                } else {
                    console.error('Unexpected Error:', error);
                }
            }
        };
    
        fetchItinerary();
    }, []);
    
    return (
        <div className='h-full w-screen flex flex-row  justify-start items-center  ' style={{
            backgroundImage:
                'url("https://images.unsplash.com/photo-1494804265872-476520fd1a21?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwcGxhbnxlbnwwfHwwfHx8MA%3D%3D")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                
        }}>

            <div className='w-2/3 p-10 h-full space-y-5     '>
                <div className=' w-min bg-white whitespace-nowrap h-min  flex flex-row items-center space-x-2 px-4 py-2 rounded-full' >
                    <div className='h-5 w-5 bg-blue-500 hover:bg-blue-700 rounded-full'></div>
                    <label
                        htmlFor="accommodation"
                        className="text-xl text-black flex items-center gap-2"
                    >
                        <NotebookPen className='text-[#53AB8B]' height={20} width={20} /> {itinerary ? itinerary.tripTitle : 'Your Trip Plan'}
                    </label>
                </div>
                {itinerary && itinerary.days && itinerary.days.map((day: any, index: any) => (
                    <AccordionComponent key={index} day={day.day} date={day.date} weather_condition={day.weatherCondition} activities={day.activities}/>
                ))}
                
            </div>
            <div className='  w-1/3 space-y-4 h-full flex flex-col justify-center items-center '>
                <div className='bg-white whitespace-nowrap h-min border-input flex flex-row items-center space-x-2 px-4 py-2 rounded-full' >
                    <div className='h-5 w-5 bg-blue-500 hover:bg-blue-700 rounded-full'></div>
                    <label
                        htmlFor="accommodation"
                        className="text-xl text-black flex items-center gap-2"
                    >
                        <NotebookPen className='text-red-600' height={30} width={30} /> Your Trip Plan in pinner details
                    </label>
                </div>
                <div className='w-11/12 bg-white rounded-xl p-2'>
                    <Image
                        src="https://techpp.com/wp-content/uploads/2023/03/How-To-Drop-A-Pin-In-Google-Maps.jpg"
                        height="250"
                        width="250"
                        className=" w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </div>

            </div>


        </div>
    )
}

export default page