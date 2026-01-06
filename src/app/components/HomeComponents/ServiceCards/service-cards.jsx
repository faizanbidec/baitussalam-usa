"use client";

import { useState } from "react";
import DonationModal from "@/app/components/DonationModal/DonationModal";
import Link from "next/link";

export default function ServiceCard({ service }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Service Card */}
      <div className="bg-white rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-[500px] max-w-lg">
        <div className="h-80 w-full overflow-hidden bg-gray-200">
          <Link
            href={`/services/${service?.slug}`}
            className="w-full"
          >
            <img
              src={service?.image || "/placeholder.svg"}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </Link>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            {service?.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
            {service?.description}
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen(true);
            }}
            className="w-full cursor-pointer bg-[#BC153F] hover:bg-[#A0122B] text-white font-semibold py-3 px-4 rounded transition-colors duration-200"
          >
            {service?.buttonText}
          </button>
        </div>
      </div>

      <DonationModal
        open={open}
        setOpen={setOpen}
        selectedService={service?.title}
      />
    </>
  );
}
