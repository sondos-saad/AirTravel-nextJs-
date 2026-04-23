import React, { useEffect, useState } from 'react'

function page() {
    const [booking, setBooking] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetchBookings()
    },[])

    const fetchBookings = async()=>{
        try{
            const resp = await fetch("/api/checkout")
            const result = await resp.json()

            if(result.success){
                setBooking(result.data)
            }else{
                setError("Failed to fetch bookings")
            }
        }catch(error){
             setError("error Loading Bookings")
             console.error('Error:', error);
             
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
        {error && (
            <div className='bg-red-200 p-4 mt-6'>
                <strong className='bg-red-500'>{error}</strong>
            </div>
        )}
      
      <div className='space-y-6'></div>
        {booking.map(()=>(
            <div className='bg-white shadow-xl rounded-2xl'>
                <div className='p-7'>
                    {/* header */}
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            
                        </div>
                    </div>
                </div>
            </div>
        ))}

    </div>
  )
}

export default page
