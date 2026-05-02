"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Skill data with logos (Devicon CDN + custom placeholders for missing ones)
const skills = [
  {
    name: "HTML5",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "DaisyUI",
    // Placeholder: a simple daisy icon (replace with actual DaisyUI logo if available)
    logoUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fbbf24'%3E%3Ccircle cx='12' cy='12' r='4'/%3E%3Ccircle cx='12' cy='5' r='3'/%3E%3Ccircle cx='19' cy='9' r='3'/%3E%3Ccircle cx='19' cy='15' r='3'/%3E%3Ccircle cx='12' cy='19' r='3'/%3E%3Ccircle cx='5' cy='15' r='3'/%3E%3Ccircle cx='5' cy='9' r='3'/%3E%3C/svg%3E",
  },
  // {
  //   name: "HeroUI",
  //   // Placeholder: a stylized 'H' (replace with official HeroUI logo)
  //   logoUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23007bff'%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-weight='bold' font-size='16' fill='white'%3EH%3C/text%3E%3C/svg%3E",
  // },
  {
    name: "MongoDB",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Express",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "React",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Next.js",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
];

export default function SkillsMarquee() {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);

  useGSAP(
    () => {
      const marquee = marqueeRef.current;
      const totalWidth = marquee.scrollWidth / 2;

      const tl = gsap.to(marquee, {
        x: -totalWidth,
        duration: 25,
        ease: "none",
        repeat: -1,
      });

      containerRef.current.addEventListener("mouseenter", () => {
        gsap.to(tl, { timeScale: 0.1, duration: 0.6, ease: "power2.out" });
      });

      containerRef.current.addEventListener("mouseleave", () => {
        gsap.to(tl, { timeScale: 1, duration: 0.6, ease: "power2.in" });
      });
    },
    { scope: containerRef }
  );

  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-section-padding bg-surface-container-low overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg mb-4">
          My Skills & Tools
        </h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
          Proficient in modern web development: MERN stack, Next.js, Tailwind CSS, and more.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative flex items-center group cursor-pointer py-4"
      >
        <div ref={marqueeRef} className="flex gap-12 whitespace-nowrap px-4">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-5 min-w-[120px] md:min-w-[150px]"
            >
              {/* Rounded square card */}
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-white border border-gray-100 shadow-md transition-all duration-500 hover:scale-110 hover:shadow-lg flex items-center justify-center p-3">
                <img
                  src={skill.logoUrl}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-label-md text-[11px] md:text-sm uppercase tracking-wider text-on-surface-variant/80 font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}