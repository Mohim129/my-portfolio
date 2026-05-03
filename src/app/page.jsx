import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import SkillsMarquee from "@/components/SkillsMarquee";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SkillsMarquee />
        <AboutMe />
        <Education />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
