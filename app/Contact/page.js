import ContactProcess from "@/components/Services/ContactProcess";
import Footer from "@/components/Services/Footer";
import Navbar from "@/components/Services/Navbar";
import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactProcess />
      <h1 className="flex flex-col px-20 mb-20">
        <b className=" text-2xl md:text-4xl">Start Your Brand</b>
        <p className="text-sm  md:text-xl">
          Submit your form and receive your personalized branding plan.
        </p>
      </h1>
      <section className="px-0 py-6 flex justify-center text-white">
        <div className="w-full max-w-7xl flex flex-col md:flex-row rounded-0 overflow-hidden bg-white text-black">
          {/* Left: CTA form (50%) */}
          <div className="w-full md:w-1/2 px-8 py-10 flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Ready to build your brand?
            </h2>
            <p className="text-sm md:text-base text-gray-700">
              Share a few details and Proton will get back with next steps and a
              clear proposal.
            </p>

            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-0 border bg-[#EEFF00]  border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-0 bg-[#EEFF00] border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  What do you need help with?
                </label>
                <textarea
                  className="w-full rounded-0 bg-[#EEFF00] border border-gray-300 px-3 py-2 text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Brand identity, launch, redesign, etc."
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-0 bg-black px-6 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                Contact Proton
              </button>
            </form>
          </div>

          {/* Right: Logo / visual (50%) */}
          <div className="w-full md:w-1/2  flex items-center justify-center px-8 py-10">
            <div className="flex flex-col items-center gap-3 text-center">
              {/* Replace with your actual logo image if you have one */}
              <div className="relative h-25 w-25  rounded-full  flex items-center justify-center text-[#EEFF00] text-xl font-bold">
                <Image
                  src="/Logo.png"
                  alt="Proton"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xl  md:text-3xl font-mono font-bold">Proton</p>
              <p className="text-xs md:text-sm text-gray-800 max-w-xs">
                Structured, premium, and emotionally strong identities for
                brands that want to be unmistakable.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
