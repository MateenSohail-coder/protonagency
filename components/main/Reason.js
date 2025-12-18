"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Precision",
    desc: "Every visual element is intentional. Nothing random.",
    icon: "/precision.png",
  },
  {
    title: "Consistency",
    desc: "A full system you can use everywhere without guessing.",
    icon: "/consistency.png",
  },
  {
    title: "Emotion",
    desc: "Design that makes people feel something immediately.",
    icon: "/emotion.png",
  },
  {
    title: "Speed & Clarity",
    desc: "Fast communication, clear deliverables, no confusion.",
    icon: "/speed.png",
  },
];

export default function ReasonsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden pt-5">
      {/* Enhanced Mountains */}
      <div className="bg-[#EEFF00]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 280"
          className="w-full h-[200px] lg:h-[280px] rotate-180 relative -top-1"
          preserveAspectRatio="none"
        >
          <motion.polyline
            points="0,280 90,70 180,280 270,30 370,280 470,80 570,280 670,60 770,280 870,100 970,280 1070,30 1170,280 1270,70 1440,280"
            fill="white"
            stroke="#000"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
        </svg>
      </div>

      {/* Premium Content Section */}
      <section className="bg-[#EEFF00] px-6 sm:px-8 lg:px-12 xl:px-20 py-20 lg:py-32 relative">
        {/* Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-24 lg:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-gray-900 via-black/80 to-gray-900 bg-clip-text text-transparent leading-tight mb-8"
          >
            Why{" "}
            <span className="text-black font-black drop-shadow-sm">Proton</span>
            ?
          </motion.h2>
          <div className="w-28 h-1 bg-gradient-to-r from-transparent via-black/60 to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* Premium Cards */}
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 lg:gap-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="group w-full max-w-lg lg:max-w-xl text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={itemVariants}
              custom={index}
            >
              {/* Transparent Logo Container */}
              <motion.div
                className="relative mx-auto w-32 h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 mb-8 p-4 lg:p-6 rounded-3xl transition-all duration-700 hover:-translate-y-4 hover:scale-105 "
                style={{ background: "transparent" }}
                whileHover={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-4 lg:inset-6 bg-gradient-to-br from-[#EEFF00]/30 to-[#CCFF00]/20 rounded-2xl blur-xl -z-10 group-hover:scale-110 transition-all duration-700" />
                <Image
                  src={reason.icon}
                  alt={reason.title}
                  fill
                  className="object-contain p-2 lg:p-4"
                  priority={index === 0}
                />
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-4 leading-tight group-hover:translate-y-2 transition-transform duration-700"
                whileHover={{ scale: 1.05 }}
              >
                {reason.title}
              </motion.h3>

              {/* Description */}
              <p className="text-xl lg:text-2xl xl:text-3xl font-light text-gray-700 leading-relaxed max-w-2xl mx-auto px-4 lg:px-8">
                {reason.desc}
              </p>

              {/* Decorative Underline */}
              <div className="w-24 h-px bg-gradient-to-r from-[#EEFF00]/60 to-transparent mt-6 mx-auto rounded-full group-hover:w-32 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}
