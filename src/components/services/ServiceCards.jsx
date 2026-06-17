import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";
import servicesData from "../../data/servicesData";

export default function ServiceCards() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const shortText = (text) => {
    return text.split(" ").slice(0, 10).join(" ") + "...";
  };

  return (
    <section className="py-20 bg-[#f8fafc]">
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
    </section>
  );
}