import React from 'react'
import value from "../assets/Core.jpg"

const AboutUs_Values = () => {
  return (
    <div className='flex flex-col md:flex-row py-5 px-16 gap-10'>
          
    
          <section className="flex-1 py-15 ">
            <h2 className='text-3xl md:text-5xl font-bold mb-10 text-blue-800 '>Our Core Values</h2>
            <div>
                <h3 className='font-bold text-2xl mb-4'>Compassion</h3>
                <p className='text-gray-600 mb-5'>We provide care with genuine empathy, kindness, and respect, ensuring every patient feels valued and supported throughout their healing journey.</p>
            </div>
             <div>
                <h3 className='font-bold text-2xl mb-4'>Integrity</h3>
                <p className='text-gray-600 mb-5'>We operate with honesty, transparency, and the highest ethical standards in all medical, professional, and administrative practices.</p>
            </div>
             <div>
                <h3 className='font-bold text-2xl mb-4'>Excellence</h3>
                <p className='text-gray-600 mb-5'>We strive for continuous improvement, embracing innovation and best practices to deliver outstanding healthcare services.</p>
            </div>
            <div>
                <h3 className='font-bold text-2xl mb-4'>Professionalism</h3>
                <p className='text-gray-600 mb-5'>We uphold strict medical standards, maintain accountability, and ensure safe, reliable, and high-quality treatment at all times.</p>
            </div>
            
            
          </section>

          <section className='flex-1  mt-5'>
            <img  src={value} alt='Core Values'/>
          </section>
    
          
        </div>
  )
}

export default AboutUs_Values
