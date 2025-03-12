import React from "react";

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
    <div className="absolute min-w-[400px] border border-amber-400 p-4 rounded-xl">
      <h4>{date}</h4>
      <h2>{name}</h2>
      <h5>{description}</h5>
      <h4>{link}</h4>
    </div>
  );
};

export default Award_Card;
