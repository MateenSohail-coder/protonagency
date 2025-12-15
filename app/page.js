import HeroSection from "@/components/main/Hero";
import Ourservices from "@/components/main/Ourservices";
import Reason from "@/components/main/Reason";
import Started from "@/components/main/started";
import Footer from "@/components/Services/Footer";
import Navbar from "@/components/Services/Navbar";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Ourservices />
      <Reason />
      <Started />
      <Footer />
    </>
  );
}
