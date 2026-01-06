"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useServicesStore from "@/app/lib/stores/servicesStore";
import useProgramsStore from "@/app/lib/stores/programsStore";
import useCategoryStore from "@/app/lib/stores/CategoryStore";
import PayPalCheckoutButton from "../PayPalCheckoutButton";

export default function DonationModal({
  open,
  setOpen,
  selectedService,
  selectedProgram,
  selectedPaymentFreq,
  selectedAmount,
  selectedCategory,
}) {
  const [paymentFrequency, setPaymentFrequency] = useState("One-Time");
  const [donationType, setDonationType] = useState("Zakat");
  const [paymentOption, setPaymentOption] = useState("Credit/Debit Card");
  const [donationAmount, setDonationAmount] = useState("");
  const [selectedServiceOption, setSelectedServiceOption] = useState("");
  const [selectedProgramOption, setSelectedProgramOption] = useState("");
  const modalRef = useRef(null);
  // const [categories, setCategories] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const [errors, setErrors] = useState({});

  // Get data from Zustand stores
  const services = useServicesStore((state) => state.services);
  const programs = useProgramsStore((state) => state.programs);
  const donationCategories = useCategoryStore((state) => state.categories);
  const fetchCategories = useCategoryStore((state) => state.fetchCategories);
  const loading = useCategoryStore((state) => state.loading);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Auto-populate all fields when modal opens
  useEffect(() => {
    if (open) {
      if (selectedService) {
        setSelectedServiceOption(selectedService);
        setSelectedProgramOption("");
      } else if (selectedProgram) {
        setSelectedProgramOption(selectedProgram);
        setSelectedServiceOption("");
      }
      if (selectedPaymentFreq) setPaymentFrequency(selectedPaymentFreq);
      if (selectedAmount) setDonationAmount(selectedAmount);
      if (selectedCategory) setDonationType(selectedCategory);
    }

    // Reset on close
    if (!open) {
      setSelectedServiceOption("");
      setSelectedProgramOption("");
      setPaymentFrequency("One-Time");
      setDonationType("Zakat");
      setPaymentOption("Credit/Debit Card");
      setDonationAmount("");
    }
  }, [
    open,
    selectedService,
    selectedProgram,
    selectedPaymentFreq,
    selectedAmount,
    selectedCategory,
  ]);

  const validateFields = () => {
    let newErrors = {};

    if (!donationAmount) newErrors.donationAmount = "Amount is required.";
    if (!donationType)
      newErrors.donationType = "Please select a donation type.";
    if (!selectedServiceOption && !selectedProgramOption)
      newErrors.support = "Select either a Service or a Program.";
    if (!userName.trim()) newErrors.userName = "Name is required.";
    if (!userEmail.trim()) newErrors.userEmail = "Email is required.";
    if (!userAddress.trim()) newErrors.userAddress = "Address is required.";
    if (!userPhone.trim()) newErrors.userPhone = "Phone number is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle service selection - disable program dropdown
  const handleServiceChange = (e) => {
    const value = e.target.value;
    setSelectedServiceOption(value);
    if (value) {
      setSelectedProgramOption("");
    }
  };

  // Handle program selection - disable service dropdown
  const handleProgramChange = (e) => {
    const value = e.target.value;
    setSelectedProgramOption(value);
    if (value) {
      setSelectedServiceOption("");
    }
  };

  useEffect(() => {
    if (open) fetchCategories();
  }, [open]);

  const isFormValid = () => {
    return (
      donationAmount &&
      donationType &&
      (selectedServiceOption || selectedProgramOption) &&
      userName.trim() &&
      userEmail.trim() &&
      userAddress.trim() &&
      userPhone.trim()
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-[#001B44]/30 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white w-full max-w-3xl rounded-2xl shadow-xl relative overflow-hidden"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-8 right-8 text-gray-200 hover:text-gray-700 text-4xl font-bold"
            >
              &times;
            </button>
            {/* Header */}
            <div className="bg-[#22305B] text-white py-4 px-6 text-xl font-semibold mt-5">
              Quick & Easy Donate
            </div>

            {/* Body */}
            <div className="p-8 space-y-6 overflow-y-auto max-h-[80vh] relative">
              {/* Donation Frequency */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Select Donation Frequency
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["One-Time", "Monthly", "Yearly"].map((freq) => (
                    <button
                      key={freq}
                      onClick={() => setPaymentFrequency(freq)}
                      className={`px-4 py-2 rounded font-medium ${
                        paymentFrequency === freq
                          ? "bg-[#BC153F] text-white"
                          : "border border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {freq}
                    </button>
                  ))}
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Your Own Amount"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                      className="border border-gray-300 px-4 py-2 rounded w-full sm:w-auto"
                    />
                    {errors.donationAmount && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.donationAmount}
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  With just $25, you can provide a struggling family with enough
                  food to stay.
                </p>
              </div>

              {/* Donation Type */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Donation Type
                </h3>
                <div>
                  <select
                    value={donationType}
                    onChange={(e) => setDonationType(e.target.value)}
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                  >
                    <option value="">Select Donation Category</option>
                    {donationCategories.map((category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>

                  {errors.donationType && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.donationType}
                    </p>
                  )}
                </div>
              </div>

              {/* Support Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Support a Service
                  </h3>
                  <select
                    className={`border border-gray-300 rounded px-4 py-2 w-full ${
                      selectedProgramOption
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    value={selectedServiceOption}
                    onChange={handleServiceChange}
                    disabled={!!selectedProgramOption}
                  >
                    <option value="">Services</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Support a Program
                  </h3>
                  <select
                    className={`border border-gray-300 rounded px-4 py-2 w-full ${
                      selectedServiceOption
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    value={selectedProgramOption}
                    onChange={handleProgramChange}
                    disabled={!!selectedServiceOption}
                  >
                    <option value="">Program</option>
                    {programs.map((program) => (
                      <option key={program.id} value={program.title}>
                        {program.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* User Details */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Your Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                    {errors.userName && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.userName}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                    {errors.userEmail && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.userEmail}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Address"
                      value={userAddress}
                      onChange={(e) => setUserAddress(e.target.value)}
                      className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                    {errors.userAddress && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.userAddress}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Phone Number"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                    {errors.userPhone && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.userPhone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment Options */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Payment Options
                </h3>
                <div className="flex flex-wrap items-center gap-6">
                  {["Credit/Debit Card", "PayPal", "Bank Transfer"].map(
                    (option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentOption === option}
                          onChange={() => setPaymentOption(option)}
                        />
                        <span>{option}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* {paymentOption === "PayPal" && donationAmount && (
                  <div className="mt-6">
                    <PayPalCheckoutButton amount={donationAmount} />
                  </div>
                )} */}

              {paymentOption === "PayPal" && (
                <div className="mt-6">
                  {isFormValid() ? (
                    <PayPalCheckoutButton amount={donationAmount} />
                  ) : (
                    <p className="text-gray-600 text-sm">
                      Please complete the required fields above.
                    </p>
                  )}
                </div>
              )}

              {paymentOption !== "PayPal" && (
                <div className="flex justify-end flex-1 lg:flex-none">
                  <button
                    onClick={() => validateFields()}
                    className="h-12 px-10 rounded-full bg-[#BC153F] text-white font-semibold"
                  >
                    Donate Now
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
