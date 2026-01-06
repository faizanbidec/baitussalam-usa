// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import DonationModal from "../DonationModal/DonationModal";

// const nav = [
//   { href: "/", label: "Home" },
//   { href: "/about-us", label: "About" },
//   { href: "/programs", label: "Programs" },
//   { href: "/services", label: "Services" },
//   { href: "/Donation", label: "Donate" },
//   { href: "/Contact", label: "Contact" },
//   { href: "/Blogs", label: "Blog" },
// ];

// export function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="relative z-50 w-full bg-white shadow-sm">
//       <div className="w-full mx-auto px-4 sm:px-6 py-2 relative">
//         {/* ✅ Desktop/Tablet Floating Logo */}
//         <div className="hidden md:block absolute -top-10 left-12 md:left-10 lg:left-28 z-50">
//           <div className="bg-white rounded-b-[30px] flex items-center justify-center px-6 pt-6 pb-8 ml-[-1px]">
//             <Image
//               src="/logo.png"
//               alt="Baitussalam USA"
//               width={180}
//               height={55}
//               priority
//               className="md:w-[160px] lg:w-[200px]"
//             />
//           </div>
//         </div>

//         {/* ✅ Navbar Row */}
//         <div className="flex items-center justify-between h-[70px] md:justify-around lg:justify-between">
//           {/* ✅ Mobile Menu Icon (Left side) */}
//           <button
//             className="md:hidden text-gray-700"
//             onClick={() => setMenuOpen(true)}
//           >
//             <Menu size={28} />
//           </button>

//           {/* ✅ Mobile Logo Centered */}
//           <div className="md:hidden flex-1 flex justify-center">
//             <Image
//               src="/logo.png"
//               alt="Baitussalam USA"
//               width={150}
//               height={50}
//               priority
//             />
//           </div>

//           {/* ✅ Mobile Donate Button (Right side) */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setOpen(true)}
//               className="rounded-md border border-[#BC153F] px-4 py-2 text-sm font-semibold text-[#BC153F]"
//             >
//               Donate
//             </button>
//           </div>

//           {/* ✅ Tablet/Desktop Nav Links */}
//           {/* <nav className="hidden md:flex flex-1 items-center justify-center md:gap-6 lg:gap-10"> */}
//           <nav className="hidden md:flex flex-1 items-center justify-center md:gap-2 lg:gap-10 md:ml-34 lg:ml-0">

//             {nav.map((item, index) => (
//               <Link
//                 key={index}
//                 href={item.href}
//                 className="text-[16px] md:text-[17px] lg:text-[18px] font-normal text-[#0f172a] hover:text-[#004aad] transition-colors"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>

//           {/* ✅ Tablet/Desktop Donate Button */}
//           <div className="hidden md:flex justify-end md:w-[160px] lg:w-[220px] md:mr-2 lg:mr-5">
//             <button
//               onClick={() => setOpen(true)}
//               className="rounded-md cursor-pointer border border-[#BC153F] md:px-5 lg:px-7 py-3 text-sm font-semibold text-[#BC153F] transition-colors"
//             >
//               Donate Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Mobile LEFT Side Drawer */}
//       <AnimatePresence>
//         {menuOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setMenuOpen(false)}
//             />

//             {/* Drawer (LEFT Side now) */}
//             <motion.div
//               className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col"
//               initial={{ x: "-100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "-100%" }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             >
//               <div className="flex items-center justify-between px-4 py-4 border-b">
//                 <span className="text-lg font-semibold text-[#0f172a]">
//                   Menu
//                 </span>
//                 <button
//                   className="text-gray-700"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   <X size={24} />
//                 </button>
//               </div>

//               {/* ✅ Nav Links only (Donate removed) */}
//               <nav className="flex flex-col px-4 mt-4 space-y-4">
//                 {nav.map((item, index) => (
//                   <Link
//                     key={index}
//                     href={item.href}
//                     onClick={() => setMenuOpen(false)}
//                     className="text-base text-[#0f172a] hover:text-[#004aad] transition-colors"
//                   >
//                     {item.label}
//                   </Link>
//                 ))}
//               </nav>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* ✅ Donation Modal */}
//       <DonationModal open={open} setOpen={setOpen} />
//     </header>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calculator } from "lucide-react";
import DonationModal from "../DonationModal/DonationModal";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/services", label: "Services" },
  { href: "/Contact", label: "Contact" },
  { href: "/blogs", label: "Blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-white shadow-sm">
      <div className="w-full mx-auto px-4 sm:px-6 py-2 relative">
        {/* ✅ Floating Logo (Only on lg+) */}
        <div className="hidden lg:block absolute -top-10 left-12 lg:left-16 z-50">
          <div className="bg-white rounded-b-[30px] flex items-center justify-center px-6 pt-10 pb-8 ml-[-1px]">
            <Image
              src="/Baitussalam USA-02.png"
              alt="Baitussalam USA"
              width={200}
              height={55}
              priority
            />
          </div>
        </div>

        {/* ✅ Navbar Row — Mobile + Tablet layout */}
        <div className="flex items-center justify-between h-[70px] lg:hidden">
          {/* Menu Icon (Left) */}
          <button className="text-gray-700" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>

          {/* Centered Logo */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/logo.png"
              alt="Baitussalam USA"
              width={150}
              height={50}
              priority
            />
          </div>

          {/* Donate Button (Right, hidden on mobile for now) */}
          <div className="hidden">
            <button
              onClick={() => setOpen(true)}
              className="rounded-md border border-[#BC153F] px-4 py-2 text-sm font-semibold text-[#BC153F]"
            >
              Donate
            </button>
          </div>
        </div>

        {/* ✅ Desktop Nav Links + Donate (only on lg+) */}
        <div className="hidden lg:flex items-center justify-between h-[80px] md:ml-32 xl:ml-0">
          {/* Left padding for logo spacing */}
          <div className="w-[220px]" />

          {/* Nav Links */}
          <nav className="flex items-center justify-center gap-10 md:gap-6 flex-1">
            {nav.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-[18px] font-normal text-[#0f172a] hover:text-[#004aad] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side: Calculator Icon + Donate Button */}
          <div className="flex items-center justify-end w-[220px] mr-2 gap-4">
            <Link
              href="/Zakat-Calculator"
              className="text-[#BC153F] hover:text-[#004aad] transition-colors mr-5"
            >
              <Calculator size={30} />
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="rounded-md cursor-pointer border border-[#BC153F] px-7 py-3 text-sm font-semibold text-[#BC153F] transition-colors"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Drawer (Mobile + Tablet only) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between px-4 py-4 border-b">
                <span className="text-lg font-semibold text-[#0f172a]">
                  Menu
                </span>
                <button
                  className="text-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col px-4 mt-4 space-y-4">
                {nav.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-base text-[#0f172a] hover:text-[#004aad] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* ✅ Add Calculator Link in Drawer */}
                <Link
                  href="/Zakat-Calculator"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-base text-[#0f172a] hover:text-[#004aad] transition-colors pt-4 border-t mt-4"
                >
                  <Calculator size={20} />
                  Zakat Calculator
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <DonationModal open={open} setOpen={setOpen} />
    </header>
  );
}
