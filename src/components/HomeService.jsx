import React from 'react'
import { GiHospital, GiAmbulance } from "react-icons/gi";
import { FaEye, FaTooth } from "react-icons/fa";
import { MdChildCare, MdOutlinePregnantWoman } from "react-icons/md";


import ser1 from "../assets/service/gp-consult.jpg"
import ser2 from "../assets/service/optician.jpg"
import ser3 from "../assets/service/child care.jpg"
import ser4 from "../assets/service/obster.jpg"
import ser5 from "../assets/service/bg-emergency.jpg"
import ser6 from "../assets/service/dental-care.jpg"




const services = [ 
        {
                id: 1,
                title:  "General Consultation",
                description: "We offer professional medical consultations for all age groups. Our doctors carefully assess your symptoms, provide accurate diagnosis, and guide you with the right treatment plan.",
                icon: GiHospital,
                Image: ser1,
                link: "#"
        },
        {
                id: 2,
                title:  "Eye Care",
                description: "Our eye care specialists provide vision testing, eye examinations, and treatment for common and complex eye conditions to help protect and improve your eyesight.",
                icon: FaEye,
                Image: ser2,
                link: "#"
        },
        {
                id: 3,
                title:  "Child Care",
                description: "We deliver specialized pediatric care to ensure the healthy growth and development of your child in a safe and friendly environment.",
                icon: MdChildCare,
                Image: ser3,
                link: "#"
        },
        {
                id: 4,
                title:  "Obstetrics Care",
                description: "Our maternity and women’s health services provide prenatal care, safe delivery support, and postnatal monitoring for both mother and baby.",
                icon: MdOutlinePregnantWoman,
                Image: ser4,
                link: "#"
        },
        {
                id: 5,
                title:  "Emergency Care",
                description: "Our emergency department operates with speed and precision to handle urgent medical situations with immediate attention and professional care.",
                icon: GiAmbulance,
                Image: ser5,
                link: "#"
        },
        {
                id: 6,
                title:  "Dental Care",
                description: "We provide comprehensive dental services including check-ups, cleaning, fillings, and oral health treatments to keep your smile healthy and bright.",
                icon: FaTooth,
                Image: ser6,
                link: "#"
        },
];


const HomeService = () => {
  return (
    <div className='py-20 px-5 bg-gray-50'>
        <section className='flex flex-col justify-center items-center mb-10'>
            <h5 className='text-sm bg-blue-100 text-blue-500 uppercase w-fit font-semibold  px-5 py-3'>Our Services</h5>
            <h2 className='text-3xl md:text-5xl font-bold mb-10 '>Explore our Main service</h2>
        </section>

        <section className='grid grid-cols-1 justify-between gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {services.map((service, index) => {
                const Icon =service.icon

                return(
            <aside className=' h-72 relative bg-white p-10 shadow-md transition duration-500 group perspective-[1000px]' key={index}>
                <div
                className='absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition duration-500'
                
                style={{ background: `linear-gradient(to bottom, rgba(0, 0, 255, 0.733), rgba(0, 0, 255, 0.678)), 
              url(${service.Image}) center / cover no-repeat `}}>

                </div>



               <div className='absolute z-10'>
                    
                                <Icon className='text-5xl text-blue-500 group-hover:text-amber-300 transition duration-500 transform-style-preserve-3d group-hover:rotate-y-180 ' />
        
                      
                   <h4 className='text-xl font-semibold mb-4 group-hover:text-white'>{service.title}</h4>
                   <p className='text-gray-600 group-hover:text-white transition duration-300'>{service.description}</p>
               </div>

            </aside>
                )

        })}

        </section>
   
    </div>
  )
}

export default HomeService
