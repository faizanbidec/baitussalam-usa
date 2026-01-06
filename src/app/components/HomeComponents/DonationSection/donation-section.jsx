// export default function DonationSection() {
//   return (
//     <section className="relative py-24 px-8 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
//         {/* LEFT SIDE */}
//         <div className="lg:w-1/2">
//           <span className="text-[#BC153F] font-semibold uppercase tracking-widest block mb-4">
//             Your Donation Matters
//           </span>

//           <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 leading-tight mb-6">
//             Make a Difference Today
//           </h2>

//           <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-10">
//             Every contribution you make brings hope, dignity, and relief to those in need.
//             From feeding hungry families to supporting education and healthcare, your generosity
//             helps transform lives and builds a brighter, sustainable future for entire communities.
//           </p>

//           <button className="bg-[#BC153F] hover:bg-[#A0122B] cursor-pointer text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md">
//             Donate Now
//           </button>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="lg:w-1/2 flex flex-col items-center relative">
//           {/* Blue Box — bigger & more balanced */}
//           <div className="bg-[#415CAE] rounded-2xl px-32 py-24 text-white  text-left shadow-lg w-full max-w-[1050px] relative z-10 flex items-start" >
//             <p className="text-base sm:text-lg leading-relaxed">
//               Your generosity is more than charity — it is a lifeline for families
//               who have lost hope, children who dream of education, and communities
//               striving for a brighter tomorrow.
//             </p>
//           </div>

//           {/* Floating Cards — equal + smaller height */}
//           <div className="absolute -bottom-20 flex justify-center w-full z-20">
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-7">
//               {/* Card 1 */}
//               <div className="bg-white rounded-xl py-6 px-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-[175px] sm:w-[175px] h-[210px] flex flex-col justify-start">
//                 <div className="flex justify-center mb-3">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-[#BC153F]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-gray-900 font-semibold text-[15px] mb-1">
//                   Partner for Projects
//                 </h3>
//                 <p className="text-gray-600 text-[13px] leading-snug">
//                   Work with us on impactful initiatives.
//                 </p>
//               </div>

//               {/* Card 2 */}
//               <div className="bg-white rounded-xl py-6 px-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-[175px] sm:w-[175px] h-[210px] flex flex-col justify-start">
//                 <div className="flex justify-center mb-3">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-[#BC153F]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10h.01M13 16H9m4 0h4m-11-4h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-gray-900 font-semibold text-[15px] mb-1">
//                   Volunteer with Us
//                 </h3>
//                 <p className="text-gray-600 text-[13px] leading-snug">
//                   Share your time & skills to uplift lives.
//                 </p>
//               </div>

//               {/* Card 3 */}
//               <div className="bg-white rounded-xl py-6 px-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-[175px] sm:w-[175px] h-[210px] flex flex-col justify-start">
//                 <div className="flex justify-center mb-3">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-[#BC153F]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.646 7.23a2 2 0 01-1.789 1.106H7a2 2 0 01-2-2V9a6 6 0 0112-6z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-gray-900 font-semibold text-[15px] mb-1">
//                   Sponsor / Donate
//                 </h3>
//                 <p className="text-gray-600 text-[13px] leading-snug">
//                   Help fund education, healthcare & food aid.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Space below cards */}
//       <div className="h-[180px]" />
//     </section>
//   );
// }
"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import DonationModal from "../../DonationModal/DonationModal";

export default function DonationSection() {
  const [open, setOpen] = useState(false);
  const cards = [
    {
      id: 1,
      title: "Partner for Projects",
      desc: "Work with us on impactful initiatives.",
      img: "/PartnerforProjects.png",
    },
    {
      id: 2,
      title: "Volunteer with Us",
      desc: "Share your time & skills to uplift lives.",
      img: "/VolunteerwithUs.png",
    },
    {
      id: 3,
      title: "Sponsor / Donate",
      desc: "Help fund education, healthcare & food aid.",
      img: "/SponsorDonate.png",
    },
  ];

  return (
    <section className="relative py-24 px-[40px] sm:px-[80px] bg-white overflow-hidden">
      <div className="max-w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* LEFT SIDE */}
        <div className="lg:w-1/2">
          <span className="text-[#BC153F] font-semibold uppercase tracking-widest block mb-4">
            Your Donation Matters
          </span>

          <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 leading-tight mb-6">
            Make a Difference Today
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-10">
            Every contribution you make brings hope, dignity, and relief to
            those in need. Through Online Donation US, Donate now USA, Donate
            online for Zakat, or Sadqah Donation, your generosity helps
            transform lives and builds a brighter, sustainable future for entire
            communities.
          </p>

          <button 
           onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpen(true);
              }}
          className="bg-[#BC153F] hover:bg-[#A0122B] cursor-pointer text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md">
            Donate Now
          </button>
        </div>

        {/* RIGHT SIDE (DESKTOP) */}
        <div className="lg:w-1/2 flex flex-col items-center relative">
          {/* Blue Box */}
          <div className="bg-[#415CAE] h-100 sm:h-80 rounded-2xl px-6 sm:px-12 py-16 sm:py-16 text-white text-left shadow-lg w-full relative z-10">
            <p className="text-base sm:text-lg leading-relaxed">
              Generosity brings hope to families who struggle, education to
              children who dream, and strength to communities working for a
              better future. Support a trusted Islamic charity today.
            </p>
          </div>

          {/* --- DESKTOP CARDS --- */}
          <div className="absolute -bottom-20  sm:flex justify-center w-full z-20">
            <div className="flex items-center justify-center gap-3 sm:gap-7">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-xl py-3 sm:py-6 px-6 sm:px-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-[230px]  sm:w-[178px] h-[190px] sm:h-[190px] flex flex-col justify-between"
                >
                  <div className="flex justify-center mb-0 sm:mb-3">
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={70}
                      height={70}
                      className="object-contain w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] "
                    />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold text-[12px] sm:text-[13px] mb-2 sm:mb-1">
                      {card.title}
                    </h3>
                    <p className="text-gray-600  text-[11px] sm:text-[13px] leading-snug mb-2 sm:mb-0">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <DonationModal open={open} setOpen={setOpen} />
      </div>

      {/* Space below cards */}
      <div className="h-[180px] hidden sm:block" />
    </section>
  );
}
