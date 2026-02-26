import React from "react";
import img1 from "../assets/mission.jpg";
import img2 from "../assets/vision.jpg";

const service = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "To deliver accessible, affordable, and compassionate healthcare services that improve the quality of life for individuals and families within our community.",
    Image: img1,
  },
  {
    id: 2,
    title: "Our Vision",
    description:
      "To become a trusted healthcare leader recognized for medical excellence, innovation, and outstanding patient care.",
    Image: img2,
  },
];

const AboutUs_M_V = () => {
  return (
    <div className="bg-amber-50 py-20 px-6 md:px-16">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {service.map((item) => (
          <aside
            key={item.id}
            className="h-80 relative rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                background: `
                  linear-gradient(
                    rgba(0,0,0,0.6),
                    rgba(0,0,0,0.6)
                  ),
                  url(${item.Image}) center/cover no-repeat
                `,
              }}
            />

            
            <div className="relative z-10 p-8 flex flex-col justify-center h-full text-white">
              <h4 className="text-3xl font-bold mb-4">
                {item.title}
              </h4>

              <p className="text-xl leading-relaxed">
                {item.description}
              </p>
            </div>
          </aside>
        ))}

      </section>
    </div>
  );
};

export default AboutUs_M_V;
