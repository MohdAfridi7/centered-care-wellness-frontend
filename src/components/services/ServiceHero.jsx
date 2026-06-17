import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/ourService.png";

const ServiceHero = () => {
   const navigate = useNavigate();
  return (
    <section className="relative w-full h-[90vh] flex items-end justify-center overflow-hidden">

      {/* ===== BACKGROUND IMAGE (ZOOM) ===== */}
      <motion.div
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: false }}
        className="absolute inset-0"
      >
        <img
          src={img1}
          alt="Healthcare"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* ===== OVERLAY ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/60 via-[#0f172a]/40 to-[#1e293b]/60 "
      />

      {/* Floating Blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>

      {/* ===== CONTENT ===== */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="relative mb-20 z-10 text-center px-4 max-w-4xl"
      >

        {/* Badge */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -40 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm text-gray-200 backdrop-blur-md"
        >
          ✨ Comprehensive Healthcare Solutions
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 100 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.9 }}
          className="text-white text-4xl md:text-6xl font-bold leading-tight"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
         Healthcare Services
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 80 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
          className="text-white mt-6 text-lg md:text-xl leading-relaxed"
        >
           From primary care and telehealth consultations to chronic care management and post-hospital support, we provide personalized, accessible, and continuous care tailored to your health needs.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >

          <motion.button
          onClick={() => navigate("/appointment")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white/30 backdrop-blur-md bg-white/10 text-white px-7 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Schedule an Appointment
          </motion.button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default ServiceHero;