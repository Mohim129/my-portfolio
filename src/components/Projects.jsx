"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".parallax-img").forEach((img) => {
        gsap.to(img, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-section-padding bg-surface"
      id="projects"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-4">
              Selected Projects
            </h2>
            <p className="font-body-md text-on-surface-variant max-w-lg">
              A curated selection of high-impact products developed for global
              clients.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="p-3 rounded-full border border-outline/30 hover:border-primary transition-all">
              <span className="material-symbols-outlined text-primary">
                arrow_back
              </span>
            </button>
            <button className="p-3 rounded-full border border-outline/30 hover:border-primary transition-all">
              <span className="material-symbols-outlined text-primary">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-16">
          {projects.map((project, index) => (
            <div key={index} className={`group ${project.mt}`}>
              <div className="aspect-video rounded-3xl overflow-hidden bg-surface-container relative mb-6">
                <motion.img
                  alt={project.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  className="parallax-img w-full h-[120%] object-cover -mt-[10%] group-hover:z-10"
                  src={project.image}
                />
                <div className="absolute top-6 left-6 flex gap-2 z-20">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">
                {project.title}
              </h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                {project.description}
              </p>
              <a
                className="inline-flex items-center gap-2 text-primary font-bold group-hover:underline"
                href={project.liveLink}
              >
                View Project
                <span className="material-symbols-outlined">north_east</span>
              </a>
            </div>
          ))}
        </div>
        <div className="mt-20 flex justify-center">
          <button className="group flex items-center gap-3 bg-white border-2 border-primary text-primary font-bold px-12 py-5 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300">
            Next Projects{" "}
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
