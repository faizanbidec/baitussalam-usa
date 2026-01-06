export default function VisionMissionSection() {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-20 bg-white">
     <div className="w-full mx-auto">
  {/* Header + Vision Section */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mb-20">
    {/* LEFT: Header + Vision Text */}
    <div className="flex flex-col justify-center">
      <span className="text-[#BC153F] font-normal text-sm tracking-widest uppercase mb-3">
        Our Purpose
      </span>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight mb-8">
        Building Hope Through 
        <br />Faith and Action
      </h2>

      {/* 👇 Added margin-top here for spacing */}
      <h3 className="text-5xl font-normal text-gray-900 mb-6 mt-10">Vision</h3>

      <p className="text-gray-700 text-lg leading-relaxed">
        Bait-us-Salam USA is a registered non-profit charity in California working to support orphans, widows, the homeless, and people suffering from illness, poverty, and disasters. All our projects are implemented in Pakistan through Baitussalam Welfare Trust.
      </p>
    </div>

    {/* RIGHT: Vision Image */}
    <div className="flex justify-center items-center">
      <img
        src="/Picf.png"
        alt="Vision Building"
        className="w-full max-w-md lg:max-w-full object-cover rounded-2xl shadow-lg h-[350px] sm:h-[420px] lg:h-[450px]"
      />
    </div>
  </div>



        {/* Decorative Lines */}
        <div className="flex justify-center mb-20">
          <svg className="w-12 h-12" viewBox="0 0 50 50" fill="none">
            <path
              d="M 10 10 Q 20 20 30 10"
              stroke="#DC2626"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <path
              d="M 15 25 Q 25 35 35 25"
              stroke="#DC2626"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          </svg>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* LEFT: Mission Image */}
          <div className="flex justify-center items-center order-2 lg:order-1">
            <img
              src="/Pdic.png"
              alt="Mission Building"
              className="w-full max-w-md lg:max-w-full object-cover rounded-2xl shadow-lg h-[350px] sm:h-[420px] lg:h-[450px]"
            />
          </div>

          {/* RIGHT: Mission Text */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <h3 className="text-5xl font-normal text-gray-900 mb-6">Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to serve humanity by providing education, healthcare, food aid, and sustainable development solutions. Guided by the principles of faith and service, we strive to uplift the underprivileged, respond to emergencies, and empower individuals through programs that bring long-term positive change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
