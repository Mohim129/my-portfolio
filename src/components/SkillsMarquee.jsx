"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { skills } from "@/data/portfolio";

export default function SkillsMarquee() {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);

  // Flatten all skills for the marquee
  const allSkills = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.tools,
  ];

  useGSAP(
    () => {
      const marquee = marqueeRef.current;
      const totalWidth = marquee.scrollWidth / 2;

      const tl = gsap.to(marquee, {
        x: -totalWidth,
        duration: 30,
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

  const duplicatedSkills = [...allSkills, ...allSkills, ...allSkills, ...allSkills];

  return (
    <section id="skills" className="py-section-padding bg-surface-container-low overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg mb-4">
          My Technical Arsenal
        </h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
          Proficient in modern web development: MERN stack, Next.js, and more.
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
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-3xl bg-white border border-outline/10 shadow-md transition-all duration-500 hover:scale-110 hover:shadow-lg flex items-center justify-center p-3">
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