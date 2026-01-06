// "use client";
// import { useEffect, useState } from "react";
// import { blogsAPI } from "@/app/lib/api/blogs";
// import NewsCardBlogPage from "./blogpagenewscard";

// export default function NewsSectionBlogPage() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await blogsAPI.getAll();
//         console.log("Blogs fetched:", response);
//         setBlogs(response.data || []);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   return (
//     <section className="py-16 px-8 sm:px-12 lg:px-20 bg-white">
//       <div className="max-w-[1300px] mx-auto">
//         <div className="mb-12">
//           <span className="text-[#BC153F] font-normal text-sm tracking-widest uppercase">
//             Latest Updates
//           </span>
//           <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 leading-tight">
//             Breaking News & Insights
//           </h2>
//         </div>

//         {/* Loading / Empty State */}
//         {loading ? (
//           <p>Loading blogs...</p>
//         ) : blogs.length === 0 ? (
//           <p>No blogs available.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {blogs.map((blog) => (
//               <NewsCardBlogPage key={blog.id} news={blog} />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { blogsAPI } from "@/app/lib/api/blogs";
import NewsCardBlogPage from "./blogpagenewscard";

export default function NewsSectionBlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogsAPI.getAll();
        console.log("Blogs fetched:", response);
        setBlogs(response.data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Skeleton loader component
  const SkeletonCard = () => (
    <div className="bg-white rounded-lg overflow-hidden shadow-md animate-pulse">
      {/* Image Skeleton */}
      <div className="relative w-full h-64 bg-gray-200"></div>

      {/* Content Skeleton */}
      <div className="p-6 space-y-3">
        <div className="h-5 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-8 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-[1300px] mx-auto">
        <div className="mb-12">
          <span className="text-[#BC153F] font-normal text-sm tracking-widest uppercase">
            Latest Updates
          </span>
          <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 leading-tight">
            Breaking News & Insights
          </h2>
        </div>

        {/* Loading / Empty State */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))}
          </div>
        ) : blogs.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <NewsCardBlogPage key={blog.id} news={blog} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

