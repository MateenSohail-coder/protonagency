"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactProcess() {
  const steps = [
    {
      number: 1,
      title: "Contact Us",
      text: "Fill out a short form and share what you need help with.",
    },
    {
      number: 2,
      title: "Schedule a Meeting",
      text: "We talk through your goals, audience, and competitive landscape.",
    },
    {
      number: 3,
      title: "Begin the Branding Process",
      text: "We start building your brand universe and identity system.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 lg:px-12 xl:px-24 bg-gradient-to-b from-white via-white/90 to-[#EEFF00]/5">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Premium Header */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-gray-900 via-black/90 to-gray-900 bg-clip-text text-transparent leading-tight mb-20 lg:mb-28 text-center"
        >
          Build Your Brand with Proton
        </motion.h1>

        {/* Premium Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 lg:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-[#EEFF00] to-[#CCFF00] hidden lg:block" />
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#EEFF00]/50 to-[#CCFF00]/50 block lg:hidden" />

          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="group flex items-start gap-6 lg:gap-8 pl-20 lg:pl-24"
              >
                {/* Premium Number Circle */}
                <div className="relative flex-shrink-0">
                  <div className="relative z-10 w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-[#EEFF00] border-4 border-black/20 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-700 font-black text-2xl lg:text-3xl xl:text-4xl text-gray-900">
                    {step.number}
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#EEFF00]/30 to-[#CCFF00]/20 rounded-3xl blur-xl -z-10 group-hover:opacity-100 opacity-0 transition-opacity duration-700" />

                  {/* Connecting Line */}
                  {index !== steps.length - 1 && (
                    <div className="absolute top-20 lg:top-24 xl:top-28 left-1/2 transform -translate-x-1/2 w-px h-16 lg:h-20 bg-gradient-to-b from-[#EEFF00]/60 to-[#CCFF00]/60" />
                  )}
                </div>

                {/* Premium Content */}
                <div className="flex-1 min-w-0 pt-2 lg:pt-4">
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-black text-gray-900 mb-3 lg:mb-4 leading-tight group-hover:translate-x-2 transition-transform duration-700">
                    {step.title}
                  </h3>
                  <p className="text-lg lg:text-xl xl:text-2xl font-light text-gray-700 leading-relaxed max-w-2xl lg:max-w-3xl tracking-wide">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
