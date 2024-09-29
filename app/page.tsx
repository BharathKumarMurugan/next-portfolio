import About from "@/components/About";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          className=""
          navItems={navItems}
        />
        <Hero />
        {/* <Grid /> */}
        <About />
        <Experience />
        <Skills />
        {/* https://www.youtube.com/watch?v=FTH6Dn3AyIQ&t=411s&ab_channel=JavaScriptMastery @ 38:37 */}
      </div>
    </main>
  );
}
