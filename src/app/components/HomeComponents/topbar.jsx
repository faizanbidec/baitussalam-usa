// "use client";
// import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
// import { FaXTwitter, FaPhone } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";

// export function TopBar() {
//   return (
//     <div
//       className="w-full text-white text-sm"
//       style={{
//         background: "linear-gradient(90deg, #415CAE 0%, #0072BC 100%)",
//       }}
//     >
//       <div
//         className="
//           max-w-7xl 
//           mx-auto 
//           flex 
//           items-center 
//           justify-between 
//           px-8        /* 👈 slightly inward on both sides */
//           md:px-12     /* 👈 same for tablet */
//           lg:px-14     /* 👈 little extra for large screens */
//           py-2
//         "
//       >
//         {/* ⬅️ Left: Social Icons */}
//         <div className="flex items-center gap-3 sm:gap-4">
//           <a href="#" aria-label="TikTok" className="hover:text-[#BC153F]">
//             <FaTiktok size={12} className="sm:size-[13px]" />
//           </a>
//           <a href="#" aria-label="Facebook" className="hover:text-[#BC153F]">
//             <FaFacebookF size={12} className="sm:size-[13px]" />
//           </a>
//           <a href="#" aria-label="Twitter" className="hover:text-[#BC153F]">
//             <FaXTwitter size={12} className="sm:size-[13px]" />
//           </a>
//           <a href="#" aria-label="Instagram" className="hover:text-[#BC153F]">
//             <FaInstagram size={12} className="sm:size-[13px]" />
//           </a>
//         </div>

//         {/* ➡️ Right: Contact Info */}
//         <div className="flex items-center gap-3 sm:gap-6 text-[11px] sm:text-[13px] ml-0 md:ml-4">
//           <div className="flex items-center gap-1 sm:gap-2">
//             <FaPhone size={12} className="sm:size-[14px]" />
//             <span className="truncate">92-21-111-298-111</span>
//           </div>
//           <div className="hidden sm:flex items-center gap-1 sm:gap-2">
//             <MdEmail size={12} className="sm:size-[14px]" />
//             <span>info@baitussalam.org</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export function TopBar() {
  return (
    <div
      className="w-full text-white text-sm"
      style={{
        background: "linear-gradient(90deg, #415CAE 0%, #0072BC 100%)",
      }}
    >
      <div
        className="
          w-full 
          mx-auto 
          grid grid-cols-1 lg:grid-cols-2
          items-center 
          gap-3
          px-4 sm:px-6 md:px-10 lg:px-20
          py-2
        "
      >
        {/* ⬅️ Left Column: Social Icons */}
        <div className="hidden lg:flex justify-center sm:justify-start items-center gap-3 sm:gap-4 relative sm:left-[250px]">
          <a href="#" aria-label="TikTok" className="hover:text-[#BC153F]">
            <FaTiktok size={13} />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-[#BC153F]">
            <FaFacebookF size={13} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-[#BC153F]">
            <FaXTwitter size={13} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-[#BC153F]">
            <FaInstagram size={13} />
          </a>
        </div>

        {/* ➡️ Right Column: Contact Info */}
        <div
          className="
            flex 
            justify-center lg:justify-end 
            items-center 
            gap-3 sm:gap-6 
            text-[10px] sm:text-[13px] 
            whitespace-nowrap 
            overflow-x-auto 
            no-scrollbar
          "
        >
          <div className="flex items-center gap-1 sm:gap-2">
            <FaPhone size={12} />
            <span>92-21-111-298-111</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <MdEmail size={12} />
            <span>info@baitussalam.org</span>
          </div>
        </div>
      </div>
    </div>
  );
}
