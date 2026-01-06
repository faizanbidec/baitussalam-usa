// "use client";

// // import { Images } from "lucide-react";

// export default function QurbaniPage({data}) {
//   const service = data;

//   if (!service) {
//     return (
//       <div className="text-center py-20 text-red-600 font-semibold">
//          No  service data received!
//       </div>
//     );
//   }

//   if (!service.details || service.details.length === 0) {
//     return (
//       <div className="text-center py-20 text-orange-600 font-medium">
//          Data received but no details found! (service.details is empty)
//       </div>
//     );
//   }

//   const detailsToShow = [service.details[1], service.details[2]];

//   console.log(" Detail for section 2 and 3:", detailsToShow);

//   //  const leftImage =
//   //   detailsToShow[0]?.images?.[0]?.image_path
//   //     ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${detailsToShow[0].images[0].image_path}`
//   //     : "/qurbani1.png";

//   // const rightImage =
//   //   detailsToShow[1]?.images?.[0]?.image_path
//   //     ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${detailsToShow[1].images[0].image_path}`
//   //     : "/qurbani2.png";

//   // console.log("Left Image:", leftImage);
//   // console.log("Right Image:", rightImage);

//   return (
//     <div className="w-full bg-white">
//       {/* ====== HOW IT WORKS Section ====== */}
//       <section className="w-full py-16 md:py-24">
//         <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
//           {/* LEFT: Image */}
//           <div className="w-full">
//             <img
//               src="/qurbani1.png"
//               alt="Qurbani process"
//               className="w-full h-auto rounded-2xl object-cover "
//             />
//           </div>

//           {/* RIGHT: Content */}
//           <div className="text-left">
//             <p className="text-[#BC153F] text-sm font-semibold tracking-wider mb-3 uppercase">
//               hOW IT WORKS
//             </p>
//             <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-snug text-gray-900">
//               How We Carry Out Qurbani
//             </h2>
//             <p className="text-gray-600 mb-8 leading-relaxed text-base sm:text-lg">
//               Each contribution not only meets immediate needs but also builds
//               long-term resilience — restoring hope for a brighter, sustainable future.
//             </p>

//             {/* Bullet Points */}
//             <div className="space-y-4">
//               {[
//                 "We organize collective sacrifice under Shariah-compliant supervision.",
//                 "Animals are selected and cared for according to Islamic guidelines.",
//                 "Fresh meat is hygienically packed and distributed to poor and needy families.",
//                 "Distribution reaches remote and crisis-affected areas where access to food is limited.",
//               ].map((text, index) => (
//                 <div className="flex items-start gap-3" key={index}>
//                   <div className="w-3 h-3 bg-[#BC153F] rounded-full mt-2 flex-shrink-0"></div>
//                   <p className="text-gray-700 text-sm sm:text-base">{text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-16 md:py-24 ">
//         <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">

//           <div className="order-2 md:order-1 text-left">
//             <p className="text-[#BC153F] text-sm font-semibold tracking-wider mb-3 uppercase">
//               IMPACT
//             </p>
//             <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-snug text-gray-900">
//               The Impact of Your Qurbani
//             </h2>
//             <p className="text-gray-600 mb-8 leading-relaxed text-base sm:text-lg">
//               Your Qurbani transforms lives — providing food, dignity, and happiness
//               to those struggling with hunger and hardship.
//             </p>

//             <div className="space-y-4">
//               {[
//                 "Thousands of families receive nutritious meals.",
//                 "Communities share in the joy of Eid celebrations.",
//                 "Widows, orphans, and refugees are given priority.",
//                 "Your sacrifice spreads hope and unity across borders.",
//               ].map((text, index) => (
//                 <div className="flex items-start gap-3" key={index}>
//                   <div className="w-3 h-3 bg-[#BC153F] rounded-full mt-2 flex-shrink-0"></div>
//                   <p className="text-gray-700 text-sm sm:text-base">{text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT: Image */}
//           <div className="order-1 md:order-2 w-full">
//             <img
//               src="/qurbani2.png"
//               alt="Qurbani impact"
//               className="w-full h-auto rounded-2xl object-cover "
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
"use client";

export default function QurbaniPage({ data }) {
  const service = data;

  if (!service) {
    return (
      <div className="text-center py-20 text-red-600 font-semibold">
        No service data received!
      </div>
    );
  }

  if (!service.details || service.details.length < 3) {
    return (
      <div className="text-center py-20 text-orange-600 font-medium">
        Data received but insufficient details! (Need indexes 1 and 2)
      </div>
    );
  }

  // ✅ Sections from index 1 & 2
  const sectionOne = service.details[1];
  const sectionTwo = service.details[2];

  const baseUrl = process.env.NEXT_PUBLIC_BASE_IMAGE_URL || "";

  // ✅ Simplified image helper (no extra uploads/)
  const getFullImageUrl = (imagePath) => {
    return imagePath ? `${baseUrl}${imagePath}` : "/placeholder.png";
  };

  const leftImage = getFullImageUrl(sectionOne?.images?.[0]?.image_path);
  const rightImage = getFullImageUrl(sectionTwo?.images?.[0]?.image_path);

  console.log("🖼️ Section 1 Image:", leftImage);
  console.log("🖼️ Section 2 Image:", rightImage);

  return (
    <div className="w-full bg-white">
      {/* ====== SECTION 1 ====== */}
      <section className="w-full py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
          {/* LEFT IMAGE */}
          <div className="w-full">
            <img
              src={leftImage}
              alt={sectionOne?.title || "Qurbani process"}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-left">
            {sectionOne?.heading && (
              <p className="text-[#BC153F] text-sm font-semibold tracking-wider mb-3 uppercase">
                {sectionOne?.title || "How It Works"}
              </p>
            )}
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-snug text-gray-900">
              {sectionOne.heading || "How We Carry Out Qurbani"}
            </h2>
            <p
              className="text-gray-600 mb-8 leading-relaxed text-base sm:text-lg"
              dangerouslySetInnerHTML={{
                __html:
                  sectionOne?.description ||
                  "Each contribution not only meets immediate needs but also builds long-term resilience.",
              }}
            ></p>

            <div className="space-y-4">
              {sectionOne?.bullets?.length > 0 ? (
                sectionOne.bullets.map((b, i) => (
                  <div className="flex items-start gap-3" key={i}>
                    <div className="w-3 h-3 bg-[#BC153F] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {b.text}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 italic">
                  No bullet points provided.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 2 ====== */}
      <section className="w-full py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
          {/* LEFT CONTENT */}
          <div className="order-2 md:order-1 text-left">
            {sectionTwo?.heading && (
              <p className="text-[#BC153F] text-sm font-semibold tracking-wider mb-3 uppercase">
                {sectionTwo?.title || "Impact of Your Qurbani"}
              </p>
            )}
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-snug text-gray-900">
              {sectionTwo.heading}
            </h2>
           <p
  className="text-gray-600 mb-8 leading-relaxed text-base sm:text-lg"
  dangerouslySetInnerHTML={{
    __html:
      sectionTwo?.description ||
      "Your Qurbani transforms lives — providing food, dignity, and happiness to those struggling with hunger and hardship.",
  }}
></p>


            <div className="space-y-4">
              {sectionTwo?.bullets?.length > 0 ? (
                sectionTwo.bullets.map((b, i) => (
                  <div className="flex items-start gap-3" key={i}>
                    <div className="w-3 h-3 bg-[#BC153F] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {b.text}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 italic">
                  No bullet points provided.
                </p>
              )}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 md:order-2 w-full">
            <img
              src={rightImage}
              alt={sectionTwo?.title || "Qurbani impact"}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
