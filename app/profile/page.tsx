"use client";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  const [username, setUsername] = useState<string>("Username");
  return (
    <>
      <div className="text-white h-screen">
        <div className="flex w-screen justify-center items-center border-b border-muted-foreground">
          <div className="w-1/6 max-lg:w-1/4 max-md:w-1/2 h-40 flex justify-center items-center ">
            <Image
              src="/User.png"
              width={100}
              height={100}
              className=""
              alt="User Profile"
            />
          </div>
          <div className="w-5/6 max-lg:w-3/4 max-md:w-1/2 flex items-center lg:px-10 ">
            <div>
              <h1 className="text-xl">{username}</h1>
              <p className="text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates, perspiciatis.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-wider px-5 py-5">
            Posts
          </h1>
          <div className="bg-muted-foreground m-auto w-[calc(100vw-2.5rem)] h-[1px]" />
          <div className="w-screen flex justify-center items-center my-auto">
            No posts yet
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
