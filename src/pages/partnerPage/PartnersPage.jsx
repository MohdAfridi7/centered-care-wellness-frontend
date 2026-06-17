import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { updateSEO } from "../../utils/seo";
import { getSeoMetaByPage } from "../../api/seoRoutes";

const partners = [
  {
    title: "Charles and Smith Health & Wellness Center",
    desc: "Assisting veterans with needs like food, housing, and employment. Serving the Bay Area.",
    img: "https://i0.wp.com/centeredcarewellness.org/wp-content/uploads/2024/11/image-1-2.jpg?resize=300%2C182&ssl=1",
  },
  {
    title: "Healings in Motion",
    desc: "Supports survivors of stroke, traumatic brain injuries and neurological impairments and provides caregiver resources.",
    img: "https://i0.wp.com/centeredcarewellness.org/wp-content/uploads/2024/11/untitled-design-1.jpg?resize=1024%2C546&ssl=1",
  },
  {
    title: "anmiMeds",
    desc: "An engaging app helping patients understand medications, improving adherence through games, reminders and real-time support.",
    img: "https://i0.wp.com/centeredcarewellness.org/wp-content/uploads/2024/11/photo-output-1.png?resize=953%2C1024&ssl=1",
  },
  {
    title: "Anne Fredriksson Consulting",
    desc: "Provides patient-focused executive business consulting for nonprofit, governmental, and healthcare organizations.",
    img: "https://i0.wp.com/centeredcarewellness.org/wp-content/uploads/2024/11/img_5431-1.jpg?w=986&ssl=1",
  },
];

export default function PartnersPage() {

useEffect(() => {

  const loadSeo = async () => {

    try {

      const res = await getSeoMetaByPage("partners");

      if (res.success) {
        updateSEO(res.data);
      }

    } catch (error) {

      console.error("SEO Error:", error);

    }

  };

  loadSeo();

}, []);
  
  return (
    <div className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center  justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef')",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-[#1f1b4b]/80"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold">
            Our <span className="text-yellow-400">Partners</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            Trusted partners supporting Centered Care Wellness in delivering better healthcare solutions.
          </p>
        </motion.div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 bg-[#f7f7ff] text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="max-w-3xl mx-auto text-gray-600 text-lg"
        >
          These partners support Centered Care Wellness and your treatment goals.
        </motion.p>
      </section>

      {/* ================= PARTNERS LIST (DIFFERENT LAYOUT) ================= */}
      <section className="py-10 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto space-y-20">

            <div className="text-center max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-3xl md:text-5xl font-bold text-gray-800"
        >
          Our <span className="text-yellow-500">Resources</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-500 text-lg"
        >
          Featured partners supporting Centered Care Wellness and your treatment journey.
        </motion.p>
      </div>

          {partners.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -120 : 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-2 gap-10 items-center`}
            >
              
              {/* IMAGE */}
              <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-3xl w-full h-[300px] md:h-[350px] object-contain"
                />
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-2xl font-bold text-[#1f1b4b]">
                  {item.title}
                </h3>

                <div className="w-16 h-[3px] bg-yellow-400 mt-3 mb-4"></div>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* optional button */}
                {/* <button className="mt-6 px-6 py-2 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition">
                  Learn More
                </button> */}
              </div>

            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
}