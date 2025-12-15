import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex bg-[#EEFF00] flex-col md:flex-row w-full px-6 md:px-12 py-10">
      {/* Logo Section – 50% */}
      <div className="relative w-full md:w-1/2 h-24 md:h-32 border-b md:border-b-0 md:border-r-2 flex items-center justify-center md:justify-start md:pr-10">
        <Image src="/NavLogo.png" alt="logo" fill className="object-contain" />
      </div>

      {/* Contact Section – 50% */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-2 pt-6 md:pt-0 md:pl-10 text-center md:text-left">
        <p className="font-bold">Contact us</p>
        <p>Proton@gmail.com</p>
        <p>+91 1234567890</p>

        <div className="flex gap-4 mt-2">
          <InstagramIcon className="cursor-pointer hover:opacity-70" />
          <TwitterIcon className="cursor-pointer hover:opacity-70" />
          <LinkedinIcon className="cursor-pointer hover:opacity-70" />
        </div>
      </div>
    </footer>
  );
}
