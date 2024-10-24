import React from 'react'
import Arrow from '../assets/arrow.png'
const BalanceHome = () => {
  return (
    // Balance Card
    <div className='flex'>
    {/* Yellow Div for the balance */}
        <div className="w-[260px] h-[175px] rounded-tl-lg rounded-bl-lg bg-[#FFE205]">
            <h3 className='text-black text-xl pt-7 pl-4 pb-0'>Available Balance</h3>
            <h1 className='text-black  tracking-tight text-5xl font-bold pl-4'>2,330.20
                <span className="absolute tracking-normal text-lg ">ETB</span>
            </h1>
        </div>
        
        <div className='h-[175px] flex justify-center items-center w-[60px] rounded-tr-lg rounded-br-lg ml-1 bg-[#3D3C3C]'>
          <img src= {Arrow} alt="Arrow Image" className=''></img>
        </div>
    </div>
  )
}

export default BalanceHome