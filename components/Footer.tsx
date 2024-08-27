"use client";
import { Home, Search, Video } from "lucide-react";
import { motion } from "framer-motion";
import { moveUp } from "../app/utils/motion";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-20 overflow-hidden">
      <motion.div className="flex justify-center gap-5 items-center border border-white h-full">
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
          variants={moveUp(0.2, 0.2)}
          initial="hidden"
          animate="visible"
        >
          <Link href="/reels">
            <Video color="white" cursor={"pointer"} />
          </Link>
        </motion.div>
        <motion.div
          variants={moveUp(0.4, 0.2)}
          initial="hidden"
          animate="visible"
        >
          <Link href="/search">
            <Search color="white" cursor={"pointer"} />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footer;
