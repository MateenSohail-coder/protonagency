"use client";
import ContactProcess from "@/components/Services/ContactProcess";
import Footer from "@/components/Services/Footer";
import Navbar from "@/components/Services/Navbar";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      <Navbar />
      <ContactProcess />

      {/* Perfectly Aligned Header */}
      <motion.section className="pt-20 md:pt-28 px-6 lg:px-12 xl:px-24 pb-16">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            Start Your Brand
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
          >
            Submit your form and receive your personalized branding plan.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* PERFECT Side-by-Side 50/50 - Mobile & Desktop */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-24 py-16 lg:py-24">
        <motion.div
          className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-r from-[#EEFF00] to-[#CCFF00] rounded-3xl overflow-hidden shadow-2xl border border-black/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* LEFT: FORM */}
          <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center min-h-[520px]">
            <motion.div variants={itemVariants} className="space-y-4 mb-6">
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                Ready to build your brand?
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Share a few details and Proton will get back with next steps.
              </p>
            </motion.div>

            <motion.form variants={itemVariants} className="space-y-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full h-13 px-4 bg-white border-2 border-gray-200 rounded-xl text-base font-medium text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/40 focus:border-black transition-all"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full h-13 px-4 bg-white border-2 border-gray-200 rounded-xl text-base font-medium text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/40 focus:border-black transition-all"
                  placeholder="you@example.com"
                />
              </div>

              {/* Textarea */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-900">
                  What do you need?
                </label>
                <textarea
                  required
                  rows={3}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-base font-medium text-gray-900 resize-none placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/40 focus:border-black transition-all"
                  placeholder="Brand identity, launch, redesign..."
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full h-13 bg-black text-[#EEFF00] font-bold text-lg rounded-xl border-2 border-black hover:bg-[#EEFF00] hover:text-black hover:border-[#EEFF00] transition-all duration-300"
              >
                Contact Proton
              </button>
            </motion.form>
          </div>

          {/* RIGHT: LOGO */}
          <div className="p-6 sm:p-8 lg:p-12 flex items-center justify-center min-h-[420px] bg-gradient-to-br from-black/10 to-transparent">
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center gap-4 lg:gap-5"
            >
              {/* Logo */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white/90 rounded-2xl border-2 border-gray-200 p-4 shadow-lg">
                <Image
                  src="/Logo.png"
                  alt="Proton"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Text */}
              <div className="max-w-md space-y-2">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
                  Proton
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  Structured, premium, and emotionally strong identities for
                  brands that want to be unmistakable.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
