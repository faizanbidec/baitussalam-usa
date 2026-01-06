import NewsCard from "./news-card"

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: "Emergency Relief Reaches Flood-Affected Families in Pakistan",
      image: "/bCollage.png",
    },
    {
      id: 2,
      title: "Baitussalam USA Launches Winter Aid Program for Refugees",
      image: "aCollage.png",
    },
    {
      id: 3,
      title: "Educational Scholarships Change the Lives of 300+ Children",
      image: "/aCollages.png",
    },
  ]

  return (
    <section className="py-0 px-4 sm:px-8 lg:px-20 bg-white">
      <div className="w-full mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          {/* Label */}
          <div className="mb-4">
            <span className="text-[#BC153F] font-normal text-sm tracking-widest uppercase">Latest Updates</span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 leading-tight">Breaking News & Insights</h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    </section>
  )
}
