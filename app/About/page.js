import Footer from "@/components/Services/Footer";
import Navbar from "@/components/Services/Navbar";
import Image from "next/image";
import React from "react";

export default function Abo() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center gap-16">
        {/* Top block: yellow background, centered heading + description + images */}
        <div className="w-full bg-[#EEFF00] py-12 flex justify-center">
          <div className="w-full max-w-5xl flex flex-col items-center gap-10">
            {/* Heading + description */}
            <div className="max-w-2xl text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-semibold">
                Who We Are.
              </h1>
              <p className="text-base md:text-lg text-gray-700">
                Proton is a branding studio built to create identities that feel
                structured, premium, and emotionally strong. Every brand we
                build follows one principle: nothing should be accidental.
              </p>
            </div>

            {/* First two images in one row */}
            <div className="w-full flex flex-col md:flex-row gap-6 px-10">
              <div className="relative w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/about1.png"
                  alt="About Proton 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/about2.png"
                  alt="About Proton 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Approach section + third image */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-8 px-10">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Our Approach</h2>
            <p className="text-base md:text-lg text-gray-600">
              Proton blends discipline with creativity. We design systems, not
              random visuals. We refine messaging, not just colors. We build
              identities that scale, communicate, and persuade. Your brand
              should feel intentional. Proton ensures it does.
            </p>
          </div>

          <div className="relative w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/about3.png"
              alt="Our approach"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </main>
      <div className="bg-[#EEFF00] mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 260" // taller viewBox
          className="w-full h-[180px] rotate-180"
          preserveAspectRatio="none"
        >
          <polyline
            // increased Y-difference between peaks/valleys for more height
            points="0,260 80,80 160,260 260,40 360,260 460,90 560,260 660,70 760,260 860,110 960,260 1080,40 1200,260 1320,80 1440,260"
            fill="white"
            stroke="black"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="bg-[#EEFF00] w-full flex flex-col gap-10 items-center justify-center p-20">
        <div className="text-4xl font-bold">Promotion</div>
        <div className=" text-center w-full md:w-1/2">
          A complete identity you can use confidently across every platform from
          your website to packaging, social content, ads, and beyond.
        </div>
        <div className="h-30 w-30 relative">
          <Image src="/promotion.png" alt="promotion" fill />
        </div>
      </div>
      <Footer />
    </>
  );
}
