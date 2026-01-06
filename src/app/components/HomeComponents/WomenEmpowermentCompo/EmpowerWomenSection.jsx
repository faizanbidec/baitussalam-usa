"use client";

import {
  FaBookOpen,
  FaTools,
  FaHandHoldingUsd,
  FaHeartbeat,
  FaHandsHelping,
} from "react-icons/fa";
import Link from "next/link";

export default function EmpowerWomenSection() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[920px] overflow-hidden flex items-center">
      
      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Woman.jpg')" }}
      />

      {/* ================= DARK GRADIENT OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/20" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-[90%] md:w-[85%] mx-auto px-6 md:px-14 py-14 md:py-20 text-center md:text-left">

        {/* ================= HEADING ================= */}
        <div className="mb-8">
          <p className="text-[#BC153F] uppercase tracking-wide mb-3 text-sm md:text-base">
            Give Her the Power to Grow
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug">
            Empowering Women, Strengthening <br className="hidden md:block" />
            Communities
          </h1>
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <div className="block md:hidden mt-8">
          <button className="bg-[#BC153F] text-white text-sm px-6 py-2 rounded-md font-semibold hover:bg-[#870000] transition">
            Learn More
          </button>
        </div>

        {/* ================= ICONS (DESKTOP ONLY) ================= */}
        <div className="hidden md:flex flex-wrap justify-between gap-y-10 mt-14 max-w-6xl">
          {[
            { icon: <FaBookOpen />, label: "Education Support" },
            { icon: <FaTools />, label: "Vocational Training" },
            { icon: <FaHandHoldingUsd />, label: "Financial Assistance" },
            { icon: <FaHeartbeat />, label: "Healthcare Initiatives" },
            { icon: <FaHandsHelping />, label: "Widow Care & Support" },
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-full bg-[#BC153F] flex items-center justify-center text-white text-xl shadow-lg">
                {item.icon}
              </div>
              <p className="text-sm font-medium text-white">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP BUTTON ================= */}
        <div className="hidden md:block mt-14">
          <Link href="/services/women-empowerment">
            <button className="bg-[#BC153F] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#870000] transition">
              Learn More
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
