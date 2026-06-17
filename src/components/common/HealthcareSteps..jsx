import React from "react";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Stethoscope,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// ── animation variants ──────────────────────────────────────────────────────

const headingVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,   // har card 180 ms baad aayega
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
  },
};

// ────────────────────────────────────────────────────────────────────────────

export default function HealthcareSteps() {
  const navigate = useNavigate();

   const steps = [
    {
      id: "1",
      icon: (
        <HeartHandshake className="w-14 h-14 text-cyan-400" />
      ),
      title: "Choose Your Care Service",
      desc: "Select from primary care, behavioral health, telehealth visits, or chronic care management based on your wellness needs.",
    },
    {
      id: "2",
      icon: (
        <Stethoscope className="w-14 h-14 text-cyan-400" />
      ),
      title: "Connect With a Provider",
      desc: "Get matched with a qualified healthcare professional who understands your condition and goals.",
    },
    {
      id: "3",
      icon: (
        <CalendarDays className="w-14 h-14 text-cyan-400" />
      ),
      title: "Schedule Your Visit",
      desc: "Book a convenient virtual or in-person appointment with flexible scheduling options.",
    },
    {
      id: "4",
      icon: (
        <ShieldCheck className="w-14 h-14 text-cyan-400" />
      ),
      title: "Receive Personalized Care",
      desc: "Get a customized care plan, ongoing monitoring, and continuous support for better health outcomes.",
      highlight: true,
    },
  ];

  return (
    <section className="bg-[#1f1b4b] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">

        {/* ===== HEADING ===== */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Simple Steps To{" "}
            <span className="text-yellow-400">Personalized Wellness</span>
          </h2>

          <p className="mt-5 text-gray-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Our streamlined telehealth approach makes it easy to access primary
            care, behavioral health support, and personalized wellness services
            from the comfort of your home.
          </p>
        </motion.div>

        {/* ===== CARDS — staggered scroll reveal ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`relative rounded-3xl p-8 min-h-[320px] flex flex-col justify-center text-center shadow-lg
                ${
                  step.highlight
                    ? "bg-gradient-to-br from-purple-500 to-indigo-600 text-white"
                    : "bg-white text-gray-800"
                }`}
            >
              {/* NUMBER BADGE */}
              <div className="absolute top-0 left-0 bg-yellow-400 text-white text-3xl sm:text-4xl px-6 py-3 rounded-br-3xl rounded-tl-3xl font-bold shadow-md">
                {step.id}
              </div>

              {/* ICON */}
              <div className="flex justify-center mb-5 mt-6">{step.icon}</div>

              {/* TITLE */}
              <h3 className="font-semibold text-lg sm:text-xl leading-snug">
                {step.title}
              </h3>

              {/* DESC */}
              <p className="text-sm sm:text-base mt-4 opacity-80 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== BUTTON ===== */}
        <motion.button
          onClick={() => navigate("/services")}
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="mt-12 text-white font-medium hover:text-yellow-400 transition flex items-center justify-center gap-2 mx-auto text-sm sm:text-base"
        >
          Explore Our Services →
        </motion.button>

      </div>
    </section>
  );
}