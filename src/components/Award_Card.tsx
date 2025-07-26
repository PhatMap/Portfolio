import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AwardCardProps {
  date: string;
  name: string;
  description: string;
  link: string;
}

const Award_Card: React.FC<AwardCardProps> = ({
  date,
  name,
  description,
  link,
}) => {
  return (
    <div className="w-full h-min-[200px]  p-4 rounded-xl bg-gradient-to-r from-[#1B1B1B] via-[#2F2F2F] to-[#1B1B1B]">
      <div className="flex justify-between">
        <h4 className="font-semibold text-gold-gradient"> {date}</h4>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <Image
            alt="open-link"
            src="/icons8-external-link.svg"
            width={24}
            height={24}
            className="duration-500 hover:scale-120 cursor-pointer"
          ></Image>
        </Link>
      </div>
      <h2 className="text-ryuga-gradient">{name}</h2>
      <br />
      <h5 className="text-metal-gradient">{description}</h5>
    </div>
  );
};

export default Award_Card;
