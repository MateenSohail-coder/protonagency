import React from "react";

const steps = [
  { id: 1, label: "Discovery", side: "left" },
  { id: 2, label: "Direction", side: "right" },
  { id: 3, label: "Identity Creation", side: "left" },
  { id: 4, label: "Expansion", side: "right" },
  { id: 5, label: "Delivery", side: "left" },
];

export default function Process() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-14 text-center">
        Our Process
      </h1>

      <div className="relative flex items-center justify-center w-full max-w-3xl">
        {/* vertical line */}
        <div className="w-[3px] bg-black h-[480px] md:h-[540px]" />

        {/* steps */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex flex-col justify-between w-full">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative flex items-center justify-center"
            >
              {/* left text */}
              <span
                className={`hidden md:block absolute text-base font-bold lg:text-lg ${
                  step.side === "left"
                    ? "-left-44 lg:-left-56"
                    : "-right-44 lg:-right-56"
                }`}
              >
                {step.label}
              </span>

              {/* mobile text (below circle) */}
              <span className="md:hidden mt-14 text-xl z-50 bg-white font-bold text-center block">
                {step.label}
              </span>

              {/* horizontal line */}
              <span
                className={`md:block hidden h-[3px] bg-black w-16 lg:w-24 ${
                  step.side === "left" ? "mr-24" : "ml-24"
                }`}
              />

              {/* yellow circle with number */}
              <span className="absolute flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-[#EEFF00] border-2 border-black text-base md:text-lg font-semibold">
                {step.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
