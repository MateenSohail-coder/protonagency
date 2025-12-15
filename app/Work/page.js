"use client";

import Footer from "@/components/Services/Footer";
import Navbar from "@/components/Services/Navbar";
import Image from "next/image";
import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Work() {
  const work = [
    {
      pic: "/alpha.jpg",
      name: "Brand Alpha",
      des: "A bold visual system for a modern SaaS product.",
      category: "SaaS",
    },
    {
      pic: "/studio.avif",
      name: "Studio Beta",
      des: "Minimal, expressive identity for a creative studio.",
      category: "Creative",
    },
    {
      pic: "/gamma.avif",
      name: "Retail Gamma",
      des: "Warm, structured branding for a lifestyle retail brand.",
      category: "Retail",
    },
    {
      pic: "/delta.avif",
      name: "Project Delta",
      des: "Clean, structured identity for a tech-focused brand.",
      category: "Tech",
    },
  ];

  const testimonials = [
    {
      pic: "/avatar.avif",
      name: "Alex Johnson",
      role: "Founder at Brand Alpha",
      des: "Proton delivered a brand that feels clear, confident, and ready to scale.",
      rating: 5,
    },
    {
      pic: "/avatar.avif",
      name: "Maria Lopez",
      role: "Creative Director at Studio Beta",
      des: "The identity system gave our team clarity and a strong visual language.",
      rating: 5,
    },
    {
      pic: "/avatar.avif",
      name: "Jordan Kim",
      role: "Head of Marketing at Retail Gamma",
      des: "Our new identity made launches smoother and communication more cohesive.",
      rating: 5,
    },
  ];

  // Portfolio Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  // Testimonials Carousel
  const [testimonialRef, testimonialApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollTestimonialPrev = useCallback(
    () => testimonialApi && testimonialApi.scrollPrev(),
    [testimonialApi]
  );
  const scrollTestimonialNext = useCallback(
    () => testimonialApi && testimonialApi.scrollNext(),
    [testimonialApi]
  );

  return (
    <>
      <Navbar />

      <section className="px-6 py-16 md:py-24 md:px-12 lg:px-24 space-y-32">
        {/* Hero Section */}
        <div className="text-center space-y-6 animate-fade-in">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
            Portfolio
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
            Our Work
          </h1>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed">
            A selection of recent identities crafted for teams that value
            clarity, consistency, and bold visual systems that make an impact.
          </p>
        </div>

        {/* Portfolio Carousel */}
        <div className="space-y-10">
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {work.map((item, index) => (
                  <article
                    key={index}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_40%] min-w-0 px-3"
                  >
                    <div className="group relative flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-5 md:p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      {/* Category Badge */}
                      <span className="absolute top-8 right-8 z-10 bg-[#EEFF00] text-black text-xs font-semibold px-3 py-1 rounded-full">
                        {item.category}
                      </span>

                      {/* Image */}
                      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                        <Image
                          src={item.pic}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <h2 className="font-bold text-xl md:text-2xl text-gray-900">
                          {item.name}
                        </h2>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                          {item.des}
                        </p>
                      </div>

                      {/* View Project Link */}
                      <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:gap-3 transition-all">
                        View Project
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-3 md:p-4 shadow-xl hover:shadow-2xl transition-all hover:scale-110 z-10 border border-gray-200"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-3 md:p-4 shadow-xl hover:shadow-2xl transition-all hover:scale-110 z-10 border border-gray-200"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-10">
              {work.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi && emblaApi.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "w-10 bg-gray-900"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="space-y-10 bg-gradient-to-b from-gray-50 to-white rounded-3xl p-8 md:p-12 lg:p-16">
          <header className="text-center space-y-4">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
              Feedback
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              What Clients Say
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed">
              Teams that work with Proton value long-term clarity and a brand
              system that scales with their ambitions.
            </p>
          </header>

          {/* Testimonials Carousel */}
          <div className="relative">
            <div className="overflow-hidden" ref={testimonialRef}>
              <div className="flex gap-6">
                {testimonials.map((item, index) => (
                  <figure
                    key={index}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_45%] min-w-0 px-3"
                  >
                    <div className="relative flex flex-col gap-6 rounded-2xl bg-[#EEFF00] border-2 border-gray-900 p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      {/* Quote Icon */}
                      <svg
                        className="w-10 h-10 text-gray-900 opacity-20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>

                      {/* Testimonial Text */}
                      <p className="text-base md:text-lg text-gray-900 leading-relaxed font-medium">
                        "{item.des}"
                      </p>

                      {/* Rating Stars */}
                      <div className="flex gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-gray-900"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center gap-4">
                        <div className="relative h-14 w-14 overflow-hidden rounded-full flex-shrink-0 border-2 border-gray-900">
                          <Image
                            src={item.pic}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <figcaption className="text-base font-bold text-gray-900">
                            {item.name}
                          </figcaption>
                          <p className="text-sm text-gray-700">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </figure>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollTestimonialPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-gray-900 text-white rounded-full p-3 md:p-4 shadow-xl hover:shadow-2xl transition-all hover:scale-110 z-10"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={scrollTestimonialNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-gray-900 text-white rounded-full p-3 md:p-4 shadow-xl hover:shadow-2xl transition-all hover:scale-110 z-10"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 rounded-3xl p-10 md:p-16 text-center space-y-6">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Ready to Build Your Brand?
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Let's create a visual identity that makes your business
            unforgettable.
          </p>
          <button className="bg-[#EEFF00] text-gray-900 font-bold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
            Start Your Project
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
