import Avatar from "@/components/Avatar";

export default function Home() {
  return (
    <div className="h-full text-amber-50 mt-[40px]">
      <div className="flex justify-between">
        <div className="w-full">
          <h4 className="font-semibold mb-4">FRONT-END DEVELOPER</h4>
          <h1 className="font-bold mb-3">Tran Trung Phat</h1>
          <p className="text-sm word-spacing-[20px]">
            Hi, I'm Phat! A passionate front-end developer dedicated to crafting
            seamless, interactive, and visually stunning web experiences. I
            specialize in translating design concepts into reality using HTML,
            CSS, and JavaScript, ensuring both functionality and aesthetic
            appeal. With a keen eye for detail and a love for clean, efficient
            code, I strive to create engaging, user-friendly interfaces that
            elevate the digital experience.
          </p>
          <div className="">
            <button>Download CV</button>
            <button>Contact Me</button>
          </div>
          <div className="flex gap-6">
            <img src="icon-github.svg" width={24} height={24}></img>
            <img src="icon-linkin.svg" width={24} height={24}></img>
            <img src="icon-facebook.svg" width={24} height={24}></img>
            <img src="icon-email.svg" width={24} height={24}></img>
            <img src="icon-phone.svg" width={24} height={24}></img>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <Avatar />
        </div>
      </div>
    </div>
  );
}
