"use client";



export default function WhyChooseOurProgram() {
  return (
    <section className="relative mx-auto max-w-[105rem] px-4 py-20 md:px-8 lg:py-28">

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
        {/* LEFT: Single Image */}
        <div className="lg:col-span-6">
          <div className="overflow-hidden">
            <img
              src="/Collagese.png"
              alt="About Bait-us-Salam"
              className="h-auto w-full object-cover "
            />
          </div>
        </div>

        {/* RIGHT: Text Section */}
        <div className="lg:col-span-6 lg:pl-10">
          <p className="mb-3 text-sm tracking-wide text-[#BC153F]">
             Support Our Programs
          </p>
          <h2 className="text-pretty text-3xl font-normal leading-tight text-gray-950 md:text-5xl">
            Empowering Through Trusted 
            <br className="hidden md:block" />
            Charity
          </h2>

          <p className="mt-5 max-w-prose text-lg leading-relaxed text-neutral-600">
            Baitussalam USA is a <b className="text-gray-800">trusted Islamic charity organization</b> dedicated to empowering lives through compassion, integrity, and impact. As one of the <b className="text-gray-800">best international charities</b>, our <b className="text-gray-800">non-profit programs</b> address real community needs through <b className="text-gray-800">education & orphan support</b>, <b className="text-gray-800">health and medical aid</b>, and <b className="text-gray-800">food distribution charity</b> program. With transparent practices, dedicated volunteers, and sustainable models, we ensure every initiative delivers meaningful and lasting change.
            <br />
            <br />
            Beyond providing aid, our <b className="text-gray-800">muslim charity program</b> focuses on dignity, faith, and unity. From <b className="text-gray-800">youth empowerment programs</b> to <b className="text-gray-800">welfare and relief programs</b>, we aim to nurture self-reliance and hope. By supporting orphan and widow support and helping sponsor a <b className="text-gray-800">child’s education</b>, we create a cycle of care where giving becomes a shared journey toward a stronger, more compassionate tomorrow.
          </p>

        
        </div>
      </div>
    </section>
  );
}
