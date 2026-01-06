"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DonationModal from "../../DonationModal/DonationModal";
import { useState, useEffect } from "react";

export default function UpcomingCampaigns() {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH SERVICES
  const fetchServices = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}services/list?limit=6&offset=0&status=1`,
        { cache: "no-store" }
      );
      const data = await res.json();
      setServices(data?.data || []);
    } catch (err) {
      console.log("Service fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // SKELETON UI MATCHING SERVICECARDSSECTION
  const SkeletonCard = () => (
    <div className="bg-white rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-md flex flex-col h-full max-w-2xl w-[380px] animate-pulse">
      {/* IMAGE */}
      <div className="h-60 w-full bg-gray-300"></div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>

        <div className="mt-auto h-12 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );

  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      <div className="sm:max-w[90%] mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT SECTION */}
        <div className="pl-0 sm:pl-20">
          <p className="text-[#BC153F] font-normal tracking-wide mb-5">Join us</p>
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-5">
            On Upcoming Events
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Stay informed about our latest programs, donation efforts, and community projects. Join us to help people in need and share hope around the world. Each update brings us closer to making a lasting difference together.<br />
            <p className="mt-5">
              Visit our <b className="text-gray-800">trusted Islamic charity</b> platform to explore ways to <b className="text-gray-800">donate now</b>, make an <b className="text-gray-800">Online Donation US,</b> and become part of our mission to serve humanity.
            </p>
          </p>
          <button className="bg-[#BC153F] text-white cursor-pointer font-semibold px-6 py-3 rounded-xl hover:bg-[#990034] transition">
            View All Events
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative">

          <div className="absolute inset-0 top-52 bg-[#3A58C1] rounded-2xl h-[400px]"></div>

          <div className="relative z-10 pt-8 pb-16 px-6">
            
            <Swiper
              modules={[Navigation]}
              navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
              spaceBetween={0}
              slidesPerView={1}
              breakpoints={{ 768: { slidesPerView: 2 } }}
              className="pb-10"
            >
              {/* LOADING SKELETON */}
              {loading
                ? [...Array(4)].map((_, i) => (
                    <SwiperSlide key={i}>
                      <SkeletonCard />
                    </SwiperSlide>
                  ))
                : services.map((item, index) => {
                    const cleanImage = item.service_image_link?.trim();
                    const imageUrl = cleanImage
                      ? `${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${cleanImage}`
                      : "/placeholder.svg";

                    return (
                      <SwiperSlide key={index}>
                        <div className="bg-white rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-md hover:shadow-lg flex flex-col h-full max-w-2xl w-[380px]">
                          
                          {/* IMAGE */}
                          <div className="h-60 w-full overflow-hidden bg-gray-200">
                            <img
                              src={imageUrl}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* CONTENT */}
                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                              {item.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                              {item.description}
                            </p>

                            <button
                              onClick={() => setOpen(true)}
                              className="w-full cursor-pointer bg-[#BC153F] hover:bg-[#A0122B] text-white font-semibold py-3 px-4 rounded transition-colors duration-200"
                            >
                              Donate Now
                            </button>

                            <DonationModal open={open} setOpen={setOpen} />
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
              <button className="prev-btn bg-white w-12 h-12 rounded-full shadow">
                <ChevronLeft className="text-gray-600" />
              </button>
              <button className="next-btn bg-white w-12 h-12 rounded-full shadow">
                <ChevronRight className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
