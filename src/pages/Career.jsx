import React from "react";

import about from "../assets/about-us.jpg.jpeg";
import cmd from "../assets/team/Muhammed-isa.jpg";
import PageBanner from "../components/PageBanner";

const Career = () => {
  return (
    <>
      <PageBanner title={"Careers"} image={about} />

      <div className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">

          {/* ================= LEFT SECTION (APPLICATION FORM) ================= */}
          <div className="w-full lg:w-2/3 bg-white p-6 md:p-10 rounded-2xl shadow-lg">

            <h2 className="text-3xl font-bold mb-6 text-blue-700">
              Join Our Medical Team
            </h2>

            <p className="text-gray-600 mb-6">
              We are always looking for passionate and dedicated healthcare
              professionals to join our growing team. Fill out the application
              form below and our HR department will contact you.
            </p>

            <form className="space-y-5">

              {/* Select Position */}
              <div className="relative">
                <select
                  required
                  className="w-full appearance-none border rounded-lg p-3 pr-10
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Position Applying For</option>
                  <option>Medical Doctor</option>
                  <option>Nurse</option>
                  <option>Laboratory Scientist</option>
                  <option>Pharmacist</option>
                  <option>Administrative Staff</option>
                  <option>Intern</option>
                </select>
              </div>

              {/* Experience Level */}
              <div className="relative">
                <select
                  required
                  className="w-full appearance-none border rounded-lg p-3 pr-10
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Years of Experience</option>
                  <option>0 - 1 Year</option>
                  <option>2 - 5 Years</option>
                  <option>6 - 10 Years</option>
                  <option>10+ Years</option>
                </select>
              </div>

              {/* Upload CV */}
              <input
                type="file"
                required
                className="w-full border rounded-lg p-3
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Name */}
              <input
                type="text"
                required
                placeholder="Enter your full name *"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Email */}
              <input
                type="email"
                required
                placeholder="Enter your email *"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Phone */}
              <input
                type="tel"
                required
                placeholder="Enter your phone number *"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Cover Letter */}
              <textarea
                placeholder="Write a short cover letter *"
                rows="4"
                className="w-full border rounded-lg p-3 resize-none
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3
                rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Submit Application
              </button>

            </form>
          </div>

          {/* ================= RIGHT SECTION ================= */}
          <div className="w-full lg:w-1/3 shrink-0 bg-white p-6 md:p-10 rounded-2xl shadow-lg">

            <h3 className="text-2xl font-bold mb-5 text-center text-blue-700">
              Why Work With Us?
            </h3>

            <hr className="border-gray-300 mb-6" />

            {/* Image + Info */}
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-6">

              <img
                src={cmd}
                alt="Medical Director"
                className="w-32 h-32 object-cover rounded-2xl shadow-md"
              />

              <div className="flex-1 py-4">

                <h1 className="text-lg font-bold text-gray-800 break-words">
                  Dr. Isa Muhammed
                </h1>

                <p className="text-gray-600 break-words">
                  Chief Medical Director
                </p>

              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Our clinic is committed to excellence in patient care,
              professional development, and creating a supportive
              work environment for all staff members.
            </p>

            {/* Benefits Section */}
            <div className="bg-blue-600 p-6 md:p-8 rounded-lg shadow-lg text-white mt-8">

              <h3 className="text-xl font-bold mb-5">Employee Benefits</h3>

              <ul className="space-y-4 list-disc list-inside text-white/90">

                <li>Competitive Salary Packages</li>
                <li>Continuous Professional Training</li>
                <li>Friendly & Supportive Work Environment</li>
                <li>Career Growth Opportunities</li>
                <li>Health Insurance Benefits</li>

              </ul>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Career;