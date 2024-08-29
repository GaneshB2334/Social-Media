"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import User from "@/public/user.png";
import { moveRight } from "../app/utils/motion";

const Header = () => {
  return (
    <div className="h-20 border-white shadow-md shadow-black border flex items-center px-3">
      <motion.div
        variants={moveRight(0, 0.5)}
        initial="hidden"
        animate="visible"
        className=""
      >
        <Image src={User} alt="logo" className="h-16 w-16" />
      </motion.div>
    </div>
  );
};

export default Header;
