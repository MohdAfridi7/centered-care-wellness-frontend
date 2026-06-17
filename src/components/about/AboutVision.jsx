import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import visionImg from "../../assets/ourVision.png";

const AboutVision = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 md:py-16 bg-[#f7f7ff] overflow-hidden">
      <div className="mx-auto px-4 relative">
        {/* ===== DESKTOP SHAPES ===== */}
        <motion.div
          initial={{ x: 600, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:block absolute right-0 top-0 w-[75%] h-full bg-[#3ed0f5] rounded-ss-3xl z-0"
        />

        <motion.div
          initial={{ x: -500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:block absolute left-0 bottom-[-50px] w-[40%] h-[40%] bg-[#231f53] rounded-e-3xl z-0"
        />

        {/* ===== MAIN CONTENT ===== */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 justify-center mx-auto items-center">
          {/* ===== IMAGE ===== */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 md:col-span-5 flex justify-center md:justify-end"
          >
            <img
              src={visionImg}
              alt="Doctor"
              className="
  w-full 
  max-w-[90%] sm:max-w-[300px] md:max-w-[320px]
  md:h-auto h-[350px]
  object-cover rounded-3xl shadow-xl
  mx-auto md:mx-0 md:me-10
              "
            />
          </motion.div>

          {/* ===== CONTENT ===== */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 md:col-span-7 py-4 md:py-25 text-center md:text-left"
          >
            <div className="w-full max-w-[600px] md:max-w-[500px] mx-auto md:mx-0 text-[#2f2f2f]">
              {/* Heading */}
              <h2 className="text-xl md:text-5xl font-bold">Our Vision</h2>

              {/* Divider */}
              <div className=" md:w-full  h-[2px] bg-[#2f2f2f] mt-3 mb-4 mx-auto md:mx-0"></div>

              {/* Content 1 */}
              <h4 className="font-semibold text-base md:text-lg">
                Healthcare Anywhere Any Time
              </h4>

              <p className="mt-2 text-sm md:text-base leading-relaxed">
                We aim to provide accessible, high-quality healthcare services
                for everyone. Our approach combines advanced medical technology
                with compassionate care to deliver the best outcomes.
              </p>

              {/* Content 2 */}
              <h4 className="font-semibold text-base md:text-lg mt-5 md:mt-6">
                Healthcare Anywhere Any Time
              </h4>

              <p className="mt-2 text-sm md:text-base leading-relaxed">
                Our mission is to ensure every patient receives personalized
                treatment and support, no matter where they are.
              </p>

              {/* CTA */}
              <div className="mt-5 md:mt-8 flex flex-row items-center gap-3 md:gap-6">
                <button onClick={() => navigate("/contact")} className="bg-[#f5b83d] hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition w-full">
                  Get Consultation
                </button>

<motion.a
  href="tel:+(510) 379-9799"
  whileHover={{
    y: [0, -8, 0], // up-down loop
  }}
  transition={{
    duration: 0.6,
    ease: "easeInOut",
    repeat: Infinity, // 🔥 infinite loop
  }}
  whileTap={{ scale: 0.95 }}
  className="
    font-medium text-base md:text-lg 
    w-full inline-block cursor-pointer
    text-[#2f2f2f] hover:text-[#f5b83d]
  "
>
  +(510) 379-9799
</motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutVision;
