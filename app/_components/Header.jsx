import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between p-3 '>
        <h1 className='text-emerald-900 font-bold text-5xl'>AIR<span className='font-bold text-sm text-yellow-900'>Travel</span></h1>
        <div className='flex items-center gap-3 mr-6'>
            <Link href="">Destination</Link>
            <Link href="">Services</Link>
            <Link href="">Booking</Link>
            <Link href="">Testimonial</Link>
        </div>
    </div>
  )
}

export default Header
