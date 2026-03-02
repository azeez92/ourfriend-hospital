import React from "react";

import about from "../assets/about-us.jpg.jpeg";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import PageBanner from "../components/PageBanner";

const Hmo = () => {
  const hmoList = [
    "AXA Mansard Health",
    "Hygeia HMO",
    "Reliance HMO",
    "Avon HMO",
    "Total Health Trust",
    "Leadway Health",
  ];

  return (
    <>
      <PageBanner title={"HMO & Insurance"} image={about} />

      <div className="bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-16 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">

          {/* ================= INTRO SECTION ================= */}
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-blue-700 dark:text-white mb-4">
              Health Insurance & HMO Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our hospital partners with leading Health Maintenance
              Organizations (HMOs) to ensure accessible and affordable
              healthcare for our patients.
            </p>
          </div>

          {/* ================= ACCEPTED HMOs ================= */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow mb-16">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-white mb-6">
              Accepted HMOs
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {hmoList.map((hmo, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg"
                >
                  <FaCheckCircle className="text-green-600" />
                  <span className="text-gray-700 dark:text-gray-200">
                    {hmo}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= HOW IT WORKS ================= */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
              <h4 className="font-bold text-lg mb-3 text-blue-600 dark:text-white">
                1. Present Your HMO Card
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Upon arrival, present your valid HMO card at the reception desk
                for verification.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
              <h4 className="font-bold text-lg mb-3 text-blue-600 dark:text-white">
                2. Verification Process
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Our HMO desk will confirm your eligibility and coverage before
                treatment begins.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
              <h4 className="font-bold text-lg mb-3 text-blue-600 dark:text-white">
                3. Receive Treatment
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Once verified, you will receive the necessary medical care
                covered under your plan.
              </p>
            </div>

          </div>

          {/* ================= CONTACT SECTION ================= */}
          <div className="bg-blue-600 text-white p-10 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              Need Help With Your HMO?
            </h3>

            <p className="mb-6 text-white/90">
              Contact our HMO support desk for verification, coverage
              inquiries, or assistance.
            </p>

            <a
              href="tel:+2348001234567"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              <FaPhoneAlt />
              Call HMO Desk
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Hmo;