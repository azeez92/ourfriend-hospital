import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    text: "Our Friend Hospital provided excellent medical care and attention. The doctors were professional, caring, and took time to explain everything clearly. I felt safe and well cared for throughout my treatment.",
    name: "Mr. Adeyemi Olawale",
    role: "Patient",
    image: "https://thumbs.dreamstime.com/b/smiling-black-man-4725389.jpg",
  },
  {
    id: 2,
    text: "The staff are very friendly and the environment is clean and comfortable. Their emergency response is fast and reliable. I highly recommend Our Friend Hospital for quality healthcare services.",
    name: "Mrs. Chioma Okeke",
    role: "Family Care",
    image:
      "https://media.istockphoto.com/id/1394347360/photo/confident-young-black-businesswoman-standing-at-a-window-in-an-office-alone.jpg?s=612x612&w=0&k=20&c=tOFptpFTIaBZ8LjQ1NiPrjKXku9AtERuWHOElfBMBvY=",
  },
  {
    id: 3,
    text: "From consultation to treatment, the experience was smooth and professional. The doctors truly care about patients and provide the best medical support possible.",
    name: "Dr. Ibrahim Musa",
    role: "General Consultation",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/newscms/2015_42/1261876/damontweedy_alt4_stocksphotography.jpg",
  },
  {
    id: 4,
    text: "The medical team showed exceptional professionalism and kindness. I truly appreciate the quality service and attention to patients.",
    name: "Dr. Ibrahim Musa",
    role: "General Consultation",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/newscms/2015_42/1261876/damontweedy_alt4_stocksphotography.jpg",
  },
];

const HomeTestimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const first = testimonials[index];
    const second = testimonials[(index + 1) % testimonials.length];
    return [first, second];
  };

  const visible = getVisibleTestimonials();

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Tag */}
        <span className="bg-blue-600/20 text-blue-400 px-4 py-1 rounded-full text-sm font-semibold">
          OUR CLIENTS
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-14">
          Our Clients Happy Say About Us
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ease-in-out">
          {visible.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-blue-500/10 transition duration-500"
            >
              {/* Text */}
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                {item.text}
              </p>

              <hr className="mb-6 border-white/10" />

              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border border-white/20"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-white">
                    {item.name}
                  </h4>
                  <p className="text-blue-400 text-sm font-medium uppercase">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="absolute right-6 bottom-6 text-6xl text-white/10 font-bold">
                ”
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === i
                  ? "bg-blue-500 w-8"
                  : "bg-white/30 w-4"
              }`}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="bg-white/10 text-white border border-white/20 px-5 py-2 rounded-lg hover:bg-white/20 transition"
          >
            ←
          </button>
          <button
            onClick={next}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;