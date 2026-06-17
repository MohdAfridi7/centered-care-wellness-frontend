import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How do I schedule a telehealth appointment?",
    a: "You can easily book a virtual visit through our platform. Choose your service, select a convenient time, and connect with your provider from the comfort of your home.",
  },
  {
    q: "What healthcare services do you provide?",
    a: "We offer primary care, chronic care management, transitional care after hospital discharge, medication management, and remote patient monitoring services.",
  },
  {
    q: "Who is eligible for chronic care management?",
    a: "Patients with two or more chronic conditions expected to last at least 12 months, or conditions that may lead to serious health complications, are eligible for our care management services.",
  },
  {
    q: "How does transitional care management work?",
    a: "After a hospital discharge, our team connects with you within 48 hours, reviews your care plan, manages medications, and provides ongoing support to ensure a smooth recovery at home.",
  },
    {
    q: "What is behavioral health care?",
    a: "Behavioral health care focuses on emotional, mental, and social well-being. Our services help patients manage stress, anxiety, depression, and other behavioral health concerns through compassionate and personalized support.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // 👈 first open by default

  const toggle = (i) => {
    setActiveIndex(activeIndex === i ? null : i); // 👈 only one open
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden bg-[#f7f7ff]">
      <div className="max-w-7xl mx-auto px-4">
        {/* ===== HEADING ===== */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
           Frequently Asked{" "}
  <span className="text-yellow-500">Questions</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Find answers to common questions about our services, care process, and how we support your health journey.
          </p>
        </motion.div>

        {/* ===== CONTENT ===== */}
        <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-12 mt-16 items-center">
          {/* ===== LEFT IMAGE + OVERLAY ===== */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="relative flex items-center justify-center"
          >
            {/* Circle BG */}
            <div className="absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] bg-[#3ed0f5] rounded-full"></div>

            {/* Image */}
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/041/409/059/small_2x/ai-generated-a-female-doctor-with-a-stethoscope-isolated-on-transparent-background-free-png.png"
              alt="doctor"
              className="relative z-10 w-[220px] md:w-[280px]"
            />

            {/* Overlay Card */}
            <div className="absolute top-0 right-0 md:right-0 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-5 py-4 rounded-2xl shadow-lg text-sm max-w-[200px]">
              <p className="font-medium">
                We Are Here To Help <br /> With Your queries!
              </p>
            </div>
          </motion.div>
          <div className="space-y-4 mt-15 md:mt-0">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: false }}
              >
                {/* ===== QUESTION BOX ===== */}
                <div className="bg-white rounded-full shadow-sm">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full text-sm md:text-lg flex justify-between items-center px-6 py-5 text-left font-medium text-gray-800"
                  >
                    {item.q}

                    {activeIndex === i ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </button>
                </div>

                {/* ===== ANSWER OUTSIDE ===== */}
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pt-3 text-sm text-gray-500"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
