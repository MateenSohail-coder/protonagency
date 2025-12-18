"use client";
import Footer from "@/components/Services/Footer";
import Navbar from "@/components/Services/Navbar";
import Process from "@/components/Services/Process";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function PricingPage() {
  const pricing = [
    {
      title: "Starter Identity",
      des: "For early-stage projects that need a clean, professional brand. Includes:",
      features: [
        "Primary logo",
        "Color palette",
        "Typography selection",
        "Basic mockups",
        "Light brand guide",
      ],
      bt: "Launch with confidence.",
    },
    {
      title: "Full Brand System",
      des: "The complete foundation for a scalable brand. Includes:",
      features: [
        "Full logo suite (primary, secondary, symbol)",
        "Advanced color systems",
        "Typography hierarchy",
        "Brand universe & visual direction",
        "Tone of voice fundamentals",
        "15–20 premium mockups",
        "Full brand guidelines",
      ],
      bt: "Build a system that can grow with you.",
    },
    {
      title: "Proton Premium",
      des: "Your brand, fully realized and ready to dominate. Includes:",
      features: [
        "Everything in Full Brand System",
        "Comprehensive messaging & communication framework",
        "Social media identity kit",
        "Product/packaging mockups",
        "Pitch deck templates",
        "Launch visuals",
        "Long-term support & revisions",
      ],
      bt: "A top-tier identity ready for marketing, launch, and growth.",
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
    <>
      <Navbar />
      <section className="py-20 md:py-24 lg:py-28 px-6 sm:px-8 lg:px-12 xl:px-20">
        {/* Compact Header */}
        <motion.div
          className="max-w-4xl mx-auto text-left mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-black/90 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight -translate-y-2 md:-translate-y-4"
            style={{ transformOrigin: "top" }}
          >
            Pricing
          </h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl font-light text-gray-700 max-w-2xl leading-relaxed"
          >
            Clear packages. Transparent deliverables. No hidden complexity.
          </motion.p>
        </motion.div>

        {/* Compact Pricing Cards */}
        <div className="max-w-3xl mx-auto space-y-8 lg:space-y-10">
          {pricing.map((plan, index) => (
            <motion.div
              key={plan.title}
              className="group relative bg-[#EEFF00]  border-2 border-black/10 p-8 lg:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-black/20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={itemVariants}
              custom={index}
            >
              {/* Smaller Decorative Elements */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 rounded-xl blur-md group-hover:scale-105 transition-all duration-500 -z-10" />
              <div className="absolute bottom-4 right-4 w-20 h-20 bg-black/10 rounded-full blur-lg group-hover:scale-105 transition-all duration-500 -z-10" />

              {/* Compact Content */}
              <div className="relative z-20">
                {/* Compact Title */}
                <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4 leading-tight">
                  {plan.title}
                </h2>

                {/* Compact Description */}
                <p className="text-lg lg:text-xl font-light text-gray-800 mb-6 leading-relaxed">
                  {plan.des}
                </p>

                {/* Compact Features */}
                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-base lg:text-lg text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300"
                      initial={{ x: -15, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <div className="w-2.5 h-2.5 mt-1.5 bg-black rounded-full flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Compact CTA */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/Contact"
                    className="bg-black text-[#EEFF00] font-bold text-lg px-8 py-4 rounded-2xl border-2 border-black hover:bg-[#EEFF00] hover:text-black hover:border-[#EEFF00] transition-all duration-400 inline-block"
                  >
                    {plan.bt}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Process />

      {/* Compact CTA */}
      <section className="py-20 md:py-24 px-6 lg:px-12 xl:px-20">
        <motion.div
          className="max-w-3xl mx-auto flex flex-col items-center gap-8 lg:gap-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
          >
            Ready To Build Your Brand?
          </motion.h2>
          <motion.div variants={itemVariants} transition={{ delay: 0.2 }}>
            <Link
              href="/Contact"
              className="bg-black text-[#EEFF00] font-black text-xl lg:text-2xl px-12 lg:px-16 py-5 lg:py-6 rounded-2xl border-3 border-black hover:bg-[#EEFF00] hover:text-black hover:border-[#EEFF00] transition-all duration-500 inline-block"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
