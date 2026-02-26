import React from "react";
import CountUp from "react-countup";
import {
  FaUserDoctor,
  FaHospitalUser,
  FaStethoscope,
  FaHeartPulse,
} from "react-icons/fa6";

const Stats = () => {
  const stats = [
    { icon: <FaStethoscope />, end: 10, suffix: "+", title: "Years Experience" },
    { icon: <FaHospitalUser />, end: 5000, suffix: "+", title: "Patients Served" },
    { icon: <FaUserDoctor />, end: 20, suffix: "+", title: "Medical Experts" },
    { icon: <FaHeartPulse />, end: 98, suffix: "%", title: "Success Rate" },
  ];

  return (
    <section className="px-6 bg-amber-600 text-white py-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">
        Our Success Rates
      </h2>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition duration-300"
            >
              {/* BIG ICON */}
              <div className="flex justify-center text-white text-5xl mb-4">
                {stat.icon}
              </div>

              <h3 className="text-3xl font-bold text-white">
                <CountUp
                  start={0}
                  end={stat.end}
                  duration={30}
                  separator=","
                  suffix={stat.suffix}
                />
              </h3>

              <p className="text-white/90 text-sm pb-5">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;