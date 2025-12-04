import Image from 'next/image'
import React from 'react'

function Offers() {

    const category = [
       {
        id:1,
        icon:'/8084.jpg',
        title: "Calculated Weather",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo minus voluptate odio recusandae."
       },
       {
        id:2,
        icon:'/8084.jpg',
        title: "Best Flights",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo minus voluptate odio recusandae."
       },
       {
        id:3,
        icon:'/8084.jpg',
        title: "Local Events",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo minus voluptate odio recusandae."
       },
       {
        id:4,
        icon:'/8084.jpg',
        title: "Customization",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo minus voluptate odio recusandae."
       },
]

  return (
    <div className='flex flex-col items-center justify-center py-[4rem]'>
      <h2 className='text-[45px] text-emerald-900 font-bold'>We Offer Best Services</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-[2rem]'>
        {
            category.map((cat)=>{
               return(
                 <div className='flex flex-col items-center text-center p-4 rounded-lg hover:shadow-lg transition duration-300 hover:bg-emerald-900 group cursor-pointer'>
                    <Image src={cat.icon} width={60} height={60}/>
                    <h3 className='mt-4 font-semibold text-lg text-gray-800 group-hover:text-white'>{cat.title}</h3>
                    <p className='mt-2 text-gray-500 text-sm group-hover:text-gray-200'>{cat.desc}</p>
                </div>
               )
            })
        }
      </div>
    </div>
  )
}

export default Offers
