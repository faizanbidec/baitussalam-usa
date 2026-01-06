// import { getAllPrograms } from "@/app/lib/api/services.server";
// import ProgramsCard from "./our-programs";

// export default async function ProgramsCardsSection() {
//   const programs = await getAllPrograms();
//   console.log("Programs Data:", programs);

//   return (
//     <main
//       className="relative min-h-screen bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: "url('/Rectangle19741.png')" }}
//     >
//       {/* Overlay content */}
//       <div className="relative z-10">
//         {/* Header Section */}
//         <section className="py-16 px-4 sm:px-6 text-center text-black">
//           <div className="max-w-5xl mx-auto">
//             <span className="text-[#BC153F] font-semibold text-sm tracking-widest uppercase">
//               Our Programs
//             </span>

//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mt-4 mb-6 leading-tight">
//               Transforming Lives Through Our Programs
//             </h1>

//             <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed text-gray-900">
//               Our programs provide food, water, education, and care to help
//               communities grow with dignity and hope.
//             </p>
//           </div>
//         </section>

//         {/* Programs Grid */}
//         <section className="pb-20 px-4 sm:px-6 lg:px-20">
//           <div className="w-full mx-auto ">
//             <div
//               className="
//                 grid
//                 grid-cols-1
//                 sm:grid-cols-2
//                 md:grid-cols-2
//                 lg:grid-cols-4
//                 gap-8
//                 lg:gap-12
//                 justify-items-center
//               "
//             >
//               {programs?.map((program) => (
//                 <div key={program.id} className="w-full max-w-[530px] flex">
//                   <ProgramsCard program={program} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import ProgramsCard from "./our-programs";
import Link from "next/link";

export default function ProgramsCardsSection({ showViewAll = true }) {
  const [programs, setPrograms] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const limit = 4; // 4 for homepage

  // ✅ Fetch programs dynamically (limit + offset)
  const fetchPrograms = async (currentOffset = 0, append = false) => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}programs/list?limit=${limit}&offset=${currentOffset}&status=1`,
        { cache: "no-store" }
      );
      const data = await res.json();
      console.log("again programs data", data)
      const fetched = data?.data || [];
      const totalCount = data?.total || 0;
      setTotal(totalCount);

      if (fetched.length > 0) {
        const updatedPrograms = append
          ? [...programs, ...fetched]
          : fetched;
        setPrograms(updatedPrograms);
        setOffset(currentOffset);

        // ✅ Hide Load More when total reached
        setHasMore(updatedPrograms.length < totalCount);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching programs:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Initial fetch on mount
  useEffect(() => {
    fetchPrograms(0, false);
  }, []);

  // ✅ Handle Load More
  const handleLoadMore = () => {
    const nextOffset = offset + limit;
    fetchPrograms(nextOffset, true);
  };

  // ✅ Skeleton Loader for Programs
  // ✅ Fixed Skeleton (matches ProgramsCard layout)
const SkeletonCard = () => (
  <div className="w-full bg-white rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-md animate-pulse flex flex-col h-[500px]">
    <div className="h-80 w-full bg-gray-300"></div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
      <div className="mt-auto h-10 bg-gray-400 rounded w-full"></div>
    </div>
  </div>
);


  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Rectangle19741.png')" }}
    >
      {/* Overlay content */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="py-16 px-4 sm:px-6 text-center text-black">
          <div className="max-w-5xl mx-auto">
            <span className="text-[#BC153F] font-semibold text-sm tracking-widest uppercase">
              Our Programs
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mt-4 mb-6 leading-tight">
              Transforming Lives Through Our Programs
            </h1>
            <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed text-gray-900">
              Our programs provide food, water, education, and care to help
              communities grow with dignity and hope.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="pb-20 px-4 sm:px-6 lg:px-20">
          <div className="w-full mx-auto">
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-2
                lg:grid-cols-4
                gap-8
                lg:gap-12
                justify-items-center
              "
            >
              {loading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="w-full max-w-[530px] flex">
                      <SkeletonCard />
                    </div>
                  ))
                : programs.length > 0
                ? programs.map((program) => (
                    <div key={program.id} className="w-full max-w-[530px] flex">
                      <ProgramsCard program={program} />
                    </div>
                  ))
                : (
                  <p className="text-gray-600 text-center col-span-4">
                    No programs found.
                  </p>
                )}
            </div>

            {/* Buttons Section */}
            {!loading && programs.length > 0 && (
              <div className="flex justify-center mt-16">
                {showViewAll ? (
                  <Link
                    href="/programs"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#BC153F] text-white font-semibold rounded-lg hover:bg-[#a31236] transition-all duration-300"
                  >
                    View All
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                ) : (
                  hasMore && (
                    <button
                      onClick={handleLoadMore}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#BC153F] text-white font-semibold rounded-lg hover:bg-[#a31236] transition-all duration-300"
                    >
                      Load More
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

