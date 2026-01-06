// "use client"

// import { useState } from "react"

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//     // Handle form submission here
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="w-full mx-auto px-8 py-16">
//         <div className="grid grid-cols-2 gap-16">
//           {/* Left Section - Contact Form */}
//           <div>
//             <h1 className="text-4xl font-bold mb-4">Get in Touch With Us</h1>
//             <p className="text-gray-600 mb-8 leading-relaxed">
//               We're here to answer your questions, support your journey, and work together in making a difference.We're
//               here to answer your questions, support your journey, and work together in making a difference.
//             </p>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               {/* Name and Email Row */}
//               <div className="grid grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BC153F] focus:border-transparent"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BC153F] focus:border-transparent"
//                 />
//               </div>

//               {/* Subject */}
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BC153F] focus:border-transparent"
//               />

//               {/* Message */}
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="6"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BC153F] focus:border-transparent resize-none"
//               />

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="px-6 py-3 bg-[#BC153F] hover:bg-[#A0122B] text-white font-semibold rounded-lg transition-colors"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>

//           {/* Right Section - Offices */}
//           <div>
//             <h1 className="text-4xl font-bold mb-4">Offices</h1>
//             <p className="text-gray-600 mb-8 leading-relaxed">
//               We're here to answer your questions, support your journey, and work together in making a difference.We're
//               here to answer your difference.
//             </p>

//             {/* Office Cards */}
//             <div className="space-y-6">
//               {/* Address Card */}
//               <div className="flex gap-4 bg-gray-100 p-3 rounded-xl">
//                 <div className="w-16 h-16 bg-[#BC153F] rounded-lg flex-shrink-0 flex items-center justify-center">
//                   <img src="/contact1.png" alt="Address" className="w-8 h-8" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-lg mb-1">Address</h3>
//                   <p className="text-gray-600 text-sm">Baltussalam USA. [Insert Office Address]</p>
//                 </div>
//               </div>

//               {/* Phone Card */}
//               <div className="flex gap-4 bg-gray-100 p-3 rounded-xl">
//                 <div className="w-16 h-16 bg-[#BC153F] rounded-lg flex-shrink-0 flex items-center justify-center">
//                   <img src="/contact2.png" alt="Phone" className="w-8 h-8" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-lg mb-1">Phone</h3>
//                   <p className="text-gray-600 text-sm">+44 [Insert Number]</p>
//                 </div>
//               </div>

//               {/* Accountability Card */}
//               <div className="flex gap-4 bg-gray-100 p-3 rounded-xl">
//                 <div className="w-16 h-16 bg-[#BC153F] rounded-lg flex-shrink-0 flex items-center justify-center">
//                   <img src="/contact3.png" alt="Accountability" className="w-8 h-8" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-lg mb-1">Accountability</h3>
//                   <p className="text-gray-600 text-sm">Monday - Friday | 9:00 AM - 5:00 PM</p>
//                 </div>
//               </div>

//               {/* Email Card */}
//               <div className="flex gap-4 bg-gray-100 p-3 rounded-xl">
//                 <div className="w-14 h-14 bg-[#BC153F] rounded-lg flex-shrink-0 flex items-center justify-center">
//                   <img src="/contact4.png" alt="Email" className="w-8 h-8" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-lg mb-1">Email</h3>
//                   <p className="text-gray-600 text-sm">info@baltussalam.org.USA</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"

import { useState } from "react"
import { createContact } from "@/app/lib/api/services.server"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const res = await createContact(formData) 

    if (res?.success) {
      setStatus({ type: "success", message: "Message sent successfully!" })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } else {
      setStatus({ type: "error", message: "Failed to send message. Try again!" })
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Section - Contact Form */}
          <div>
            <h1 className="text-4xl font-bold mb-4">Get in Touch With Us</h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Unsure where your donation goes? Want real impact, not confusion? Get in touch with us today. We ensure your charity reaches the right hands, with full trust, transparency, and care.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BC153F]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BC153F]"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BC153F]"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BC153F] resize-none"
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-[#BC153F] hover:bg-[#A0122B] cursor-pointer text-white font-semibold rounded-lg transition-colors disabled:opacity-70"
              >
                {loading ? "Sending..." : "Submit"}
              </button>

              {status && (
                <p
                  className={`mt-2 text-sm ${
                    status.type === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>

          {/* Right Section - Offices */}
          <div>
            <h1 className="text-4xl font-bold mb-4">USA Office:</h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have questions or want to make an impact? Contact our USA office for trusted guidance and support.

            </p>

            <div className="space-y-6">
              {[
                {
                  icon: "/contact1.png",
                  title: "Address",
                  desc: "Baltussalam USA. [Insert Office Address]",
                },
                {
                  icon: "/contact2.png",
                  title: "Phone",
                  desc: "+44 [Insert Number]",
                },
                {
                  icon: "/contact3.png",
                  title: "Accountability",
                  desc: "Monday - Friday | 9:00 AM - 5:00 PM",
                },
                {
                  icon: "/contact4.png",
                  title: "Email",
                  desc: "info@baltussalam.org.USA",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-gray-100 p-3 rounded-xl">
                  <div className="w-16 h-16 bg-[#BC153F] rounded-lg flex items-center justify-center">
                    <img src={item.icon} alt={item.title} className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
