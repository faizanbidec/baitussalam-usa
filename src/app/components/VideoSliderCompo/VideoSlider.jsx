"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function VideoSliderSection() {
  const slides = [
    {
      id: 1,
      video: "/videoslider.mp4",
      title: "Ijtema-e-Qurbani 2025",
      caption: "Witness how unity brings hope to thousands of families.",
    },
    {
      id: 2,
      video: "/videoslider.mp4",
      title: "Food Aid Program 2025",
      caption: "Supporting families with essential nutrition.",
    },
    {
      id: 3,
      video: "/videoslider.mp4",
      title: "Education Initiative 2025",
      caption: "Empowering children through quality education.",
    },
    {
      id: 4,
      video: "/videoslider.mp4",
      title: "Community Program 2025",
      caption: "Building stronger communities together.",
    },
  ];

  // refs to control videos
  const videoRefs = useRef([]);
  const swiperRef = useRef(null);
  const [playingIndex, setPlayingIndex] = useState(null);

  const pauseAll = () => {
    videoRefs.current.forEach((v) => {
      try {
        v?.pause();
      } catch (e) {}
    });
    setPlayingIndex(null);
  };

  const handlePlayClick = (i) => {
    // pause others
    videoRefs.current.forEach((v, idx) => {
      if (idx !== i && v?.play) v.pause();
    });

    const vid = videoRefs.current[i];
    if (!vid) return;
    if (vid.paused) {
      vid.play();
      setPlayingIndex(i);
    } else {
      vid.pause();
      setPlayingIndex(null);
    }
  };

  return (
    <section className="relative w-full pt-16 pb-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-8 z-20 relative">
        <p className="text-sm font-semibold text-[#BC153F]">
          Our Impact 
        </p>
        <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mt-3">
          Stories of Hope and Humanity
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-base">
          Witness the difference your donations make through Qurbani drives, food aid, education, and community programs worldwide.
        </p>
      </div>

      {/* Half red background behind slider */}
      <div className="absolute bottom-0 left-0 right-0 h-64 md:h-72 bg-[#BC153F] -z-10" />

      {/* Slider area */}
      <div className="relative max-w-6xl md:max-w-none w-full mx-auto">
        <Swiper
          onSwiper={(s) => (swiperRef.current = s)}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={28}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true, el: ".swiper-pagination-custom" }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
          onSlideChange={() => {
            // pause all videos when slide changes
            pauseAll();
          }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide
              key={slide.id}
              // widths control how much side-peek shows; these are responsive and produce the "finger width" peek
              className="!w-[60%] md:!w-[48%] lg:!w-[60%] flex justify-center"
            >
              <div className="relative rounded-3xl overflow-hidden h-[24rem] md:h-[32rem] lg:h-[32rem] w-full transition-transform duration-400 group shadow-xl transform">
                {/* Video element (paused by default). use object-cover for full coverage */}
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={slide.video}
                  muted
                  playsInline
                  className="w-full h-full object-cover bg-black"
                />

                {/* Play button (center) - visible when video not playing */}
                {playingIndex !== i && (
                  <button
                    onClick={() => handlePlayClick(i)}
                    aria-label="play"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                  >
                    <svg
                      className="w-7 h-7 text-gray-900"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                )}

                {/* Click on video toggles play/pause as well */}
                <button
                  aria-hidden
                  onClick={() => handlePlayClick(i)}
                  className="absolute inset-0 z-20 bg-transparent"
                />

                {/* Text overlay at bottom - hides when playing */}
                {playingIndex !== i && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 z-25">
                    <h3 className="text-white text-lg md:text-xl font-semibold">
                      {slide.title}
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm mt-2">
                      {slide.caption}
                    </p>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons placed close to center slide (positions tuned via CSS below) */}
        <button className="custom-prev absolute top-1/2 left-10 -translate-y-1/2 z-40 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
          <svg
            className="w-5 h-5 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="custom-next absolute top-1/2 right-10 -translate-y-1/2 z-40 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
          <svg
            className="w-5 h-5 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Pagination dots on red background */}
        <div className="swiper-pagination-custom flex justify-center gap-3 py-8 bg-transparent mt-6" />
      </div>

      {/* Styles to match screenshot: center pop, side-peek width, nav button offsets, overlay z-order */}
      <style jsx>{`
        /* pagination bullets */
        :global(.swiper-pagination-bullet) {
          width: 6px;
          height: 6px;
          background: rgba(255, 255, 255, 0.6);
          opacity: 1;
          transition: all 0.3s ease;
        }
        :global(.swiper-pagination-bullet-active) {
          background: #fff;
          transform: scale(1.2);
        }

        /* ensure slides visible + transition smoothly */
        :global(.swiper-slide) {
          opacity: 1 !important;
          transition: transform 0.35s ease;
        }

        /* center slide “pop-up” effect */
        :global(.swiper-slide-active > div) {
          transform: translateY(-10px) scale(1.03);
          z-index: 30;
        }

        /* side slides smaller to emphasize center */
        :global(.swiper-slide-next > div),
        :global(.swiper-slide-prev > div) {
          transform: translateY(0) scale(0.92);
          z-index: 20;
        }

        /* ===========================
     NAV BUTTON RESPONSIVE PLACEMENT
     =========================== */
        /* Base: Mobile (up to ~640px) */
        :global(.custom-prev),
        :global(.custom-next) {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 40;
          width: 2.5rem;
          height: 2.5rem;
          background: white;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }
        :global(.custom-prev) {
          left: 3rem;
        }
        :global(.custom-next) {
          right: 3rem;
        }

        /* Tablet (≥640px) */
        @media (min-width: 640px) {
          :global(.custom-prev),
          :global(.custom-next) {
            width: 2.75rem;
            height: 2.75rem;
          }
          :global(.custom-prev) {
            left: 8%;
          }
          :global(.custom-next) {
            right: 8%;
          }
        }

        /* Medium screens (≥768px) */
        @media (min-width: 768px) {
          :global(.custom-prev),
          :global(.custom-next) {
            width: 3rem;
            height: 3rem;
          }
          :global(.custom-prev) {
            left: 20%;
          }
          :global(.custom-next) {
            right: 20%;
          }
        }

        /* Large desktops (≥1024px) */
        @media (min-width: 1024px) {
          :global(.custom-prev),
          :global(.custom-next) {
            width: 3.25rem;
            height: 3.25rem;
          }
          :global(.custom-prev) {
            left: 18%;
          }
          :global(.custom-next) {
            right: 18%;
          }
        }

        /* Extra large (≥1280px) */
        @media (min-width: 1280px) {
          :global(.custom-prev) {
            left: 18%;
          }
          :global(.custom-next) {
            right: 18%;
          }
        }

        /* ensure play button always above overlays */
        button[aria-label="play"] {
          z-index: 45;
        }

        /* make swiper padding cleaner */
        :global(.mySwiper) {
          padding-bottom: 1rem;
        }
      `}</style>
    </section>
  );
}
