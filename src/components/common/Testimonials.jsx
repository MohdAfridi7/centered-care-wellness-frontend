import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {

  const testimonials = [
    {
      text: "The telehealth service made it easy to stay connected with my care team and manage my health from home. The support and follow-ups have been incredibly helpful.",
    },
    {
      text: "I appreciate how responsive and compassionate the providers are. The virtual visits are convenient, professional, and personalized to my needs.",
    },
    {
      text: "The care coordination and wellness support helped me feel more confident managing my condition. I never felt alone during my recovery journey.",
    },
  ];

  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section className="bg-[#1f1b4b] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">

      <div className="max-w-6xl mx-auto text-center">

        {/* ===== HEADING ===== */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Patient{" "}
            <span className="text-yellow-400">
              Experiences
            </span>
          </h2>

          <p className="mt-5 text-gray-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Compassionate virtual care experiences shared by
            individuals receiving personalized wellness and
            telehealth support.
          </p>
        </motion.div>

        {/* ===== SLIDER ===== */}
        <div className="mt-14 relative overflow-hidden">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -120 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >

              {/* ===== CARD ===== */}
              <div className="bg-gradient-to-br from-[#3c6a92] to-[#29557a] rounded-[32px] px-6 sm:px-10 md:px-16 py-14 md:py-16 relative shadow-2xl max-w-5xl mx-auto">

                {/* QUOTE ICON */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-center mb-8"
                >
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                    <Quote className="w-10 h-10 text-yellow-400" />
                  </div>
                </motion.div>

                {/* TEXT */}
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-white/95 font-light"
                >
                  “ {testimonials[index].text} ”
                </motion.p>

                {/* STARS */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-center gap-1 mt-8 text-yellow-400"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill="currentColor"
                    />
                  ))}
                </motion.div>

                {/* LABEL */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6"
                >
                  <p className="text-sm sm:text-base text-white/80 font-medium tracking-wide">
                    — Verified Patient Experience
                  </p>
                </motion.div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* ===== DOTS ===== */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setIndex(i)}
              whileHover={{ scale: 1.3 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-yellow-400 scale-125"
                  : "bg-gray-500"
              }`}
            />
          ))}
        </div>

      </div>

    </section>

    

</>

  );
}