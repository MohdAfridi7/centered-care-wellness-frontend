import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroImg from "../../assets/about-hero.png";

const AboutHero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full pt-40 pb-24 bg-gradient-to-b from-[#f9fafb] to-white overflow-hidden">

      {/* Background Shapes */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="absolute top-10 left-10 w-72 h-72 bg-yellow-200/40 rounded-full blur-3xl"
      />

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* ===== LEFT CONTENT ===== */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >

          {/* Tag */}
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            className="inline-block px-4 py-1 text-sm bg-yellow-100 text-yellow-600 rounded-full mb-4"
          >
            About Our Care
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 80 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
          >
            Compassionate Care Focused On{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
             Your Health & Well-Being
            </span>
          </motion.h1>

          {/* Text */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-gray-500 mt-6 text-lg leading-relaxed"
          >
            We are committed to providing accessible, high-quality, and patient-centered healthcare. By combining innovative technology with compassionate support, we help individuals manage their health, improve outcomes, and live healthier lives.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 },
            }}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-semibold shadow-md transition"
              onClick={() => navigate("/services")}
            >
              Explore Our Services
            </motion.button>

            <motion.button
                onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Contact Us
            </motion.button>
          </motion.div>

        </motion.div>

        {/* ===== RIGHT IMAGE ===== */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="relative"
        >

          {/* Image */}
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            src={HeroImg}
            alt="Healthcare"
            className="rounded-3xl shadow-xl w-full h-[300px] md:h-[450px] object-cover"
          />

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: false }}
            className="absolute -bottom-10 left-6 bg-white rounded-2xl shadow-xl p-5 w-[260px]"
          >
            <h4 className="font-semibold text-gray-800">30+ Years Experience</h4>
            <p className="text-sm text-gray-500 mt-1">
              Trusted healthcare services with proven excellence.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default AboutHero;