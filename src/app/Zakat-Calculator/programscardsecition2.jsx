import ProgramsCardDonation from "./programscard";

export default function ProgramsCardsDonationSection() {
  const services = [
    {
      id: 1,
      title: "Orphan & Widow Support",
      description:
        "Securing futures through care and education. orem Ipsum is simply dummy text of the printing and industr",
      image: "/widowsupport.png",
      buttonText: "Donate Now",
    },
    {
      id: 2,
      title: "Food distribution Drives",
      description:
        "Fighting hunger one meal at a time. Lorem Ipsum is simply dummy text of the printing industry.",
      image: "/fooddistribution.png",
      buttonText: "Donate Now",
    },
    {
      id: 3,
      title: "Safe Drinking Water Projects",
      description:
        "Ensuring access to clean and safe water. Lorem Ipsum is simply dummy text of the printing industry.",
      image: "/safedrinking.jpg",
      buttonText: "Donate Now",
    },
    {
      id: 4,
      title: "Livelihood & Skill Training",
      description:
        "Empowering families to stand on their own feet. Lorem Ipsum is simply dummy text of the printing  industry.",
      image: "/skilltraining.jpg",
      buttonText: "Donate Now",
    },
    {
      id: 5,
      title: "Orphan & Widow Support",
      description:
        "Securing futures through care and education. orem Ipsum is simply dummy text of the printing and industr",
      image: "/widowsupport.png",
      buttonText: "Donate Now",
    },
    {
      id: 6,
      title: "Food distribution Drives",
      description:
        "Fighting hunger one meal at a time. Lorem Ipsum is simply dummy text of the printing industry.",
      image: "/fooddistribution.png",
      buttonText: "Donate Now",
    },
    {
      id: 7,
      title: "Safe Drinking Water Projects",
      description:
        "Ensuring access to clean and safe water. Lorem Ipsum is simply dummy text of the printing industry.",
      image: "/safedrinking.jpg",
      buttonText: "Donate Now",
    },
    {
      id: 8,
      title: "Livelihood & Skill Training",
      description:
        "Empowering families to stand on their own feet. Lorem Ipsum is simply dummy text of the printing  industry.",
      image: "/skilltraining.jpg",
      buttonText: "Donate Now",
    },
  ];

  return (
    <main
      className="
        relative 
        min-h-screen 
        bg-cover 
        bg-center 
        bg-no-repeat 

      "
      style={{ backgroundImage: "url('/Rectangle19741.png')" }} // 👈 replace with your image
    >
      {/* Overlay content */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="py-16 px-4 sm:px-6 text-center text-black">
          <div className="max-w-5xl mx-auto">
            <span className="text-[#BC153F] font-semibold text-sm tracking-widest uppercase">
              Our Programs
            </span>

            <h1 className="text-4xl sm:text-5xl font-normal mt-4 mb-6 leading-tight">
              Ransforming Lives Through Our Programs
            </h1>

            <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-900">
              Our programs provide food, water, education, and care to help <br />
               communities grow with dignity and hope.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-16">
          <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12">
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                  gap-x-60  
                 gap-y-10 
                justify-items-center
              "
            >
              {services.map((program) => (
                <ProgramsCardDonation
                  key={program.id}
                  program={program}
                  className="min-h-[360px]"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
