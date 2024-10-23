import React from "react";
import Balance from "../components/Balance";
import BalanceHistory from "../components/BalanceHistory";
import Navbar from "../components/Navbar";

const BalancePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  text-white">
      <div className=" flex flex-col justify-between w-full h-lvh max-w-sm p-8 bg-[#1E1E1E] rounded-lg">
        <Balance />
        <BalanceHistory />
        <Navbar />
      </div>
    </div>
  );
};

export default BalancePage;
