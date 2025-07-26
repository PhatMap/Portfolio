"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home_Education = () => {
  const images = [
    "/BR_0290.JPG",
    "/truong-2.png",
    "/truong-3.jpg",
    "/SK_0498.jpg",
  ];

  return (
    <div className="pb-20">
      <h1 id="education" className="text-4xl font-bold text-metal-gradient">
        Education
      </h1>
      <div className="mt-4 flex flex-wrap lg:flex-nowrap h-fit gap-10">
        {/* Image Grid */}

        <div className="grid grid-cols-2 gap-6 w-full lg:w-[60%]">
          {images.map((src, index) => (
            <Link
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="relative w-full h-[300px] rounded-xl overflow-hidden"
            >
              <Image
                alt={`education-${index}`}
                src={src}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105 will-change-transform cursor-pointer"
                draggable={false}
              />
            </Link>
          ))}
        </div>

        {/* Education Details */}
        <div className="w-full lg:w-[40%] flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-[#2f55a8]">
            HCMC University of Technology and Education – HCMUTE
          </h1>
          <h4 className="text-xl font-semibold text-[#ed1b24]">
            04/10/2020 - 14/06/2025
          </h4>

          <div>
            <h5 className="text-xl font-semibold">Summary:</h5>
            <p className="text-[16px] mt-2">
              Spent almost five years studying Software Technology at the
              University of Technology and Education (HCMUTE), where I built a
              strong foundation in computer science and software engineering.
              During my time at university, I actively participated in academic
              projects, coding competitions, and team collaborations. I
              developed multiple web applications using modern technologies such
              as React, Next.js, and Firebase. My studies also included database
              management, data structures, algorithms, and agile methodologies.
              This period shaped both my technical skills and my ability to work
              effectively in real-world development environments.
            </p>
          </div>

          <h4>
            <p className="text-xl font-semibold">Field:</p> Information
            Technology
          </h4>
          <div className="flex gap-2">
            <h5>
              <p className="text-xl font-semibold">Degree:</p> Bachelor of
              Engineering
            </h5>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                alt="open-link"
                src="/icons8-external-link.svg"
                width={24}
                height={24}
                className="duration-500 hover:scale-120 cursor-pointer"
              ></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Education;
