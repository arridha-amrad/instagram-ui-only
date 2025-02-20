"use client";

import { cn } from "@/app/utils";
import Image from "next/image";
import { useState } from "react";

export default function Story() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="relative flex size-[66px] items-center justify-center">
      {isClicked ? (
        <div
          className={cn(
            "absolute top-0 left-0 size-[66px] animate-spin rounded-full border-2 border-transparent border-t-[#e1306c] border-r-[#e1306c]",
          )}
        ></div>
      ) : (
        <div className="absolute inset-0 size-[66px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"></div>
      )}
      <div
        onClick={() => setIsClicked(true)}
        className="bg-background relative cursor-pointer rounded-full p-0.5"
      >
        <Image
          src="/defaultAvatar.jpeg"
          alt="Story"
          width={100}
          height={100}
          className="size-[56px] rounded-full object-cover"
        />
      </div>
    </div>
  );
}
