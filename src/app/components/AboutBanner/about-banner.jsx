"use client";
import { Droplets, Users, HandPlatter, Hospital } from "lucide-react";
import DonationModal from "../DonationModal/DonationModal";
import { useState } from "react";

export function AboutBanner({title, description}) {
  const [open, setOpen] = useState(false);
  return (
    <section
      className="relative min-h-[90vh] pt-[120px] md:pt-[160px] pb-40 md:pb-48"
      style={{
        backgroundImage: "url('/pagebanner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001e5a]/70 via-[#001e5a]/30 to-[#5a7ee0]/0" />

    {/* Main container */}
<div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 md:px-2 ml-0 sm:ml-0 md:ml-15 w-full overflow-x-hidden ">

  {/* Text Content */}
  <div
    className="
      relative text-white border-l-2 sm:border-l-3 border-white 
      p-6 sm:p-8 md:p-10 pl-6 sm:pl-8 mr-0 md:mr-[100px] 
      max-w-full sm:max-w-lg md:max-w-xl
    "
  >
    {/* Top half border */}
    <div className="absolute top-0 left-0 w-1/3 border-t-2 sm:border-t-3 border-white"></div>

    {/* Bottom half border */}
    <div className="absolute bottom-0 left-0 w-1/3 border-b-2 sm:border-b-3 border-white"></div>

    <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-tight">
    {title}
    </h1>

    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/90 leading-relaxed">
      {description}
    </p>

    <div className="mt-6 sm:mt-10 flex flex-wrap gap-5 sm:gap-8">
      <button 
      onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpen(true);
              }}
      className="bg-[#BC153F] cursor-pointer hover:bg-[#ac2748] text-white rounded-lg px-4 sm:px-5 py-2.5 sm:py-4 text-xs sm:text-sm font-semibold">
        Donate Now
      </button>
    </div>
  </div>
  <DonationModal open={open} setOpen={setOpen} />
</div>

    </section>
  );
}
