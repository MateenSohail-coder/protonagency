import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <>
      <section className="relative bg-[#EEFF00] h-[90vh] md:h-[80vh] text-gray-600 overflow-hidden">
        {/* Content */}
        <div className="container mx-auto flex justify-between px-6 py-28 md:flex-row flex-col items-center relative z-10">
          {/* Left */}
          <div className="md:w-1/2 flex flex-col md:items-start md:text-left gap-8 items-center text-center md:pr-16">
            <h1 className="title-font font-sans sm:text-6xl text-4xl font-semibold mb-4 text-gray-900">
              Build a Brand
              <br className="hidden lg:inline-block" />
              That Feels Iconic
            </h1>

            <p className="mb-8 leading-relaxed text-xl max-w-xl">
              <b>Proton</b> creates complete visual identities: logos, branding
              systems, tone of voice, brand universes, and high-end mockups that
              make your business unforgettable
            </p>

            <p className="mb-8 leading-relaxed text-xl max-w-xl font-bold">
              Launch a brand people remember.
            </p>
          </div>

          {/* Right Logo */}
          <div className="md:w-1/2 w-full absolute md:relative right-0 top-0 md:top-auto md:right-auto md:flex justify-end items-end opacity-20 pointer-events-none flex justify-center items-center h-full">
            <Image
              src="/Logo.png"
              alt="hero logo"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Bottom Inverted Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#EEFF00"
            d="
              M0,0
              L0,40
              C360,80 1080,80 1440,40
              L1440,0
              Z
            "
          />
        </svg>
      </div>
    </>
  );
}
