import Avatar from "@/components/Avatar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home_Introduction = () => {
  return (
    <div className="h-full flex justify-between items-center py-20 gap-12">
      <div className="animate-slide-in-left w-full">
        <h1 id="about" className="text-4xl font-bold text-metal-gradient">
          About me
        </h1>
        <br />
        <h1 className="mt-4 text-3xl font-bold mb-6 text-gold-gradient">
          Tran Trung Phat
        </h1>
        <div className="border-2 border-[#c5a243] mb-6 bg-gradient-to-r from-[#2C2C2C] via-[#3D3D3D] to-[#2C2C2C] w-fit px-4 py-1 rounded-full shadow-inner shadow-black/40">
          <h4 className="font-semibold text-[16px] bg-gradient-to-r from-[#9F1B1B] via-[#C1272D] to-[#FF4E4E] bg-clip-text text-transparent animate-gradient">
            Front-end Developer
          </h4>
        </div>

        <p className="text-[16px] font-semibold mb-6 leading-7 text-metal-gradient">
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
            href={"/TrungPhat-Frontend.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-squishy bg-gradient-to-r from-[#C5A243] to-[#FFD700] text-black px-3 py-1.5 rounded-md font-semibold min-w-[120px] flex justify-center items-center hover:brightness-110 transition-all duration-300"
          >
            Preview CV
          </Link>
          {/* <button className="btn-squishy bg-gradient-to-r from-[#888888] to-[#B5B5B5] text-white px-3 py-1.5 rounded-md font-semibold min-w-[120px] flex justify-center items-center hover:brightness-125 transition-all duration-300">
            Contact Me
          </button> */}
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="https://www.linkedin.com/in/phat-tran-trung-6727b0288"
            target="_blank"
          >
            <Image
              alt="image"
              src="/icon-linkin.svg"
              width={24}
              height={24}
              className="btn-squishy-jump"
            />
          </Link>
          <Link
            href={"https://www.facebook.com/profile.php?id=61558227503586"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt="image"
              src="/icon-facebook.svg"
              width={24}
              height={24}
              className="btn-squishy-jump"
            />
          </Link>

          <Link
            href={"mailto:trantrungphat2001@gmail.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt="image"
              src="/icon-email.svg"
              width={24}
              height={24}
              className="btn-squishy-jump"
            />
          </Link>

          <Link
            href="tel:+84367562350"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt="image"
              src="/icon-phone.svg"
              width={24}
              height={24}
              className="btn-squishy-jump"
            />
          </Link>
        </div>
      </div>
      <Avatar />
    </div>
  );
};

export default Home_Introduction;
