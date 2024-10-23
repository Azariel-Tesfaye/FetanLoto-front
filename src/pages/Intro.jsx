import React from "react";
import BigYellowButton from "../components/BigYellowButton";

const Intro = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  text-white">
      <div className=" flex flex-col justify-between w-full h-lvh max-w-sm p-8 bg-[#1E1E1E] rounded-lg">
        <h1 className=" text-[48px] w-[293px] h-[156px] font-semibold mt-20">
          Reach Your Financial Goal
        </h1>
        <BigYellowButton text={"Start your Journey"} />
      </div>
    </div>
  );
};

export default Intro;
