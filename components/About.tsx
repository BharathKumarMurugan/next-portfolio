import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const About = () => {
  const data = [
    {
      quote:
        "Ever since I was a teenager, software development and teaching has been my passion and it carried me through my education. Programming is a never-ending puzzle that I am passionately engaged. I believe in the power of programming to transform and improve the lives of people around the world.",
      name: "",
      title: "How I became a web developer?",
    },
    {
      quote:
        "Experienced Full Stack Developer with 8 years of expertise in developing and maintaining high-quality web applications.",
      name: "",
      title: "What I am right now?",
    },
    {
      quote: "Expertised in ReactJS and Node.js with strong experience in RESTful APIs. Skilled in few DevOps tools. Leading a team and mentoring laterals.",
      name: "",
      title: "What are my specializations?",
    },
    {
      quote:
        "I like staying fit and healthy, reading productivity books, star gazing, playing badminton, painting, and watching sci-fi movies.",
      name: "",
      title: "What I do when I get bored?",
    },
  ];
  return (
    <section id="about" className="w-full">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 mb-8">
        <h2 className="font-bold text-[40px] md:text-5xl lg:text-6xl mb-4 max-w-4xl">About Me</h2>
      </div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={data} direction="right" speed="slow" />
      </div>
    </section>
  );
};

export default About;
