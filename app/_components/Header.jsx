import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between py-[2rem] '>
        <h1 className='text-emerald-900 font-bold text-5xl'>AIR<span className='font-bold text-sm text-yellow-900'>Travel</span></h1>
        <div className='flex items-center gap-3 mr-6'>
            <Link className='navLink' href="">Destination</Link>
            <Link className='navLink' href="">Services</Link>
            <Link className='navLink' href="">Booking</Link>
            <Link  className='navLink' href="">Testimonial</Link>
        </div>
    </div>
  )
}

export default Header
