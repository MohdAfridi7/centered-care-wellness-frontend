import React, { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png"

const navLinks = [
  { name: "Home", path: "/" },
  // { name: "Doctors", path: "/doctors" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const moreLinks = [
  { name: "Blog", path: "/blogs" },
  { name: "Partners", path: "/partners" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const navigate = useNavigate();
  const location = useLocation(); // 👈 important

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50"
    >

      {/* Navbar */}
      <div className="flex items-center justify-between px-6 py-2 bg-white backdrop-blur-md rounded-full shadow-lg">

        {/* Logo */}
       <div
  className="flex items-center gap-2 cursor-pointer"
  onClick={() => navigate("/")}
>
  <img
    src={logo}
    alt="logo"
    className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
  />
</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {navLinks.map((link, i) => (
            <button
              key={i}
              onClick={() => navigate(link.path)}
              className="relative group"
            >
              <span
                className={`transition ${
                  location.pathname === link.path
                    ? "text-blue-600"
                    : "group-hover:text-blue-600"
                }`}
              >
                {link.name}
              </span>

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                  location.pathname === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <button className="flex items-center gap-1 relative group">
              <span className="group-hover:text-blue-600 transition">
                More
              </span>
              <ChevronDown size={16} />
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 group-hover:w-full transition-all duration-300" />
            </button>

            <AnimatePresence>
              {dropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-10 left-0 p-2 w-50"
                >
                  {moreLinks.map((item, i) => (
                    <motion.button
                      key={i}
                      onClick={() => navigate(item.path)}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className={`block px-2 rounded py-2 hover:bg-blue-100 bg-white border-b w-full text-left ${
                        location.pathname === item.path
                          ? "text-blue-600"
                          : "hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
        <div
  onClick={() => (window.location.href = "tel:+15103799799")}
  className="flex items-center gap-2 text-gray-700 text-sm md:text-base cursor-pointer"
>
  <Phone size={18} />
  <span className="hidden sm:block">(510) 379-9799</span>
</div>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden mt-3 bg-white rounded-2xl shadow-lg p-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4 text-gray-700 font-medium">

              {navLinks.map((link, i) => (
                <button
                  key={i}
                  onClick={() => {
                    navigate(link.path);
                    setMenuOpen(false);
                  }}
                  className={`text-left ${
                    location.pathname === link.path
                      ? "text-blue-600"
                      : "hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </button>
              ))}

              {/* Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setDropdown(!dropdown)}
                  className="flex justify-between w-full"
                >
                  More <ChevronDown size={16} />
                </button>

                <AnimatePresence>
                  {dropdown && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden pl-4 mt-2 flex flex-col gap-2"
                    >
                      {moreLinks.map((item, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            navigate(item.path);
                            setMenuOpen(false);
                          }}
                          className={`text-left ${
                            location.pathname === item.path
                              ? "text-blue-600"
                              : "hover:text-blue-600"
                          }`}
                        >
                          {item.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}