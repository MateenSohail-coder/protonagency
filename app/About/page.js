"use client";
import Footer from "@/components/Services/Footer";
import Navbar from "@/components/Services/Navbar";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="w-full bg-[#EEFF00]  py-24 md:py-32 lg:py-40">
          <motion.div
            className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col items-center gap-16 lg:gap-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="text-center max-w-4xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-clip-text text-transparent leading-tight mb-8">
                Who We Are.
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-800 max-w-3xl mx-auto leading-relaxed">
                Proton is a branding studio built to create identities that feel
                structured, premium, and emotionally strong. Every brand we
                build follows one principle:
                <span className="font-bold text-gray-900">
                  nothing should be accidental
                </span>
                .
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="w-full grid md:grid-cols-2 gap-8 lg:gap-12"
            >
              <motion.div
                className="relative aspect-[4/3] overflow-hidden rounded-3xl group hover:scale-[1.02] transition-all duration-700"
                whileHover={{ y: -10 }}
              >
                <Image
                  src="/about1.png"
                  alt="About Proton 1"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                />
              </motion.div>
              <motion.div
                className="relative aspect-[4/3] overflow-hidden rounded-3xl group hover:scale-[1.02] transition-all duration-700"
                whileHover={{ y: -10 }}
              >
                <Image
                  src="/about2.png"
                  alt="About Proton 2"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Approach Section */}
        <section className="py-24 md:py-32 px-6 lg:px-12 xl:px-24 max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="flex-1 space-y-6 lg:max-w-2xl"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                Our Approach
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed tracking-wide">
                Proton blends{" "}
                <span className="font-bold text-gray-900">
                  discipline with creativity
                </span>
                . We design systems, not random visuals. We refine messaging,
                not just colors. We build identities that scale, communicate,
                and persuade.
                <span className="font-bold text-gray-900">
                  Your brand should feel intentional
                </span>
                . Proton ensures it does.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex-1 relative w-full aspect-[4/3] overflow-hidden rounded-3xl group hover:scale-[1.02] transition-all duration-700"
              whileHover={{ y: -8 }}
            >
              <Image
                src="/about3.png"
                alt="Our approach"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Enhanced Mountain Transition */}
        <div className="bg-[#EEFF00] overflow-hidden -mt-8 lg:-mt-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 280"
            className="w-full h-[200px] lg:h-[280px] rotate-180"
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
              transition={{ duration: 2, delay: 0.5 }}
            />
          </svg>
        </div>

        {/* Promotion Section */}
        <section className="bg-[#EEFF00] py-24 md:py-32 lg:py-40 px-6 lg:px-12 xl:px-24">
          <motion.div
            className="max-w-4xl mx-auto flex flex-col items-center gap-12 lg:gap-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent leading-tight"
            >
              Promotion
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl font-light text-gray-800 max-w-3xl mx-auto leading-relaxed px-4"
            >
              A complete identity you can use confidently across every platform
              from your website to packaging, social content, ads, and beyond.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="relative w-48 h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/promotion.png"
                alt="Promotion"
                fill
                className="object-contain p-6 lg:p-8"
                priority
              />
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
