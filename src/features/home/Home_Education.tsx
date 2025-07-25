import Image from "next/image";
import React from "react";

const Home_Education = () => {
  return (
    <div className="flex h-fit gap-10">
      <div className="grid grid-cols-2 gap-6">
        <Image
          alt="image"
          src="/BR_0290.JPG"
          width={600}
          height={400}
          className="w-full h-[300px]  object-cover rounded-xl transition-transform duration-500 hover:scale-110 cursor-pointer"
          draggable="false"
        />
        <Image
          alt="image"
          src="/truong-2.png"
          width={600}
          height={400}
          className="w-full h-[300px]  object-cover rounded-xl transition-transform duration-500 hover:scale-110 cursor-pointer"
          draggable="false"
        />
        <Image
          alt="image"
          src="/truong-3.jpg"
          width={600}
          height={400}
          className="w-full h-[300px]  object-cover rounded-xl transition-transform duration-500 hover:scale-110 cursor-pointer"
          draggable="false"
        />
        <Image
          alt="image"
          src="/SK_0498.jpg"
          width={600}
          height={400}
          className="w-full h-[300px]  object-cover rounded-xl transition-transform duration-500 hover:scale-110 cursor-pointer"
          draggable="false"
        />
      </div>
      <div className="w-[80%] flex flex-col gap-4">
        <h1 className="text-4xl font-bold whitespace-nowrap">
          University of Technology and Education
        </h1>

        <h4>04/10/2020 - 14/06/2025</h4>
        <div>
          <h5>Summary:</h5>
          <h4>
            Spent almost five years studying Software Technology at the
            University of Technology and Education (HCMUTE), where I built a
            strong foundation in computer science and software engineering.
            During my time at university, I actively participated in academic
            projects, coding competitions, and team collaborations. I developed
            multiple web applications using modern technologies such as React,
            Next.js, and Firebase. My studies also included database management,
            data structures, algorithms, and agile methodologies. This period
            shaped both my technical skills and my ability to work effectively
            in real-world development environments.
          </h4>
        </div>
        <h4>Specialize: Software Technology</h4>
        <h5>Degree: Bachelor of Technology</h5>
      </div>
    </div>
  );
};

export default Home_Education;
