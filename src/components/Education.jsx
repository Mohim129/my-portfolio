"use client";

import { motion } from "framer-motion";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-section-padding bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-headline-lg text-headline-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Educational Qualification
          </motion.h2>
          <motion.p 
            className="font-body-md text-on-surface-variant max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            My academic foundation that shaped my logical thinking and technical skills.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm border border-outline/10 hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-primary/10 p-4 rounded-2xl">
                <span className="material-symbols-outlined text-primary text-4xl">
                  school
                </span>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="font-headline-sm text-xl font-bold text-on-surface">
                    {item.degree}
                  </h3>
                  {/* <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-sm font-medium mt-2 md:mt-0 inline-block w-fit">
                    {item.duration}
                  </span> */}
                </div>
                <h4 className="text-primary font-medium mb-4">{item.institution}</h4>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
