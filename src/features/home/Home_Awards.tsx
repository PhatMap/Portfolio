import Award_Card from "@/components/Award_Card";
import React, { useEffect, useState } from "react";

const Home_Awards = () => {
  const awards = [
    {
      date: "11/10/2023",
      name: "TOEIC",
      description: "Score of 890 points",
      link: "",
    },
    {
      date: "21/06/2023",
      name: "Global Software Talent Lite",
      description: "",
      link: "",
    },
    {
      date: "15/03/2022",
      name: "Google cloud fundamentals: Core infrastructure",
      description: "",
      link: "",
    },
    {
      date: "12/04/2022",
      name: "Big data machine learning fundamentals",
      description: "",
      link: "",
    },
  ];

  return (
    <div className="py-10 flex">
      {awards.map((card, index) => (
        <Award_Card
          key={index}
          date={card.date}
          name={card.name}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default Home_Awards;
