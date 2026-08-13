import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Experience />

      <Skills />

      <CurrentlyBuilding />

      <Contact />

      <Footer />
    </main>
  );
}