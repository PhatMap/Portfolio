"use client";
import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="relative flex justify-end items-center">
      <div className="relative rounded-full overflow-hidden aspect-square h-[50%] w-[50%] border-track">
        <Image
          alt="image"
          src="/avatar.jpg"
          width={0}
          height={0}
          className="w-full h-auto"
          draggable="false"
        />
      </div>
      <div className="absolute top-1/2 right-1/4 translate-x-[50%] -translate-y-1/2 w-[50px] h-[50px] animate-train">
        <Image
          alt="image"
          src="/train.png"
          className="w-full h-full object-contain animate-train-flip"
          fill
        />
      </div>
    </div>
  );
};

export default Avatar;
