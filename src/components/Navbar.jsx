import React from "react";
import homeSelected from "../assets/home2.png";
import notification from "../assets/notification.png";
import ticket from "../assets/ticket.png";
import profile from "../assets/profile.png";

const Navbar = () => {
  return (
    <div className="max-w-sm items-center">
      <hr className=" border-gray-500 w-[90%] mx-3 " />
      <div className=" justify-between w-full h-9 p-4 flex flex-row ">
        <img
          className="h-10 w-10 object-contain"
          src={homeSelected}
          alt="home"
        />
        <img className="h-10 w-10 object-contain" src={ticket} alt="ticket" />
        <img
          className="h-10 w-10 object-contain"
          src={notification}
          alt="notification"
        />
        <img className="h-10 w-10 object-contain" src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Navbar;
