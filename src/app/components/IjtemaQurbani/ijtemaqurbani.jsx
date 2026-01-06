// export default function IjtemaQurbani() {
//   return (
//     <section className="w-full py-16 bg-white">
//       <div className="grid grid-cols-12 gap-0 items-center">
//         {/* LEFT IMAGE - flush with left edge */}
//         <div className="col-span-12 md:col-span-3 ">
//           <img
//             src="/child1.png"
//             alt="Left child"
//             className="w-full h-full object-cover rounded-2xl"
//           />
//         </div>

//         {/* MIDDLE CONTENT */}
//         <div className="col-span-12 md:col-span-6 flex flex-col items-center text-center px-6 py-10">
//           <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
//             What is Ijtema-e-Qurbani?
//           </h2>
//           <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl">
//             BaitusSalam USA organizes collective Qurbani every year to ensure maximum
//             reach and impact. Instead of individual sacrifices being limited to small
//             groups, our collective approach allows us to distribute meat to underserved
//             families across different regions. This ensures no family is left behind
//             during the blessed days of Eid.
//           </p>
//           <button className="bg-[#BC153F] hover:bg-[#9d1235] text-white px-8 py-3 rounded-md font-medium transition-colors">
//             Donate for Qurbani
//           </button>
//         </div>

//         {/* RIGHT IMAGE - flush with right edge */}
//         <div className="col-span-12 md:col-span-3">
//           <img
//             src="/child3.png"
//             alt="Right kids"
//             className="w-full h-full object-cover rounded-2xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

export default function IjtemaQurbani({ data }) {
  if (!data) {
    return (
      <div className="text-center py-20 text-red-600 font-semibold">
        No service data received!
      </div>
    );
  }

  const details = Array.isArray(data.details) ? data.details : [];
  console.log("IjtemaQurbani details:", details);

  if (details.length === 0) {
    return (
      <div className="text-center py-20 text-orange-600 font-medium">
        Data received but no details found! (service.details is empty)
      </div>
    );
  }

  const detail = details[0];
  const images = Array.isArray(detail.images) ? detail.images : [];

  const leftImage = images[0]?.image_path
    ? `${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${images[0
    ].image_path}`
    : "/child1.png";

  const rightImage = images[1]?.image_path
    ? `${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${images[1].image_path}`
    : "/child3.png";

  return (
    <section className="w-full py-16 bg-white">
      <div className="grid grid-cols-12 gap-0 items-center">
        {/* LEFT IMAGE */}
        <div className="col-span-12 md:col-span-3">
          <img
            src={leftImage}
            alt="Left visual"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* CENTER CONTENT */}
        <div className="col-span-12 md:col-span-6 flex flex-col items-center text-center px-6 py-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            {detail.title || "Untitled Section"}
          </h2>

          <p
            className="text-gray-600 leading-relaxed mb-8 max-w-2xl"
            dangerouslySetInnerHTML={{
              __html:
                detail.description ||
                "Baitussalam USA organizes collective Qurbani every year to ensure maximum reach and impact.",
            }}
          ></p>

          {detail.button_text && detail.button_Url ? (
            <a
              href={detail.button_Url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#BC153F] hover:bg-[#9d1235] text-white px-8 py-3 rounded-md font-medium transition-colors">
                {detail.button_text}
              </button>
            </a>
          ) : (
            <button className="bg-[#BC153F] hover:bg-[#9d1235] text-white px-8 py-3 rounded-md font-medium transition-colors">
              Donate Now
            </button>
          )}
        </div>

        {/* RIGHT IMAGE */}
        <div className="col-span-12 md:col-span-3">
          <img
            src={rightImage}
            alt="Right visual"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
