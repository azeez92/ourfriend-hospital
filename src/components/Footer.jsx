import React from 'react';
import lightLogo from "../assets/ourfriend-light.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaArrowUp, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const socialIcons = [FaFacebookF, FaTwitter, FaInstagram, FaYoutube];

  return (
    <footer className="bg-black text-white transition-colors duration-300 relative">
      
      {/* Top Footer Grid */}
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Logo + About + Socials */}
        <section>
          <img src={lightLogo} className="h-20 mb-5" alt="Our Friend Hospital Logo" />
          <p className="text-sm leading-relaxed mb-5">
            Our Friend Hospital is a state-of-the-art medical facility that believes in the power of diagnosis before treatment.
          </p>

          <div className="flex gap-3">
            {socialIcons.map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-white rounded-full p-3 hover:bg-blue-500 hover:text-black transition cursor-pointer"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </section>

        {/* Location */}
        <section>
          <h4 className="text-lg mb-4 font-semibold">Our Location</h4>
          <p className="mb-2">10 Adepitan St, Ojodu, Lagos 101232, Lagos</p>
          <p className="mb-2">E: <a href="mailto:info@ourfriendhospital.com" className="hover:text-blue-400">info@ourfriendhospital.com</a></p>
          <p className="mb-2">P: <a href="tel:+2348023311868" className="hover:text-blue-400">+234 8023 311 868</a></p>
        </section>

        {/* About Links */}
        <section>
          <h4 className="font-semibold mb-4">About</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-blue-400">About OFH</a></li>
            <li><a href="/career" className="hover:text-blue-400">Careers</a></li>
            <li><a href="/news" className="hover:text-blue-400">Blog</a></li>
            <li><a href="/hmo" className="hover:text-blue-400">HMO</a></li>
          </ul>
        </section>

        {/* Discover Links */}
        <section>
          <h4 className="font-semibold mb-4">Discover</h4>
          <ul className="space-y-2">
            <li><a href="/helpcenter" className="hover:text-blue-400">Help Center</a></li>
            <li><a href="/terms" className="hover:text-blue-400">Terms & Privacy</a></li>
            <li><a href="/faq" className="hover:text-blue-400">FAQs</a></li>
            <li><a href="/sitemap" className="hover:text-blue-400">Sitemap</a></li>
          </ul>
        </section>

      </div>

      {/* Bottom Footer */}
      <div className="container mx-auto border-t border-gray-700 py-5 px-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        <p>&copy; {new Date().getFullYear()} Our Friend Hospital. All Rights Reserved.</p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-20 right-6 bg-blue-500 text-white p-3 rounded-full hover:bg-amber-600 hover:text-black transition"
        >
          <FaArrowUp />
        </button>
      </div>

      {/* ================= WhatsApp Floating Button ================= */}
      <a
        href="https://wa.me/2348023311868"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center transition"
      >
        <FaWhatsapp size={20} />
      </a>

    </footer>
  );
}

export default Footer;