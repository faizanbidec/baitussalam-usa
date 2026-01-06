  "use client";
  import { useState } from "react";
  import DonationModal from "../DonationModal/DonationModal";

  function FeatureCard({ number, title, desc, image }) {
    return (
      <div className="flex flex-col sm:flex-row rounded-xl overflow-hidden shadow-md bg-white">
        {/* Left Section (Blue) */}
        <div className="bg-[#415CAE] sm:w-1/3 w-full flex items-center justify-center text-white p-8 sm:p-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <img src={image} alt={title} className="w-16 h-16 object-contain" />
            <div className="text-4xl font-semibold opacity-30 leading-none">
              {number}
            </div>
          </div>
        </div>

        {/* Right Section (White) */}
        <div className="sm:w-2/3 w-full p-8 sm:p-6 flex flex-col items-center sm:items-start justify-center text-center sm:text-left">
          <div>
            <h3 className="text-[16px] font-bold text-[#0f172a] mb-3">{title}</h3>
            <p className="text-[14px] text-[#52607a] leading-relaxed">{desc}</p>
          </div>
        </div>
      </div>
    );
  }

  export function Hero() {
    const [open, setOpen] = useState(false);
    return (
      <section
        className="relative min-h-[90vh] pt-[120px] md:pt-[160px] pb-40 md:pb-48  "
        style={{
          backgroundImage: "url('/bgimage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Blue gradient overlay */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#001e5a]/70 via-[#0b4bca]/20 to-[#5a7ee0]/0" />

        <div className="block sm:hidden absolute inset-0 bg-gradient-to-r from-[#001e5a]/70 via-transparent to-[#5a7ee0]/0" />

        {/* Main container */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 md:px-2 ml-0 sm:ml-0 md:ml-15 w-full overflow-x-hidden ">
          {/* Text Content */}
          <div className="relative max-w-xl text-white border-l-3 border-white p-10 pl-8 mr-0 md:mr-[100px]">
            {/* Top half border */}
            <div className="absolute top-0 left-0 w-1/3 border-t-3 border-white"></div>

            {/* Bottom half border */}
            <div className="absolute bottom-0 left-0 w-1/3 border-b-3 border-white"></div>

            <h1 className="text-5xl sm:text-5xl  md:text-6xl font-normal leading-tight ">
              Where Hands Become Hope
              <br />
              <span className="">- Baitussalaam</span>
            </h1>
            <p className="mt-4 text-md sm:text-[15px] text-white/90">
              Join Bait-ul-Salam, a trusted Islamic Charity foundation in the US,
              making a real-life impact. Every Online Donation in USA helps us
              reach more families and create lasting change.
              <br />
            </p>

            <div className="mt-10 flex flex-wrap gap-8">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setOpen(true);
                }}
                className="bg-[#BC153F] cursor-pointer hover:bg-[#ac2748] text-white rounded-lg px-5 py-3 sm:py-4 text-sm font-semibold"
              >
                Donate Now
              </button>
              {/* <button className="bg-white cursor-pointer text-[#0f172a] hover:bg-gray-100 rounded-lg px-6 py-3 sm:py-4 text-sm font-semibold">
                Sponsor a Child
              </button> */}
            </div>
          </div>
          <DonationModal open={open} setOpen={setOpen} />
        </div>

        {/* Cards Grid - overlapping section */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 w-[90%] max-w-[1300px]  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <FeatureCard
              number="01"
              title="Safe Drinking Water"
              desc="Deliver clean water to underserved communities"
              image="/water-logo.png"
            />
            <FeatureCard
              number="02"
              title="Education Sponsorship"
              desc="Support a child's education, nutrition, and safety."
              image="/children-logo.png"
            />
            <FeatureCard
              number="03"
              title="Food Basket"
              desc="Provide monthly rations to families in need."
              image="/food-logo.png"
            />
            <FeatureCard
              number="04"
              title="Healthcare Support"
              desc="Provide medical aid for the needy."
              image="/health-logo.png"
            />
          </div>
        </div>
      </section>
    );
  }
