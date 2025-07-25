"use client";
import Home_Awards from "@/features/home/Home_Awards";
import Home_Career from "@/features/home/Home_Career";
import Home_Contact from "@/features/home/Home_Contact";
import Home_Education from "@/features/home/Home_Education";
import Home_Introduction from "@/features/home/Home_Introduction";
import Home_Personal_Projects from "@/features/home/Home_Personal_Projects";
import Home_Skills from "@/features/home/Home_Skills";

export default function Home() {
  return (
    <div className="relative m-h-[90%] text-amber-50">
      <Home_Introduction />
      <Home_Education />
      <Home_Awards />
      {/* <Home_Skills /> */}
      {/* <Home_Career /> */}
      <Home_Personal_Projects />
      <Home_Contact /> 
    </div>
  );
}
