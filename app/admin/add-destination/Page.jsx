import React, { useState } from 'react'

function Page() {

    const [formData, setFormData] = useState({
        name: "",
        country: "",
        city: "",
        description: "",
        highlights: "",
        bestSeason: "",   
        activities: "",                        
        price:"",                                 
        duration: "",          
        imageUrl: null,
    })

  return (
    <div className='min-h-screen flex items-center justify-between bg-gray-50'>
      <div className='max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden'>

        {/* form section */}
        <div className='p-3'>
            <h2 className='text-[#f78547] text-[20px]'>Add Destination</h2>
            <form></form>
        </div>
      </div>
    </div>
  )
}

export default Page
