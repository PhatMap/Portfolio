import Menu from "@/components/Menu";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className=" min-h-dvh">
      <div className="flex justify-between max-w-[1400px] mx-auto py-[40px]">
        <Menu />
        <Slider />
      </div>
    </div>
  );
}
