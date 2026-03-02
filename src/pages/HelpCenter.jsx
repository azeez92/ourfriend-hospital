import React from "react";
import about from "../assets/about-us.jpg.jpeg";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaCalendarCheck,
  FaQuestionCircle,
  FaUserMd,
  FaPhoneAlt,
  FaBriefcase,
} from "react-icons/fa";
import PageBanner from "../components/PageBanner";

const HelpCenter = () => {
  return (
    <>
      <PageBanner title={"Help Center"} image={about} />

      <div className="bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-16 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">

          {/* ================= HEADER ================= */}
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-blue-700 dark:text-white mb-4">
              How Can We Help You Today?
            </h2>

            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search help topics..."
                className="w-full p-4 pl-12 rounded-xl border
                focus:outline-none focus:ring-2 focus:ring-blue-500
                dark:bg-gray-800 dark:text-white"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* ================= HELP CATEGORIES ================= */}
          <div className="grid md:grid-cols-3 gap-8">

            <Link
              to="/appointment"
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow hover:shadow-lg transition text-center"
            >
              <FaCalendarCheck className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold dark:text-white">
                Book Appointment
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Schedule or manage your hospital visits.
              </p>
            </Link>

            <Link
              to="/faq"
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow hover:shadow-lg transition text-center"
            >
              <FaQuestionCircle className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold dark:text-white">
                FAQs
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Find answers to commonly asked questions.
              </p>
            </Link>

            <Link
              to="/services"
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow hover:shadow-lg transition text-center"
            >
              <FaUserMd className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold dark:text-white">
                Our Services
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Learn about treatments and medical services.
              </p>
            </Link>

            <Link
              to="/career"
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow hover:shadow-lg transition text-center"
            >
              <FaBriefcase className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold dark:text-white">
                Careers
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Apply to join our healthcare team.
              </p>
            </Link>

            <Link
              to="/contact"
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow hover:shadow-lg transition text-center"
            >
              <FaPhoneAlt className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold dark:text-white">
                Contact Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Speak directly with our support team.
              </p>
            </Link>

          </div>

          {/* ================= EMERGENCY ================= */}
          <div className="mt-16 bg-blue-600 text-white p-10 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              Emergency Assistance
            </h3>
            <p className="mb-6">
              If this is a medical emergency, please call immediately.
            </p>

            <a
              href="tel:+2348001234567"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Call Emergency Line
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default HelpCenter;