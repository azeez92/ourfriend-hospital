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




</Routes>

<Footer />
</BrowserRouter>

  )


}


export default App