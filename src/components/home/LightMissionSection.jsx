import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/mission-img.png";
import img2 from "../../assets/Mission-img02.png";

export default function LightMissionSection() {
  const navigate = useNavigate();
  const [start, setStart] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const sectionRef = useRef(null);

  // ===== SCROLL TRIGGER (REPEAT) =====
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        } else {
          // 🔥 RESET when leaving
          setStart(false);
          setCount1(0);
          setCount2(0);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // ===== COUNT ANIMATION =====
  useEffect(() => {
    if (!start) return;

    let startTime = null;
    const duration = 1500;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const value1 = Math.min(Math.floor((progress / duration) * 30), 30);
      const value2 = Math.min(Math.floor((progress / duration) * 15), 15);

      setCount1(value1);
      setCount2(value2);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-r from-[#1E1B4B] to-[#312E81] text-white py-20 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* ===== LEFT ===== */}
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
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 80 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            Our Mission &{" "}
            <span className="text-yellow-400">Commitment</span>
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: { opacity: 1, y: 0 },
            }}
            className="mt-6 text-gray-300 leading-relaxed max-w-lg"
          >
            Our mission is to provide compassionate virtual primary and behavioral healthcare through personalized telehealth services, continuous care coordination, and patient-centered support designed around every stage of wellness.
          </motion.p>

          {/* LIST */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            className="grid grid-cols-2 gap-4 text-lg font-bold mt-8"
          >
            {["Patient-Centered Care", "Compassion & Trust", "Behavioral Health Support", "Accessible Healthcare"].map(
              (item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#1f1b4b] rounded-full"></span>
                  </span>
                  <span className="text-gray-200">{item}</span>
                </div>
              )
            )}
          </motion.div>

          <motion.button
          onClick={() => navigate("/services")}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.08 }}
            className="mt-10 px-6 py-3 border border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
          >
            Explore Our Services
          </motion.button>
        </motion.div>

        {/* ===== RIGHT ===== */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="grid gap-6"
        >

          {/* MOBILE */}
          <div className="relative lg:hidden flex justify-center">
            <div className="w-[90%] max-w-[340px]">
              <img
                src={img1}
                className="rounded-3xl w-full h-[480px] object-cover shadow-lg"
              />

            <motion.div
                           initial={{ scale: 0.8, opacity: 0 }}
                           whileInView={{ scale: 1, opacity: 1 }}
                           viewport={{ once: false }}
                           className="absolute -bottom-10 left-1/4 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl px-6 py-5 text-center shadow-xl"
                         >
                           <h3 className="text-white text-5xl font-bold">{count1}<sup>+</sup> </h3>
                           <p className="text-white text-md mt-2">Years Caring for Patients</p>
                         </motion.div>
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:grid grid-cols-2 gap-6">

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              src={img1}
              className="rounded-3xl w-full h-full object-cover"
            />

           <motion.div
                         initial={{ y: 80, opacity: 0 }}
                         whileInView={{ y: 0, opacity: 1 }}
                         viewport={{ once: false }}
                         className="flex items-end justify-center"
                       >
                         <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl p-8 text-center w-[250px]">
                           <h3 className="text-white text-5xl font-bold">{count1}<sup>+</sup> </h3>
                           <p className="text-white text-md mt-2">Years Caring for Patients</p>
                         </div>
                       </motion.div>

           <motion.div
                         initial={{ y: 80, opacity: 0 }}
                         whileInView={{ y: 0, opacity: 1 }}
                         viewport={{ once: false }}
                         className="flex items-start justify-center"
                       >
                         <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl p-8 text-center w-[250px]">
                           <h3 className="text-5xl text-white font-bold">{count2} MIN</h3>
                           <p className="text-white text-md mt-2">
                             Average Response Time
                           </p>
                         </div>
                       </motion.div>

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              src={img2}
              className="rounded-3xl w-full h-full object-cover"
            />

          </div>
        </motion.div>
      </div>
    </section>
  );
}