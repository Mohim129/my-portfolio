"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const words = "Building Digital Experiences through Clean Code.".split(" ");

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
    <section className="relative overflow-hidden pt-20 pb-32">
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
            className="font-display-xl text-display-xl text-on-surface mb-6 flex flex-wrap gap-x-[0.3em]"
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
          <motion.p
            variants={wordVars}
            className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl"
          >
            Senior Full-Stack Developer specializing in high-performance web
            applications and intuitive user interfaces. Transformative
            engineering meets aesthetic precision.
          </motion.p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              variants={wordVars}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              className="bg-primary text-on-primary font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              View Projects
            </motion.button>
            <motion.button
              variants={wordVars}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              className="border-2 border-primary text-primary font-bold px-10 py-4 rounded-xl hover:bg-primary/5 transition-all"
            >
              Read Resume
            </motion.button>
          </div>
        </motion.div>
        <div className="relative">
          <div className="absolute inset-0 bg-primary/5 rounded-[40px] -rotate-6 scale-105"></div>
          <motion.div
            className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              alt="Portrait of a developer"
              className="w-full h-[600px] object-cover"
              src="https://lh3.googleusercontent.com/aida/ADBb0uietUdwGTl63vjHxPOTnN1bAu92WEdN3O43xXEAb4ycjiujM2A_k9Nt8Dd7mby67hnbfaVO4gc_3bisnBBa6t8XmoVlQCtqMPBhO23i667GeEt84XnkXEsNFnUjrwQKG9OvKlOoCwe8yaAz0a2O0uPZr1D6z7up1vYdCa3CXk6NMh1nbZFoGoC69E_z0k2GDFYjHE9jqGeyO-SHgMuFr88CZiwWk_jxBoJB1zGqV8Q-py7Uulk6ZmeWt-5rCoLxvVFf8PGSn7fxlg8"
            />
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
