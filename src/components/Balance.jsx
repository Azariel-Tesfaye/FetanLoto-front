import React from "react";
import deposit from "../assets/deopsitIcon.png";

const Balance = () => {
  return (
    <div className="flex flex-col text-center top-28 mt-20">
      <h1 className=" font-semibold text-lg">Total Balance</h1>
      <div className="relative flex justify-around">
        <h1 className="text-6xl font-bold">
          2330.45
          <span className="absolute top-2 text-lg font-thin ">ETB</span>
        </h1>
      </div>

      <div className="flex flex-row justify-around gap-3 mt-8">
        <div className="flex rounded-[47px] w-[153px] h-[40px] justify-center items-center gap-3  bg-[#FFE205]">
          <button className=" text-black font-semibold text-xl">Deposit</button>
          <img className="size-5" src={deposit} alt="deposite icon" />
        </div>
        <div className="flex rounded-[47px] w-[153px] h-[40px] justify-center items-center gap-3  bg-[#FFE205]">
          <button className=" text-black font-semibold text-xl">
            Withdraw
          </button>
          <img
            className="size-5 rotate-180"
            src={deposit}
            alt="deposite icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Balance;
