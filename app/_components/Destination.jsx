import React from 'react'
import Image from 'next/image'

function Destination() {

        const destination = [
       {
        id:1,
        img:'/8084.jpg',
        title: "Rome, Italy",
        desc: "10 Days Trip.",
        price:"150$",
       },
       {
        id:2,
        img:'/8084.jpg',
        title: "London, UK",
        desc: "7 Days Trip.",
        price:"100$",
       },
       {
        id:3,
        img:'/8084.jpg',
        title: "Full Europe",
        desc: "15 Days Trip.",
        price:"190$",
       },
]

  return (
    <div className='flex flex-col items-center justify-center my-[4rem]'>
       <h2 className='text-[45px] text-emerald-900 font-bold'>Top Destinations</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-[2rem]'>
               {
                   destination.map((cat)=>{
                      return(
                        <div className='flex flex-col items-center text-center p-4 rounded-lg hover:shadow-lg transition duration-300 hover:bg-emerald-900 group cursor-pointer'>
                           <Image src={cat.img} width={300} height={300}/>
                           <h3 className='mt-4 font-semibold text-lg text-gray-800 group-hover:text-white'>{cat.title}</h3>
                           <p className='mt-2 text-gray-500 text-sm group-hover:text-gray-200'>{cat.desc}</p>
                           <p className='mt-2 text-xl font-bold group-hover:text-gray-200'>{cat.price}</p>
                       </div>
                      )
                   })
               }
             </div>
    </div>
  )
}

export default Destination
