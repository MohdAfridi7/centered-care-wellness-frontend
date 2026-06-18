import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  HeartPulse,
  Brain,
  ShieldCheck,
  Activity,
  Home,
  Radio,
  Pill,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: <MonitorSmartphone size={42} />,
    title: "Telehealth Services",
    desc: "Secure and convenient virtual healthcare visits from the comfort of your home.",
    link: "/how-we-can-help#telehealth-services",
  },
  {
    icon: <HeartPulse size={42} />,
    title: "Primary Care",
    desc: "Personalized preventive and routine healthcare focused on long-term wellness.",
    link: "/primary-care",
  },
  {
    icon: <Brain size={42} />,
    title: "Behavioral Health",
    desc: "Supportive mental and emotional wellness care tailored to individual needs.",
    link: "/behavioral-health-care",
  },
  {
    icon: <ShieldCheck size={42} />,
    title: "Concierge / Private Pay Options",
    desc: "Flexible personalized healthcare options designed around your lifestyle.",
    link: "/concierge-medicine",
  },
  {
    icon: <Activity size={42} />,
    title: "Chronic Disease Management",
    desc: "Continuous support for managing chronic health conditions and improving outcomes.",
    link: "/chronic-care-management-conditions",
  },
  {
    icon: <Home size={42} />,
    title: "Transitional Care Management",
    desc: "Helping patients safely transition from hospital to home with coordinated care.",
    link: "/transitional-care-management-requirements",
  },
  {
    icon: <Radio size={42} />,
    title: "Remote Patient Monitoring",
    desc: "Ongoing health tracking and monitoring to support proactive care management.",
    link: "/how-we-can-help#remote-patient-monitoring",
  },
  {
    icon: <Pill size={42} />,
    title: "Medication Management & Coaching",
    desc: "Guidance and support to help patients manage medications safely and effectively.",
    link: "/how-we-can-help#medication-management",
  },
];

const Commitment = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 sm:py-20 bg-[#f5f7fb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* ===== HEADING ===== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1B4B] leading-tight">
            Committed To{" "}
            <span className="text-yellow-500">
              Better Virtual Care
            </span>{" "}
            & Wellness
          </h2>

          <p className="text-gray-500 mt-5 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            We provide compassionate telehealth, primary care,
            behavioral health, chronic care management, and
            personalized wellness support designed around every
            stage of your healthcare journey.
          </p>
        </motion.div>

        {/* ===== SERVICE CARDS ===== */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: false }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => navigate(item.link)}
              className="group bg-white rounded-3xl p-6 sm:p-8 text-center transition-all duration-300 hover:bg-gradient-to-br hover:from-[#8b5cf6] hover:to-[#6366f1] hover:shadow-2xl cursor-pointer border border-gray-100"
            >
              {/* ===== ICON ===== */}
              <div className="w-20 shadow-lg h-20 sm:w-24 sm:h-24 mx-auto flex items-center justify-center rounded-full  bg-gray-100 group-hover:bg-white/20 transition duration-300">

                <div className="text-[#1E1B4B] group-hover:text-white transition duration-300">
                  {item.icon}
                </div>

              </div>

              {/* ===== TITLE ===== */}
              <h3 className="mt-6 font-semibold text-lg sm:text-xl leading-snug text-[#1E1B4B] group-hover:text-white transition duration-300">
                {item.title}
              </h3>

              {/* ===== DESCRIPTION ===== */}
              <p className="text-sm sm:text-base mt-4 leading-relaxed text-gray-500 group-hover:text-white/90 transition duration-300">
                {item.desc}
              </p>

              {/* ===== BUTTON =====
              <div className="mt-6 inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#1E1B4B] group-hover:text-white transition duration-300">
                Learn More →
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* ===== APPOINTMENT BUTTON ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: false }}
          className="mt-14"
        >
          <button
            onClick={() => navigate("/appointment")}
            className="bg-[#1E1B4B] hover:bg-[#312E81] text-white px-8 sm:px-10 py-4 rounded-full text-sm sm:text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105"
          >
            Schedule an Appointment
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Commitment;