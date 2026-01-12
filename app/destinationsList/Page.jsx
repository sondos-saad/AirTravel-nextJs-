import React, { useState } from 'react'

function destinationsList() {
    const [destinations, setDestinations] = useState([])
    const [loading, setLoading] = useState(true);

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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {destinations?.map((des)=>(
                    
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default destinationsList
