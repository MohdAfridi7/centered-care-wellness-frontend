import React, { useEffect } from "react";
  import img1 from "../../assets/who-we-are.jpeg";
  import { motion } from "framer-motion";
  import { useNavigate } from "react-router-dom";
  import { updateSEO } from "../../utils/seo";
import { getSeoMetaByPage } from "../../api/seoRoutes";

  export default function WhoWeServe() {
    const navigate = useNavigate();
       useEffect(() => {
    
        const loadSeo = async () => {
    
          try {
    
            const res = await getSeoMetaByPage("who-we-serve");
    
            if (res.success) {
              updateSEO(res.data);
            }
    
          } catch (error) {
    
            console.error("SEO Error:", error);
    
          }
    
        };
    
        loadSeo();
    
      }, []);

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


    const data2 = [
      {
        title: "Underserved Populations",
        desc: "At Centered Care Wellness, we are deeply committed to providing healthcare access to underserved populations. As a 501(c)3 charitable nonprofit organization, our mission is to eliminate barriers to care and offer compassionate, inclusive services for those who need it most. We understand that healthcare goes beyond medical treatment, which is why we take a holistic approach to supporting the well-being of our patients.",
      },
      {
        title: "Addressing Social Determinants of Health",
        desc: "Health outcomes are often influenced by factors such as income, education, housing, and access to nutritious food. At Centered Care Wellness, we conduct Social Determinants of Health Assessments to identify and address the broader challenges that impact our patients’ health. By understanding the unique circumstances of each individual, we can create care plans that not only focus on medical needs but also provide solutions to the social factors that may hinder their health outcomes.",
      },
      {
        title: "Social Work Support",
        desc: "We offer social work support to help patients navigate complex social and healthcare systems. Our team connects individuals with essential resources, such as financial assistance, housing support, and food security programs. We believe in empowering our patients with the tools they need to live healthier, more fulfilling lives.",
      },
      {
        title: "Mental Health Support",
        desc: "Mental health is a critical component of overall wellness. Centered Care Wellness provides telehealth mental health services that ensure individuals receive the emotional and psychological support they need. When it’s managing anxiety, depression, or stress related to chronic conditions, our integrated approach to care focuses on both mental and physical well-being.",
      },
      {
        title: "Language Translation Services",
        desc: "We believe that language should never be a barrier to receiving quality healthcare. Our telehealth platform includes language translation services to ensure clear communication between patients and providers. No matter your language, our team is dedicated to delivering care that is accessible, understandable, and respectful.",
      },
    ];
    return (

     <div>
            <section className="bg-gradient-to-r from-[#eef2ff] via-white to-[#f8fafc] py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 ">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* 🔥 LEFT CONTENT (RIGHT → LEFT ANIMATION) */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f1b4b] leading-tight">
              Who We <span className="text-yellow-500">Serve</span>
            </h2>

            <p className="mt-6 text-gray-600 max-w-lg mx-auto md:mx-0">
              We proudly provide telehealth services tailored to meet the needs of
              diverse communities.
            </p>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
              onClick={() => navigate("/appointment")}
            >
              Schedule An Appointment
            </motion.button>
          </motion.div>

          {/* 🔥 RIGHT IMAGE (RIGHT → LEFT + SCALE + FLOAT) */}
          <motion.div
            initial={{ opacity: 0, x: 120, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 blur-3xl rounded-full"></div>

              {/* Floating animation */}
              <motion.img
                src="https://i0.wp.com/centeredcarewellness.org/wp-content/uploads/2024/08/CCW-Curved-Logo-Transparent.png?resize=1024%2C690&ssl=1"
                alt="Centered Care"
                className="relative z-10 w-full max-w-[480px] object-contain drop-shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

        </div>
      </section>

    <section className="overflow-hidden bg-[#2b2350] py-20 px-6 md:px-16">
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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


  <section className=" bg-[#f4f5fb] py-20 px-6 md:px-16">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

      {/* 🔥 LEFT CARDS */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="space-y-6 order-2 lg:order-1"
      >
        {data2.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, x: -80 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="group relative bg-white p-6 rounded-2xl border border-gray-200 shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-200/30 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-[#1f1b4b] group-hover:text-black transition">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-3 h-[3px] w-10 bg-yellow-400 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          </motion.div>
        ))}

    <div className="flex justify-center">
    <motion.button
    
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
    >
      Schedule An Appointment
    </motion.button>
  </div>
      </motion.div>

      {/* 🔥 RIGHT IMAGE (STICKY) */}
    <div className="order-1 lg:order-2 h-full">
    <div className="lg:sticky overflow-hidden lg:top-24 self-start">
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80"
          className="rounded-3xl shadow-xl w-full object-cover"
          alt="Healthcare"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-3xl"></div>
      </motion.div>
    </div>
  </div>

    </div>
  </section>


    <section className=" bg-[#2b2350] overflow-hidden py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          {/* 🔥 LEFT IMAGE (LEFT → RIGHT ANIMATION) */}
        <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="relative flex justify-center"
  >
    <img
      src="https://i0.wp.com/centeredcarewellness.org/wp-content/uploads/2024/08/Insurance-graphic-.png?resize=800%2C800&ssl=1"
      alt="Insurance"
      className="rounded-xl shadow-lg w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[450px] xl:max-w-[500px] aspect-square object-cover"
    />
  </motion.div>

          {/* 🔥 RIGHT CONTENT (RIGHT → LEFT ANIMATION) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-block">
    <motion.h2
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl md:text-5xl text-blue-600 font-bold ]"
  >
      Insurances <span className="text-yellow-500">Accepted</span>
  </motion.h2>
    <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-blue-600 mt-2 rounded-full"></div>
  </div>

            <p className="mt-4 text-white leading-relaxed">
              At Centered Care Wellness, we strive to make our services accessible
              to all. We proudly accept Medicare, Medi-Cal, and most private
              insurance plans. Our goal is to ensure that you can receive the care
              you need without financial stress.
            </p>

            <p className="mt-4 text-white leading-relaxed">
              If you are unsure about your coverage or benefits eligibility, our
              team is here to help. Contact us for personalized support, and we’ll
              work with you to verify your insurance benefits and guide you
              through the process of accessing our services.
            </p>

            {/* 🔥 CTA BUTTON */}
            <button  onClick={() => navigate("/contact")} className="mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 font-semibold rounded shadow hover:scale-105 transition">
              CONTACT US
            </button>
          </motion.div>

        </div>
      </section>


        <section className="overflow-hidden bg-[#f4f6fb] py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* 🔥 LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* TAG */}
           <a
  href="https://docs.google.com/document/d/1WN2Tc4elEwNTMUoMX6-CSHt8u_SGAqpu/edit"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm px-4 py-2 rounded-full mb-6 tracking-wide"
>
  Charity Care Policy
</a>

            {/* HEADING */}
            <h2 className="text-3xl md:text-5xl font-bold text-[#1f1b4b] leading-tight">
              Our Charitable <br />
              <span className="text-blue-600">Mission</span>
            </h2>

            {/* TEXT */}
            <p className="mt-6 text-gray-600 leading-relaxed">
              Our mission is to revolutionize healthcare by providing high-quality, accessible, and compassionate care tailored to meet the unique needs of each individual.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
            As a 501(c) (3) charitable nonprofit organization, we are dedicated to improving patient outcomes through innovative solutions and a patient centered approach. We are deeply invested in improving the healthcare of vulnerable populations in our communities.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Please consider making a tax deductible donation today to help us meet unmet needs and provide fundamental support for people who are struggling with getting their basic needs met.
            </p>

            {/* CTA */}
            <motion.button
  onClick={() => window.open("https://www.givelify.com/donate/centered-care-wellness-antioch-ca-2j7wy5MTUyNjEzNA==/donation/amount", "_blank")}
  whileHover={{ scale: 1.05 }}
  className="mt-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
>
  Donate & Support Our Mission
</motion.button>
          </motion.div>

          {/* 🔥 RIGHT IMAGE */}
          <motion.div
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="relative flex justify-center"
  >
    <div className="w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[480px] xl:max-w-[520px] aspect-square relative">
      
      <img
        src="https://i0.wp.com/centeredcarewellness.org/wp-content/uploads/2024/08/Flipped-hands.png?resize=800%2C800&ssl=1"
        className="rounded-3xl shadow-2xl w-full h-full object-cover"
        alt="Charity Care"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent rounded-3xl"></div>

      {/* Floating badge */}
      <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-xl shadow-lg">
        <p className="text-sm font-semibold text-[#1f1b4b]">
          Compassionate Care ❤️
        </p>
      </div>

    </div>
  </motion.div>

        </div>
      </section>


  </div>

    );
  }