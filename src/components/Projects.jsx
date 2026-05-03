"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
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
              A curated selection of high-impact products developed with passion and precision.
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
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  className="w-full h-full object-cover object-top group-hover:z-10"
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
              <p className="font-body-md text-on-surface-variant mb-6 line-clamp-2">
                {project.description}
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
                >
                  View Details
                  <span className="material-symbols-outlined text-sm">info</span>
                </Link>
                <a
                  className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Link
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 flex justify-center">
          <button className="group flex items-center gap-3 bg-white border-2 border-primary text-primary font-bold px-12 py-5 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300">
            More Projects{" "}
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
