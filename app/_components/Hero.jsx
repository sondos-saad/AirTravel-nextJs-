import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section className='md:flex items-center justify-between py-10'>
      <div className='md:w-[50%] flex flex-col items-center md:items-start'>
        <h2 className='text-emerald-900 text-[20px] lg:text-[35px] font-bold  mb-2'>Best Destinations around the world</h2>
        <p className='text-[40px] lg:text-[70px] font-bold lg:leading-20 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <p className='mt-5 text-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo minus voluptate odio recusandae. Laborum totam aperiam debitis aspernatur, possimus adipisci dolorem modi optio quibusdam dicta vero atque ipsa vitae nemo?</p>
        <Button className='mt-5 font-bold text-lg  '>
            Find out more
        </Button>
      </div>
      <div className='mt-10 md:mt-0 md:w-1/2 flex justify-center'>
        <Image src='/8084.jpg' width={500} height={500} className='w-[400px] md:w-[500px] lg:w-[600px] h-auto object-contain '/>
      </div>
    </section>
  )
}

export default Hero
