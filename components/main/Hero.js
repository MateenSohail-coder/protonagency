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
              make your business unforgettable.
            </p>

            <p className="mb-8 leading-relaxed text-xl max-w-xl font-bold">
              Launch a brand people remember.
            </p>
          </div>

          {/* Right Logo (animated) */}
          <div className="md:w-1/2 w-full absolute md:relative right-0 top-0 md:top-auto md:right-auto flex justify-center md:justify-end items-center h-full pointer-events-none">
            <div className="opacity-40 md:opacity-60 animate-logo-pulse-scale">
              <Image
                src="/Logo.png"
                alt="hero logo"
                width={600}
                height={600}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Bottom center triangle notch - full width */}
      <div className=" w-full overflow-hidden leading-none">
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
