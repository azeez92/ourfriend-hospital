import React from "react";
import teamBanner from "../assets/bannerImage/team-banner.jpg";
import PageBanner from "../components/PageBanner";
import isaMuhammed from "../assets/team/Muhammed-isa.jpg";
import akinTunde from "../assets/team/DrAkintundeClement.jpg";
import DrOmonayinFemi from "../assets/team/DrOmonayinFemi.jpg";
import OgunsijiKhadijah from "../assets/team/OgunsijiKhadijah.jpg";
import JimbaJanet from "../assets/team/JimbaJanet.jpg";
import HezekiahBlessing from "../assets/team/HezekiahBlessing.jpg";
import OmaleBlessing from "../assets/team/OmaleBlessing.jpg";
import BamgboseHaliyah from "../assets/team/BamgboseHaliyah.jpg";
import AfonjaShukuroh from "../assets/team/AfonjaShukuroh.jpg";
import SolomonJacob from "../assets/team/SolomonJacob.jpg";
import AdekeyeRM from "../assets/team/AdekeyeRM.jpg";
import BabatundeTolulope from "../assets/team/BabatundeTolulope.jpg";
import BelloMuritala from "../assets/team/BelloMuritala.jpg";
import OparaNgozi from "../assets/team/OparaNgozi.jpg";


// ===== Leadership =====
const leadership = [
  {
    name: "Dr. Isa Muhammed",
    role: "Chief Medical Director (CMD)",
    image: isaMuhammed,
  },
];

// ===== Doctors =====
const doctors = [
  {
    name: "Dr. Akintunde Clement",
    role: "General Practitioner",
    image: akinTunde,
  },
  {
    name: "Dr. Omonayin Femi",
    role: "General Practitioner",
    image: DrOmonayinFemi,
  },
];

// ===== Nurses =====
const nurses = [
  {
    name: "Ogunsiji Khadijah",
    role: "Matron",
    image: OgunsijiKhadijah,
  },
  {
    name: "Jimba Janet",
    role: "Staff Nurse",
    image: JimbaJanet,
  },
  {
    name: "Hezekiah Blessing",
    role: "Staff Nurse",
    image: HezekiahBlessing,
  },
  {
    name: "Omale Blessing",
    role: "Staff Nurse",
    image: OmaleBlessing,
  },
  {
    name: "Bamgbose Haliyah",
    role: "Staff Nurse",
    image: BamgboseHaliyah,
  },
];

// ===== Support Staff =====
const support = [
  {
    name: "Afonja Shukuroh",
    role: "Laboratory Technician",
    image: AfonjaShukuroh,
  },
  {
    name: "Solomon Jacob",
    role: "Laboratory Scientist",
    image: SolomonJacob,
  },
  {
    name: "Adekeye R.M",
    role: "Administrative Officer",
    image: AdekeyeRM,
  },
  {
    name: "Babatunde Tolulope",
    role: "Administrative Officer",
    image: BabatundeTolulope,
  },
  {
    name: "Bello Muritala",
    role: "Driver",
    image: BelloMuritala,
  },
  {
    name: "Opara Ngozi",
    role: "Domestic Staff",
    image: OparaNgozi,
  },
];

// ===== Large Slide Card Component =====
const TeamCard = ({ member }) => {
  return (
    <div className="group relative w-full h-[420px] overflow-hidden rounded-2xl shadow-lg">
      {/* Image */}
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Sliding Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-12 group-hover:translate-y-0 transition-all duration-500">
        <h3 className="text-2xl font-bold text-white">
          {member.name}
        </h3>
        <p className="text-blue-400 font-semibold mt-1">
          {member.role}
        </p>

        {/* Animated Line */}
        <div className="w-0 h-1 bg-blue-500 mt-3 transition-all duration-500 group-hover:w-16"></div>
      </div>
    </div>
  );
};

// ===== Section Component =====
const TeamSection = ({ title, data, isLeadership }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          {title}
        </h2>

        {/* Leadership gets centered large card */}
        {isLeadership ? (
          <div className="max-w-md mx-auto">
            {data.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <div>
      {/* ===== Banner ===== */}
      <PageBanner title={"Our Team"} image={teamBanner} />

      {/* ===== Intro Section ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <span className="text-blue-600 font-semibold uppercase">
            Our Experts
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
            Dedicated & Friendly Healthcare Professionals
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            At Our Friend Hospital, our strength lies in our team of experienced
            doctors, nurses, laboratory specialists, and support staff who are
            committed to delivering compassionate, accurate, and patient-centered
            healthcare services. We treat every patient as a friend, ensuring
            proper diagnosis, professional care, and a comfortable healing
            experience.
          </p>
        </div>
      </section>

      {/* ===== Leadership ===== */}
      <TeamSection
        title="Leadership"
        data={leadership}
        isLeadership={true}
      />

      {/* ===== Doctors ===== */}
      <TeamSection title="Doctors" data={doctors} />

      {/* ===== Nurses ===== */}
      <TeamSection title="Nursing Team" data={nurses} />

      {/* ===== Support Staff ===== */}
      <TeamSection title="Medical & Support Staff" data={support} />
    </div>
  );
};

export default Team;