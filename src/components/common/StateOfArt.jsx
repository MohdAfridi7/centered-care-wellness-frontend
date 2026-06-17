import { motion } from "framer-motion";
import { ShieldCheck, Clock, UserCheck, CalendarCheck } from "lucide-react";
import StateImg from "../../assets/StateImg.png";

const features = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Secure & Reliable Care",
    desc: "Our platform ensures safe, HIPAA-compliant communication, protecting your health information while delivering consistent and dependable care.",
  },
  {
    icon: <Clock size={24} />,
    title: "Care Anytime, Anywhere",
    desc: "Access healthcare services from the comfort of your home with flexible scheduling and real-time virtual consultations.",
  },
  {
    icon: <UserCheck size={24} />,
    title: "Experienced Healthcare Providers",
    desc: "Our team of skilled professionals delivers personalized care plans, combining clinical expertise with compassionate support.",
  },
  {
    icon: <CalendarCheck size={24} />,
    title: "Seamless Appointment Booking",
    desc: "Easily schedule visits, follow-ups, and ongoing care with a simple and convenient booking experience.",
  },
];

const StateOfArt = () => {
  return (
    <section className="py-16 bg-[#f7f7ff] md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* ===== LEFT IMAGE + SHAPES ===== */}
        <div className="relative flex justify-center">

          {/* Top Shape */}
          <div className="absolute md:-top-15 -top-10 left-1 md:left-10 z-0 w-35 h-50 md:h-70 bg-[#3ed0f5] rounded-3xl"></div>

          {/* Bottom Shape */}
          <div className="absolute -bottom-7 right-3 w-70 h-25 md:h-40 bg-[#6c4cf1] rounded-3xl"></div>

          {/* Image */}
          <motion.img
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            src={StateImg}
            alt="Doctor"
            className="w-full z-1 h-[400px] max-w-[300px] md:h-[500px] md:max-w-[350px] rounded-3xl shadow-xl object-cover"
          />
        </div>

        {/* ===== RIGHT CONTENT ===== */}
        <div>

          {/* Heading */}
          <motion.h2
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight"
          >
            Advanced{" "}<span className="text-yellow-500">Healthcare Technology</span>
          </motion.h2>

          {/* Subtext */}
          <p className="text-gray-500 mt-4 max-w-xl">
            We use modern telehealth solutions, remote monitoring, and digital tools to provide efficient, personalized, and accessible care for every patient.
          </p>

          {/* Cards */}
          <div className="mt-8 space-y-4">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ x: 80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-4 flex items-start gap-4 shadow-md border border-gray-200 hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="w-15 h-10 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500">
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default StateOfArt;