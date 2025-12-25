"use client"
import { Button } from '@/components/ui/button';
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Header() {

    const {user} = useUser();
    const [isOpen, setIsOpen]= useState(false);
    const [useRole, setUseRole] = useState(null);

    useEffect(()=>{
        const syncUser = async()=>{
            if(user?.id && user?.primaryEmailAddress?.emailAddress){
                try{
                    const response = await fetch('/api/user', {
                        method:'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },

                        body: JSON.stringify({
                            userId:user.id,
                            email: user.emailAddresses[0].emailAddress,
                            name: user.fullName || user.firstName || "user",
                        }),
                    })
                    if(response.ok){
                        const userData = await response.json()
                        setUseRole(userData.role)
                    }
                }catch(error){
                    console.log('Error syncing user:' , error)
                }
            }else{
                setUseRole(null1)
            }
        }
        syncUser()
    },[user])

    const isAdmin = useRole === 'admin'
    const isUser = useRole === 'user'

  return (
    <>
    <div className='flex items-center justify-between py-[2rem] px-4 md:px-2 lg:px-8 mx-auto shadow-md '>
        <h1 className='text-emerald-900 font-bold text-5xl'>AIR<span className='font-bold text-sm text-yellow-900'>Travel</span></h1>
        <div className='sm:hidden'>
            <button onClick={()=> setIsOpen(!isOpen)} className='text-gray-800 text-2xl focus:outline-none'>
                {isOpen ? "X": "="}
            </button>
        </div>
        <div className='hidden sm:flex items-center gap-3 mr-6'>
            <Link className='navLink' href="">Destination</Link>
            <Link className='navLink' href="">Services</Link>
            {
                isUser && (
                    <Link className='navLink' href="">My Booking</Link>
                )
            }
            {
                isAdmin && (
                    <Link className='navLink' href="">Add Destination </Link>
                )
            }
            <Link  className='navLink' href="">Testimonial</Link>
             {!user ? (
            <>
                <SignInButton >
                    <Button>SignIn</Button>
                </SignInButton>
                <SignUpButton>
                    <Button>SignUp</Button>
                </SignUpButton>
            </>
        ): (
            <>
                <UserButton afterSignOutUrl='/'/>
            </>
        )}
        </div>

       
    </div>
        {
            isOpen && (
        <div className='sm:hidden  bg-emerald-900 text-white  p-[1rem]'>
            <div className=' flex flex-col items-center  '>
            <Link className='navLink mb-2' href="">Destination</Link>
            <Link className='navLink mb-2' href="">Services</Link>
            <Link className='navLink mb-2' href="">Booking</Link>
            <Link  className='navLink mb-2' href="">Testimonial</Link>
             {!user ? (
            <>
                <SignInButton >
                    <Button className='mb-2'>SignIn</Button>
                </SignInButton>
                <SignUpButton>
                    <Button>SignUp</Button>
                </SignUpButton>
            </>
        ): (
            <>
                <UserButton afterSignOutUrl='/'/>
            </>
        )}
        </div>
        </div>
            )
        }
    </>
  )
}

export default Header
