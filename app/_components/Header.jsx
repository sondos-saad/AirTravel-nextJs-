"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function Header() {

    const [isOpen, setIsOpen]= useState(false);

  return (
    <div className='flex items-center justify-between py-[2rem] px-4 sm:px-6 lg:px-8 mx-auto shadow-md '>
        <h1 className='text-emerald-900 font-bold text-5xl'>AIR<span className='font-bold text-sm text-yellow-900'>Travel</span></h1>
        <div className='sm:hidden'>
            <button onClick={()=> setIsOpen(!isOpen)} className='text-gray-800 text-2xl focus:outline-none'>
                {isOpen ? "X": "="}
            </button>
        </div>
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
