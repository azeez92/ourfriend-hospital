import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../Components/PageBanner";
import about from "../assets/about-us.jpg.jpeg";

const Sitemap = () => {
  return (
    <>
      <PageBanner title={"Sitemap"} image={about} />

      <div className="bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-10 rounded-2xl shadow">

          <h2 className="text-2xl font-bold text-blue-700 dark:text-white mb-8">
            Website Pages
          </h2>

          <ul className="space-y-4 text-gray-700 dark:text-gray-300">

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/appointment">Appointment</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/hmo">HMO</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/helpcenter">Help Center</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>

          </ul>

          {/* Download Button */}
          <div className="mt-10 text-center">
            <a
              href="/sitemap.xml"
              download
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Download XML Sitemap
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Sitemap;
