import { LinkPreview } from "./ui/LinkPreview";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { IconCode, IconBriefcase, IconTools, IconMoonStars } from "@tabler/icons-react";
// import Link from "next/link";

const About = () => {
  const aboutBentoGridItems = [
    {
      title: "How I became a web developer?",
      description:
        "Ever since I was a teenager, software development and teaching has been my passion and it carried me through my education. Programming is a never-ending puzzle that I am passionately engaged. I believe in the power of programming to transform and improve the lives of people around the world.",
      // header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IconCode className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "What I am right now?",
      description: "Experienced Full Stack Developer with 8 years of expertise in developing and maintaining high-quality web applications.",
      // header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconBriefcase className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "What are my specializations?",
      description:
        "Expertised in ReactJS and Node.js with strong experience in RESTful APIs. Skilled in few DevOps tools. Leading a team and mentoring laterals.",
      // header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconTools className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "What I do when I get bored?",
      description:
        "I like staying fit and healthy, reading productivity books, star gazing, playing badminton, painting, and watching sci-fi movies.",
      // header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IconMoonStars className="h-6 w-6 text-blue-500" />,
    },
  ];

  return (
    <section id="about" className="w-full">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="font-bold text-[40px] md:text-5xl lg:text-6xl mb-4 max-w-4xl z-[300]">About Me</h2>
      </div>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[11rem] md:mb-10 mb-10">
        {aboutBentoGridItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            // header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
      <div className="flex flex-col items-center">
        <p className="text-neutral-500 dark:text-neutral-500 text-xl md:text-3xl mx-auto mb-20 z-50">
          <LinkPreview url="https://linkedin.com/in/bharathkumarmurugan" className="font-bold">
            Linkedin
          </LinkPreview>{" "}
          {" | "}
          <LinkPreview url="https://github.com/bharathkumarmurugan" className="font-bold">
            GitHub
          </LinkPreview>{" "}
          {" | "}
          <LinkPreview url="https://bharathkumarmurugan.medium.com/" className="font-bold">
            Blog
          </LinkPreview>{" "}
          {" | "}
          {/* <LinkPreview
            url="https://www.dropbox.com/scl/fi/pdjlklanrm2w1lessilk4/BharathKumarMurugan.pdf?rlkey=u7brjfoimedxstkig91jskq0k&st=6do2wy70&dl=0"
            className="font-bold"
          > */}
          <LinkPreview url="/assets/BharathKumarMurugan.pdf" className="font-bold" isStatic imageSrc="/assets/resume.jpg">
            My Resume
          </LinkPreview>
        </p>
      </div>
    </section>
  );
};

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

export default About;
