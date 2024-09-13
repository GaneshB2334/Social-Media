"use client";
import { FileQuestion, Home, Search, User, UserPlus } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-20 overflow-hidden">
      <div className="flex justify-center gap-10 items-center border h-full">
        <div>
          <Link href="/">
            <Home color="white" cursor={"pointer"} />
          </Link>
        </div>
        <div>
          <Link href="/not-decided">
            <FileQuestion color="white" cursor={"pointer"} />
          </Link>
        </div>
        <div>
          <Link href="/search">
            <Search color="white" cursor={"pointer"} />
          </Link>
        </div>
        <div>
          <Link href="/profile">
            <User color="white" cursor={"pointer"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
