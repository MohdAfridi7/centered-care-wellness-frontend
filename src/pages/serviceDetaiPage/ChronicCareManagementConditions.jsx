import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
  import React, { useEffect } from "react";
import img1 from "../../assets/12.png";
  import {
    CheckCircle,
  Brain,
  HeartPulse,
  Activity,
  Heart,
  User,
  Ribbon,
  Stethoscope,
  Wind,
  Smile,
  Droplet,
  Thermometer,
  ShieldPlus,
  ClipboardList, Users, HeartHandshake,ArrowRight
} from "lucide-react";
import { updateSEO } from "../../utils/seo";
import { getSeoMetaByPage } from "../../api/seoRoutes";

  export default function ChronicCareManagementConditions() {
     const navigate = useNavigate();
     useEffect(() => {
       
           const loadSeo = async () => {
       
             try {
       
               const res = await getSeoMetaByPage("chronic-care-management-conditions");
       
               if (res.success) {
                 updateSEO(res.data);
               }
       
             } catch (error) {
       
               console.error("SEO Error:", error);
       
             }
       
           };
       
           loadSeo();
       
         }, []);
      const conditions = [
    { text: "Alzheimer’s disease and related dementia", icon: <Brain /> },
    { text: "Arthritis (osteoarthritis and rheumatoid)", icon: <Activity /> },
    { text: "Asthma", icon: <Wind /> },
    { text: "Atrial fibrillation", icon: <Heart /> },
    { text: "Autism spectrum disorders", icon: <User /> },
    { text: "Cancer", icon: <Ribbon /> },
    { text: "Cardiovascular disease", icon: <HeartPulse /> },
    { text: "Chronic Obstructive Pulmonary Disease (COPD)", icon: <Stethoscope /> },
    { text: "Depression", icon: <Smile /> },
    { text: "Diabetes", icon: <Droplet /> },
    { text: "Hypertension", icon: <Thermometer /> },
    { text: "Infectious diseases like HIV and AIDS", icon: <ShieldPlus /> },
  ];

    const points = [
    {
      text: "Your healthcare provider will develop a personalized care plan tailored to your specific health needs.",
      icon: <ClipboardList />
    },
    {
      text: "You will have access to ongoing support, regular check-ins, and coordination with specialists.",
      icon: <Users />
    },
    {
      text: "Care is designed to help you stay healthier, avoid complications, and improve your overall well-being.",
      icon: <HeartHandshake />
    }
  ];

  const items = [
    "Problem list",
    "Expected outcomes and prognosis",
    "Measurable treatment goals",
    "Cognitive and functional assessment",
    "Symptom management",
    "Planned interventions",
    "Medication management",
    "Environmental evaluation",
    "Caregiver assessment",
    "Interaction and coordination with outside resources, practitioners, and providers",
    "Requirements for periodic review",
    "When necessary, revision of the care plan"
  ];
    return (
      <div className="bg-[#f4f6fb]">

       <section className="w-full min-h-screen flex items-center justify-center px-6 md:px-16 py-20 
    bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#fff7ed] overflow-hidden">

      <div className="max-w-7xl w-full">

        {/* 🔥 TOP CENTER HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#1f1b4b] leading-tight">
            Chronic Care{" "}
            <span className="text-yellow-500">Management</span>
          </h1>
        </motion.div>

        {/* 🔥 MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* 🔥 IMAGE (Mobile me 2nd, Desktop me right side) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group order-2 md:order-2"
          >
            <img
              src="https://i0.wp.com/centeredcarewellness.org/wp-content/uploads/2024/09/img_7437-1.jpg?resize=1024%2C576&ssl=1"
              alt="ccm"
              className="rounded-3xl shadow-xl w-full transform group-hover:scale-105 transition duration-500"
            />

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-yellow-400 opacity-0 group-hover:opacity-20 blur-2xl transition duration-500"></div>
          </motion.div>

          {/* 🔥 CONTENT (Mobile me last, Desktop me left) */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-3 md:order-1 text-center md:text-left"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1f1b4b]">
              Who is Eligible?
            </h2>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              In order to be eligible for Chronic Care Management (CCM)
              services, a patient must have two or more chronic conditions
              that are expected to last at least 12 months or until the
              patient’s death.
            </p>

            <div>
              <button onClick={() => navigate("/contact")} className="px-6 py-3 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 hover:scale-105 transition-all duration-300">
                Get Started
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>


    <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#f8fbff] via-white to-[#eef4ff] overflow-hidden">
      
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative order-1 lg:order-2"
    >
      <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

      <img
        src={img1}
        alt="Care Coordination"
        className="relative z-10 w-full h-[300px] md:h-[550px] object-cover rounded-[30px] shadow-2xl"
      />
    </motion.div>

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="order-2 lg:order-1"
    >
      <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-[#1e3a8a] font-semibold text-sm mb-5">
        Care Coordination
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
        Helping Patients Stay Connected & Supported
      </h2>

      <p className="text-gray-600 text-lg leading-8 mb-5">
        Care coordination helps make sure patients are not left trying
        to manage their health alone. At{" "}
        <span className="font-semibold text-black">
          Centered Care Wellness
        </span>
        , we help connect the pieces of care by supporting
        communication between patients, families, clinicians,
        specialists, pharmacies, and community resources.
      </p>

      <p className="text-gray-600 text-lg leading-8">
        Whether someone is managing a long-term condition or
        recovering after a hospital stay, our team helps identify
        needs, reduce confusion, follow up on next steps, and
        support safer, more consistent care.
      </p>

      {/* FEATURES */}
      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100">
          <h4 className="font-semibold text-lg text-black mb-2">
            Better Communication
          </h4>
          <p className="text-gray-600 text-sm leading-6">
            Coordinating between healthcare providers, families,
            and support systems.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100">
          <h4 className="font-semibold text-lg text-black mb-2">
            Ongoing Support
          </h4>
          <p className="text-gray-600 text-sm leading-6">
            Helping patients follow care plans and manage recovery
            with confidence.
          </p>
        </div>
      </div>
    </motion.div>

  </div>
</section>

        {/* 🔥 CONDITIONS */}
        <section className="py-20 px-6 md:px-16 
    bg-white">

      <div className="max-w-7xl mx-auto">

        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f1b4b]">
            What conditions are <span className="text-yellow-500">covered?</span>
          </h2>
          <p className="text-gray-500 mt-3">
            Comprehensive care for a wide range of chronic health conditions
          </p>
        </motion.div>

        {/* 🔥 Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {conditions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-yellow-400/40 to-purple-400/30 hover:from-yellow-400 hover:to-purple-400 transition duration-500"
            >
              {/* Card */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 h-full 
              shadow-md group-hover:shadow-xl transition duration-500">

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center 
                rounded-xl bg-yellow-100 text-yellow-600 mb-4 
                group-hover:scale-110 group-hover:bg-yellow-500 group-hover:text-white transition duration-300">
                  {item.icon}
                </div>

                {/* Text */}
                <p className="text-gray-700 font-medium leading-relaxed 
                group-hover:text-gray-900 transition">
                  {item.text}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>

        {/* 🔥 CAN I EXPECT */}
        <section className="py-20 px-6 md:px-16 
    bg-white relative overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f1b4b]">
            What can you <span className="text-yellow-500">expect?</span>
          </h2>
          <p className="text-gray-500 mt-3">
            Personalized care, continuous support, and better health outcomes
          </p>
        </motion.div>

        {/* 🔥 Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {points.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-[1px] rounded-2xl 
              bg-gradient-to-br from-yellow-400/40 to-purple-400/30 
              hover:from-yellow-400 hover:to-purple-400 transition duration-500"
            >
              {/* Card */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 h-full 
              shadow-md group-hover:shadow-xl transition duration-500">

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center 
                rounded-xl bg-yellow-100 text-yellow-600 mb-4 
                group-hover:bg-yellow-500 group-hover:text-white 
                group-hover:scale-110 transition duration-300">
                  {item.icon}
                </div>

                {/* Text */}
                <p className="text-gray-600 leading-relaxed 
                group-hover:text-gray-900 transition">
                  {item.text}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>

        {/* 🔥 CARE PLAN */}
        <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-white to-[#f8fafc]">

      <div className="max-w-6xl mx-auto">

        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f1b4b]">
            What’s included in a{" "}
            <span className="text-yellow-500">care plan?</span>
          </h2>
        </motion.div>

        {/* 🔥 Compact Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.03 }}
              className="group flex items-start gap-3 
              bg-white border border-gray-100 
              p-4 rounded-xl shadow-sm 
              hover:shadow-md hover:-translate-y-1 
              transition duration-300"
            >

              {/* Icon */}
              <div className="min-w-[36px] h-[36px] flex items-center justify-center 
              rounded-full bg-green-100 text-green-600 
              group-hover:bg-green-500 group-hover:text-white transition">
                <CheckCircle size={18} />
              </div>

              {/* Text */}
              <p className="text-gray-700 text-sm leading-snug">
                {item}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>

        {/* 🔥 CTA */}
    <section className="w-full py-16 px-6 md:px-16 bg-white">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-gradient-to-r from-[#4f46e5] to-[#6366f1] 
        rounded-3xl px-6 md:px-12 py-10 shadow-xl 
        flex flex-col md:flex-row items-center justify-between gap-6"
      >

        {/* 🔥 LEFT CONTENT */}
        <div className="text-white text-center md:text-left max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            Contact us for more information
          </h2>
          <p className="mt-2 text-white/80">
            Get expert guidance and start your care journey today.
          </p>
        </div>

        {/* 🔥 RIGHT BUTTON */}
        <div>
          <button onClick={() => navigate("/contact")} className="group inline-flex items-center gap-2 
          bg-white text-[#4f46e5] px-7 py-3 rounded-full font-semibold 
          hover:bg-gray-100 hover:scale-105 transition duration-300">

            Get Started
            <ArrowRight 
              size={18} 
              className="group-hover:translate-x-1 transition"
            />
          </button>
        </div>

      </motion.div>

    </section>

      </div>
    );
  }