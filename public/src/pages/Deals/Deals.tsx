import React from 'react'
import Slidebar from '../../components/Slidebar/Slidebar'

export default function Deals() {
  return (
    <div className='flex h-min-screen'>
      <Slidebar />
      <div className='w-5/6'>
        <div className='flex items-center justify-between text-start ms-4 mt-5'>
          <h1>Deals</h1>
        </div>

      </div>

    </div>
  )
}
