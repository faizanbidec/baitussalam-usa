"use client";
import DonationModal from "../../DonationModal/DonationModal";
import { useState } from "react";


export default function ProgramsCard({ program }) {
  const [open, setOpen] = useState(false);

  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_IMAGE_URL || "";

  
  const imageUrl = program.image
    ? `${baseUrl}${baseUrl.endsWith("/") ? "" : "/"}${program.image}`
    : "/placeholder.svg";

  console.log("Program Image Path:", program.image);
  console.log("Full Image URL:", imageUrl);

  return (
    <div className="bg-white rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full max-w-2xl w-[380px]">
      {/* Image Container */}
      <div className="h-60 w-full overflow-hidden bg-gray-200 rounded-tr-3xl rounded-bl-3xl">
        <img
          src={imageUrl}
          alt={program.title || "Program Image"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {program.title || "Untitled Program"}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
          {program.description || "No description available."}
        </p>

        <button
          onClick={() => setOpen(true)}
          className="w-full cursor-pointer bg-[#BC153F] hover:bg-[#A0122B] text-white font-semibold py-3 px-4 rounded transition-colors duration-200"
        >
          Donate Now
        </button>

        <DonationModal 
          open={open} 
          setOpen={setOpen}
          selectedProgram={program.title}
        />
      </div>
    </div>
  );
}
