export default function ImpactSection() {
  const impacts = [
    {
      id: 1,
      number: "1979+",
      title: "Supported Helpless Families",
      description: "Providing aid to orphans, widows, and helpless families in need through Sadqah Donation.",
    },
    {
      id: 2,
      number: "40k+",
      title: "Children Sponsored",
      description: "Children Sponsored for education programs.",
    },
    {
      id: 3,
      number: "100+",
      title: "Water Projects Completed",
      description:
        "Bringing clean, safe water to communities in need through sustainable charity service US projects.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-0 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Label */}
            <div className="mb-6">
              <span className="text-[#BC153F] font-normal text-sm tracking-widest uppercase">
                Together We Achieve
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-5xl font-normal text-gray-900 mb-6 leading-tight">
              Our Impact in Numbers
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-base mb-12 leading-relaxed">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been
            </p>

            {/* Impact Stats */}
            <div className="space-y-4">
              {impacts.map((impact) => (
                <div
                  key={impact.id}
                  className="bg-gray-100 rounded-lg p-6 border border-blue-100"
                >
                  <h3 className="text-xl font-normal text-gray-900 mb-2">
                    {impact.number} {impact.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{impact.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center items-center relative">
            {/* Blue curved background shape */}
            <div className="absolute w-96 h-96 bg-blue-400 rounded-full opacity-30 blur-3xl -z-10"></div>

            {/* Circular Image Container */}
            <div className="relative w-full h-auto ">
              <img
                src="/Impact.png"
                alt="Impact showcase"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Decorative red lines */}
            {/* <div className="absolute top-0 right-0 w-24 h-24">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <path d="M 80 10 Q 90 20 85 35" stroke="#DC2626" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M 90 5 Q 95 15 92 30" stroke="#DC2626" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>

            <div className="absolute bottom-0 left-0 w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <path d="M 20 90 Q 30 80 45 85" stroke="#DC2626" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M 10 95 Q 20 85 35 88" stroke="#DC2626" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M 15 100 Q 25 90 40 95" stroke="#DC2626" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
