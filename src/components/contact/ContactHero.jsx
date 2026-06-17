import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/contact-hero.png";

export default function ContactHero() {
   const navigate = useNavigate();
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-end justify-center text-center overflow-hidden">

      {/* ===== BACKGROUND (repeat zoom on scroll) ===== */}
      <motion.div
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: false }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${img1})`,
        }}
      />

      {/* ===== OVERLAY ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="absolute inset-0 bg-[#1f1b4b]"
      />

      {/* ===== CONTENT ===== */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }} // 🔥 important
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="relative mb-20 z-10 px-6 max-w-3xl text-white"
      >
        {/* HEADING */}
        <motion.h1
  variants={{
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.7 }}
  className="text-3xl md:text-5xl font-bold"
>
  Get In <span className="text-yellow-400">Touch</span> With Our Care Team
</motion.h1>

{/* TEXT */}
<motion.p
  variants={{
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.7 }}
  className="mt-4 text-gray-300 text-sm md:text-base"
>
  Have questions about our services, need support with your care plan, or want to schedule an appointment? Our healthcare team is here to assist you every step of the way.
</motion.p>

        {/* BUTTONS */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
          className="mt-6 flex justify-center gap-4 flex-wrap"
        >

          <motion.button
           onClick={() => navigate("/appointment")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Schedule an Appointment
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}