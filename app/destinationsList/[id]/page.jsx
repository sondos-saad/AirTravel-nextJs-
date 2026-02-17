"use client"
import { useParams } from 'next/navigation';
import React, { useState } from 'react'

function page() {
        const [destinations, setDestinations] = useState(null);
            const [loading, setLoading] = useState(true);
        

        const params = useParams()

        const fetchDestinations = async ()=> {
        try{
            const response = await fetch("/api/destinations")
            const result = await response.json()
        }catch(error){

        }
        }
    
  return (
    <div>
      
    </div>
  )
}

export default page
