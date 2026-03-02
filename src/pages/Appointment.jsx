import React from "react";

import about from "../assets/about-us.jpg.jpeg";
import cmd from "../assets/team/Muhammed-isa.jpg";
import PageBanner from "../components/PageBanner";

const Appointment = () => {
  return (
    <>
      <PageBanner title={"Appointment"} image={about} />

      <div className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">

          {/* ================= LEFT SECTION (FORM) ================= */}
          <div className="w-full lg:w-2/3 bg-white p-6 md:p-10 rounded-2xl shadow-lg">

            <h2 className="text-3xl font-bold mb-6 text-blue-700">
              Book an Appointment
            </h2>

            <p className="text-gray-600 mb-6">
              Schedule a visit with our experienced medical professionals.
              Fill in the form below and we will get back to you shortly.
            </p>

            <form className="space-y-5">

              {/* Select Department */}
              <div className="relative">
                <select
                  required
                  className="w-full appearance-none border rounded-lg p-3 pr-10
                  focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Select Department</option>
                  <option>General Medicine</option>
                  <option>Pediatrics</option>
                  <option>Dentistry</option>
                  <option>Gynecology</option>
                  <option>Eye Clinic</option>
                  <option>Laboratory</option>
                </select>

                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center text-gray-600 leading-none">
                  <span className="text-xs font-bold">▲</span>
                  <span className="-mt-1 text-xs font-bold">▼</span>
                </div>
              </div>

              {/* Select Doctor */}
              <div className="relative">
                <select
                  required
                  className="w-full appearance-none border rounded-lg p-3 pr-10
                  focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Select Doctor</option>
                  <option>Dr. Akintunde Clement</option>
                  <option>Dr. Omonayin Femi</option>
                </select>

                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center text-gray-600 leading-none">
                  <span className="text-xs font-bold">▲</span>
                  <span className="-mt-1 text-xs font-bold">▼</span>
                </div>
              </div>

              {/* Visited Before */}
              <div className="relative">
                <select
                  required
                  className="w-full appearance-none border rounded-lg p-3 pr-10
                  focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Have you visited before?</option>
                  <option>New Patient</option>
                  <option>Returning Patient</option>
                  <option>Other</option>
                </select>

                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center text-gray-600 leading-none">
                  <span className="text-xs font-bold">▲</span>
                  <span className="-mt-1 text-xs font-bold">▼</span>
                </div>
              </div>

              {/* Appointment Date */}
              <input
                type="text"
                required
                placeholder="Appointment Date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                className="w-full border rounded-lg p-3
                focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              {/* Name */}
              <input
                type="text"
                required
                placeholder="Enter your full name *"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              {/* Email */}
              <input
                type="email"
                required
                placeholder="Enter your email *"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              {/* Phone */}
              <input
                type="tel"
                required
                placeholder="Enter your phone number *"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              {/* Message */}
              <div className="relative">
                <textarea
                  placeholder="Your message *"
                  rows="3"
                  className="w-full border rounded-lg p-3 pr-10 resize-none overflow-hidden
                  focus:outline-none focus:ring-2 focus:ring-amber-500"
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = e.target.scrollHeight + "px";
                  }}
                ></textarea>

                <div className="absolute bottom-3 right-3 text-gray-500 text-xs pointer-events-none">
                  ⤢
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-3
                rounded-lg hover:bg-amber-600 transition duration-300"
              >
                Request an Appointment
              </button>

            </form>
          </div>

          {/* ================= RIGHT SECTION ================= */}
          <div className="w-full lg:w-1/3 shrink-0 bg-white p-6 md:p-10 rounded-2xl shadow-lg">

            <h3 className="text-2xl font-bold mb-5 text-center text-blue-700">
              The Heart Of Clinic
            </h3>

            <hr className="border-gray-300 mb-6" />

            {/* Image + Details */}
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-6">

              <img
                src={cmd}
                alt="Founder"
                className="w-32 h-32 object-cover rounded-2xl shadow-md"
              />

              <div className="flex-1 py-4">

                <h1 className="text-lg font-bold text-gray-800 break-words">
                  Dr. Isa Muhammed
                </h1>

                <p className="text-gray-600 break-words">
                  Chief Medical Director
                </p>

                <p className="text-gray-600 break-words">
                  📞{" "}
                  <a href="tel:+2348001234567" className="hover:text-amber-600">
                    +234 800 123 4567
                  </a>
                </p>

              </div>

            </div>

            <p className="text-gray-600 mt-5 leading-relaxed">
              Our founder is a dedicated healthcare professional with years of
              experience committed to improving community health.
            </p>

            {/* Working Time */}
            <div className="bg-blue-500 p-6 md:p-10 rounded-lg shadow-lg text-white mt-8 w-full max-w-full">

              <h3 className="text-2xl font-bold mb-6">Working Time</h3>

              <p className="mb-8 text-white/90">
                Our doors are open to provide quality and friendly healthcare
                services throughout the week. Visit us during the hours below:
              </p>

              <div className="space-y-6">

                <div className="flex justify-between border-b border-dashed border-white/30 pb-4">
                  <span>Monday – Wednesday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>

                <div className="flex justify-between border-b border-dashed border-white/30 pb-4">
                  <span>Thursday</span>
                  <span>9:00 AM - 6:30 PM</span>
                </div>

                <div className="flex justify-between border-b border-dashed border-white/30 pb-4">
                  <span>Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>

                <div className="flex justify-between border-b border-dashed border-white/30 pb-4">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>

                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Appointment;