import React from 'react'
import Star from '../assets/star.png'

const Refferal = () => {
  return (
    <div className='border-2 w-full h-[80px] rounded-bl-xl rounded-br-xl border-customYellow flex items-center justify-between p-4'>
      {/* Left content */}
      <div className='flex flex-col items-center ml-10'>
        <h3 className='font-extralight text-lg'>Referrals</h3>
        <p className='font-bold text-xl'>20</p>
      </div>
      
      {/* Line separator */}
      <div className='h-full border-l-2 border-customYellow mx-8'></div>
      
      {/* Right content */}
      <div className='flex flex-col items-center mr-10'>
        <h3 className='font-extralight text-lg'>Points</h3>
        <div className='flex items-center'>
            <img className='w-[16px]' src={Star} alt="Point Icon" />
            <p className='ml-1 font-bold text-xl'>200</p>
        </div>
      </div>
    </div>
  )
}

export default Refferal
