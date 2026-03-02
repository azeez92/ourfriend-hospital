import React from "react";
import ceo from "../assets/team/Muhammed-isa.jpg";
import PageBanner from "../Components/PageBanner";
import term from "../assets/about-us.jpg.jpeg";

const TermsAndClinic = () => {
  return (
    <>
    <PageBanner title={"Terms & Privacy"} image={term} />
    <div className="px-6 lg:px-20 py-16 bg-gray-50">
      <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">

        {/* ================= FIRST SECTION (TERMS & PRIVACY) ================= */}
        <div className="flex-1 bg-white p-10 rounded-2xl shadow-lg ">

          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Terms & Privacy Policy
          </h2>

          <p className="text-sm text-gray-500 mb-6">
            Last Updated: March 2, 2026
          </p>

          <div className="space-y-6 text-gray-600 leading-relaxed text-sm">

            <p className="font-semibold uppercase text-2xl  text-blue-500">
              PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING OUR WEBSITE OR SERVICES.
            </p>

            <p className="text-gray-700 text-lg">
              By accessing this website or using our medical services, you agree
              to comply with and be bound by the terms outlined in this agreement.
              If you do not agree with any part of these terms, you should not
              use our services.
            </p>

            {/* 1 */}
            <h3 className="font-bold text-gray-800 text-2xl">
              1. Collection of Information
            </h3>
            <p className="text-lg"> 
              We collect personal information such as your name, phone number,
              email address, and medical details when voluntarily submitted
              through appointment forms or contact pages. This information is
              collected solely for healthcare communication and service delivery.
            </p>

            {/* 2 */}
            <h3 className="font-bold text-gray-800 text-2xl">
              2. How We Use Your Information
            </h3>
            <p className="text-lg">
              Your information is used to schedule appointments, provide
              medical consultations, improve patient care, and communicate
              important updates regarding your health services.
            </p>

            {/* 3 */}
            <h3 className="font-bold text-gray-800 text-2xl">
              3. Sharing Your Information
            </h3>
            <p className="text-lg">
              We do not sell, trade, or rent your personal data. Information
              may only be shared with authorized healthcare professionals or
              regulatory authorities when legally required.
            </p>

            {/* 4 */}
            <h3 className="font-bold text-gray-800 text-2xl">
              4. Management of Personal Data
            </h3>
            <p className="text-lg">
              We implement appropriate technical and organizational measures to
              protect your data against unauthorized access, misuse, or loss.
              Patient confidentiality remains our highest priority.
            </p>

            {/* 5 */}
            <h3 className="font-bold text-gray-800 text-2xl">
              5. Right to Access, Correct or Delete Personal Data
            </h3>
            <p className="text-lg">
              Patients have the right to request access to their personal
              records, request corrections, or ask for deletion of non-essential
              data, subject to medical and legal obligations.
            </p>

            {/* 6 */}
            <h3 className="font-bold text-gray-800 text-2xl">
              6. Warranty Limitations
            </h3>
            <p className="text-lg">
              While we strive to provide accurate and up-to-date information,
              this website does not replace professional medical advice,
              diagnosis, or treatment. Always consult a qualified healthcare
              provider for medical concerns.
            </p>

            {/* 7 */}
            <h3 className="font-bold text-gray-800 text-2xl">
              7. Notices
            </h3>
            <p className="text-lg">
              We reserve the right to update or modify these terms at any time.
              Continued use of our services after changes are posted constitutes
              acceptance of those changes.
            </p>

            {/* 8 */}
            <h3 className="font-bold text-gray-800 text-2xl">
              8. Copyright & Intellectual Property
            </h3>
            <p className="text-lg">
              All content, including text, logos, images, and branding on this
              website, is the property of our clinic and may not be reproduced
              without written permission.
            </p>

          </div>
        </div>

        {/* ================= SECOND SECTION (HEART OF CLINIC) ================= */}
        <div className="w-full lg:w-[35%] shrink-0 space-y-10">

          {/* Founder Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <img
              src={ceo}
              alt="Founder"
              className="w-28 h-28 mx-auto rounded-full object-cover shadow-md mb-4"
            />

            <h3 className="text-2xl font-bold text-gray-800">
              Dr. Isa Muhammed
            </h3>

            <p className="text-gray-500 mb-2">
              Chief Medical Officer
            </p>

            <p className="text-amber-600 font-medium mb-4">
              📞 +234 800 123 4567
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our founder is a dedicated healthcare professional with years of experience committed to improving community health.
            </p>
          </div>

          {/* Working Hours */}
          <div className="bg-blue-600 p-8 rounded-2xl shadow-lg text-white">
            <h4 className="text-2xl font-bold  mb-4">
              Working Hours
            </h4>

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

          {/* CTA */}
          <div className="bg-amber-600 text-white p-8 rounded-2xl shadow-lg">
            <h4 className="text-xl font-bold mb-3">
              Need a Personal Health Plan?
            </h4>

            <p className="text-sm mb-4">
              Our specialists are ready to design a customized healthcare
              plan tailored to your medical needs and lifestyle.
            </p>

            <button className="bg-white text-amber-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
              View Doctors Timetable
            </button>
          </div>

        </div>

      </div>
    </div>
    </>
  );
};

export default TermsAndClinic;