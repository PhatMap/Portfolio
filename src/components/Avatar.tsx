"use client";
import React, { useState } from "react";

const Avatar = () => {
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setRotation((prev) => prev + 360);
  };

  return (
    <div className="relative flex justify-center items-center">
      <div
        className="rounded-full overflow-hidden aspect-square border-3 border-[#facc15] h-[50%] w-[50%]"
        onClick={handleClick}
      >
        <img src="avatar.jpg" width="auto" height="auto" draggable="false" />
      </div>
      <div className="absolute top-[50%] left-[50%] w-[50px] h-[50px] animate-train translate-x-[-50%] translate-y-[-50%]">
        <img src="train.png" className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default Avatar;
