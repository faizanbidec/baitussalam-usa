// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { getGalleryImages } from "@/app/lib/api/services.server";

// const gallerySlides = [
//   {
//     id: 1,
//     images: [
//       {
//         id: "1",
//         src: "https://images.unsplash.com/photo-1520763185298-1b434c919abe?w=500&h=300&fit=crop",
//       },
//       {
//         id: "2",
//         src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=600&fit=crop",
//       },
//       {
//         id: "3",
//         src: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=500&h=300&fit=crop",
//       },
//       {
//         id: "4",
//         src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop",
//       },
//       {
//         id: "5",
//         src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
//       },
//       {
//         id: "6",
//         src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
//       },
//     ],
//   },
//   {
//     id: 2,
//     images: [
//       {
//         id: "7",
//         src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
//       },
//       {
//         id: "8",
//         src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop",
//       },
//       {
//         id: "9",
//         src: "https://images.unsplash.com/photo-1488121926221-62409e7e92b7?w=400&h=300&fit=crop",
//       },
//       {
//         id: "10",
//         src: "https://images.unsplash.com/photo-1495854035989-cebdbdd97913?w=400&h=300&fit=crop",
//       },
//       {
//         id: "11",
//         src: "https://images.unsplash.com/photo-1469022563149-aa64dbd37daf?w=400&h=300&fit=crop",
//       },
//       {
//         id: "12",
//         src: "https://images.unsplash.com/photo-1520763185298-1b434c919abe?w=400&h=300&fit=crop",
//       },
//     ],
//   },
// ];
// const gallerySlides = await getGalleryImages();
// console.log("Gallery Slides Data:", gallerySlides);
// export default function GalleryPage() {
//   return (
//     <div className="w-full bg-white">
//       {/* Header Section */}
//       <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           {/* "IN PICTURES" label */}
//           <div className="text-center mb-4">
//             <span className="text-sm font-semibold tracking-widest text-[#BC153F] uppercase">
//               In Pictures
//             </span>
//           </div>

//           {/* Main Title */}
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-center text-slate-900 mb-6 leading-tight">
//             A Glimpse of Our Work
//           </h1>

//           {/* Subtitle */}
//           <p className="text-center text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
//             Explore moments of compassion, service, and unity from our on-ground
//             projects around the world.
//           </p>
//         </div>
//       </div>

//       {/* Gallery Slider Section */}
//       <div className="w-full px-4 sm:px-6 lg:px-8 pb-20">
//         <div className="max-w-[90%] mx-auto relative">
//           <Swiper
//             modules={[Navigation]}
//             navigation={{
//               prevEl: ".swiper-prev",
//               nextEl: ".swiper-next",
//             }}
//             spaceBetween={16}
//             slidesPerView={1}
//             className="w-full"
//           >
//             {gallerySlides.map((slide) => (
//               <SwiperSlide key={slide.id}>
//                 <div className="grid grid-cols-4 gap-3 sm:gap-4 lg:gap-5 auto-rows-[200px] sm:auto-rows-[280px] lg:auto-rows-[300px]">
//                   <div className="overflow-hidden rounded-xl bg-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
//                     <img
//                       src={slide.images[0]?.src}
//                       alt="Gallery image 1"
//                       className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                     />
//                   </div>

//                   <div className="row-span-2 overflow-hidden  bg-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
//                     <img
//                       src={slide.images[1]?.src}
//                       alt="Gallery image 2"
//                       className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                     />
//                   </div>

//                   <div className="col-span-2 overflow-hidden  bg-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
//                     <img
//                       src={slide.images[2]?.src}
//                       alt="Gallery image 3"
//                       className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                     />
//                   </div>

//                   <div className="overflow-hidden  bg-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
//                     <img
//                       src={slide.images[3]?.src}
//                       alt="Gallery image 4"
//                       className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                     />
//                   </div>

//                   <div className="overflow-hidden  bg-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
//                     <img
//                       src={slide.images[4]?.src}
//                       alt="Gallery image 5"
//                       className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                     />
//                   </div>

//                   <div className="overflow-hidden  bg-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
//                     <img
//                       src={slide.images[5]?.src}
//                       alt="Gallery image 6"
//                       className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                     />
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Navigation Buttons */}
//           <button
//             className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 sm:-translate-x-16 z-10 bg-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-200 group border border-slate-100"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-slate-800 group-hover:text-slate-900 transition-colors" />
//           </button>

//           <button
//             className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 sm:translate-x-16 z-10 bg-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-200 group border border-slate-100"
//             aria-label="Next slide"
//           >
//             <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-slate-800 group-hover:text-slate-900 transition-colors" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getGalleryImages } from "@/app/lib/api/services.server";

export default function GalleryPage() {
  const [gallerySlides, setGallerySlides] = useState([]);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await getGalleryImages();

        
        const data = Array.isArray(res) ? res : res?.data;

        if (Array.isArray(data)) {
          const baseURL = process.env.NEXT_PUBLIC_BASE_IMAGE_URL || "";
          const chunkSize = 6;

          
          const images = data.map((img, i) => ({
            id: img.id || i,
            src: `${baseURL}${img.Image_path}`,
            alt: img.title || `Gallery Image ${i + 1}`,
          }));

          
          const slides = [];
          for (let i = 0; i < images.length; i += chunkSize) {
            slides.push({
              id: i / chunkSize + 1,
              images: images.slice(i, i + chunkSize),
            });
          }

          setGallerySlides(slides);
        } else {
          console.error(" Unexpected response format:", res);
        }
      } catch (error) {
        console.error(" Error fetching gallery images:", error);
      }
    }

    fetchGallery();
  }, []);

  if (gallerySlides.length === 0) return null;

  return (
    <div className="w-full bg-white">
      {/* Header Section */}
      <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-sm font-semibold tracking-widest text-[#BC153F] uppercase">
            In Focus
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-slate-900 mb-6 leading-tight">
            Stories of Change

          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Discover powerful moments of hope, dedication, and impact captured from our humanitarian projects across communities nationwide.
          </p>
        </div>
      </div>

      {/* Gallery Swiper */}
      <div className="w-full px-4 sm:px-6 lg:px-2 pb-20">
        <div className="max-w-[90%] mx-auto relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            spaceBetween={16}
            slidesPerView={1}
            className="w-full"
          >
            {gallerySlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 auto-rows-[200px] sm:auto-rows-[280px] lg:auto-rows-[300px]">
                  {slide.images.map((img, i) => (
                    <div
                      key={i}
                      className={`overflow-hidden bg-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl ${
                        i === 1 ? "row-span-2" : i === 2 ? "col-span-2" : ""
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 sm:-translate-x-12 z-10 bg-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-200 group border border-slate-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-slate-800 group-hover:text-slate-900 transition-colors" />
          </button>

          <button
            className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 sm:translate-x-12 z-10 bg-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-200 group border border-slate-100"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-slate-800 group-hover:text-slate-900 transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
}


