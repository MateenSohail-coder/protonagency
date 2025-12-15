"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex bg-[#EEFF00] h-20 w-full items-center justify-between px-5 md:px-10 relative">
      {/* Logo */}
      <Link href="/" className="h-14 w-40 relative">
        <Image src="/NavLogo.png" alt="Logo" fill />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex h-full items-center gap-10">
        <Link href="/About" className="cursor-pointer">
          About
        </Link>
        <Link href="/Pricing" className="cursor-pointer">
          Pricing
        </Link>
        <Link href="/Work" className="cursor-pointer">
          Work
        </Link>

        {/* Desktop Button */}
        <Link
          href="/Contact"
          className="bg-black cursor-pointer text-white px-4 py-2 rounded-full text-sm hover:opacity-90 transition"
        >
          Get Started
        </Link>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 z-50 right-0 h-screen w-[60%] bg-black text-white transform transition-transform duration-300 md:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center px-5 h-20">
          <span className="text-lg font-semibold">Menu</span>
          <X
            size={26}
            onClick={() => setOpen(false)}
            className="cursor-pointer"
          />
        </div>

        <ul className="flex flex-col gap-8 px-5 mt-10 text-lg">
          <Link href="/About" className="border-b border-white/20 pb-2">About</Link>
          <Link href="/Pricing" className="border-b border-white/20 pb-2">Pricing</Link>
          <Link href="/Work" className="border-b border-white/20 pb-2">Work</Link>

          {/* Mobile Button */}
          <Link href="/Contact" className="mt-6 bg-[#EEFF00] text-black py-2 rounded-full text-sm">
            Get Started
          </Link>
        </ul>
      </div>
    </nav>
  );
}
