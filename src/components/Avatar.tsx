"use client";
import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
      <div className="rounded-full overflow-hidden aspect-square h-[20%] w-[20%]">
        <Image
          alt="image"
          src="/avatar.jpg"
          width={0}
          height={0}
          className="w-full h-auto"
          draggable="false"
        />
      </div>
  );
};

export default Avatar;
