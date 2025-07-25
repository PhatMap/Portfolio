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
    <div className="w-full h-min-[200px] border border-amber-400 p-4 rounded-xl bg-gradient-to-r from-gray-700 via-gray-600 to-gray-600">
      <div className="flex justify-between">
        <h4>{date}</h4>
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
      <h2>{name}</h2>
      <h5>{description}</h5>
    </div>
  );
};

export default Award_Card;
