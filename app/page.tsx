"use client";
import User from "@/public/user.png";
import { motion } from "framer-motion";
import { MessageCircle, Send, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Post {
  userProfile?: string;
  username: string;
  audio?: string;
  source: string;
  likes: number;
  comments: number;
  shares: number;
}
const posts: Post[] = [
  {
    username: "JohnDoe",
    source: "https://picsum.photos/200",
    likes: 10,
    comments: 5,
    shares: 2,
  },
  {
    username: "JaneSmith",
    source: "https://picsum.photos/200",
    likes: 15,
    comments: 3,
    shares: 1,
  },
  {
    username: "MikeJohnson",
    source: "https://picsum.photos/200",
    likes: 20,
    comments: 8,
    shares: 4,
  },
];

const page = () => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    let clear: NodeJS.Timeout;

    if (isLiked) {
      clear = setTimeout(() => {
        setIsLiked(false);
      }, 2000);
    }

    return () => clearTimeout(clear);
  }, [isLiked]);

  return (
    <div className="overflow-y-auto h-[calc(100vh-10rem)] flex flex-col items-center">
      {posts.map((post) => (
        <div className="border border-white m-3 p-3 ">
          <div>{post.username}</div>
          {post.audio && <audio src={post.audio} controls />}
          <div className="relative">
            <Image src={User} alt="post" width={200} />
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  rotateZ: 50,
                  y:20,
                },
                visible: {
                  opacity: 1,
                  rotateZ: 0,
                  y:0,
                  transition: {
                    delay: 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 15,
                  }
                },
              }}
              initial="hidden"
              animate={isLiked ? "visible" : "hidden"}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <ThumbsUp className="text-blue-600"/>
            </motion.div>
          </div>
          <div className="flex justify-between items-center ">
            <div className="text-center">
              <ThumbsUp
                cursor={"pointer"}
                onClick={() => {
                  setIsLiked(true);
                }}
              />
              {post.likes}
            </div>
            <div className="text-center">
              <MessageCircle />
              {post.comments}
            </div>
            <div className="text-center">
              <Send />
              {post.shares}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
