import React from 'react'
import Cars from '../components/Cars'

function page() {
  return (
    <div className='pt-24 bg-[#363636]'>
      <h1 className="text-4xl font-bold text-orange-500 mb-8 text-center">
        Our Vehicles
      </h1>
        <Cars/>
        <Cars/>
        <Cars/>
        <Cars/>
    </div>
  )
}

export default page