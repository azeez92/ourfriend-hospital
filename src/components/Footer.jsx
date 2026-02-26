import React from 'react'
import lightLogo from "../assets/ourfriend-light.png"
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaArrowUp} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='bg-black text-white '>
      <div className='container mx-auto px-6 py-12 grid md:grid-cols-4 gap-10'>
      
      {/* Logo and about and icons */}
      <section>
        <img src={lightLogo} className="h-20" alt="Light-logo" />
        <p className='text-sm leading-relaxed mb-5'> OurFriend Hospital is a state of the art Medical Facility that belives in the power of diagnosis before treatment</p>

        <div className='flex gap-3'>
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) =>(
            <span key={i} className='border rounded-full p-3 hover:bg-blue-500 hover:text-black transition cursor-pointer'>
              <Icon size={14} />
            </span>


          ))}
        </div>
      </section>

  <section>
      <h4 className='text-lg mb-4 font-semibold'>Our Location</h4>
<p className="mb-2">10 Adepitan St, Ojodu, Lagos 101232, Lagos</p>
<p className="mb-2">E: info@ourfriendhospital.com</p>

<p className="mb-2">P: +234 8023 311 868</p>
      </section>

        <section>
      <h4 className='font-semibold mb-4'> About</h4>
      <ul className='space-y-2'>
            <li> <a href="/about"> About OFH </a></li>
            <li><a href="/about"> Careers  </a></li>
            <li><a href="/about"> Blog  </a></li>
            <li><a href="/hmo"> HMO  </a></li>

      </ul>
      </section>

        <section>
      <h4 className='font-semibold mb-4'> Discover</h4>
      <ul className='space-y-2'>
            <li>Help Center</li>
            <li>Terms & Privacy</li>
            <li>FAQs</li>
            <li>Sitemap</li>

      </ul>
      </section>

      </div>


{/* Bottom Footer */}
      <div className='container mx-auto border-t py-5 px-6 flex justify-between items-center text-sm '>

            <p>&copy; {new Date().getFullYear()} Our Friend Hospital. All Rights Reserved</p>


            <button onClick={() => window.scrollTo({top:0, behavior:"smooth"})} className='bg-gray-200 text-white p-3 rounded-full hover:bg-amber-600 hover:text-black transition'> 
              <FaArrowUp />
            </button>
      </div>



    </footer>
  )
}

export default Footer
