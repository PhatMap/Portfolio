"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className=" w-[75%] py-2 px-4 rounded-b-[8px] animate-slide-in-top backdrop-blur-md bg-gradient-to-r from-[#1B1B1B] via-[#2F2F2F] to-[#1B1B1B]">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto ">
        <div className="flex gap-2 font-bold cursor-pointer text-4xl ">
          <div className="w-fit h-fit rounded-full bg-white/10 flex items-center justify-center">
            <Image
              src="/ryuga_logo.png"
              alt="logo"
              width={60}
              height={60}
            ></Image>
          </div>
        </div>
        <nav className="flex gap-8 text-amber-50 font-semibold">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "#about" },
            { name: "Education", path: "#education" },
            { name: "Certificates", path: "#certificates" },
            { name: "Skills", path: "#skills" },
          ].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`bg-clip-text text-transparent transition-all duration-500 ${
                pathname === link.path
                  ? "bg-gradient-to-r from-[#C5A243] to-[#FFD700]"
                  : "bg-gradient-to-r from-[#888888] to-[#B5B5B5] hover:from-[#C5A243] hover:to-[#FFD700]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
