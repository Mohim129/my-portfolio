"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/data/portfolio";

export default function CTA() {
  return (
    <section id="contact" className="py-section-padding bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="bg-primary-container rounded-[48px] p-16 md:p-24 text-center relative overflow-hidden">
          {/* Geometric Accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-10 -mb-10"></div>
          
          <motion.h2 
            className="font-display-xl text-4xl md:text-6xl lg:text-display-xl text-white mb-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to launch your <br />
            next project?
          </motion.h2>
          
          <motion.p 
            className="font-body-lg text-lg md:text-body-lg text-primary-fixed max-w-2xl mx-auto mb-12 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let's collaborate on building something remarkable. Reach out through any of these channels:
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href={`mailto:${contactInfo.email}`} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all group">
              <span className="material-symbols-outlined text-white text-4xl mb-4 block">mail</span>
              <h3 className="text-white font-bold mb-2">Email</h3>
              <p className="text-primary-fixed text-sm">{contactInfo.email}</p>
            </a>
            <a href={`tel:${contactInfo.phone}`} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all group">
              <span className="material-symbols-outlined text-white text-4xl mb-4 block">call</span>
              <h3 className="text-white font-bold mb-2">Phone</h3>
              <p className="text-primary-fixed text-sm">{contactInfo.phone}</p>
            </a>
            <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\s+/g, '')}`} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all group">
              <span className="material-symbols-outlined text-white text-4xl mb-4 block">chat</span>
              <h3 className="text-white font-bold mb-2">WhatsApp</h3>
              <p className="text-primary-fixed text-sm">{contactInfo.whatsapp}</p>
            </a>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <a 
              href={`mailto:${contactInfo.email}`}
              className="bg-white text-primary font-bold px-12 py-5 rounded-2xl hover:scale-105 transition-transform shadow-xl inline-block"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
