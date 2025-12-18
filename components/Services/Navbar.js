"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <nav className="bg-[#EEFF00] z-50 fixed top-0 right-0 left-0 backdrop-blur-sm h-20 px-4 md:px-8 lg:px-12 flex items-center justify-between ">
      {/* Logo */}
      <motion.div
        className="relative h-12 w-36 lg:h-14 lg:w-40 cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
      >
        <Link href="/">
          <Image
            src="/NavLogo.png"
            alt="Proton Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
      </motion.div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 h-full">
        {[
          { href: "/About", label: "About" },
          { href: "/Pricing", label: "Pricing" },
          { href: "/Work", label: "Work" },
        ].map((item, index) => (
          <motion.li key={item.href} whileHover={{ y: -1 }}>
            <Link
              href={item.href}
              className="text-gray-900 font-medium text-base lg:text-lg px-4 py-3 rounded-lg transition-all duration-300 hover:text-black hover:bg-black/5"
            >
              {item.label}
            </Link>
          </motion.li>
        ))}

        {/* Desktop CTA Button */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/Contact"
            className="bg-black text-[#EEFF00] font-semibold text-base px-8 py-3 rounded-full border border-black transition-all duration-300 hover:bg-gray-900 ml-4"
          >
            Get Started
          </Link>
        </motion.div>
      </ul>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden p-2 rounded-lg hover:bg-black/10 transition-all duration-200"
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle menu"
      >
        {open ? (
          <X size={24} className="text-gray-900" />
        ) : (
          <Menu size={24} className="text-gray-900" />
        )}
      </motion.button>

      {/* Mobile Menu */}
      <motion.div
        className="fixed top-0 right-0 h-screen w-[80vw] max-w-sm bg-black text-white md:hidden z-50 border-l border-white/10"
        variants={menuVariants}
        initial="hidden"
        animate={open ? "visible" : "exit"}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/20 h-20">
          <span className="text-xl font-semibold">Menu</span>
          <motion.button
            onClick={() => setOpen(false)}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg hover:bg-white/10 transition-all"
          >
            <X size={28} />
          </motion.button>
        </div>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col gap-2 p-6 pt-12 text-lg">
          {[
            { href: "/About", label: "About" },
            { href: "/Pricing", label: "Pricing" },
            { href: "/Work", label: "Work" },
          ].map((item, index) => (
            <motion.div
              key={item.href}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center py-4 px-4 text-white/90 font-medium text-lg hover:text-[#EEFF00] hover:bg-white/10 rounded-xl transition-all duration-300"
              >
                <span className="ml-3">{item.label}</span>
              </Link>
            </motion.div>
          ))}

          {/* Mobile CTA Button - YELLOW */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-6 border-t border-white/20"
          >
            <Link
              href="/Contact"
              onClick={() => setOpen(false)}
              className="bg-[#EEFF00] text-black font-semibold text-lg py-4 px-8 rounded-xl border-2 border-[#EEFF00] hover:bg-[#CCFF00] hover:text-black hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center mx-2"
            >
              Get Started
            </Link>
          </motion.div>
        </ul>
      </motion.div>

      {/* Mobile Overlay */}
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}
