"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

export default function LocationsSection() {
  const locations = [
    {
      id: 1,
      name: "USA",
      description: "Volunteer network, fundraising and community programs.",
    },
    {
      id: 2,
      name: "Pakistan",
      description: "Education, food distribution, healthcare, and development projects.",
    },
    {
      id: 3,
      name: "Turkey",
      description: "Refugee support, healthcare facilities, and empowerment programs.",
    },
    {
      id: 4,
      name: "Syria",
      description: "Emergency relief, Qurbani programs, and aid for displaced families.",
    },
    {
      id: 5,
      name: "Gaza",
      description: "Urgent humanitarian support, healthcare and food aid.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE CONTENT */}
          <div>
            <div className="mb-4">
              <span className="text-[#BC153F] font-normal text-sm tracking-widest uppercase">
                Where We Work
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-6 leading-tight">
              Reaching Communities Across the Globe
            </h2>

            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              Baitussalam USA extends its humanitarian efforts beyond borders.
              From education and healthcare to food and emergency relief, our work
              impacts lives in diverse regions of the world.
            </p>

            {/* 2-Column Locations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {locations.map((location) => (
                <div key={location.id} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                     <Image
                      src="/location-icon.png" 
                      alt="Location Icon"
                      width={48}
                      height={48}
                      className="w-6 h-6 object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-normal text-gray-900 text-lg mb-1">
                      {location.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {location.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center items-center">
  <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px] xl:h-[700px]">
    <Image
      src="/map.png"
      alt="World Map"
      fill
      className="object-contain"
      priority
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
