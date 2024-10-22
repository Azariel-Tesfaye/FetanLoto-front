import React from "react";

const BigYellowButton = (props) => {
  return (
    <div>
      <button className="bg-yellow-500  text-black py-3  px-6 w-full font-medium mt-4 flex items-center justify-center hover:bg-yellow-600 transition duration-300 ">
        {props.text} <span className="ml-2">→</span>
      </button>
    </div>
  );
};

export default BigYellowButton;
