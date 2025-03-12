import Image from "next/image";
import React from "react";

const Home_Education = () => {
  return (
    <div className="flex h-fit gap-10">
      <div className="grid grid-cols-2 gap-6">
        <Image
          alt="image"
          src="/truong-1.jpg"
          width={0}
          height={0}
          className="w-full h-[300px] rounded-xl transition-transform duration-500 hover:scale-110 cursor-pointer"
          draggable="false"
        />
        <Image
          alt="image"
          src="/truong-2.png"
          width={0}
          height={0}
          className="w-full h-[300px] rounded-xl transition-transform duration-500 hover:scale-110 cursor-pointer"
          draggable="false"
        />
        <Image
          alt="image"
          src="/truong-3.jpg"
          width={0}
          height={0}
          className="w-full h-[300px] rounded-xl transition-transform duration-500 hover:scale-110 cursor-pointer"
          draggable="false"
        />
        <Image
          alt="image"
          src="/truong-4.jpg"
          width={0}
          height={0}
          className="w-full h-[300px] rounded-xl transition-transform duration-500 hover:scale-110 cursor-pointer"
          draggable="false"
        />
      </div>
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-4xl font-bold whitespace-nowrap">
          University of Technology and Education
        </h1>
        <h4>04/10/2020 - Currently</h4>
        <h4>Specialize: Software Technology</h4>
        <h5>Banchelor</h5>
      </div>
    </div>
  );
};

export default Home_Education;
