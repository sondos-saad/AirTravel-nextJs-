'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'

function Page() {

    const [step, setStep] = useState(1)

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
            <form className='space-y-6'>

                {step === 1 && (
                    <div className='space-y-4'>
                        <Input name='name' placeholder='Add Name' value={formData.name}/>
                        <Input name='country' placeholder='country' value={formData.country}/>
                        <Input name='city' placeholder='city' value={formData.city}/>
                    </div>
                )}

                {step === 2 && (
                    <div className='space-y-4'>
                        <Textarea name="description" placeholder="Description" value={formData.description} />
                        <Textarea name="highlights" placeholder="HighLights" value={formData.highlights} />
                        <Input name='bestSeason' placeholder='Best Season (e.g., Summer, Winter)' value={formData.bestSeason}/>
                    </div>
                )}

                {step === 3 && (
                    <div className='space-y-4'>
                        <Input name='activities' placeholder='Activities (e.g., Hiking, Diving)' value={formData.activities}/>
                        <Input name='price' placeholder='Price' value={formData.price} type='number'/>
                        <Input name='Duration' placeholder='Duration (e.g., 5 days)' value={formData.duration}/>
                    </div>
                )}

            </form>
        </div>
      </div>
    </div>
  )
}

export default Page
