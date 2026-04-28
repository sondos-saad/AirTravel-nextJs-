"use client"
import { Calendar, CheckCircle, User } from 'lucide-react';
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
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 max-w-7xl mx-auto px-4 py-6'>
        {error && (
            <div className='bg-red-200 p-4 mt-6'>
                <strong className='bg-red-500'>{error}</strong>
            </div>
        )}
      
      <div className='space-y-6 p-7'>
         {booking.map((booking)=>(
            <div className='bg-white shadow-xl rounded-2xl'>
                <div className='p-7'>
                    {/* header */}
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <div className='w-12 h-12 bg-[#f78547] rounded-full flex items-center justify-center'>
                                <CheckCircle className='w-6 h-6 text-white'/>
                            </div>

                            <div>
                                <h3 className='text-xl font-bold text-gray-800'>Booking Id: {booking?.id}</h3>
                                <p className='text-gray-500 text-sm'> Booking Confirmed</p>

                            </div>
                        </div>
                        <div className='text-right'>
                            <div className='text-2xl font-bold text-[#f78547]'>
                                <h3>{booking?.price} $</h3>
                            </div>
                            <div className='text-gray-500 text-sm'>
                                ${Math.round(booking.price / booking.travelers)} per person
                            </div>
                            
                        </div>
                    </div>

                    {/* booking details grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {/* guest information */}
                        <div className='bg-gray-100 rounded-2xl p-4 mt-5'>
                            <h4 className='font-semibold text-gray-800 mb-3 flex items-center'>
                                <User className='w-5 h-5 mr-2 text-[#f78547]'/> Guest Information
                            </h4>
                            <div className='space-y-2 text-sm'>
                                <div>
                                    <span className='font-bold mr-2'>Name:</span>
                                    <span>{booking?.firstName} {booking?.lastName}</span>
                                </div>
                                 <div>
                                    <span className='font-bold mr-2'>Email:</span>
                                    <span>{booking?.email}</span>
                                </div>
                                 <div>
                                    <span className='font-bold mr-2'>Phone:</span>
                                    <span>{booking?.phone}</span>
                                </div>
                            </div>
                        </div>

                        {/* trip details */}
                        <div className='bg-blue-50 rounded-2xl p-4 mt-5'>
                            <h4 className='font-semibold text-gray-800 mb-3 flex items-center gap-4'>
                                <Calendar className='w-5 h-5 mr-2 text-[#f78547]'/>  Trip Details
                            </h4>
                            <div className='space-y-2 text-sm'>
                                <div>
                                    <span className='font-bold mr-2'>Travelers:</span>
                                    <span>{booking?.travelers}</span>
                                </div>
                                 <div>
                                    <span className='font-bold mr-2'>CheckIn Date:</span>
                                    <span>{booking?.checkInDate}</span>
                                </div>
                                 <div>
                                    <span className='font-bold mr-2'>CheckOut Date:</span>
                                    <span>{booking?.checkOutDate}</span>
                                </div>
                            </div>
                        </div>

                        {/* payments Info */}
                        <div className='bg-green-50 rounded-2xl p-4 mt-5'>
                            <h4 className='font-semibold text-gray-800 mb-3 flex items-center gap-4'>
                                <Calendar className='w-5 h-5 mr-2 text-[#f78547]'/>Payments Summary
                            </h4>
                            <div className='space-y-2 text-sm'>
                                <div className='flex justify-between'>
                                    <span className='font-bold mr-2'>per Person:</span>
                                    <span>${Math.round(booking.price / booking.travelers)} per person
                                    </span>
                                </div>
                                 <div className='flex justify-between border-b-2 border-green-300'> 
                                    <span className='font-bold mr-2'>Travelers:</span>
                                    <span>{booking?.travelers}</span>
                                </div>
                                 <div >
                                    <span className='font-bold mr-2'>Total:</span>
                                    <span>{booking?.price} $</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
      {/* summary stats */}

      {booking.length > 0 && (
        <div className='mt-12 grid-cols-1 md:grid-cols-4 gap-6'>
            <div className='bg-white rounded-xl p-6 shadow-lg text-center'>
                <div className='text-3xl font-bold text-[#f78547] mb-2'>
                    {booking.length}
                </div>
                <h1 className='text-[#f78547] text-xl '>Total Bookings</h1>
            </div>
            <div className='bg-white rounded-xl p-6 shadow-lg text-center'>
                <div className='text-3xl font-bold text-[#f78547] mb-2'>
                    {booking.travelers}
                </div>
                <h1 className='text-[#f78547] text-xl '>Total Travelers</h1>
            </div>
        </div>
      )}
       

    </div>
  )
}

export default page
