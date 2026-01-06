"use client";
import DonationModal from "../../DonationModal/DonationModal"
import { useState } from "react";

export default function Banner() {
   const [open, setOpen] = useState(false);
  
  return (
    <div
      className="relative w-full h-[550px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url(/banner-bg.png)",
      }}
    >
      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* Content */}
      <div className="relative z-10 text-center px-3 sm:px-6 lg:px-8 max-w-5xl">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl font-normal text-white mb-4 leading-tight">
          Be the Reason Someone Smiles Today
        </h1>

        {/* Description */}
        <p className="text-white text-base sm:text-lg mb-8 leading-relaxed">
          A small act of kindness can bring joy, hope, and dignity to those in need. <br /> Become part of our mission today.
        </p>

        {/* Donate Button */}
        <button
        onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen(true);
            }}
         className="bg-[#BC153F] hover:bg-[#BC153F] text-white cursor-pointer font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
          Donate Now
        </button>
      </div>
       <DonationModal
              open={open}
              setOpen={setOpen}
              
            />
    </div>
  )
}
