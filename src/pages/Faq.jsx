import React from 'react'
import FaqImg from "../assets/about-us.jpg.jpeg"
import FaqFrequently from '../components/FaqFrequently'
import PageBanner from '../components/PageBanner'


const Faq = () => {
  return (
    <div>
      <PageBanner  title={"FAQs"} image={FaqImg} />
      <FaqFrequently />
    </div>
  )
}

export default Faq
