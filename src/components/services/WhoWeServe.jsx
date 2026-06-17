import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function WhoWeServe() {
  const navigate = useNavigate();
  return (
    <section className="bg-[#f4f5fb] py-20 px-6 md:px-16 overflow-hidden">
      
      {/* ===== HEADING ===== */}
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-3xl md:text-5xl font-bold text-gray-800"
        >
          Who We <span className="text-yellow-500">Serve</span>
        </motion.h2>
      </div>

      {/* ===== GRID LAYOUT ===== */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 items-stretch">

        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="relative h-[320px] md:h-[400px] rounded-3xl overflow-hidden"
        >
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.iC37vk0NMB28Pyt_LqoqbAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#1f1b4b]/80 flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-bold">
              Medicare <br /> Medi-Cal <br /> Private Insurances
            </h3>

            <p className="text-sm mt-2 opacity-80">
              Contact us for benefit eligibility
            </p>
          </div>
        </motion.div>

        {/* CENTER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="relative h-[380px] md:h-[450px] rounded-3xl overflow-hidden md:-mt-10"
        >
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-6">
            <h3 className="text-xl md:text-2xl font-bold leading-relaxed">
              Adults <br />
              Seniors <br />
              Veterans <br />
              LGBTQIA+
            </h3>

            <p className="text-sm mt-3">
              Living in the state of California
            </p>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="relative h-[320px] md:h-[400px] rounded-3xl overflow-hidden md:mt-10"
        >
          <img
            src="https://images.unsplash.com/photo-1550831107-1553da8c8464"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#1f1b4b]/70 flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-bold">
              Underserved <br /> Populations
            </h3>

            <p className="text-sm mt-3 space-y-1">
              Social Determinants of Health Assessment <br />
              Language Translation Services <br />
              Social Services Support
            </p>
          </div>
        </motion.div>

      </div>

      {/* ===== BUTTON ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: false }}
        className="text-center mt-14"
      >
        <button  onClick={() => navigate("/who-we-serve")} className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition">
          Learn More About Who We Serve
        </button>
      </motion.div>

    </section>
  );
}