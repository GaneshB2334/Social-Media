"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="text-white w-screen h-[calc(100vh-5rem)] overflow-hidden">
      <div className="w-full p-3 shadow-sm shadow-muted-foreground">
        <div
          className="flex items-center justify-center gap-3"
        >
          <div
            className="flex-shrink-0"
          >
            <SearchIcon />
          </div>
          <div
            className="rounded-full"
          >
            <Input
              className="rounded-full w-[350px]"
              type="text"
              placeholder="Search here..."
            />
          </div>
          <div
            className="rounded-full "
          >
            <Button className="rounded-full" variant="outline">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
