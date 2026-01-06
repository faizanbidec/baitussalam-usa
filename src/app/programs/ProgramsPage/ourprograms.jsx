"use client";
import { useState } from "react";
import DonationModal from "@/app/components/DonationModal/DonationModal";

export default function ProgramsPageCard({ program }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
        <div className="h-56 w-full overflow-hidden bg-gray-200">
          <img
            src={program.image || "/placeholder.svg"}
            alt={program.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
            {program.description}
          </p>

          <button
            onClick={() => setOpen(true)}
            className="w-full cursor-pointer bg-[#BC153F] hover:bg-[#A0122B] text-white font-semibold py-3 px-4 rounded transition-colors duration-200"
          >
            {program.buttonText}
          </button>
        </div>
      </div>

      <DonationModal open={open} setOpen={setOpen} />
    </>
  );
}
