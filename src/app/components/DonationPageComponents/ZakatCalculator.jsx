  "use client"

  import { useState } from "react"

  export default function ZakatCalculator() {
    const [formData, setFormData] = useState({
      goldSilver: "",
      money: "",
      otherSavings: "",
      investment: "",
      shortTermLiabilities: "",
      businessAssets: "",
      moneyOwedToYou: "",
      otherOutgoings: "",
    })

    const formatCurrency = (value) => {
      if (!value) return ""
      const numeric = value.replace(/[^\d.]/g, "") // remove non-numeric
      if (numeric === "") return ""
      return "$" + Number(numeric).toLocaleString()
    }

    const parseNumber = (value) => {
      const numeric = value.replace(/[^\d.]/g, "")
      return parseFloat(numeric) || 0
    }

    const handleInputChange = (e) => {
      const { name, value } = e.target
      setFormData((prev) => ({
        ...prev,
        [name]: formatCurrency(value),
      }))
    }

    const totalAssets =
      parseNumber(formData.goldSilver) +
      parseNumber(formData.money) +
      parseNumber(formData.otherSavings) +
      parseNumber(formData.investment) +
      parseNumber(formData.businessAssets) +
      parseNumber(formData.moneyOwedToYou)

    const totalLiabilities =
      parseNumber(formData.shortTermLiabilities) +
      parseNumber(formData.otherOutgoings)

    const netWorth = totalAssets - totalLiabilities
    const zakat = netWorth > 0 ? netWorth * 0.025 : 0

    const bulletPoints = [
      "Easily calculate your Zakat online on gold, silver, cash, savings, and investments. Our Zakat calculator follows authentic Islamic guidelines to ensure accurate and fair results every time.",
      "Our Zakat calculator is designed according to Shariah rules, ensuring your calculation meets Islamic obligations for wealth purification and helping you fulfill your duty with confidence.",
      "From gold and silver to bank balances, business assets, and savings, the calculator covers every eligible category, helping you find your total payable Zakat with ease.",
      "No complex steps or confusion. Enter your assets, and the calculator instantly determines your due Zakat amount, saving time and ensuring complete accuracy.",
      "The calculator uses the latest Nisab rates based on gold and silver market values, helping you stay current and calculate your Zakat according to today’s standards.",
      "Know exactly what you owe before donating. With accurate calculation and transparent results, you can fulfill your Zakat confidently and contribute where it matters most.",
    ]

    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-normal mb-3">
              Use Zakat Calculator for Accurate Giving
            </h1>
            <p className="text-gray-600 text-lg">
              Easily calculate your Zakat on gold, silver, cash, and savings with our online calculator, designed to follow Islamic Zakat guidelines accurately.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* LEFT SIDE */}
            <div className="border border-gray-200 rounded-2xl shadow-lg bg-white flex flex-col h-full p-8">
              <div className="flex flex-col justify-between h-full mt-5 py-5">
                {bulletPoints.map((point, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0 mt-[3px]">
                      <div className="w-2.5 h-2.5 bg-[#BC153F] rounded-full"></div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col shadow-lg rounded-2xl overflow-hidden bg-white h-full">
              <div className="bg-[#BC153F] text-white px-6 py-3">
                <h2 className="text-xl font-bold">Zakat Calculator</h2>
              </div>

              <div className="p-6 border-t border-gray-200 flex flex-col justify-between h-full">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Gold and Silver", sub: "Value of Gold & Silver you possess", name: "goldSilver", highlight: true },
                    { label: "Money", sub: "Cash at Home & Bank Accounts", name: "money", highlight: true },
                    { label: "Other Savings", sub: "", name: "otherSavings" },
                    { label: "Investment & Share Values", sub: "", name: "investment" },
                    { label: "Short Term Liabilities", sub: "Money You Owe", name: "shortTermLiabilities", highlight: true },
                    { label: "Business Assets", sub: "Stock Value", name: "businessAssets", highlight: true },
                    { label: "Money owed to you", sub: "", name: "moneyOwedToYou" },
                    { label: "Other Outgoings Due", sub: "", name: "otherOutgoings" },
                  ].map((field, i) => (
                    <div key={i}>
                      <label
                        className={`block font-semibold mb-1 ${
                          field.highlight ? "text-[#BC153F]" : "text-gray-800"
                        }`}
                      >
                        {field.label}
                      </label>
                      <p className="text-gray-600 text-xs mb-2">{field.sub || "\u00A0"}</p>
                      <input
                        type="text"
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#BC153F]"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <label className="block text-gray-800 font-semibold mb-1">Total Zakat (2.5%)</label>
                  <input
                    type="text"
                    disabled
                    value={`$${zakat.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
                    className="w-full rounded px-3 py-2 bg-gray-50 text-gray-700 font-semibold"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
