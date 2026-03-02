import React from "react";
import founderImg from "../assets/team/Muhammed-isa.jpg"; // Add founder image in assets
import { FaStethoscope, FaAward, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import signature from "../assets/signature-isa.png"
import PageBanner from "../components/PageBanner";
import founderbanner from "../assets/bannerImage/founder-banner.jpg";

const Founder = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">

   <PageBanner title="Founder"  image={founderbanner}/>

      {/* ================= ABOUT FOUNDER ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src={founderImg}
            alt="Dr Muhammed Isa"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400">
            About the Founder
          </h2>

          <p className="mb-4 leading-relaxed">
            Dr. Muhammed Isa is a highly respected medical practitioner
            dedicated to providing accessible, high-quality healthcare to the
            community. With years of clinical experience and leadership in
            medical administration, he founded Our Friend Hospital to bridge
            the gap between diagnosis and effective treatment.
          </p>

          <p className="mb-4 leading-relaxed">
            His philosophy centers on accurate diagnosis, patient-centered
            care, and the integration of modern medical technologies to improve
            healthcare outcomes.
          </p>

          <p className="leading-relaxed">
            Under his leadership, the hospital has grown into a trusted
            healthcare provider serving individuals, families, and corporate
            organizations.
          </p>

          <img src={signature} className="w-60 mt-10" alt="" />
        </div>
      </div>

      {/* ================= VISION & VALUES ================= */}
      <div className="bg-white dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaStethoscope className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Medical Excellence</h3>
            <p>
              Commitment to delivering world-class healthcare through
              innovation, precision, and compassionate service.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaHeart className="text-red-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Patient First</h3>
            <p>
              Every decision is centered around patient safety, comfort,
              and long-term well-being.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaAward className="text-yellow-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Leadership & Impact</h3>
            <p>
              Driving healthcare transformation and mentoring the next
              generation of medical professionals.
            </p>
          </div>

        </div>
      </div>

      {/* ================= QUOTE SECTION ================= */}
      <div className="py-16 px-6 text-center bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            “Diagnosis is the foundation of effective treatment.”
          </h3>
          <p className="italic">
            — Dr. Muhammed Isa
          </p>
        </div>
      </div>

      {/* ================= CALL TO ACTION ================= */}
      <div className="py-16 px-6 text-center bg-gray-100 dark:bg-gray-900">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Experience Quality Healthcare Today
        </h3>

        <Link
          to="/appointment"
          className="inline-block bg-amber-600 hover:bg-blue-600 text-white px-8 py-4 rounded-lg transition"
        >
          Book an Appointment
        </Link>
      </div>

    </div>
  );
};

export default Founder;