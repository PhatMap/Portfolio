"use client";
import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="relative flex justify-center items-center">
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
      <div className="absolute top-[50%] left-[50%] w-[50px] h-[50px] animate-train  translate-x-[-50%] translate-y-[-50%]">
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
