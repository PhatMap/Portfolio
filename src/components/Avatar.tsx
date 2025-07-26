"use client";
import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <div className=" w-[20%]">
      <Image
        alt="image"
        src="/avatar_pixian_ai.png"
        width={0}
        height={0}
        className="w-full h-auto"
        draggable="false"
      />
    </div>
  );
};

export default Avatar;
