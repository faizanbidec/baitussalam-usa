"use client";

import DonationModal from "../DonationModal/DonationModal";
import { useState } from "react";

export default function TransformingLives() {
    const [open, setOpen] = useState(false);

  return (
    <section className="relative mx-auto max-w-[105rem] px-4 py-20 md:px-8 lg:py-28">

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-2">
        {/* LEFT: Single Image */}
        <div className="lg:col-span-6">
          <div className="overflow-hidden">
            <img
              src="/Collage 5.png"
              alt="About Bait-us-Salam"
              className="w-full h-auto max-h-[500px] object-contain mx-auto"
            />
          </div>
        </div>

        <div className="lg:col-span-6 lg:pl-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight">
            Transforming Lives
          </h2>
          <h3 className="mt-3 text-lg md:text-xl font-normal text-gray-700">
            Care and Support Through Islamic Charity Services
          </h3>

          <ul className="mt-6 space-y-3 text-gray-600 text-base leading-relaxed">
            <li className="flex items-start">
              <span className="text-[#BC153F] text-xl mr-2">•</span>
              Support Baitussalam welfare services in USA, serve humanity with dignity and lasting impact.
            </li>
            <li className="flex items-start">
              <span className="text-[#BC153F] text-xl mr-2">•</span>
              We build stronger, hopeful Religious & community services through care and support.
            </li>
          </ul>

          <button 
            onClick={() => setOpen(true)}
          className="mt-8 bg-[#BC153F] hover:bg-[#a01336] cursor-pointer text-white font-medium rounded-lg px-6 py-3 transition-all duration-200 shadow-md">
            Donate Now
          </button>
        {/* Donation Modal */}
              <DonationModal open={open} setOpen={setOpen} />
        </div>
      </div>
    </section>
  );
}
