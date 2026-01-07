'use client'

import { Button } from '@/components/ui/button'
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

    const handleChange =(e)=>{
        const {name , value , files} = e.target
        if(files){
            setFormData((prev=> ({...prev , [name]: files[0]})))
        }else{
            setFormData((prev=> ({...prev , [name]: value})))
        }
        
    }

    const handelSubmit = async (e) =>{
        e.preventDefault()

    try {
        const data = new FormData()
        Object.keys(formData).forEach((key)=>{
            data.append(key, formData[key])
        })

        const res = await fetch("/api/destinations" , {
            method: "POST",
            body: data       
         })

         if(res.ok){
            toast.success("Destination added successfully")
            setFormData({
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
            setStep(1)
         }else{
            toast.error("Something went wrong ")
         }

    }catch (error){
        console.error(error)
        toast.error("Server error")
    }
    }

    const nextStep = ()=>{
        setStep((prev)=> prev + 1)
    }
    const prevStep = ()=>{
        setStep((prev)=> prev - 1)
    }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden'>

        {/* form section */}
        <div className='p-6'>
            <h2 className='text-[#f78547] text-[20px] my-4'>Add Destination</h2>
            <form onSubmit={handelSubmit} className='space-y-6'>

                {step === 1 && (
                    <div className='space-y-4'>
                        <Input name='name' placeholder='Add Name' value={formData.name} onChange={handleChange} />
                        <Input name='country' placeholder='country' value={formData.country} onChange={handleChange}/>
                        <Input name='city' placeholder='city' value={formData.city} onChange={handleChange}/>
                    </div>
                )}

                {step === 2 && (
                    <div className='space-y-4'>
                        <Textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
                        <Textarea name="highlights" placeholder="HighLights" value={formData.highlights} onChange={handleChange}/>
                        <Input name='bestSeason' placeholder='Best Season (e.g., Summer, Winter)' value={formData.bestSeason} onChange={handleChange}/>
                    </div>
                )}

                {step === 3 && (
                    <div className='space-y-4'>
                        <Input name='activities' placeholder='Activities (e.g., Hiking, Diving)' value={formData.activities} onChange={handleChange}/>
                        <Input name='price' placeholder='Price' value={formData.price} type='number' onChange={handleChange}/>
                        <Input name='Duration' placeholder='Duration (e.g., 5 days)' value={formData.duration} onChange={handleChange}/>
                    </div>
                )}

                  {step === 4 && (
                    <div className='space-y-4'>
                        <label className='block font-medium'>Upload Image</label>
                        <Input name='imageUrl' accept="image/*" type="file" onChange={handleChange}/>
                    </div>
                )}

                {/* buttons */}
                <div className='flex justify-between'>

                    {step > 1 && (
                        <Button type="button" onClick={prevStep}>Back</Button>
                    )}

                    {step < 4 && (
                        <Button type="button" onClick={nextStep}>Next</Button>
                    )}

                    {step === 4 && (
                        <Button type="submit">Submit</Button>
                    )}
                    
                </div>

            </form>
        </div>
        {/* Image section */}
        <div className='relative hidden md:block'>
            <Image src='/public/8084.jpg' width={500} height={500} />
        </div>
      </div>
    </div>
  )
}

export default Page
