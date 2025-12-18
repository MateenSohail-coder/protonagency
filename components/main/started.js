"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function GetStartedSection() {
  const options = [
    { des: "Strong identity across all platforms" },
    { des: "Recognizable from day one" },
    { des: "Clear messaging and tone" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-[#EEFF00]/20 to-[#EEFF00]/5">
      <div className="max-w-6xl mx-auto">
        {/* Hero Headline */}
        <motion.div
          className="text-center mb-20 md:mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-gray-900 via-black/90 to-gray-900 bg-clip-text text-transparent leading-tight mb-8"
          >
            Branding that just works...
          </motion.h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#EEFF00] to-[#CCFF00] mx-auto rounded-full" />
        </motion.div>

        {/* Premium Feature Pills */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6 lg:gap-8 mb-24 lg:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {options.map((item, index) => (
            <motion.div
              key={item.des}
              variants={itemVariants}
              className="group relative w-72 h-32 lg:w-80 lg:h-36 xl:w-96 xl:h-40 bg-[#EEFF00]  border-4 border-black/10 p-8 lg:p-10 xl:p-12 rounded-3xl flex items-center justify-center text-center transition-all duration-700 hover:-translate-y-4 hover:scale-105 hover:border-black/20 hover:shadow-2xl hover:shadow-[#EEFF00]/30"
            >
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Content */}
              <div className="relative z-10">
                <p className="text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 leading-tight tracking-wide group-hover:text-black/95">
                  {item.des}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium CTA */}
        <motion.div
          className="flex flex-col items-center gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 text-center leading-tight max-w-2xl mx-auto"
          >
            Ready to build your brand?
          </motion.h2>

          <motion.div variants={itemVariants} transition={{ delay: 0.3 }}>
            <Link
              href="/Contact"
              className="group relative bg-black text-[#EEFF00] font-black text-xl lg:text-2xl px-12 lg:px-16 py-6 lg:py-8 rounded-3xl border-4 border-black hover:bg-[#EEFF00] hover:text-black hover:border-[#EEFF00] transition-all duration-500 overflow-hidden inline-block"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#EEFF00]/0 via-[#EEFF00]/40 to-[#EEFF00]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
