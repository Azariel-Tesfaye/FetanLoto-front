import React from 'react'
import Navbar from '../components/Navbar'
import BalanceHome from '../components/BalanceHome'
import Refferal from '../components/Refferal'
import TicketHome from '../components/TicketHome'
import Categories from '../components/Categories'



const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  text-white">
      <div className=" flex flex-col justify-between w-full h-[100vh] max-w-sm p-8 bg-[#1E1E1E] rounded-lg">
        <BalanceHome />
        <Refferal />
        <Categories />
        <TicketHome />
        <div className='text-5xl'>
            <h1>FAST</h1>
            <h1>CASH OUT</h1>
        </div>
        <Navbar />
      </div>
    </div>
  )
}

export default Home