  // import { getAllServices } from "@/app/lib/api/services.server";
  // import ServiceCard from "./service-cards";
  // import Link from "next/link";

  // export default async function ServiceCardsSection() {
  //   const services = await getAllServices();
  // // const services = (await getAllServices())[0] || [];

  //   console.log('servicess', services);

  //   return (
  //     <main
  //       className="relative min-h-screen bg-cover bg-center bg-no-repeat"
  //       style={{ backgroundImage: "url('/Rectangle19741.png')" }}
  //     >
  //       <div className="relative z-10">
  //         {/* Header Section */}
  //         <section className="py-16 px-4 sm:px-6 lg:px-8 text-center text-black">
  //           <div className="max-w-7xl mx-auto">
  //             <span className="text-[#BC153F] font-semibold text-sm tracking-widest uppercase">
  //               Our Services
  //             </span>

  //             <h1 className="text-4xl sm:text-5xl font-normal mt-4 mb-6 leading-tight">
  //               Together, We Serve Humanity
  //             </h1>

  //             <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-950">
  //               Every program we run — healthcare, education, empowerment, and
  //               relief — is designed to bring hope, dignity, and opportunity to
  //               those who need it most.
  //             </p>
  //           </div>
  //         </section>

  //         {/* Services Grid */}
  //           <section className="pb-24 px-4 sm:px-8 lg:px-20 xl:px-20">
  //   <div className="w-full mx-auto">
  //     <div
  //       className="
  //         grid
  //         grid-cols-1
  //         sm:grid-cols-2
  //         lg:grid-cols-3
  //         gap-x-0
  //         sm:gap-x-10
  //         lg:gap-x-5
  //         xl:gap-x-5
  //         gap-y-10
  //         sm:gap-y-20
  //         lg:gap-y-24
  //         xl:gap-y-28
  //         place-items-stretch
  //       "
  //     >
  //       {services.length > 0 ? (
  //         services.map((service) => {
  //           const cleanImage = service.service_image_link?.trim();
  //           const imageUrl = cleanImage
  //             ? `${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${cleanImage}`
  //             : "/placeholder.svg";

  //           return (
  //             <ServiceCard
  //               key={service.id}
  //               service={{
  //                 title: service.title,
  //                 description: service.description,
  //                 image: imageUrl,
  //                 slug: service.slug,
  //                 buttonText: "Donate Now",
  //               }}
  //             />
  //           );
  //         })
  //       ) : (
  //         <p className="text-gray-600 text-center col-span-3">
  //           No services found.
  //         </p>
  //       )}
  //     </div>
  //      <div className="flex justify-center mt-16">
  //       <Link
  //         href="/services"
  //         className="inline-flex items-center gap-2 px-6 py-3 bg-[#BC153F] text-white font-semibold rounded-lg hover:bg-[#a31236] transition-all duration-300"
  //       >
  //         See All
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           strokeWidth={2}
  //           stroke="currentColor"
  //           className="w-5 h-5"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             d="M9 5l7 7-7 7"
  //           />
  //         </svg>
  //       </Link>
  //     </div>
  //   </div>
  // </section>

  //       </div>
  //     </main>
  //   );
  // }
  "use client";
  import { useEffect, useState } from "react";
  import ServiceCard from "./service-cards";
  import Link from "next/link";

  export default function ServiceCardsSection({ showViewAll = true }) {
    const [services, setServices] = useState([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const limit = 6;

    const fetchServices = async (currentOffset = 0, append = false) => {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}services/list?limit=${limit}&offset=${currentOffset}&status=1`,
          { cache: "no-store" }
        );

        const data = await res.json();
        const fetched = data?.data || [];
        const totalCount = data?.total || 0;

        setTotal(totalCount);

        if (fetched.length > 0) {
          const updatedServices = append ? [...services, ...fetched] : fetched;
          setServices(updatedServices);
          setOffset(currentOffset);
          setHasMore(updatedServices.length < totalCount);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchServices(0, false);
    }, []);

    const handleLoadMore = () => {
      const nextOffset = offset + limit;
      fetchServices(nextOffset, true);
    };

    return (
      <main
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Rectangle19741.png')" }}
      >
        <div className="relative z-10">
          {/* Header Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 text-center text-black">
            <div className="max-w-7xl mx-auto">
              <span className="text-[#BC153F] font-semibold text-sm tracking-widest uppercase">
                Our Services
              </span>
              <h1 className="text-3xl sm:text-4xl font-normal mt-4 mb-6 leading-tight">
                Serving Humanity Together with Trusted Islamic Charity
              </h1>
              <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-950">
                Every initiative by this trusted Islamic charity helps those in need, offering Online Donation US, Donate now USA, Sadqah Donation, and support through charity service US.

              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="pb-24 px-4 sm:px-8 lg:px-20 xl:px-20">
            <div className="w-full mx-auto">
              <div
                className="
                  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                  gap-x-0 sm:gap-x-10 lg:gap-x-5 xl:gap-x-5
                  gap-y-10 sm:gap-y-20 lg:gap-y-24 xl:gap-y-28
                  place-items-stretch
                "
              >
                {loading ? (
                  Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-md flex flex-col h-[500px] max-w-lg animate-pulse"
                    >
                      {/* Image skeleton */}
                      <div className="h-80 w-full bg-gray-300"></div>

                      {/* Text skeleton */}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-4/5 mb-6"></div>
                        <div className="mt-auto h-12 bg-gray-300 rounded w-full"></div>
                      </div>
                    </div>
                  ))
                ) : services.length > 0 ? (
                  services.map((service, index) => {
                    const cleanImage = service.service_image_link?.trim();
                    const imageUrl = cleanImage
                      ? `${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${cleanImage}`
                      : "/placeholder.svg";

                    return (
                      <ServiceCard
                        key={index}
                        service={{
                          title: service.title,
                          description: service.description,
                          image: imageUrl,
                          slug: service.slug,
                          buttonText: "Donate Now",
                        }}
                      />
                    );
                  })
                ) : (
                  <p className="text-gray-600 text-center col-span-3">
                    No services found.
                  </p>
                )}
              </div>

              {/* Buttons Section */}
              {services.length > 0 && !loading && (
                <div className="flex justify-center mt-16">
                  {showViewAll ? (
                    <Link
                      href="/services"
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
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#BC153F] text-white font-semibold rounded-lg hover:bg-[#a31236] transition-all duration-300"
                        onClick={handleLoadMore}
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
