import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SkillsMarquee from "@/components/SkillsMarquee";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SkillsMarquee />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
