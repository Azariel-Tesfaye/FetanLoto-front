import React from 'react'

const TicketHome = () => {
  return (
    <div className="bg-[#1E1E1E] flex items-center justify-center">
  
      <div className="relative p-3 rounded-[20px] bg-[#242326] w-[360px] h-[180px] flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-semibold text-md">Daily Draw</h2>
          <p className="text-gray-400 text-md">OCT, 15 2024</p>
        </div>

     
        <div className="text-center tracking-tighter">
          <p className="text-white font-light text-lg">WIN</p>
          <h1 className="text-[#FFE205] text-6xl font-bold -mt-3">1000<span className="text-xl">ETB</span></h1>
        </div>

      
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-sm">Remaining <span className="text-[#FFE205] font-bold">3/100</span></p>
          <p className="text-white font-bold text-xl">10 ETB</p>
        </div>

     
        <div className="absolute inset-0 border-2 rounded-[20px] border-[#FFE205] pointer-events-none" />
      </div>
    </div>
  )
}

export default TicketHome
