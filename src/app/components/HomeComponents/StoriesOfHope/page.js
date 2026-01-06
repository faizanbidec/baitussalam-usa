"use client";



export default function StoriesOfHope() {
  return (
    <section className="relative mx-auto max-w-[105rem] px-4 py-20 md:px-20 lg:py-28">

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
        {/* LEFT: Single Image */}
        <div className="lg:col-span-6">
          <div className="overflow-hidden">
            <img
              src="/Collagess.png"
              alt="About Bait-us-Salam"
              className="h-auto w-full object-cover "
            />
          </div>
        </div>

        {/* RIGHT: Text Section */}
        <div className="lg:col-span-6 lg:pl-10">
          <p className="mb-3 text-sm tracking-wide text-[#BC153F]">
            Impact Stories of Change
          </p>
          <h2 className="text-pretty text-3xl font-normal leading-tight text-gray-950 md:text-5xl">
            25,000 Lives Touched by 
            <br className="hidden md:block" />
            Your Support
          </h2>

          <p className="mt-5 max-w-prose text-lg leading-relaxed text-neutral-600">
            Every act of giving through <b className="text-gray-800">Baitussalam USA</b>, a <b className="text-gray-800">trusted Islamic charity</b>, helps people live better lives. With over 405 institutions serving communities, 1.8 million Qurbani beneficiaries, and ₨1.6 billion spent on food aid, your support through <b className="text-gray-800">Online Donation US</b> continues to feed families, educate children, and bring care where it’s needed most.
            <br />
            <br />
            ach contribution not only meets immediate needs but also builds long-term resilience. Whether it’s restoring health through medical care, empowering women with new skills, or ensuring children have access to education, your support lays the foundation for a brighter, sustainable future.
          </p>

        
        </div>
      </div>
    </section>
  );
}
