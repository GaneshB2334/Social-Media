"use client";
import { ArrowLeft, Settings, Settings2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [username, setUsername] = useState<string>("Username");
  const [posts, setPosts] = useState(0);
  const [followers, setFollowers] = useState(100);
  const [following, setFollowing] = useState(500);

  return (
    <>
      <div className="text-white h-screen relative">
        <div className="flex bg-muted-foreground overflow-hidden">
          <Link
            href="/"
            className=" p-3 bg-muted rounded-lg cursor-pointer lg:hover:bg-muted-foreground lg:hover:text-black transition-colors duration-[0.5s]"
          >
            <ArrowLeft />
          </Link>
          <div className="flex-grow bg-muted-foreground"/>
          <div className="p-3 bg-muted rounded-lg cursor-pointer lg:hover:bg-muted-foreground lg:hover:text-black transition-colors duration-[0.5s] active:rotate-45">
            <Settings />
          </div>
        </div>

        <div className="flex flex-col w-screen justify-center items-center border-b border-muted-foreground">
          <div className="flex w-screen">
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
              <div className="flex gap-2 max-md:text-xs">
                <div className="flex flex-col items-center">
                  <p className="text-xl max-md:text-base">{posts}</p>
                  <p>Posts</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xl max-md:text-base">{followers}</p>
                  <p>Followers</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xl max-md:text-base">{following}</p>
                  <p>Following</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 pb-5">
            <p>Bio</p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            dignissimos tenetur enim, error, odio repudiandae fuga nihil
            excepturi similique quibusdam voluptatibus? Similique molestiae
            obcaecati
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
