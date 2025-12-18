"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      title: "Logo Design",
      description:
        "Distinct marks built to scale across screens, packaging, and print.",
    },
    {
      title: "Brand Identity Systems",
      description:
        "Color palettes, typography, spacing systems, iconography, and guidelines that keep your brand consistent everywhere.",
    },
    {
      title: "Brand Universe & Visual Direction",
      description:
        "Moodboards, style direction, and storytelling that define how your brand feels and communicates.",
    },
    {
      title: "Tone of Voice & Messaging",
      description:
        "Clear, consistent language for websites, ads, social posts, and internal communication.",
    },
    {
      title: "Mockups & Brand Kits",
      description:
        "Realistic product mockups, social templates, and ready-to-use assets.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-12 xl:px-20">
      {/* Compact Header */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16 md:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text text-transparent leading-tight mb-4">
            What We Do
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#EEFF00] to-[#CCFF00] mx-auto rounded-full" />
          <p className="text-xl md:text-2xl font-light text-gray-600 max-w-2xl mx-auto">
            Complete Branding, Done Right
          </p>
        </motion.div>
      </motion.div>

      {/* Shorter Premium Services Cards */}
      <div className="max-w-3xl mx-auto space-y-6 lg:space-y-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="group relative bg-gradient-to-br from-[#EEFF00] to-[#CCFF00] border-2 border-black/10 p-8 lg:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-black/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            custom={index}
          >
            {/* Compact Decorative Elements */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 rounded-xl blur-lg group-hover:scale-105 transition-all duration-500 -z-10" />
            <div className="absolute bottom-4 right-4 w-16 h-16 bg-black/10 rounded-full blur-xl group-hover:scale-110 transition-all duration-500 -z-10" />

            {/* Compact Card Content */}
            <div className="relative z-10">
              {/* Compact Title */}
              <div className="flex items-start gap-4 mb-4 group-hover:translate-x-3 transition-all duration-500">
                <div className="flex-shrink-0 w-3 h-3 mt-1.5 bg-black rounded-full" />
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  {service.title}
                </h3>
              </div>

              {/* Compact Description */}
              <p className="text-gray-800 font-medium text-lg lg:text-xl leading-relaxed max-w-lg">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
