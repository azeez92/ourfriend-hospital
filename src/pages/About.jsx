import React from 'react'

import AboutUs_Welcome from '../Components/AboutUs_Welcome'
import PageBanner from '../components/PageBanner'
import about from "../assets/about-us.jpg.jpeg"
import AboutUs_M_V from '../Components/AboutUs_M&V'
import AboutUs_Values from '../Components/AboutUs_Values'
import WhyChooseUs from '../Components/AboutUs_WhyChoose'
import Stats from '../Components/AboutUs_Counter'
import AboutUs_Doctors from '../Components/AboutUs_Doctors'

const About = () => {
  return (
    <div>
      <PageBanner  title={"About Us"} image={about} />
      <AboutUs_Welcome />
      <AboutUs_M_V />
      <AboutUs_Values />
      <WhyChooseUs />
      <Stats />
      <AboutUs_Doctors />
    </div>
  )
}

export default About
