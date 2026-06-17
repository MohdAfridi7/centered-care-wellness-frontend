import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";
import servicesData from "../../data/servicesData";

export default function HomeServiceCards() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const shortText = (text) => {
    return text.split(" ").slice(0, 10).join(" ") + "...";
  };

  return (
    <section className="mt-10 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Explore Our{" "}
            <span className="text-yellow-500">Healthcare Services</span>
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Discover professional healthcare services tailored for your needs.
          </p>
        </motion.div>

        {/* 🔥 Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
          {servicesData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300 flex flex-col"
            >
              {/* 🔥 Image */}
              <div className="h-70 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow">
                  <Stethoscope size={14} /> Service
                </div>
              </div>

              {/* 🔥 Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                {/* TOP CONTENT */}
                <div>
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-yellow-500 transition">
                    {item.title}
                  </h3>

                  {/* 🔥 Text */}
                  {/* 🔥 Text */}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {openIndex === i
                      ? item.description
                      : shortText(item.description)}

                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="ml-2 text-yellow-600 font-medium hover:underline"
                    >
                      {openIndex === i ? "Less" : "View more"}
                    </button>
                  </p>

                  {/* 🔥 Links */}
                  <div className="mt-2 flex flex-col gap-2">
                    {item.links.map((link, j) => (
                      <button
                        key={j}
                        onClick={() => navigate(link.path)}
                        className="text-sm text-left text-blue-700 underline hover:text-blue-800 rounded-md transition"
                      >
                        {link.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 🔥 Button (Always Bottom) */}
                <button
                  onClick={() => navigate(`/detail/${item.links[0]}`)}
                  className="mt-6 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-2 rounded-full font-medium hover:scale-[1.03] transition"
                >
                  Schedule Appointment <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#fef9c3] via-[#ffffff] to-[#e0f2fe] mt-10 py-30 px-6 md:px-25  overflow-x-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* 🔥 LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -120, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-1 flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 blur-3xl rounded-full"></div>

              {/* Floating Image */}
              <motion.img
                src="https://i0.wp.com/centeredcarewellness.org/wp-content/uploads/2024/08/CCW-Curved-Logo-Transparent.png?resize=1024%2C690&ssl=1"
                alt="Centered Care"
                className="relative z-10 w-[260px] md:w-[480px] object-contain drop-shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* 🔥 RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-2 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-6xl font-bold text-[#1f1b4b] leading-tight">
              Make a <span className="text-yellow-500">Difference</span> Today
            </h2>

            <p className="mt-6 text-gray-600 max-w-lg mx-auto md:mx-0">
              Donate here to help vulnerable populations receive the care and
              support they need through our charitable mission.
            </p>

            <motion.button
            onClick={() => window.open("https://www.givelify.com/donate/centered-care-wellness-antioch-ca-2j7wy5MTUyNjEzNA==/donation/amount")}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              DONATE HERE
            </motion.button>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
