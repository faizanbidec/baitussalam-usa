export default function NewsCard({ news }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-[420px] flex flex-col">
      <div className="w-full aspect-[16/9] overflow-hidden bg-gray-100">
        <img
          src={news.image || "/placeholder.svg"}
          alt={news.title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
          {news.title}
        </h3>

        <a
          href="#"
          className="text-[#BC153F] font-semibold text-sm hover:text-[#BC153F]"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}
