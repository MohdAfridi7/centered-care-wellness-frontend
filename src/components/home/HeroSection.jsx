import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../../assets/Home-Banner.jpeg";
import { useNavigate } from "react-router-dom";

// ── variants ────────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  },
});

// ────────────────────────────────────────────────────────────────────────────

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section
        className="h-[130vh] md:h-[145vh] bg-fixed bg-center bg-cover flex items-center justify-center text-center relative"
        style={{ backgroundImage: `url("${HeroImg}")` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1f1b4b]/50 to-[#1f1b4b]" />

        {/* Content */}
        <div className="relative z-10 md:bottom-30 bottom-20 text-white px-6 max-w-3xl">

          {/* Heading */}
          <motion.h1
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-white to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Whole-Person Care <br /> From the Comfort of Your Home
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="visible"
            className="mb-8 text-gray-200"
          >
            Access high-quality primary care, chronic condition management, and
            personalized treatment plans through secure telehealth services. Stay
            connected with your healthcare team anytime, anywhere.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp(0.5)}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <button
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-yellow-500 transition"
            >
              Get Consultation
            </button>

            <button
              onClick={() => navigate("/appointment")}
              className="w-full sm:w-auto text-white font-semibold hover:underline text-center"
            >
              Schedule an Appointment
            </button>
          </motion.div>

        </div>
      </section>

      {/* OVERLAP SECTION */}
      <section className="relative -mt-60 px-6 z-20">
        <div className="max-w-6xl bg-[#2b2350] md:p-0 p-8 rounded-2xl mx-auto relative">

          {/* LEFT DARK CARD */}
          <motion.div
            variants={fadeRight(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="text-white p-8 md:p-12 rounded-3xl shadow-xl w-full md:w-[50%]"
          >
            <motion.h2
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="text-2xl md:text-4xl font-bold mb-4"
            >
              Personalized Primary & Behavioral Health Care
            </motion.h2>

            <motion.p
              variants={fadeUp(0.35)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="text-gray-300 mb-6 max-w-md"
            >
              From preventive care and chronic condition management to behavioral
              health support and post-hospital follow-ups, our virtual care team
              provides personalized healthcare services designed around your
              lifestyle, comfort, and wellness goals.
            </motion.p>

          <motion.button
  variants={fadeUp(0.5)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  whileHover={{ scale: 1.05 }}
  onClick={() => navigate("/about#leadership-team")}
  className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
>
  Meet Our Providers
</motion.button>
          </motion.div>

          {/* FLOATING FORM */}
          <motion.div
            variants={fadeLeft(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl 
                        mt-8 md:mt-0
                        md:absolute md:right-10 md:top-1/2 md:-translate-y-1/2
                        w-full md:w-[410px]"
          >
            <h3 className="text-lg font-semibold mb-6 text-gray-800">
              Find A Provider
            </h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-500">
                  How can we help you today?
                </label>
                <select className="w-full mt-1 p-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-purple-400">
                  <option>Primary Care</option>
                  <option>Behavioral Health</option>
                  <option>Chronic Care Management</option>
                  <option>Transitional Care Management</option>
                  <option>Remote Patient Monitoring</option>
                  <option>Concierge Medicine</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-500">Care Preference</label>
                <select className="w-full mt-1 p-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-purple-400">
                  <option>New Patient</option>
                  <option>Follow Up</option>
                  <option>Ask a question?</option>
                </select>
              </div>

              <button className="w-full bg-[#2b2350] text-white py-3 rounded-full hover:bg-[#1e1a3a] transition">
                Find Care
              </button>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}