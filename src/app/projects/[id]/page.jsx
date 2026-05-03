"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProjectDetails() {
  const { id } = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <button onClick={() => router.push("/")} className="ml-4 text-primary underline">Go Back</button>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-8">
          <motion.button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary mb-12 transition-colors group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">arrow_back</span>
            Back to Portfolio
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display-xl text-5xl md:text-7xl text-on-surface mb-6">{project.title}</h1>
              <p className="font-body-lg text-xl text-on-surface-variant mb-12 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold text-on-surface mb-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">terminal</span>
                    Tech Stack
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="bg-primary/10 text-primary px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-on-surface mb-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">warning</span>
                    Challenges Faced
                  </h2>
                  <p className="text-on-surface-variant leading-relaxed">
                    {project.challenges}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-on-surface mb-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">auto_awesome</span>
                    Future Improvements
                  </h2>
                  <p className="text-on-surface-variant leading-relaxed">
                    {project.improvements}
                  </p>
                </div>

                <div className="flex flex-wrap gap-6 pt-8">
                   <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-3"
                   >
                     Live Project <span className="material-symbols-outlined text-sm">north_east</span>
                   </a>
                   <a 
                    href={project.gitLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border-2 border-primary text-primary font-bold px-10 py-4 rounded-xl hover:bg-primary/5 transition-all inline-flex items-center gap-3"
                   >
                     GitHub Repository <span className="material-symbols-outlined text-sm">code</span>
                   </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[48px] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Decorative background blur */}
              <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50" />
              <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl opacity-50" />
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
