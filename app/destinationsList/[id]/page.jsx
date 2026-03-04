"use client"
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function page() {
        const [destinations, setDestinations] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null)
        

        const params = useParams()

        useEffect(()=>{
            if(params.id){
                fetchDestinations()
            }
        },[params.id])

        const fetchDestinations = async ()=> {
        try{
            const response = await fetch("/api/destinations")
            const result = await response.json()
            if(result.success){
                const foundDestination = result.data.find(dest=> dest.id === parseInt(params.id))
                if(foundDestination){
                    setDestinations(foundDestination)
                }else{
                    setError("destination not found")
                }
            }else{
                setError("Failed to fetch destination")
            }
        }catch(error){
            setError("Error loading destination");
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
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-orange-50'>
        <div className='max-w-7xl mx-auto p-x5 py-5'>

            {/* hero section */}
            <div className='relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-8 shadow-2xl'>
                {destinations.imageUrl && (
                    <Image width={300} height={300} src={destinations.imageUrl} className='w-full h-full object-cover'/>
                )}
            </div>
      
        </div>
    </div>
  )
}

export default page
