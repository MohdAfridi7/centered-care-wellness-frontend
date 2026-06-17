import React from "react";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import mapImg from "../../assets/map.webp";

export default function ContactMap() {
  return (
    <section className="bg-[#f4f5fb] py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }} // 🔥 repeat animation
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            Connect With{" "}
            <span className="text-yellow-500">Our Care Team</span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: false }}
            className="mt-6 text-gray-600 max-w-lg"
          >
            Whether you need help scheduling an appointment, managing your care plan, or have questions about our services, our team is here to support you with timely and compassionate assistance.
          </motion.p>

          {/* CARDS */}
          <div className="mt-10 grid sm:grid-cols-2 gap-6">

            {/* PHONE */}
<motion.div
  variants={{
    hidden: { opacity: 0, y: 120 },
    show: { opacity: 1, y: 0 }
  }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  whileHover={{ y: -10, scale: 1.04 }}
  className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition text-center group"
>
              <div className="flex justify-center mb-4 relative">
                <motion.div
                  whileHover={{ rotate: 10 }}
                >
                  <Phone className="w-8 h-8 text-[#1f1b4b]" />
                </motion.div>

                <span className="absolute right-0 top-0 w-3 h-3 bg-yellow-400 rounded-full"></span>
              </div>

              <p className="font-semibold text-lg text-[#1f1b4b]">
                (510) 379-9799  
              </p>

              <motion.button
  onClick={() => window.location.href = "tel:+15103799799"}
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  className="mt-4 border border-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition"
>
  Call Support
</motion.button>
            </motion.div>

            {/* EMAIL */}
<motion.div
  variants={{
    hidden: { opacity: 0, y: 120 },
    show: { opacity: 1, y: 0 }
  }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  whileHover={{ y: -10, scale: 1.04 }}
  className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition text-center group"
>
              <div className="flex justify-center mb-4 relative">
                <motion.div
                  whileHover={{ rotate: -10 }}
                >
                  <Mail className="w-8 h-8 text-[#1f1b4b]" />
                </motion.div>

                <span className="absolute right-0 top-0 w-3 h-3 bg-yellow-400 rounded-full"></span>
              </div>

              <p className="font-semibold text-lg text-[#1f1b4b] break-all">
                contact@centeredcarewellness.org
              </p>

              <motion.button
  onClick={() => window.location.href = "mailto:contact@centeredcarewellness.org?subject=Support Request"}
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  className="mt-4 border border-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition"
>
  Email Support
</motion.button>
            </motion.div>

          </div>
        </motion.div>

        {/* RIGHT SIDE (MAP) */}
        <motion.div
          initial={{ opacity: 0, x: 120, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
        >
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: false }}
            className="text-center text-lg font-semibold mb-4 text-[#1f1b4b]"
          >
           Our Location
          </motion.h3>

        <motion.div
  whileHover={{ scale: 1.02 }}
  className="rounded-3xl overflow-hidden shadow-lg h-[300px] md:h-[400px]"
>
  <img
    src={mapImg}
    alt="Contact"
    className="w-full h-full "
  />
</motion.div>
        </motion.div>

      </div>
    </section>
  );
}