import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { aboutFlashCardContent } from "@/data";
import { LinkPreview } from "./ui/LinkPreview";

const About = () => {
  return (
    <section id="about" className="w-full">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="font-bold text-[40px] md:text-5xl lg:text-6xl mb-4 max-w-4xl">About Me</h2>
      </div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={aboutFlashCardContent} direction="right" speed="slow" />
      </div>
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
          <LinkPreview url="https://bharathkumarmurugan.medium.com/" className="font-bold">
            My Resume
          </LinkPreview>
        </p>
      </div>
    </section>
  );
};

export default About;
