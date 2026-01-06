import ProgramsPageCard from "./ourprograms";

export default function ProgramsPageCardsSection() {
  const services = [
    {
      id: 1,
      title: "Orphan & Widow Support",
      description:
        "Securing futures through care and education. orem Ipsum is simply dummy text of the printing and industr",
      image: "/healthcare-mobile-hospitals-medical-aid.jpg",
      buttonText: "Donate Now",
    },
    {
      id: 2,
      title: "Food distribution Drives",
      description:
        "Fighting hunger one meal at a time. Lorem Ipsum is simply dummy text of the printing industry.",
      image: "/educational-support-classroom-children.jpg",
      buttonText: "Donate Now",
    },
    {
      id: 3,
      title: "Safe Drinking Water Projects",
      description:
        "Ensuring access to clean and safe water. Lorem Ipsum is simply dummy text of the printing industry.",
      image: "/women-empowerment-group.jpg",
      buttonText: "Donate Now",
    },
    {
      id: 4,
      title: "Livelihood & Skill Training",
      description:
        "Empowering families to stand on their own feet. Lorem Ipsum is simply dummy text of the printing  industry.",
      image: "/widow-orphan-support-children.jpg",
      buttonText: "Donate Now",
    },
    {
      id: 1,
      title: "Orphan & Widow Support",
      description:
        "Securing futures through care and education. orem Ipsum is simply dummy text of the printing and industr",
      image: "/healthcare-mobile-hospitals-medical-aid.jpg",
      buttonText: "Donate Now",
    },
    {
      id: 2,
      title: "Food distribution Drives",
      description:
        "Fighting hunger one meal at a time. Lorem Ipsum is simply dummy text of the printing industry.",
      image: "/educational-support-classroom-children.jpg",
      buttonText: "Donate Now",
    },
    {
      id: 3,
      title: "Safe Drinking Water Projects",
      description:
        "Ensuring access to clean and safe water. Lorem Ipsum is simply dummy text of the printing industry.",
      image: "/women-empowerment-group.jpg",
      buttonText: "Donate Now",
    },
    {
      id: 4,
      title: "Livelihood & Skill Training",
      description:
        "Empowering families to stand on their own feet. Lorem Ipsum is simply dummy text of the printing  industry.",
      image: "/widow-orphan-support-children.jpg",
      buttonText: "Donate Now",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <span className="text-[#BC153F] font-semibold text-sm tracking-widest uppercase">
            Our Programs
          </span>

          <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 mt-4 mb-6 leading-tight">
            Transforming Lives Through Our Programs
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Our programs provide food, water, education, and care to help
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
        gap-6
        md:gap-10
      "
          >
            {services.map((program, index) => (
              <ProgramsPageCard
                key={`${program.id}-${index}`}
                program={program}
                className="min-h-[360px]"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
