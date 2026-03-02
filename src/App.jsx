import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import News from "./pages/News"
import About from "./pages/About"
import Home from "./pages/Home"
import Header from "./components/Header"
import { useEffect, useState } from "react"
import Preloader from "./components/Preloader"
import Career from "./pages/Career"
import Hmo from "./pages/Hmo"
import Team from "./pages/Team"
import Faq from "./pages/Faq"
import Appointment from "./pages/Appointment"
import TermsAndClinic from "./pages/Terms"
import HelpCenter from "./pages/HelpCenter.jsx"
import Sitemap from "./pages/Sitemap.jsx"
import Founder from "./pages/Founder.jsx"


function App(){
 const [loading, setLoading] = useState(true)


 useEffect(()=>{
  const timer = setTimeout(()=>{
    setLoading(false)
  }, 2500)


  return () => clearTimeout(timer)
 }, [])

if(loading){
  return(
    <Preloader />
  )}



  return(
<BrowserRouter>
<Header />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/services" element={<Services />} />
<Route path="/contact" element={<Contact />} />
<Route path="/news" element={<News />} />
<Route path="/career" element={<Career />} />
<Route path="/hmo" element={<Hmo />} />
<Route path="/team" element={<Team />} />
<Route path="/faq" element={<Faq />} />
<Route path="/appointment" element={<Appointment />} />
<Route path="/news" element={<News />} />
<Route path="/terms" element={<TermsAndClinic />} />
<Route path="/helpcenter" element={<HelpCenter />} />
<Route path="/sitemap" element={<Sitemap />} />
<Route path="/hmo" element={<Hmo />} />
<Route path="/founder" element={<Founder />} />





</Routes>

<Footer />
</BrowserRouter>

  )


}


export default App