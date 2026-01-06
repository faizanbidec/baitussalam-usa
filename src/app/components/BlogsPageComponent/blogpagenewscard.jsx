  import Link from "next/link";
  export default function NewsCardBlogPage({ news }) {
    const imageUrl = news.image
      ? `${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${news.image}`
      : "/placeholder.svg";

    return (
      <Link href={`/blogs/${news.slug}`}>
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
          {/* Image */}
          <div className="relative w-full h-64 overflow-hidden rounded-lg">
            <img
              src={imageUrl}
              alt={news.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
              {news.title}
            </h3>
            <span className="text-[#BC153F] font-semibold text-sm">
              Read More →
            </span>
          </div>
        </div>
      </Link>
    );
  }
