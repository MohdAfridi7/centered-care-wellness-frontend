import React from "react";
  import img1 from "../../assets/who-we-are.jpeg";
  import { motion } from "framer-motion";
  import { useNavigate } from "react-router-dom";

  export default function WhoWeServeShort() {
    const navigate = useNavigate();

      const data = [
      {
        title: "Adults / Seniors",
        desc: (
    <>
    Whether you’re managing a chronic condition or looking for convenient, accessible healthcare, we offer telehealth solutions that fits your lifestyle and health goals.
      <br />
      <br />
      We understand the unique healthcare needs of older adults. With services like Chronic Care Management and Medication Management Coaching, we help seniors maintain their independence and well being from the comfort of home.
    </>
  )
      },
      {
        title: "Veterans",
        desc: "We are honored to serve veterans by offering care that addresses both physical and mental health needs. Our telehealth platform provides the flexibility and convenience veterans deserve, without sacrificing personalized, high-quality care.",
      },
      {
        title: "LGBTQIA+ Community",
        desc: "We are committed to creating a safe and inclusive space for LGBTQIA+ individuals, ensuring that healthcare is compassionate, respectful, and sensitive to your unique needs. Your well-being is our priority.",
      },
    ];


    
    return (

      <div>


    <section className="bg-[#f5f7fb] py-20 px-6 md:px-16 overflow-x-hidden">
        {/* ===== HEADING ===== */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-center max-w-4xl mx-auto mb-16"
>
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#1f1b4b] ">
    Who We <span className="text-yellow-400">Serve</span>
  </h2>

  <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-md sm:text-base leading-relaxed">
    We provide accessible, compassionate, and personalized healthcare
    solutions for adults, seniors, veterans, and the LGBTQIA+ community,
    ensuring every individual receives the care and support they deserve.
  </p>
</motion.div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          {/* 🔥 LEFT IMAGE (ANIMATION LEFT → RIGHT) */}
      <motion.div
    initial={{ opacity: 0, x: -100, scale: 0.95 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.03 }}
    className="relative group"
  >
    {/* IMAGE */}
    <motion.img
      src="https://i0.wp.com/centeredcarewellness.org/wp-content/uploads/2024/08/Diverse-adults.png?resize=800%2C800&ssl=1"
      className="rounded-3xl shadow-xl w-full object-cover"
      initial={{ scale: 1.1 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />

    {/* 🔥 Glow Effect (Animated) */}
    <motion.div
      className="absolute inset-0 rounded-3xl blur-2xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(99,102,241,0.15))"
      }}
    />

    {/* 🔥 Hover Shine Effect */}
    <div className="absolute inset-0 rounded-3xl overflow-hidden">
      <div className="absolute -left-full top-0 h-full w-[120%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000"></div>
    </div>
  </motion.div>

          {/* 🔥 RIGHT CARDS (ANIMATION RIGHT → LEFT) */}
        <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      show: {
        transition: { staggerChildren: 0.2 },
      },
    }}
  >

    {/* 🔥 FIRST CARD */}
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 80 },
        show: { opacity: 1, x: 0 },
      }}
      className="group relative bg-white p-6 rounded-2xl border border-gray-200 shadow-md transition-all duration-500 mb-6 hover:-translate-y-3 hover:shadow-2xl"
    >
      {/* Glow Overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-200/30 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-[#1f1b4b] group-hover:text-black transition">
          {data[0].title}
        </h3>

        <p className="mt-3 text-gray-600 text-sm">
          {data[0].desc}
        </p>

        {/* Animated underline */}
        <div className="mt-4 h-[3px] w-10 bg-yellow-400 rounded-full group-hover:w-full transition-all duration-500"></div>
      </div>
    </motion.div>

    {/* 🔥 TWO CARDS */}
    <div className="grid sm:grid-cols-2 gap-6">
      {data.slice(1).map((item, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, x: 80 },
            show: { opacity: 1, x: 0 },
          }}
          className="group relative bg-white p-6 rounded-2xl border border-gray-200 shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-200/30 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-lg font-semibold text-[#1f1b4b] group-hover:text-black transition">
              {item.title}
            </h3>

            <p className="mt-3 text-gray-600 text-sm">
              {item.desc}
            </p>

            <div className="mt-4 h-[3px] w-10 bg-yellow-400 rounded-full group-hover:w-full transition-all duration-500"></div>
          </div>
        </motion.div>
      ))}
    </div>

  </motion.div>

        </div>
      </section>
  </div>

    );
  }