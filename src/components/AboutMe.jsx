"use client";

import { motion } from "framer-motion";
import { aboutMe } from "@/data/portfolio";

export default function AboutMe() {
  const containerVars = {
    initial: { opacity: 0, y: 20 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    },
    viewport: { once: true }
  };

  const itemVars = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-section-padding bg-surface overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={containerVars}
        >
          <div className="relative">
            <motion.div 
              className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.h2 
              variants={itemVars}
              className="font-headline-lg text-headline-lg mb-8 text-on-surface"
            >
              About Me
            </motion.h2>
            
            <div className="space-y-6">
              <motion.div variants={itemVars}>
                <h3 className="font-title-lg text-primary mb-3 flex items-center gap-3">
                  <span className="material-symbols-outlined">explore</span>
                  My Journey
                </h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  {aboutMe.journey}
                </p>
              </motion.div>

              <motion.div variants={itemVars}>
                <h3 className="font-title-lg text-primary mb-3 flex items-center gap-3">
                  <span className="material-symbols-outlined">work</span>
                  What I Enjoy
                </h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  {aboutMe.workInterests}
                </p>
              </motion.div>

              <motion.div variants={itemVars}>
                <h3 className="font-title-lg text-primary mb-3 flex items-center gap-3">
                  <span className="material-symbols-outlined">interests</span>
                  Beyond Coding
                </h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  {aboutMe.hobbies}
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div 
            className="relative lg:pl-12"
            variants={itemVars}
          >
            <div className="aspect-square rounded-[48px] overflow-hidden shadow-2xl border-4 border-white bg-primary-container/10">
              <img 
                src="https://i.ibb.co.com/BKvHB0KC/my-hobies.png" 
                alt="Animated image of me doing my hobies" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            
            {/* Floating decorative elements */}
            <motion.div 
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-container/50 rounded-full blur-2xl -z-10"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
