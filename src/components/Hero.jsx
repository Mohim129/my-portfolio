"use client";

import { motion } from "framer-motion";
import { aboutMe } from "@/data/portfolio";

export default function Hero() {
  const words = `Building Digital Experiences through Clean Code.`.split(" ");

  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const wordVars = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-20 pb-32">
      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          className="z-10"
          initial="initial"
          animate="animate"
          variants={containerVars}
        >
          <motion.span
            variants={wordVars}
            className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md mb-6 uppercase tracking-widest"
          >
            Available for Hire
          </motion.span>
          <motion.h1
            className="font-display-xl text-5xl md:text-7xl lg:text-display-xl text-on-surface mb-6 flex flex-wrap gap-x-[0.3em]"
            variants={containerVars}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVars}
                className={word === "Clean" || word === "Code." ? "text-primary" : ""}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.div variants={wordVars} className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{aboutMe.designation}</h2>
            <p className="font-body-lg text-lg md:text-body-lg text-on-surface-variant max-w-xl">
              {aboutMe.intro}
            </p>
          </motion.div>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              variants={wordVars}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              className="bg-primary text-on-primary font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all inline-block"
            >
              View Projects
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              variants={wordVars}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              className="border-2 border-primary text-primary font-bold px-10 py-4 rounded-xl hover:bg-primary/5 transition-all inline-block"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
        <div className="relative group">
          {/* Decorative background shapes */}
          <div className="absolute -inset-4 bg-primary/5 rounded-[40px] -rotate-6 scale-105 transition-transform group-hover:rotate-0 duration-700"></div>
          
          {/* Main Decorative Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 via-transparent to-transparent rounded-full blur-3xl opacity-50"></div>

          <motion.div
            className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white bg-white/50 backdrop-blur-sm"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative">
              {/* The "Half Circle" behind the image */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] aspect-square bg-primary/10 rounded-full scale-y-[0.5] origin-bottom blur-2xl"></div>
              
              <img
                alt={aboutMe.name}
                className="relative z-10 w-full h-auto max-h-[600px] object-contain p-6 md:p-12 mx-auto block"
                src="https://i.ibb.co.com/tTvfrZ5c/My-pic-removebg-preview.png"
              />
            </div>
          </motion.div>
          {/* Tech Accents */}
          <motion.div
            className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
              <span
                className="material-symbols-outlined text-on-secondary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                code
              </span>
            </div>
            <div>
              <div className="text-sm font-bold text-on-surface">Every Project</div>
              <div className="text-xs text-on-surface-variant">
                Completed Successfully
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
