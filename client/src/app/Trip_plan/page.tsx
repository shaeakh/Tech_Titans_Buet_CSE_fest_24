"use client"
import { NotebookPen } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <div className='h-screen w-screen flex flex-row  justify-start items-center  ' style={{
            backgroundImage:
                'url("https://images.unsplash.com/photo-1494804265872-476520fd1a21?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwcGxhbnxlbnwwfHwwfHx8MA%3D%3D")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>

            <div className='w-2/3 h-full border-2 border-white'>a</div>
            <div className='w-1/3 space-y-4 h-full border-2 border-white flex flex-col justify-center items-center '>
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