"use client";
import { motion } from "framer-motion";
import { Home, Search, User, UserPlus } from "lucide-react";
import Link from "next/link";
import { moveUp } from "../app/utils/motion";

const Footer = () => {
  return (
    <div className="h-20 overflow-hidden">
      <motion.div className="flex justify-center gap-10 items-center border h-full">
        <motion.div
          variants={moveUp(0, 0.2)}
          initial="hidden"
          animate="visible"
        >
          <Link href="/">
            <Home color="white" cursor={"pointer"} />
          </Link>
        </motion.div>
        <motion.div
          variants={moveUp(0.1, 0.2)}
          initial="hidden"
          animate="visible"
        >
          <Link href="/add-friend">
            <UserPlus color="white" cursor={"pointer"} />
          </Link>
        </motion.div>
        <motion.div
          variants={moveUp(0.2, 0.2)}
          initial="hidden"
          animate="visible"
        >
          <Link href="/search">
            <Search color="white" cursor={"pointer"} />
          </Link>
        </motion.div>
        <motion.div
          variants={moveUp(0.3, 0.2)}
          initial="hidden"
          animate="visible"
        >
          <Link href="/profile">
            <User color="white" cursor={"pointer"} />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footer;
