"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { SearchIcon } from "lucide-react";
import { moveLeft, moveRight, moveUp } from "../utils/motion";

const Search = () => {
  return (
    <div className="text-white w-screen h-[calc(100vh-5rem)] overflow-hidden">
      <div className="w-full border p-3">
        <div className="flex items-center gap-3">
          <motion.div
            variants={moveRight(0, 0.3)}
            initial="hidden"
            animate="visible"
            className="flex-shrink-0"
          >
            <SearchIcon />
          </motion.div>
          <motion.div
            variants={moveUp(0, 0.3)}
            initial="hidden"
            animate="visible"
            className="rounded-full flex-grow"
          >
            <Input
              className="rounded-full"
              type="text"
              placeholder="Search here..."
            />
          </motion.div>
          <motion.div
            variants={moveLeft(0, 0.3)}
            initial="hidden"
            animate="visible"
            className="rounded-full "
          >
            <Button className="rounded-full" variant="outline">
              Search
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Search;
