"use client";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <footer className="bg-gradient-to-br from-[#EEFF00] to-[#CCFF00] border-t-4 border-black/10 px-6 md:px-12 py-12 md:py-16 relative overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* LOGO SECTION - LEFT SIDE */}
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/2 h-24 md:h-32 relative flex items-center justify-center md:justify-start px-6 md:px-12 lg:px-16 border-b-2 md:border-b-0"
        >
          <Image
            src="/NavLogo.png"
            alt="Proton Logo"
            fill
            className="object-contain p-4 md:p-6 lg:p-8"
            priority
          />
        </motion.div>

        {/* PARTITION LINE - VERTICAL DIVIDER */}
        <motion.div
          variants={itemVariants}
          className="hidden md:block w-px h-32 md:h-40 lg:h-48 bg-gradient-to-b from-black/30 to-black/50 mx-6 lg:mx-8"
        />

        {/* CONTACT SECTION - RIGHT SIDE */}
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 md:gap-6 px-6 md:px-12 lg:px-16 text-center md:text-left pt-4 md:pt-0"
        >
          {/* Contact Header */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 tracking-tight"
          >
            Contact us
          </motion.p>

          {/* Contact Details */}
          <motion.div
            variants={itemVariants}
            className="space-y-2 md:space-y-3 text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 leading-tight"
          >
            <p className="hover:text-gray-900 transition-all duration-300 cursor-pointer group hover:scale-[1.02]">
              hello@proton.studio
            </p>
            <p className="hover:text-gray-900 transition-all duration-300 cursor-pointer group hover:scale-[1.02]">
              +92 300 1234567
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex gap-3 md:gap-4 mt-4 md:mt-6 pt-2"
          >
            <motion.div
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 md:p-3.5 bg-white/70 backdrop-blur-sm rounded-2xl border border-black/15 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <Instagram className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 md:p-3.5 bg-white/70 backdrop-blur-sm rounded-2xl border border-black/15 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <Twitter className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 md:p-3.5 bg-white/70 backdrop-blur-sm rounded-2xl border border-black/15 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-12 pt-8 border-t border-black/10"
      >
        <p className="text-center text-sm md:text-base text-gray-700 font-medium tracking-wide">
          © 2025 Proton. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
