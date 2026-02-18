"use client"
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
    <div>
      
    </div>
  )
}

export default page
