import Award_Card from "@/components/Award_Card";

const Home_Awards = () => {
  const awards = [
    {
      date: "11/10/2023",
      name: "TOEIC",
      description: "890/990",
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
      link: "fundamentals.png",
    },
    {
      date: "12/04/2022",
      name: "Big data machine learning fundamentals",
      description: "",
      link: "bigdata.png",
    },
  ];

  return (
    <div className="py-10 flex gap-4">
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
