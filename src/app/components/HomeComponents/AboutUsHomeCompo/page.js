"use client";

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function RoundIcon({ children, color }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full text-white 
        h-8 w-8 sm:h-11 sm:w-11 md:h-12 md:w-12 lg:h-14 lg:w-14 ${color} flex-shrink-0`}
    >
      {children}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section className=" py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-25 items-center">
        {/* LEFT: Image */}
        <div className="lg:col-span-6 w-full flex items-center justify-center">
          <img
            src="/Collage.png"
            alt="About Bait-us-Salam"
            className="w-full max-h-[600px] object-contain"
          />
        </div>

        {/* RIGHT: Text Section */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="max-w-xl mx-auto lg:mx-0">
            <p className="mb-3 text-sm tracking-wide text-[#BC153F] uppercase">
              ABOUT US
            </p>

            <h2 className="text-pretty text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-gray-950">
              Serving Humanity With <span>Compassion</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-600">
              Bait-us-Salam USA is a registered non-profit{" "}
              <b className="text-gray-800">Islamic charity foundation</b> in
              California working to support orphans, widows, the homeless, and
              people suffering from illness, poverty, and disasters. All our
              projects are implemented in Pakistan through Baitussalam Welfare
              Trust.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-8">
              {/* Row 1 */}
              <div className="flex items-start gap-4">
                <RoundIcon color="bg-[#BC153F]">
                  <img src="/about1.png" className="h-6 w-6 object-contain" />
                </RoundIcon>
                <div>
                  <p className="font-semibold text-gray-950 text-lg">Donate</p>
                  <p className="mt-1 text-neutral-600 leading-relaxed">
                    Providing financial support, Zakat donation, or Sadqah to
                    bring about change in people’s lives.
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex items-start gap-4">
                <RoundIcon color="bg-[#BC153F]">
                  <img src="/about2.png" className="h-6 w-6 object-contain" />
                </RoundIcon>
                <div>
                  <p className="font-semibold text-gray-950 text-lg">
                    Volunteer
                  </p>
                  <p className="mt-1 text-neutral-600 leading-relaxed">
                    Sharing your time, skills, and knowledge to uplift
                    communities in need and support a charity service US.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
