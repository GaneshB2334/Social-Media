"use client";
import { Button } from "@/components/ui/button";
import { RWebShare } from "react-web-share";

const page = () => {
  return (
    <div className="overflow-y-auto h-[calc(100vh-10rem)] flex flex-col items-center">
      <RWebShare
        data={{
          text: "Share this awesome page",
          url: "https://example.com",
          title: "Awesome page",
        }}
      >
        <Button variant="secondary" className="rounded-sm">
          Other
        </Button>
      </RWebShare>
    </div>
  );
};

export default page;
