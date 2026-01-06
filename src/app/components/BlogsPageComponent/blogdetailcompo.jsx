// import React from "react";

// export default function AboutSectionLayout() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//         {/* LEFT: All Text Sections */}
//         <div className="space-y-16">
//           {/* Section 1 */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
//               Lorem Ipsum is simply
//             </h2>
//             <p className="text-gray-700 leading-relaxed">
//               My journey in real estate began with a passion for connecting
//               people with their dream homes. Starting in [Year],
//               <br />
//               <br />
//               Printers in the 1500s scrambled the words from Cicero’s “De Finibus
//               Bonorum et Malorum” after mixing the words in each sentence. The
//               familiar “Lorem ipsum dolor sit amet” text emerged when
//               16th-century printers adapted Cicero’s original work, beginning
//               with the phrase “dolor sit amet consectetur.”
//               <br />
//               <br />
//               They abbreviated “dolorem” (meaning “pain”) to “lorem,” which
//               carries no meaning in Latin. Though it’s deliberately scrambled
//               Latin that doesn’t form coherent sentences, it has become a
//               fundamental tool in design and typography across generations.
//             </p>
//           </div>

//           {/* Section 2 */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
//               Lorem Ipsum is simply
//             </h2>
//             <p className="text-gray-700 leading-relaxed">
//               My journey in real estate began with a passion for connecting
//               people with their dream homes. Starting in [Year],
//               <br />
//               <br />
//               Printers in the 1500s scrambled the words from Cicero’s “De Finibus
//               Bonorum et Malorum” after mixing the words in each sentence. The
//               familiar “Lorem ipsum dolor sit amet” text emerged when
//               16th-century printers adapted Cicero’s original work, beginning
//               with the phrase “dolor sit amet consectetur.”
//               <br />
//               <br />
//               They abbreviated “dolorem” (meaning “pain”) to “lorem,” which
//               carries no meaning in Latin. Though it’s deliberately scrambled
//               Latin that doesn’t form coherent sentences, it has become a
//               fundamental tool in design and typography across generations.
//             </p>
//           </div>

//           {/* Section 3 */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
//               Lorem Ipsum is simply
//             </h2>
//             <p className="text-gray-700 leading-relaxed">
//               My journey in real estate began with a passion for connecting
//               people with their dream homes. Starting in [Year],
//               <br />
//               <br />
//               Printers in the 1500s scrambled the words from Cicero’s “De Finibus
//               Bonorum et Malorum” after mixing the words in each sentence. The
//               familiar “Lorem ipsum dolor sit amet” text emerged when
//               16th-century printers adapted Cicero’s original work, beginning
//               with the phrase “dolor sit amet consectetur.”
//               <br />
//               <br />
//               They abbreviated “dolorem” (meaning “pain”) to “lorem,” which
//               carries no meaning in Latin. Though it’s deliberately scrambled
//               Latin that doesn’t form coherent sentences, it has become a
//               fundamental tool in design and typography across generations.
//             </p>
//           </div>
//         </div>

//         {/* RIGHT: Single Long Portrait Image */}
//         <div className="w-full h-[1500px] rounded-xl overflow-hidden shadow-md">
//           <img
//             src="/blogsportrait.png"
//             alt="About section portrait"
//             className="w-full h-full object-cover object-center"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

export default function AboutSectionLayout() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}blogs/findbyslug/${slug}`
        );

        console.log("Blog fetched:", response.data);

        setBlog(response.data?.data || response.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading)
    return <p className="p-10 text-gray-500 text-center">Loading blog...</p>;

  if (!blog)
    return <p className="p-10 text-gray-500 text-center">Blog not found.</p>;

  const imageUrl = blog.image
    ? `${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${blog.image}`
    : "/placeholder.svg";

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT: Blog Content */}
        <div className="flex-1 space-y-8">
          <h1 className="text-4xl font-bold text-gray-900">{blog.title}</h1>

          <img
            src={imageUrl}
            alt={blog.title}
            className="rounded-lg shadow-md w-full h-96 object-cover"
          />

          {/* Render text editor content */}
          <div
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* RIGHT: Sidebar / Portrait Image */}
        {/* s */}
      </div>
    </div>
  );
}
