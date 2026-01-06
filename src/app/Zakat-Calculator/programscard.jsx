"use client";
import DonationModal from "../components/DonationModal/DonationModal";
import { useState } from "react";

export default function ProgramsCardDonation({ program }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full max-w-2xl w-[380px]">
      {/* Image Container */}
      <div className="h-60 w-full overflow-hidden bg-gray-200 rounded-tr-3xl rounded-bl-3xl">
        <img
          src={program.image || "/placeholder.svg"}
          alt={program.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {program.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
          {program.description}
        </p>

        {/* Button */}
        <button 
          onClick={() => setOpen(true)}
          className="w-full cursor-pointer bg-[#BC153F] hover:bg-[#A0122B] text-white font-semibold py-3 px-4 rounded transition-colors duration-200">
          {program.buttonText}
        </button>
        {/* Donation Modal */}
              <DonationModal open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}


