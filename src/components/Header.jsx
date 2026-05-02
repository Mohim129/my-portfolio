"use client";

import { useState } from "react";
import { navigation } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-8 h-20">
        <div className="text-xl font-extrabold tracking-tighter text-indigo-600 dark:text-indigo-400 cursor-pointer font-playwrite">
          Mohim
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-headline-sm text-sm font-medium tracking-tight">
          {navigation.map((link) => (
            <a
              key={link.name}
              className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-colors"
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="mailto:md.mohim15@gmail.com"
            className="hidden sm:block bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold hover:opacity-80 transition-all duration-200 active:scale-95"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-slate-200 md:hidden z-40"
          >
            <div className="flex flex-col p-6 gap-4">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="mailto:md.mohim15@gmail.com"
                className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold mt-4 text-center"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
