import React from "react";
import { 
  FaUserMd, 
  FaMicroscope, 
  FaHeart, 
  FaHandHoldingUsd, 
  FaHospitalAlt, 
  FaAmbulance 
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserMd size={28} />,
      title: "Experienced Professionals",
      desc: "Highly qualified doctors and medical experts committed to excellence."
    },
    {
      icon: <FaMicroscope size={28} />,
      title: "Modern Equipment",
      desc: "Advanced diagnostic and treatment technology for accurate care."
    },
    {
      icon: <FaHeart size={28} />,
      title: "Patient-Centered Care",
      desc: "A warm, welcoming environment focused on your comfort."
    },
    {
      icon: <FaHandHoldingUsd size={28} />,
      title: "Affordable Services",
      desc: "Quality healthcare that remains accessible and cost-effective."
    },
    {
      icon: <FaHospitalAlt size={28} />,
      title: "Clean & Safe Facilities",
      desc: "Maintained to the highest hygiene and safety standards."
    },
    {
      icon: <FaAmbulance size={28} />,
      title: "Emergency Response",
      desc: "Fast and reliable emergency medical support when needed."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white mb-4">
          Why Choose Our Friend Hospital?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Delivering exceptional healthcare through expertise, compassion, and innovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-md 
              hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 flex items-center justify-center 
              bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 
              rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
