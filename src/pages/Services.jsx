import { useState } from "react";
import banner from "../assets/about-us.jpg.jpeg";
import PageBanner from "../components/PageBanner";

export default function OurServices() {
  const services = [
    {
      title: "General Consultation",
      icon: "🏥",
      shortDesc:
        "We offer professional medical consultations for all age groups. Our doctors carefully assess your symptoms, provide accurate diagnosis, and guide you with the right treatment plan.",
      detailedDesc:
        "Our General Consultation service is the foundation of our healthcare system. During consultation, our qualified physicians carefully evaluate your medical history, symptoms, and overall health condition before recommending appropriate treatment.\n\nServices include:\n• Routine medical check-ups\n• Diagnosis of common illnesses\n• Chronic disease management (such as hypertension and diabetes)\n• Health advice and lifestyle counseling\n• Referral to specialists when necessary\n\nWe ensure every patient receives thorough attention, professional medical advice, and a clear explanation of their condition and treatment options.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop", // fallback; can be replaced
    },
    {
      title: "Eye Care",
      icon: "👁️",
      shortDesc:
        "Our eye care specialists provide vision testing, eye examinations, and treatment for common and complex eye conditions to help protect and improve your eyesight.",
      detailedDesc:
        "At Our Friend Hospital, our dedicated ophthalmology team offers comprehensive eye care services. From routine vision screenings to advanced diagnostics and treatments for conditions like cataracts, glaucoma, and refractive errors.\n\nServices include:\n• Comprehensive eye exams\n• Vision testing and prescription glasses/contact lenses\n• Treatment for eye infections and injuries\n• Management of chronic eye diseases\n• Laser treatments and minor surgical procedures (where applicable)\n\nWe are committed to preserving and enhancing your vision through expert care and the latest technology.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Child Care",
      icon: "👶",
      shortDesc:
        "We deliver specialized pediatric care to ensure the healthy growth and development of your child in a safe and friendly environment.",
      detailedDesc:
        "Our pediatric department is designed with children in mind. We provide gentle, compassionate care from newborns to adolescents, focusing on preventive health, early detection, and family-centered support.\n\nServices include:\n• Well-child visits and immunizations\n• Growth and developmental assessments\n• Treatment of common childhood illnesses\n• Nutritional counseling\n• Management of chronic conditions (asthma, allergies, etc.)\n\nOur friendly environment helps reduce anxiety and makes healthcare a positive experience for kids and parents alike.",
      image: "https://images.unsplash.com/photo-1580281780460-82d277b0e3f8?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Obstetrics Care",
      icon: "🤰",
      shortDesc:
        "Our maternity and women's health services provide prenatal care, safe delivery support, and postnatal monitoring for both mother and baby.",
      detailedDesc:
        "We offer complete obstetric and gynecological care with a focus on safe motherhood. Our experienced team supports women through every stage — from family planning to postpartum recovery.\n\nServices include:\n• Prenatal check-ups and ultrasounds\n• High-risk pregnancy management\n• Labor and delivery services\n• Postnatal care and breastfeeding support\n• Gynecological consultations and screenings\n\nYour comfort, safety, and well-being (and your baby's) are our top priorities.",
      image: "https://images.unsplash.com/photo-1576092768241-dec2310aa0f5?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Emergency Care",
      icon: "🚑",
      shortDesc:
        "Our emergency department operates with speed and precision to handle urgent medical situations with immediate attention and professional care.",
      detailedDesc:
        "Our 24/7 Emergency Department is equipped to manage all medical emergencies with rapid response times and a multidisciplinary team.\n\nServices include:\n• Trauma and accident care\n• Acute illness management\n• Cardiac emergencies\n• Stroke and neurological emergencies\n• Minor procedures and stabilization\n\nWe prioritize fast triage, advanced life support, and seamless transfer to specialized units when needed.",
      image: "https://images.unsplash.com/photo-1586776976034-05f9177d5f5e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Dental Care",
      icon: "🦷",
      shortDesc:
        "We provide comprehensive dental services including check-ups, cleaning, fillings, and oral health treatments to keep your smile healthy and bright.",
      detailedDesc:
        "Our dental clinic offers modern, pain-free dentistry for patients of all ages. We focus on preventive care, aesthetics, and restorative treatments.\n\nServices include:\n• Routine dental check-ups and cleanings\n• Fillings, crowns, and bridges\n• Root canal treatments\n• Teeth whitening and cosmetic dentistry\n• Extractions and minor oral surgery\n• Pediatric dental care\n\nWe help you maintain optimal oral health and a confident smile.",
      image: "https://images.unsplash.com/photo-1588776814546-1c6e0d4d8d6d?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <>
      <PageBanner title="Our Services" image={banner} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
          {/* Sidebar */}
          <div className="col-span-1">
            <ul className="bg-white rounded-lg shadow-md overflow-hidden">
              {services.map((service, index) => (
                <li
                  key={index}
                  onClick={() => setActive(index)}
                  className={`px-6 py-4 cursor-pointer border-l-4 transition flex items-center gap-3
                    ${
                      active === index
                        ? "bg-teal-50 border-teal-600 text-teal-800 font-medium"
                        : "border-transparent text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <span className="text-2xl">{service.icon}</span>
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="col-span-3 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-4xl font-bold text-teal-800 mb-6">
              {services[active].title}
            </h3>

            <p className="text-gray-600 text-lg mb-6 italic">
              {services[active].shortDesc}
            </p>

            <img
              src={services[active].image}
              alt={services[active].title}
              className="rounded-lg shadow-md w-full h-64 object-cover mb-8"
            />

            <h4 className="text-2xl font-semibold text-teal-700 mb-4">
              About {services[active].title}
            </h4>

            <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
              {services[active].detailedDesc}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}