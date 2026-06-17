import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const menuItems = [
  { name: "Schedule an Appointment", path: "/appointment" },
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact Us", path: "/contact" },
    { name: "Blog", path: "/blogs" },
  { name: "Partners", path: "/partners" },
  
];
  return (
    <footer className="bg-[#1f1b4b] text-white">

      {/* TOP SECTION */}
      <div className="text-center flex flex-col items-center justify-center py-12 px-6">
        <img src={logo} className="w-70" alt="Centered Care Wellness logo" />

        <p className="mt-4 text-gray-300 max-w-xl mx-auto text-sm md:text-base">
            We provide compassionate, patient-centered healthcare services designed to support your well-being at every stage of life. From virtual consultations to chronic care management, our team is committed to delivering accessible, reliable, and high-quality care you can trust.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-4 mt-6">
          {[FaTwitter, FaInstagram, FaFacebookF].map((Icon, i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition cursor-pointer"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>

      {/* NAV BAR */}
     <div className="bg-[#3a2f7a] py-4 px-4">
  <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-bold md:text-base">

    {menuItems.map((item, i) => (
      <span
        key={i}
        onClick={() => navigate(item.path)}
        className="flex items-center gap-4 cursor-pointer text-white hover:text-yellow-400 transition"
      >
        {item.name}

        {i !== menuItems.length - 1 && (
          <span className="hidden md:inline">|</span>
        )}
      </span>
    ))}

  </div>
</div>

      {/* NEWSLETTER */}
      <div className="text-center py-12 px-6 relative">
        <h3 className="text-xl md:text-2xl font-semibold mb-6">
          Subscribe Newsletter
        </h3>

        <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center bg-white rounded-full overflow-hidden">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full px-6 py-4 text-black outline-none"
          />
          <button className="bg-yellow-400 text-black px-8 py-4 font-semibold w-full sm:w-auto">
            Subscribe
          </button>
        </div>

     
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-4 px-6 text-sm flex flex-col md:flex-row justify-between items-center gap-2 text-gray-300">
        <p>Copyright © 2024 Centered Care Wellness All Rights Reserved.</p>
      </div>

    </footer>
  );
}