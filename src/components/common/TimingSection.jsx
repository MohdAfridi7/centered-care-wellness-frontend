import React from "react";
import { motion } from "framer-motion";
import img2 from "../../assets/timigimg.png";


export default function TimingSection() {
  return (
    <section
      className="relative overflow-hidden text-white py-24 px-6 md:px-25 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url("${img2}")`,
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#1f1b4b]/40" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* ===== LEFT CONTENT ===== */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 80 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            Accessible Care, When You Need It Most.
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: { opacity: 1, y: 0 },
            }}
            className="mt-6 text-white max-w-lg"
          >
            Get convenient access to primary care, behavioral health, chronic condition management, and follow-up support through our secure telehealth services. Our team is here to provide continuous, reliable care tailored to your needs.
          </motion.p>

          <motion.button
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Schedule an Appointment
          </motion.button>
        </motion.div>

        {/* ===== RIGHT CARD ===== */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="bg-[#FFFFFFCF]/90 backdrop-blur-md text-black rounded-3xl p-6 md:p-8 w-full max-w-md shadow-2xl"
          >
            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="text-lg font-semibold mb-4"
            >
              Availability & Support Hours
            </motion.h3>

            <div className="space-y-5 text-base md:text-lg">

  <motion.div
    variants={{
      hidden: { opacity: 0, x: 40 },
      show: { opacity: 1, x: 0 },
    }}
    className="border-b pb-4"
  >
    <h4 className="font-semibold text-lg mb-2">
      Office Hours
    </h4>

    <p className="text-gray-800">
      Monday – Friday
    </p>

    <p className="font-medium">
      9:00 AM – 6:00 PM
    </p>
  </motion.div>

  <motion.div
    variants={{
      hidden: { opacity: 0, x: 40 },
      show: { opacity: 1, x: 0 },
    }}
  >
    <h4 className="font-semibold mb-2">
      After Hours Support
    </h4>

    <p className="text-gray-700 leading-relaxed">
      After-hours and evening services are available by appointment
      to ensure accessible and responsive care.
    </p>
  </motion.div>

  <motion.div
    variants={{
      hidden: { opacity: 0, x: 40 },
      show: { opacity: 1, x: 0 },
    }}
  >
    <h4 className="font-semibold mb-2">
      Weekend Availability
    </h4>

    <p className="text-gray-700 leading-relaxed">
      Weekend appointments are available as needed.
    </p>
  </motion.div>

</div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}