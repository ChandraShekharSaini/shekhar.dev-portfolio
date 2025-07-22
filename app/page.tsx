import Hero from "@/components/Home/Hero/Hero";
import About from "@/components/Home/About/About";
import Services from "@/components/Services/Services";
import Projext from "@/components/Home/Project/Project";
import Skills from "@/components/Skills/Skills";
export default function Page() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Projext />
      <Skills />
    </div>
  );
}
