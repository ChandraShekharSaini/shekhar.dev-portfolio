"use client";
import Hero from "@/components/Home/Hero/Hero";
import About from "@/components/Home/About/About";
import Services from "@/components/Services/Services";
import Projext from "@/components/Home/Project/Project";
import Skills from "@/components/Skills/Skills";
import Reviews from "@/components/Reviews/Reviews";
import Blogs from "@/components/Blogs/Blogs";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAos()
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Projext />
      <Skills />
      <Reviews />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}
