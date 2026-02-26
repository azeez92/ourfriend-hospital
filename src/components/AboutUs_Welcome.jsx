import React from 'react'
import doctor from "../assets/smilingDoctor.jpg"




const AboutUs_Welcome = () => {
  return (
    <div className='flex flex-col md:flex-row py-20 px-16'>
      <section className='flex-1'>
        <img src={doctor} alt='doctor' width="90%"/>
      </section>

      <section className="flex-1 py-15 ">
        <h5 className=' text-2xl md:text-lg  font-bold text-blue-500  mb-5   '>About Our Friend Hospital</h5>
        <h2 className='text-3xl md:text-5xl font-bold mb-5 text-blue-800 '>Excellence in Healthcare at Our Friend Hospital</h2>
        <p className=' mb-3 font-light'>Our Friend Hospital is a leading healthcare provider in the city, offering a wide range of medical services to meet the needs of our community. We pride ourselves on providing high-quality care and exceptional patient experiences.</p>
        <p className=' font-light'>For years, we have proudly served our community by delivering reliable medical services, advanced diagnostic solutions, and personalized treatment plans. By combining experienced medical professionals with modern medical technology, we ensure that every patient receives the highest standard of care.</p>
      </section>

      
    </div>
    
  )
}

export default AboutUs_Welcome
