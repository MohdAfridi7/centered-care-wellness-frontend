import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { updateSEO } from "../../utils/seo";
import { getSeoMetaByPage } from "../../api/seoRoutes";

export default function ServicesDetail() {
const location = useLocation();
   useEffect(() => {

    const loadSeo = async () => {

      try {

        const res = await getSeoMetaByPage("service");

        if (res.success) {
          updateSEO(res.data);
        }

      } catch (error) {

        console.error("SEO Error:", error);

      }

    };

    loadSeo();

  }, []);

useEffect(() => {
  if (location.hash) {
    setTimeout(() => {
      const element = document.querySelector(location.hash);

      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);
  }
}, [location]);

  const services = [
    "Preventive health visits, wellness exams & screenings",
    "Chronic disease management (diabetes, BP, asthma)",
    "Medication management & prescription refills",
    "Mental health support with licensed clinicians",
    "Urgent care for minor illnesses & needs",
    "Post-hospital care & follow-ups",
    "Lifestyle coaching & wellness support",
    "Senior care & geriatric support",
    "Care coordination with specialists",
  ];



const points = [
  {
    title: "Convenience",
    desc: "With telehealth, you no longer need to worry about commuting to appointments, taking time off work, or arranging for childcare. Access your care from the comfort of your home, at a time that suits you. Urgent care or chronic care needs – we’ve got you covered!",
  },
  {
    title: "Continuous Support",
    desc: "Managing chronic conditions requires regular follow-ups and ongoing support. Our telehealth platform allows us to stay connected, monitor your health remotely, and adjust your care plan as needed—without the delays or difficulties of scheduling in-office visits.",
  },
  {
    title: "Personalized Care",
    desc: "Through virtual consultations, our healthcare team spends more time getting to know you and your health needs. We work closely with you to develop a tailored treatment plan, ensuring that your care is centered on your unique needs and lifestyle.",
  },
  {
    title: "Accessibility",
    desc: "Telehealth removes the geographic barriers to quality healthcare. Whether you live in a rural area, have mobility challenges, or simply prefer the convenience of virtual visits, you can receive expert care without ever leaving your home.",
  },
  {
    title: "Cost Effective",
    desc: "Avoid unnecessary travel costs and time away from work. Telehealth often reduces the financial burden associated with frequent in-person visits, while still offering the high level of care you deserve.",
  },
  {
    title: "Concierge Plans Available",
    desc: "Whether you’re managing chronic conditions, need periodic urgent care visits or proactive health support, our subscription-based concierge plans ensure you’re always connected to your provider with affordable plans.",
  },
];


const medicationPoints = [
  {
    title: "Chronic Care Management",
    desc: "Comprehensive support for long-term health including diabetes, heart disease, hypertension, and lung disease. Our telehealth platform ensures continuous care and helps prevent complications through regular follow-ups.",
  },
  {
    title: "Personalized Care Plans",
    desc: "Every patient receives a tailored care plan designed around their lifestyle and health goals, ensuring the right care at the right time.",
  },
  {
    title: "Proactive Monitoring",
    desc: "Through Remote Patient Monitoring (RPM) and virtual check-ins, we track your health, detect issues early, and prevent emergencies or hospitalizations.",
  },
  {
    title: "Transitional Care Management",
    desc: "Ensuring a smooth transition from hospital to home with structured recovery plans and reduced risk of rehospitalization.",
  },
  {
    title: "Timely Follow-Up Care",
    desc: "Within 48 hours of discharge, we provide virtual consultations to review your condition, care plan, and address concerns early.",
  },
  {
    title: "Medication Management Coaching",
    desc: "Helping you understand prescriptions, manage side effects, and stay consistent with your medication routine through telehealth guidance. Managing multiple medications can be overwhelming, especially for patients with chronic conditions. Our MMC service provides personalized coaching to help you navigate your medications, ensuring you understand the purpose, dosage, and timing of each one.",
  },
  {
    title: "Improved Adherence",
    desc: "Non-adherence to medication can lead to serious health complications and increased hospitalizations. Through our telehealth platform, we provide regular virtual check-ins to monitor your progress, address any concerns, and keep you accountable for your medication routine. Our compassionate coaches work with you to develop strategies that fit your lifestyle, making it easier to stick to your plan.",
  },
  {
    title: "Education and Resources",
    desc: "We believe that informed patients are empowered patients. Our coaches will educate you about your medications, including potential side effects, interactions, and the importance of adherence. We provide easy-to-understand resources and tools to help you feel confident in managing your treatment.",
  },
  {
    title: "Digital Support Tool",
    desc: "To make learning and understanding fun and easy, we utilize a digital tool that supports you between visits. This tool reinforces what you’ve learned during your sessions and reminds you to take your medicines as prescribed, enhancing your engagement and adherence.",
  },
  {
    title: "Proactive Monitoring and Adjustments",
    desc: "Regular communication with our healthcare team allows us to monitor your health and medication effectiveness continuously. If any issues arise, we can promptly adjust your medication plan in collaboration with your healthcare provider, ensuring optimal management of your condition.",
  },
  {
    title: "Convenient Access to Care",
    desc: "With our telehealth services, you can receive medication management coaching from the comfort of your home. Whether you have a quick question or need a detailed review of your medications, our team is just a text message or video call away.",
  },
];


const carePoints = [
  {
    title: "Comprehensive Support for Long-Term Health",
    desc: "Managing chronic conditions like diabetes, heart disease, hypertension, and lung disease requires ongoing attention and regular follow-ups. Through our telehealth platform, we offer seamless access to expert care, helping you stay on top of your treatment plan and avoid complications.",
  },
  {
    title: "Personalized Care Plans",
    desc: "Every patient is unique, and so is their journey with chronic illness. Our dedicated team works with you to create a personalized care plan that fits your lifestyle and health goals, ensuring that you get the right care when you need it.",
  },
  {
    title: "Proactive Monitoring",
    desc: "Through Remote Patient Monitoring (RPM) and regular virtual check-ins, we keep track of your vital signs, symptoms, and overall health. This allows us to detect potential issues early and make timely adjustments to your care plan, helping to prevent emergencies and hospitalizations.",
  },
  {
    title: "Smooth Transitions from Hospital to Home",
    desc: "After a hospital stay, the transition back to everyday life can be challenging. Our Transitional Care Management (TCM) services are designed to ensure a smooth recovery and reduce the risk of rehospitalization.",
  },
  {
    title: "Timely Follow-Up Care",
    desc: "Within 48 hours of your discharge, we’ll schedule a virtual visit to review your discharge plan, assess your current condition, and address any concerns. This early intervention is key to catching potential complications before they escalate.",
  },
  {
    title: "Medication Management Coaching",
    desc: "A critical part of transitional care is ensuring you’re taking your medications correctly. Our Medication Management Coaching (MMC) service helps you understand your prescriptions, manage side effects, and stay on track with your regimen, all through convenient telehealth consultations.",
  },
  {
    title: "Ongoing Support for a Full Recovery",
    desc: "Our team remains connected with you through regular virtual visits, helping to navigate any new health challenges and ensuring you have the support you need during your recovery.",
  },
];


const rpmPoints = [
  {
    title: "Continuous Health Monitoring",
    desc: "Our RPM service allows for real-time tracking of your vital signs and health metrics from the comfort of your home. By using connected devices, such as blood pressure monitors, glucose meters, and heart rate trackers, we gather crucial health data that helps our healthcare team understand your condition better.",
  },
  {
    title: "Proactive Interventions",
    desc: "One of the key advantages of RPM is the ability to identify potential health issues before they escalate. Our healthcare professionals monitor your data continuously and can quickly intervene if any concerning trends or abnormalities are detected. This proactive approach helps prevent complications and reduces the risk of hospitalizations.",
  },
  {
    title: "Personalized Care Plans",
    desc: "Each patient is unique, and our RPM service is tailored to fit your specific health needs. Based on the data collected, our team will work with you to adjust your care plan as necessary, ensuring that you receive the most effective treatment for your condition.",
  },
  {
    title: "Enhanced Patient Engagement",
    desc: "By involving you in your own healthcare through RPM, we foster a greater sense of empowerment and accountability. You’ll receive regular updates about your health status, allowing you to stay informed and engaged in your treatment process.",
  },
  {
    title: "Convenient and Comfortable Access to Care",
    desc: "Our telehealth platform makes it easy to access your health data and communicate with your healthcare team. You can discuss your results during virtual appointments and receive guidance without the need for frequent in-person visits, making your care both convenient and comfortable.",
  },
  {
    title: "Educational Support and Resources",
    desc: "In addition to monitoring your health, our RPM service provides you with valuable educational resources to help you understand your condition and the importance of adherence to your care plan. We are committed to empowering you with knowledge to improve your overall health.",
  },
];

  return (
    <section className="bg-[#f4f5fb]">

      {/* 🔥 HERO */}
     <div className="relative overflow-hidden h-[300px] md:h-[480px] w-full">
  
  {/* IMAGE */}
  <motion.img
    src="https://i0.wp.com/centeredcarewellness.org/wp-content/uploads/2024/08/Older-adults-looking-at-computer-together.jpg?w=992&ssl=1"
    alt="service"
    className="w-full h-full object-cover"
    initial={{ scale: 1.1, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  />

  {/* OVERLAY */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#1f1b4b]/80"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  />

  {/* TEXT */}
  <div className="absolute inset-0 flex items-center justify-center text-center px-4">
    <motion.h1
      className="text-3xl md:text-5xl font-bold text-white"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      How We Can <span className="text-yellow-400">Help</span>
    </motion.h1>
  </div>

</div>


      {/* 🔥 SERVICES CARDS */}
   <div id="chronic-care-and-transitional-care-management" className="max-w-6xl mx-auto py-16 px-6 md:px-16">

  {/* HEADING */}
  <div className="text-center max-w-3xl mx-auto">

    <motion.h2
      className="text-2xl mb-4 md:text-4xl text-[#1f1b4b] font-bold relative inline-block"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      Chronic Care Management and{" "}
      <span className="text-yellow-500">
        Transitional Care Management
      </span>

      <motion.span
        className="absolute left-1/2 -translate-x-1/2 mt-4 block w-32 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ transformOrigin: "center" }}
        viewport={{ once: true }}
      />
    </motion.h2>

    <motion.p
      className="mt-4 text-gray-600"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      viewport={{ once: true }}
    >
      Our comprehensive range of services includes everything you need for a healthier life.
    </motion.p>
  </div>

  {/* CARDS */}
  <motion.div
    className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.15,
        },
      },
    }}
  >
    {services.map((item, i) => (
      <motion.div
        key={i}
        className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition group"
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircle
          className="text-yellow-500 mb-4 group-hover:scale-110 transition"
          size={26}
        />
        <p className="text-gray-700 text-sm md:text-base">{item}</p>
      </motion.div>
    ))}
  </motion.div>

  {/* BOTTOM TEXT */}
  <motion.p
    className="mt-12 text-center font-semibold text-[#1f1b4b]"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.6 }}
    viewport={{ once: true }}
  >
    Better Outcomes. Better Care. A Healthier You.
  </motion.p>

</div>

      {/* 🔥 TELEHEALTH SECTION */}
     <div id="telehealth-services" className="max-w-6xl mx-auto py-16 px-6 md:px-16">

  {/* HEADING */}
  <div className="text-center mb-14">
    <motion.h2
      className="text-3xl md:text-5xl font-bold relative inline-block"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      Telehealth <span className="text-yellow-500">Services</span>

      <motion.span
        className="absolute left-1/2 -translate-x-1/2 mt-4 block w-32 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ transformOrigin: "center" }}
        viewport={{ once: true }}
      />
    </motion.h2>
  </div>

  <div className="grid lg:grid-cols-2 gap-6">

    {/* IMAGE */}
    <motion.div
      className="lg:sticky lg:top-24 h-fit"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.img
        src="https://i0.wp.com/centeredcarewellness.org/wp-content/uploads/2024/08/Benefits-of-Telehealth.jpg?resize=1024%2C409&ssl=1"
        className="rounded-3xl shadow-xl w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[420px]"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
    </motion.div>

    {/* CARDS */}
    <motion.div
      className="grid sm:grid-cols-2 gap-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {points.map((item, i) => (
        <motion.div
          key={i}
          className="group relative bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-200/20 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <CheckCircle className="text-yellow-500 mb-3 relative z-10 group-hover:scale-110 transition" />

          <h3 className="font-semibold text-lg text-[#1f1b4b] relative z-10">
            {item.title}
          </h3>

          <p className="text-gray-600 text-sm mt-2 relative z-10">
            {item.desc}
          </p>

          <div className="mt-4 h-[2px] w-0 bg-yellow-400 group-hover:w-full transition-all duration-500"></div>
        </motion.div>
      ))}
    </motion.div>

  </div>
</div>


        {/* 🔥 MEDICATION */}
     <div id="medication-management" className="max-w-6xl mx-auto py-16 px-6 md:px-16">

  {/* HEADING */}
  <div className="text-center mb-14">
    <motion.h2
      className="text-3xl md:text-5xl font-bold relative inline-block"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      Medication <span className="text-yellow-500">Management</span>

      <motion.span
        className="absolute left-1/2 -translate-x-1/2 mt-4 block w-32 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ transformOrigin: "center" }}
        viewport={{ once: true }}
      />
    </motion.h2>
  </div>

  <div className="grid lg:grid-cols-2 gap-6">

    {/* CARDS LEFT */}
    <motion.div
      className="grid sm:grid-cols-2 gap-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {medicationPoints.map((item, i) => (
        <motion.div
          key={i}
          className="group relative bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          variants={{
            hidden: { opacity: 0, x: -40 },
            show: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-200/20 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <CheckCircle className="text-yellow-500 mb-3 relative z-10 group-hover:scale-110 transition" />

          <h3 className="font-semibold text-lg text-[#1f1b4b] relative z-10">
            {item.title}
          </h3>

          <p className="text-gray-600 text-sm mt-2 relative z-10">
            {item.desc}
          </p>

          <div className="mt-4 h-[2px] w-0 bg-yellow-400 group-hover:w-full transition-all duration-500"></div>
        </motion.div>
      ))}
    </motion.div>

    {/* IMAGE RIGHT */}
    <motion.div
      className="lg:sticky lg:top-24 h-fit"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.img
        src="https://i0.wp.com/centeredcarewellness.org/wp-content/uploads/2024/08/Young-female-telehealth-provider.jpg?resize=1024%2C724&ssl=1"
        className="rounded-3xl shadow-xl w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[420px]"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
    </motion.div>

  </div>
</div>
      
         {/* 🔥 Care*/}
     <div className="max-w-6xl mx-auto py-16 px-6 md:px-16">

  {/* HEADING */}
  <div className="text-center mb-14">
    <motion.h2
      className="text-3xl md:text-5xl font-bold relative inline-block"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      Chronic Care Management and{" "}
      <span className="text-yellow-500">
        Transitional Care Management
      </span>

      <motion.span
        className="absolute left-1/2 -translate-x-1/2 mt-4 block w-32 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ transformOrigin: "center" }}
        viewport={{ once: true }}
      />
    </motion.h2>
  </div>

  <div className="grid lg:grid-cols-2 gap-6">

    {/* IMAGE */}
    <motion.div
      className="lg:sticky lg:top-24 h-fit"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.img
        src="https://i0.wp.com/centeredcarewellness.org/wp-content/uploads/2024/08/IMG_7437.jpeg?resize=1024%2C576&ssl=1"
        className="rounded-3xl shadow-xl w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[420px]"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
    </motion.div>

    {/* CARDS */}
    <motion.div
      className="grid sm:grid-cols-2 gap-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {carePoints.map((item, i) => (
        <motion.div
          key={i}
          className="group relative bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          variants={{
            hidden: { opacity: 0, x: 40 },
            show: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-200/20 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <CheckCircle className="text-yellow-500 mb-3 relative z-10 group-hover:scale-110 transition" />

          <h3 className="font-semibold text-lg text-[#1f1b4b] relative z-10">
            {item.title}
          </h3>

          <p className="text-gray-600 text-sm mt-2 relative z-10">
            {item.desc}
          </p>

          <div className="mt-4 h-[2px] w-0 bg-yellow-400 group-hover:w-full transition-all duration-500"></div>
        </motion.div>
      ))}
    </motion.div>

  </div>
</div>






         {/* 🔥 RPM */}
    <div id="remote-patient-monitoring" className="max-w-6xl mx-auto py-16 px-6 md:px-16">

  {/* HEADING */}
  <div className="text-center mb-14">
    <motion.h2
      className="text-3xl md:text-5xl font-bold relative inline-block"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      Remote Patient <span className="text-yellow-500">Monitoring</span>

      <motion.span
        className="absolute left-1/2 -translate-x-1/2 mt-4 block w-32 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ transformOrigin: "center" }}
        viewport={{ once: true }}
      />
    </motion.h2>
  </div>

  <div className="grid lg:grid-cols-2 gap-6">

    {/* CARDS LEFT */}
    <motion.div
      className="grid sm:grid-cols-2 gap-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {rpmPoints.map((item, i) => (
        <motion.div
          key={i}
          className="group relative bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          variants={{
            hidden: { opacity: 0, x: -40 },
            show: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-200/20 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <CheckCircle className="text-yellow-500 mb-3 relative z-10 group-hover:scale-110 transition" />

          <h3 className="font-semibold text-lg text-[#1f1b4b] relative z-10">
            {item.title}
          </h3>

          <p className="text-gray-600 text-sm mt-2 relative z-10">
            {item.desc}
          </p>

          <div className="mt-4 h-[2px] w-0 bg-yellow-400 group-hover:w-full transition-all duration-500"></div>
        </motion.div>
      ))}
    </motion.div>

    {/* IMAGE RIGHT */}
    <motion.div
      className="lg:sticky lg:top-24 h-fit"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.img
        src="https://i0.wp.com/centeredcarewellness.org/wp-content/uploads/2024/08/IMG_7436.jpeg?resize=1536%2C864&ssl=1"
        className="rounded-3xl shadow-xl w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[420px]"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
    </motion.div>

  </div>
</div>

    </section>
  );
}