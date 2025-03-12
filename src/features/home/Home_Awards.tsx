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

  // const [active, setActive] = useState(3); // Track active item
  // let items: NodeListOf<HTMLDivElement> | null = null;

  // useEffect(() => {
  //   items = document.querySelectorAll(".carrousel .carrousel-item");
  //   if (items.length === 0) return;
  //   loadShow();
  // }, [active]);

  // function loadShow() {
  //   let stt = 0;
  //   if (!items) return;

  //   items[active].style.transform = "none";
  //   items[active].style.zIndex = "1";
  //   items[active].style.filter = "none";
  //   items[active].style.opacity = "0.6";

  //   for (let i = active + 1; i < items.length; i++) {
  //     stt++;
  //     items[i].style.transform = `translateX(${210 * stt}px) scale(${
  //       1 - 0.2 * stt
  //     }) perspective(18px) rotateY(2deg)`;
  //     items[i].style.zIndex = `${-stt}`;
  //     items[i].style.opacity = "0.6";
  //   }

  //   stt = 0;
  //   for (let i = active - 1; i >= 0; i--) {
  //     stt++;
  //     items[i].style.transform = `translateX(${-210 * stt}px) scale(${
  //       1 - 0.2 * stt
  //     }) perspective(18px) rotateY(-2deg)`;
  //     items[i].style.zIndex = `${-stt}`;
  //     items[i].style.opacity = "0.6";
  //   }
  // }

  return (
    // <div className="min-h-[500px] py-10">
    //   <div className="relative transform-style: preserve-3d animation: rotate 10s linear infinite">
    //     {awards.map((card) => (
    //       <Award_Card
    //         date={card.date}
    //         name={card.name}
    //         description={card.description}
    //         link={card.link}
    //       />
    //     ))}
    //   </div>
    // </div>
    <div className="carrousel">
      <div
        className="carrousel-item transition-transform duration-300 ease-out"
        style={{
          transform:
            "translateX(-91px) scale(0.8) perspective(26px) rotateY(-3deg)",
          opacity: 0.6,
          zIndex: -1,
        }}
      >
        1
      </div>
      <div
        className="carrousel-item transition-transform duration-300 ease-out"
        style={{
          transform:
            "translateX(110px) scale(1) perspective(18px) rotateY(0deg)",
          opacity: 0.6,
          zIndex: -1,
        }}
      >
        2
      </div>
      <div
        className="carrousel-item transition-transform duration-300 ease-out"
        style={{
          transform:
            "translateX(311px) scale(0.8) perspective(26px) rotateY(3deg)",
          opacity: 0.6,
          zIndex: -2,
        }}
      >
        3
      </div>
      <div
        className="carrousel-item transition-transform duration-300 ease-out"
        style={{
          transform:
            "translateX(310px) scale(0.6) perspective(18px) rotateY(-3deg)",
          opacity: 0.6,
          zIndex: -1,
        }}
      >
        4
      </div>
      <div
        className="carrousel-item transition-transform duration-300 ease-out"
        style={{
          transform:
          "translateX(110px) scale(0.6) perspective(18px) rotateY(0deg)",
          opacity: 0.6,
          zIndex: -2,
        }}
      >
        5
      </div>
      <div
        className="carrousel-item transition-transform duration-300 ease-out"
        style={{
          transform:
          "translateX(-87px) scale(0.6) perspective(18px) rotateY(3deg)",
          opacity: 0.6,
          zIndex: -3,
        }}
      >
        6
      </div>
    </div>
  );
};

export default Home_Awards;
