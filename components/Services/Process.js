"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  { id: 1, label: "Discovery", side: "left" },
  { id: 2, label: "Direction", side: "right" },
  { id: 3, label: "Identity Creation", side: "left" },
  { id: 4, label: "Expansion", side: "right" },
  { id: 5, label: "Delivery", side: "left" },
];

export default function Process() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 xl:px-20">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-16 lg:mb-20 leading-tight"
        >
          Our Process
        </motion.h1>

        {/* Perfect Timeline */}
        <div className="relative w-full h-[400px] md:h-[460px] lg:h-[500px] flex flex-col items-center justify-center max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <motion.div
            className="absolute left-1/2 w-[4px] h-[80%] bg-gradient-to-b from-[#EEFF00] to-[#CCFF00] rounded-full shadow-lg -translate-x-1/2"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />

          {/* Steps - Perfectly Aligned */}
          <div className="absolute inset-0 flex flex-col justify-evenly w-full px-8 lg:px-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="flex flex-col items-center relative w-full h-full"
              >
                {/* DESKTOP Labels - Side Positioned */}
                <div
                  className="hidden lg:flex absolute w-full justify-center"
                  style={{
                    left: step.side === "left" ? "-5.5rem" : "auto",
                    right: step.side === "right" ? "-5.5rem" : "auto",
                  }}
                >
                  <span className="text-base lg:text-lg font-bold text-gray-900 whitespace-nowrap bg-white/95 px-4 py-2 rounded-xl shadow-md">
                    {step.label}
                  </span>
                </div>

                {/* MOBILE Labels - CENTERED BELOW Number */}
                <div className="lg:hidden flex flex-col items-center gap-3 mt-4 w-full max-w-xs mx-auto">
                  <span className="text-lg font-bold text-gray-900 bg-white/95 px-6 py-3 rounded-xl shadow-sm text-center w-full">
                    {step.label}
                  </span>
                </div>

                {/* Number Circle - Perfect Center */}
                <motion.div
                  className="relative z-30 flex items-center justify-center w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-[#EEFF00]  border-4 border-white shadow-2xl rounded-3xl font-black text-2xl md:text-3xl lg:text-4xl text-gray-900 mx-auto hover:scale-110 hover:shadow-3xl transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -4 }}
                >
                  {step.id}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
