import Avatar from "@/components/Avatar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home_Introduction = () => {
  return (
    <div className="h-full flex justify-between items-center py-20 gap-12">
      <div className="animate-slide-in-left w-full">
        <div className=" mb-6  bg-gradient-to-r from-gray-700 via-gray-600 to-gray-600 w-fit px-3 py-1 rounded-full">
          <h4 className="font-semibold text-[14px] bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient">
            FRONT-END DEVELOPER
          </h4>
        </div>
        <h1 className="text-4xl font-bold mb-6">Tran Trung Phat</h1>
        <p className="text-[16px] mb-6 leading-7">
          Hi, I&apos;m Phat! A passionate front-end developer dedicated to
          crafting seamless, interactive, and visually stunning web experiences.
          I specialize in translating design concepts into reality using HTML,
          CSS, and JavaScript, ensuring both functionality and aesthetic appeal.
          With a keen eye for detail and a love for clean, efficient code, I
          strive to create engaging, user-friendly interfaces that elevate the
          digital experience.
        </p>
        <div className="flex gap-4  mb-6">
          <Link
            href={"/Tran-Trung-Phat-CV.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-squishy bg-amber-500 px-2 py-1 rounded-[4px] font-semibold min-w-[120px] flex justify-center items-center"
          >
            Preview CV
          </Link>
          <button className="btn-squishy bg-black border border-black px-2 py-1 rounded-[4px] font-semibold min-w-[120px] flex justify-center items-center">
            Contact Me
          </button>
        </div>
        <div className="flex items-center gap-6">
          <Image
            alt="image"
            src="/icon-linkin.svg"
            width={24}
            height={24}
            className="btn-squishy-jump"
          />
          <Image
            alt="image"
            src="/icon-facebook.svg"
            width={24}
            height={24}
            className="btn-squishy-jump"
          />
          <Image
            alt="image"
            src="/icon-email.svg"
            width={24}
            height={24}
            className="btn-squishy-jump"
          />
          <Image
            alt="image"
            src="/icon-phone.svg"
            width={24}
            height={24}
            className="btn-squishy-jump"
          />
        </div>
      </div>
      <Avatar />
    </div>
  );
};

export default Home_Introduction;
