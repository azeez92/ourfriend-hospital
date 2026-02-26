import { Alert } from 'flowbite-react'
import React from 'react'
import Homeslider from "../components/home-slider"
import SubHero from '../components/SubHero'
import HomeAbout from '../components/HomeAbout'
import HomeService from '../components/HomeService'
import HomeTestimonials from '../components/HomeTestimonials'
import HomeBlog from '../components/HomeBlog'

const Home = () => {
  return (
<>
   
   <Homeslider />
   <SubHero />
   <HomeAbout />
   <HomeService />
   <HomeTestimonials />
   <HomeBlog />
   </>
  )
}

export default Home
