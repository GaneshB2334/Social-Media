"use client";
import Image from "next/image";
import React from "react";
import User from "@/public/user.png";

const Header = () => {
  return (
    <div className="h-20 shadow-md shadow-black border flex items-center px-3">
      <div className="">
        <Image src={User} alt="logo" className="h-16 w-16" />
      </div>
    </div>
  );
};

export default Header;
