"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { motion } from "framer-motion";

const Search = () => {
  return (
    <div className="text-white w-screen h-[calc(100vh-5rem)]">
      <div className="w-full border p-3">
        <div className="flex items-center gap-3">
          <motion.div className="flex-shrink-0">
            <SearchIcon className="" />
          </motion.div>
          <motion.div className="rounded-full flex-grow">
            <Input className="rounded-full" type="text" placeholder="Search here..." />
          </motion.div>
          <motion.div className="rounded-full ">
            <Button className="rounded-full" variant="outline">Search</Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Search;
