"use client";
import Image from "next/image";
import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const logoVariants = {
    hidden: { scale: 0.7, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 0.55,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        scale: { type: "spring", stiffness: 100, damping: 12 },
      },
    },
  };

  return (
    <>
      <section
        ref={ref}
        className="relative bg-[#EEFF00] h-[110vh] md:h-[130vh] text-gray-800 overflow-hidden"
      >
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-full flex flex-col lg:flex-row items-stretch justify-center py-8 sm:py-12 lg:py-16 xl:py-20 relative z-10">
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:text-left gap-4 sm:gap-6 lg:gap-8 lg:pr-6 xl:pr-12 flex-1"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Title */}
            <motion.div
              variants={itemVariants}
              className="w-full text-center lg:text-left"
            >
              <motion.h1
                className="font-black tracking-tight text-gray-900 text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight lg:leading-[0.88] max-w-full break-words"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
              >
                Build a Brand
                <br className="hidden sm:inline-block lg:block" />
                <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mt-2 sm:mt-3 leading-tight">
                  That Feels Iconic
                </span>
              </motion.h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl leading-relaxed max-w-lg lg:max-w-md text-gray-700 text-center lg:text-left px-2 lg:px-0 hyphens-auto"
              variants={itemVariants}
            >
              <span className="font-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-gray-900 block mb-1 sm:mb-2">
                Proton
              </span>
              creates complete visual identities: logos, branding systems, tone
              of voice, brand universes, and high-end mockups that make your
              business unforgettable.
            </motion.p>

            {/* Tagline */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-black text-gray-900 text-center lg:text-left max-w-sm px-2 lg:px-0"
              variants={itemVariants}
            >
              Launch a brand people remember.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col xs:flex-row gap-3 w-full px-2 lg:px-0 justify-center lg:justify-start"
              variants={itemVariants}
              transition={{ delay: 0.3 }}
            >
              <Link href="/Contact" className="w-full xs:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-gray-900 text-[#EEFF00] text-base sm:text-lg font-bold rounded-full shadow-xl hover:shadow-yellow-400/30 transition-all duration-300 border-2 border-gray-900 hover:bg-gray-800 flex-1 xs:flex-none whitespace-nowrap"
                >
                  Start Your Brand
                </motion.button>
              </Link>
              <Link href="/Work " className="w-full xs:w-auto">
                {" "}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent text-gray-900 text-base sm:text-lg font-bold rounded-full border-2 border-gray-900/40 hover:bg-gray-900/80 hover:text-[#EEFF00] transition-all duration-300 backdrop-blur-sm flex-1 xs:flex-none whitespace-nowrap"
                >
                  View Portfolio
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={logoVariants}
            className="relative w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] xl:w-[550px] 2xl:w-[600px] h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px] max-w-[88vw] max-h-[70vh]"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* 6 Orbiting Dots */}
            <motion.div
              className="absolute top-4 left-4 w-1.5 h-1.5 bg-black rounded-full opacity-75"
              animate={{
                x: [0, 25, 0],
                y: [0, -15, 0],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute top-12 right-6 w-1.5 h-1.5 bg-black/85 rounded-full opacity-70"
              animate={{
                x: [0, -20, 0],
                y: [0, 18, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
            />

            <motion.div
              className="absolute bottom-8 left-8 w-2 h-2 bg-black/80 rounded-full opacity-65"
              animate={{
                x: [0, 22, 0],
                y: [0, -12, 0],
                rotate: [0, 180],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
            />

            <motion.div
              className="absolute bottom-16 right-8 w-1 h-1 bg-black/90 rounded-full opacity-75"
              animate={{
                x: [0, -18, 0],
                y: [0, 14, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.8,
              }}
            />

            <motion.div
              className="absolute top-20 left-16 w-1.5 h-1.5 bg-black/75 rounded-full opacity-70"
              animate={{
                x: [0, 15, 0],
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            />

            <motion.div
              className="absolute bottom-4 right-16 w-2 h-2 bg-black/80 rounded-full opacity-65"
              animate={{
                x: [0, -25, 0],
                y: [0, 16, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.1,
              }}
            />

            {/* Perfect 600px Logo */}
            <motion.div
              className="w-full h-full flex items-center justify-center"
              animate={{
                scale: [1, 1.02, 1, 0.98, 1],
                y: [0, -4, 0, 3, 0],
                rotate: [0, 1.2, -0.8, 1, 0],
              }}
              transition={{
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.6, 0.8, 1],
                },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                },
                rotate: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
            >
              <Image
                src="/Logo.png"
                alt="Proton Branding Logo"
                width={800}
                height={800}
                className="object-contain w-[95%] h-[95%]"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Original Bottom Triangle - Unchanged */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px]"
        >
          <polygon points="0,0 600,60 1200,0 1200,0 0,0" fill="#EEFF00" />
        </svg>
      </div>
    </>
  );
}
