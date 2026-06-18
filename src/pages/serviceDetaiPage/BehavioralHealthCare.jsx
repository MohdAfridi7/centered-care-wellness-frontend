  import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/12.png";
import {
  Brain,
  HeartHandshake,
  Users,
  Smile,
  ShieldCheck,
  Phone,
  Clock,
  Activity,
  CheckCircle,
  Stethoscope,
  UserCheck,
  ArrowRight,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { updateSEO } from "../../utils/seo";
import { getSeoMetaByPage } from "../../api/seoRoutes";

export default function BehavioralHealthCare() {
  const navigate = useNavigate();

  useEffect(() => {
    
        const loadSeo = async () => {
    
          try {
    
            const res = await getSeoMetaByPage("behavioral-health-care");
    
            if (res.success) {
              updateSEO(res.data);
            }
    
          } catch (error) {
    
            console.error("SEO Error:", error);
    
          }
    
        };
    
        loadSeo();
    
      }, []);

  const services = [
    {
      icon: <Brain />,
      title: "Mental Health Support",
      desc: "Compassionate support for anxiety, depression, stress, and emotional wellness.",
    },
    {
      icon: <HeartHandshake />,
      title: "Personalized Care",
      desc: "Care plans tailored to each patient’s emotional, mental, and behavioral health needs.",
    },
    {
      icon: <Users />,
      title: "Family Guidance",
      desc: "Helping families better understand and support loved ones through care journeys.",
    },
    {
      icon: <ShieldCheck />,
      title: "Safe & Confidential",
      desc: "Private, respectful, and HIPAA-compliant behavioral health services.",
    },
  ];

  const benefits = [
    {
      icon: <Smile />,
      title: "Improved Emotional Wellness",
      desc: "Helping patients develop healthier coping strategies and emotional resilience.",
    },
    {
      icon: <Activity />,
      title: "Better Daily Functioning",
      desc: "Support to improve focus, motivation, routines, and quality of life.",
    },
    {
      icon: <UserCheck />,
      title: "Consistent Follow-Ups",
      desc: "Regular check-ins to monitor progress and provide ongoing support.",
    },
  ];

  const supportAreas = [
    "Anxiety & Stress",
    "Depression",
    "Behavioral Challenges",
    "Emotional Wellness",
    "Sleep Difficulties",
    "Social Isolation",
    "Mood Disorders",
    "Trauma & Grief Support",
    "Lifestyle & Coping Skills",
  ];

  const expect = [
    "A personalized behavioral health assessment tailored to your needs.",
    "Supportive communication and care coordination with providers and caregivers.",
    "Education and tools to help manage stress, emotions, and daily challenges.",
    "A compassionate care team focused on improving your overall well-being.",
  ];

  return (
    <div className="bg-[#f8fafc] overflow-hidden">

      {/* 🔥 HERO SECTION */}
     <section className="relative min-h-[95vh] flex items-center justify-center px-6 md:px-16 overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#1f1b4b] via-[#312e81] to-[#0f172a]"></div>

  {/* Glow Effects */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full"></div>

  {/* Floating Blur */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
  w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full"></div>

  {/* CONTENT CENTER */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 max-w-4xl mx-auto text-center"
  >

    {/* TOP BADGE */}
    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
    bg-white/10 text-yellow-300 text-sm font-medium border border-white/10 backdrop-blur-md">
      <Sparkles size={16} />
      Compassionate Mental Wellness Support
    </span>

    {/* HEADING */}
    <h1 className="mt-8 text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
      Behavioral {""}
      <span className="text-yellow-400">
        Health Care
      </span>
    </h1>

    {/* DESCRIPTION */}
    <p className="mt-8 text-gray-300 text-base md:text-xl leading-8 max-w-4xl mx-auto">
      Centered Care Wellness provides compassionate behavioral health support through telehealth for anxiety, depression, stress, grief, trauma, caregiver strain, social isolation, chronic illness-related emotional challenges, and life transitions. Our whole-person approach connects emotional wellness with physical health, care coordination, medication support, and chronic disease management.
    </p>

    {/* BUTTONS */}
    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

      <button
        onClick={() => navigate("/contact")}
        className="group bg-yellow-400 text-[#1f1b4b] px-8 py-3 rounded-full 
        font-semibold hover:scale-105 transition duration-300 shadow-xl
        inline-flex items-center gap-2"
      >
        Get Started

        <ArrowRight
          size={18}
          className="group-hover:translate-x-1 transition"
        />
      </button>


    </div>

  </motion.div>
</section>

      {/* 🔥 SERVICES */}
      <section className="py-20 px-6 md:px-16 bg-white">

        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1f1b4b]">
              Our Behavioral Health
              <span className="text-yellow-500"> Services</span>
            </h2>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Supporting mental wellness through personalized care,
              emotional support, and ongoing guidance.
            </p>
          </motion.div>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-[#f8fafc] p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition duration-500"
              >

                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600 mb-5 group-hover:bg-yellow-400 group-hover:text-white transition">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-[#1f1b4b]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7 text-sm">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* 🔥 CARE COORDINATION */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#f8fbff] via-white to-[#eef4ff]">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

            <img
              src={img1}
              alt="Care Support"
              className="relative z-10 w-full h-[300px] md:h-[550px] object-cover rounded-[30px] shadow-2xl"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-[#1e3a8a] font-semibold text-sm mb-5">
              Emotional Wellness Support
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Helping Patients Feel Heard & Supported
            </h2>

            <p className="text-gray-600 text-lg leading-8 mb-5">
              Behavioral health care focuses on emotional, psychological,
              and social well-being. Our team works closely with patients
              to provide compassionate guidance, care coordination,
              and supportive communication.
            </p>

            <p className="text-gray-600 text-lg leading-8">
              Whether someone is dealing with stress, emotional challenges,
              or ongoing behavioral health conditions, we help create a
              supportive path toward better health and stability.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100">
                <h4 className="font-semibold text-lg text-black mb-2">
                  Ongoing Guidance
                </h4>

                <p className="text-gray-600 text-sm leading-6">
                  Supporting patients with regular communication and care planning.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100">
                <h4 className="font-semibold text-lg text-black mb-2">
                  Better Well-Being
                </h4>

                <p className="text-gray-600 text-sm leading-6">
                  Helping patients improve emotional wellness and daily life balance.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔥 SUPPORT AREAS */}
      <section className="py-20 px-6 md:px-16 bg-white">

        <div className="max-w-6xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-[#1f1b4b] mb-10"
          >
            Areas We <span className="text-yellow-500">Support</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4">

            {supportAreas.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="group flex items-center gap-3 px-5 py-3 rounded-full bg-[#f4f6fb] hover:bg-yellow-400 hover:text-white transition duration-300 shadow-sm"
              >
                <MessageCircle size={18} />
                <span className="font-medium text-sm">
                  {item}
                </span>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* 🔥 BENEFITS */}
      <section className="py-20 px-6 md:px-16 bg-[#f8fafc]">

        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f1b4b]">
              What You Can <span className="text-yellow-500">Expect</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">

            {benefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition duration-500"
              >

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-5 group-hover:bg-yellow-400 group-hover:text-white transition">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-[#1f1b4b]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7 text-sm">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* 🔥 EXPECT SECTION */}
      <section className="py-20 px-6 md:px-16 bg-white">

        <div className="max-w-6xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center text-[#1f1b4b] mb-14"
          >
            Your Care Journey
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">

            {expect.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group flex gap-4 bg-[#f8fafc] p-6 rounded-2xl hover:shadow-lg transition duration-300"
              >

                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-yellow-100 text-yellow-600 group-hover:bg-yellow-400 group-hover:text-white transition shrink-0">
                  <CheckCircle size={18} />
                </div>

                <p className="text-gray-700 leading-7">
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

          {/* LEFT */}
          <div className="text-white text-center md:text-left max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Start Your Behavioral Health Journey Today
            </h2>

            <p className="mt-2 text-white/80">
              Connect with our care team for compassionate and personalized support.
            </p>
          </div>

          {/* BUTTON */}
          <div>
            <button
              onClick={() => navigate("/contact")}
              className="group inline-flex items-center gap-2
              bg-white text-[#4f46e5] px-7 py-3 rounded-full font-semibold
              hover:bg-gray-100 hover:scale-105 transition duration-300"
            >
              Contact Us

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