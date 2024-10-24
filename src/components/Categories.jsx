import React from 'react'

const Categories = () => {
  return (
    <div className='flex mr-3 space-x-3'>
      <div className='bg-customYellow px-4 rounded-3xl text-black font-medium text-sm'>
        Quick
      </div>
      
      <div className='border-customYellow border-2 border-dashed px-4 rounded-3xl text-white font-medium text-sm'>
        Weekly
      </div>

      <div className='border-customYellow border-2 border-dashed px-4 rounded-3xl text-white font-medium text-sm'>
        Astus
      </div>

      <div className='border-customYellow border-2 border-dashed px-4 rounded-3xl text-white font-medium text-sm'>
        Studs
      </div>
    
    </div>
  )
}

export default Categories
