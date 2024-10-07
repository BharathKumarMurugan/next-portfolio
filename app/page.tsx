import About from "@/components/About";
// import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav
          className=""
          navItems={navItems}
        />
        <Hero />
        <About />
        <Experience />
        <Skills />
        {/* <Education /> */}
        <Footer />
      </div>
    </main>
  );
}
