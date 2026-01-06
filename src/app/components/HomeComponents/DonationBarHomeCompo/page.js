// "use client";

// import { useEffect, useState, useRef } from "react";

// export default function DonationBar() {
//   const [filters, setFilters] = useState([]);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [selectedOptions, setSelectedOptions] = useState({});
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     setFilters([
//       { id: 1, label: "Services", options: ["Education", "Health", "Food", "Water"] },
//       { id: 2, label: "Program", options: ["Ramadan", "Orphan Support", "Disaster Relief"] },
//       { id: 3, label: "Payment Type", options: ["Single Payment", "Monthly Payment"] },
//       { id: 4, label: "Amount", options: ["$10", "$50", "$100", "$500"] },
//       { id: 5, label: "Category", options: ["Sadqah", "Zakat", "General Donation"] },
//     ]);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpenDropdown(null);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleDropdownToggle = (id) => {
//     setOpenDropdown((prev) => (prev === id ? null : id));
//   };

//   const handleOptionSelect = (filterId, option) => {
//     setSelectedOptions((prev) => ({ ...prev, [filterId]: option }));
//     setOpenDropdown(null);
//   };

//   return (
//     <div className="my-10">
//       <div
//         className="bg-[#F7F5F4] rounded-3xl shadow-sm w-full mx-auto p-8"
//         ref={dropdownRef}
//       >
//         {/* Heading */}
//         <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#111] mb-6">
//           Your Donation, Their Relief
//         </h2>

//         {/* Dropdowns + Button Row */}
//         <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
//           <div className="flex flex-wrap flex-1 items-center gap-4 lg:gap-6 justify-start">
//             {filters.map((item) => (
//               <div key={item.id} className="relative flex-1 min-w-[150px] lg:min-w-[180px] max-w-[200px]">
//                 {/* Button */}
//                 <button
//                   onClick={() => handleDropdownToggle(item.id)}
//                   className="flex items-center justify-between w-full gap-2 bg-white rounded-full px-6 py-3 shadow-md text-[15px] font-medium text-[#111] border border-gray-200 hover:bg-gray-50 transition-all"
//                 >
//                   <span>{selectedOptions[item.id] || item.label}</span>
//                   <svg
//                     width="18"
//                     height="18"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     className={`transition-transform ${
//                       openDropdown === item.id ? "rotate-180" : ""
//                     }`}
//                   >
//                     <path
//                       d="M6 9l6 6 6-6"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </button>

//                 {/* Dropdown menu */}
//                 {openDropdown === item.id && (
//                   <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
//                     {item.options.map((opt, i) => (
//                       <button
//                         key={i}
//                         onClick={() => handleOptionSelect(item.id, opt)}
//                         className="block w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
//                       >
//                         {opt}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Donate Button */}
//           <button className="h-12 px-10 rounded-full bg-[#BC153F] text-white font-semibold text-[15px] shadow-md hover:bg-[#A11135] transition-all whitespace-nowrap">
//             Donate Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState, useRef } from "react";
import useServicesStore from "@/app/lib/stores/servicesStore";
import useProgramsStore from "@/app/lib/stores/programsStore";
import DonationModal from "../../DonationModal/DonationModal";
import useCategoryStore from "@/app/lib/stores/CategoryStore";

export default function DonationBar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedService, setSelectedService] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedPaymentFreq, setSelectedPayment] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Zustand data
  const services = useServicesStore((state) => state.services);
  const programs = useProgramsStore((state) => state.programs);
  const donationCategories = useCategoryStore((state) => state.categories);
  const fetchCategories = useCategoryStore((state) => state.fetchCategories);
  const loading = useCategoryStore((state) => state.loading);

  const paymentTypes = ["One-Time", "Monthly", "Yearly"];
  const amounts = ["$10", "$50", "$100", "$500"];
  const categories = ["Sadqah", "Zakat", "General Donation"];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownToggle = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
    if (name === "category" && donationCategories.length === 0) {
      fetchCategories();
    }
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setSelectedProgram(""); // disable program
    setOpenDropdown(null);
  };

  const handleProgramSelect = (program) => {
    setSelectedProgram(program);
    setSelectedService(""); // disable service
    setOpenDropdown(null);
  };

  const handleSimpleSelect = (setter, value) => {
    setter(value);
    setOpenDropdown(null);
  };

  const handleDonateNow = () => {
    setOpen(true);
  };

  return (
    <>
      {/* Donation Bar */}
      <div className="my-10">
        <div
          className="bg-[#F7F5F4] rounded-3xl shadow-sm w-full mx-auto p-8"
          ref={dropdownRef}
        >
          <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#111] mb-6">
            Your Donation, Their Relief
          </h2>

          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            <div className="flex flex-wrap flex-1 items-center gap-4 lg:gap-6 justify-start">
              {/* Service Dropdown */}
              <div className="relative flex-1 min-w-[150px] lg:min-w-[180px] max-w-[200px]">
                <button
                  onClick={() => handleDropdownToggle("service")}
                  disabled={!!selectedProgram}
                  className={`flex items-center cursor-pointer justify-between w-full gap-2 bg-white rounded-full px-6 py-3 shadow-md text-[15px] font-medium text-[#111] border border-gray-200 transition-all ${
                    selectedProgram
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span>{selectedService || "Services"}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transition-transform ${
                      openDropdown === "service" ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {openDropdown === "service" && (
                  <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleServiceSelect(service.title)}
                        className="block w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        {service.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Program Dropdown */}
              <div className="relative flex-1 min-w-[150px] lg:min-w-[180px] max-w-[200px]">
                <button
                  onClick={() => handleDropdownToggle("program")}
                  disabled={!!selectedService}
                  className={`flex items-center justify-between cursor-pointer w-full gap-2 bg-white rounded-full px-6 py-3 shadow-md text-[15px] font-medium text-[#111] border border-gray-200 transition-all ${
                    selectedService
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span>{selectedProgram || "Program"}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transition-transform ${
                      openDropdown === "program" ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {openDropdown === "program" && (
                  <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                    {programs.map((program) => (
                      <button
                        key={program.id}
                        onClick={() => handleProgramSelect(program.title)}
                        className="block w-full text-left px-6 cursor-pointer py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        {program.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Payment, Amount, Category */}
              {[
                {
                  name: "payment",
                  label: "Payment Type",
                  items: ["One-Time", "Monthly", "Yearly"],
                  value: selectedPaymentFreq,
                  setter: setSelectedPayment,
                },
                {
                  name: "amount",
                  label: "Amount",
                  items: ["$10", "$50", "$100", "$500"],
                  value: selectedAmount,
                  setter: setSelectedAmount,
                },
                {
                  name: "category",
                  label: "Category",
                  items:
                    donationCategories.length > 0
                      ? donationCategories.map((c) => c.name)
                      : [],
                  value: selectedCategory,
                  setter: setSelectedCategory,
                },
              ].map(({ name, label, items, value, setter }) => (
                <div
                  key={name}
                  className="relative flex-1 min-w-[150px] lg:min-w-[180px] max-w-[200px]"
                >
                  <button
                    onClick={() => handleDropdownToggle(name)}
                    className="flex items-center cursor-pointer justify-between w-full gap-2 bg-white rounded-full px-6 py-3 shadow-md text-[15px] font-medium text-[#111] border border-gray-200 hover:bg-gray-50 transition-all"
                  >
                    <span>{value || label}</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`transition-transform ${
                        openDropdown === name ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {openDropdown === name && (
                    <div className="absolute z-50 mt-2 w-full  bg-white border border-gray-200 rounded-lg shadow-lg">
                      {items.map((item) => (
                        <button
                          key={item}
                          onClick={() => handleSimpleSelect(setter, item)}
                          className="block w-full text-left  px-6 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Donate Now Button */}
            <button
              onClick={handleDonateNow}
              className="h-12 px-10 cursor-pointer rounded-full bg-[#BC153F] text-white font-semibold text-[15px] shadow-md hover:bg-[#A11135] transition-all whitespace-nowrap"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      <DonationModal
        open={open}
        setOpen={setOpen}
        selectedService={selectedService}
        selectedProgram={selectedProgram}
        selectedPaymentFreq={selectedPaymentFreq}
        selectedAmount={selectedAmount}
        selectedCategory={selectedCategory}
      />
    </>
  );
}
