"use client"
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function destinationsList() {
    const [destinations, setDestinations] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetchDestinations();
    },[])

    const fetchDestinations = async ()=> {
        try{
            const response = await fetch("/api/destinations")
            const result = await response.json()
            setDestinations(result.data)
        }catch(error){
            console.error("Error:", error)
        }finally{
            setLoading(false)
        }
    }

    if(loading){
        return(
            <div className='min-h-screen flex items-center justify-center'>
                <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#f78547]'></div>
            </div>
        )
    }

  return (
    <div className='min-h-screen bg-gray-50 py-8'>
        <div className='max-w-7xl mx-auto px04'>
            <h4 className='font-bold text-[20px]'>Destinations</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {destinations?.map((des)=>(
                    <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                        <div className=' overflow-hidden'>
                            <Image src={des?.imageUrl} width={350} height={350} className='w-full hover:scale-110 transition-transform duration-500'/>
                        </div>
                        {/* content */}
                        <div className='p-5'>
                            <h3 className='text-2xl font-bold text-gray-800 mb-3'>{des?.name}</h3>
                            <div className='flex items-center text-gray-600 mb-4'>
                                <MapPin className='text-[17px]'/>
                                <span className='ml-2'>{des?.country} , {des?.city}</span>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default destinationsList
