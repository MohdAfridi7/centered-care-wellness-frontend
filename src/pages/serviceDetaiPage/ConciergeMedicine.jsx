import { motion } from "framer-motion";
  import { useNavigate } from "react-router-dom";
    import React, { useEffect } from "react";
import {
  HeartPulse,
  Phone,
  UserCheck,
  Clock,
  Users,
  Stethoscope,
  Crown,
  Zap,
  Link2,
  HeartHandshake,
} from "lucide-react";
import { updateSEO } from "../../utils/seo";
import { getSeoMetaByPage } from "../../api/seoRoutes";

export default function ConciergeMedicine() {
  const navigate = useNavigate();
    useEffect(() => {
  
      const loadSeo = async () => {
  
        try {
  
          const res = await getSeoMetaByPage("concierge-medicine");
  
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
      icon: HeartPulse,
      title: "Comprehensive Support",
      desc: "We focus on holistic care, reviewing your medical history in depth to guide better outcomes.",
    },
    {
      icon: Phone,
      title: "Direct Access to Providers",
      desc: "Contact your provider via secure text, phone, or email whenever you need.",
    },
    {
      icon: UserCheck,
      title: "Personalized Care",
      desc: "With fewer patients per provider, we can dedicate more time to understanding your unique needs.",
    },
    {
      icon: Clock,
      title: "Convenience",
      desc: "Skip the wait times and enjoy care from the comfort of your home.",
    },
  ];

  const plans = [
    {
      icon: Users,
      title: "Urgent Care Family Plan",
      desc: "Affordable for families, focusing on immediate needs like colds, allergies, and temporary medication refills.",
      style: "bg-yellow-50 hover:bg-yellow-100",
    },
    {
      icon: Stethoscope,
      title: "Subscription Concierge Plan",
      desc: "Ideal for those managing up to three conditions, with regular telehealth check-ins and care coordination.",
      style: "bg-blue-50 hover:bg-blue-100",
    },
    {
      icon: Crown,
      title: "Executive Concierge Plan",
      desc: "Perfect for individuals seeking more frequent telehealth appointments and holistic health support.",
      style: "bg-purple-50 hover:bg-purple-100",
    },
    {
      icon: Zap,
      title: "Direct Concierge Plan",
      desc: "Unlimited telehealth access, HIPAA-compliant text messaging, and personalized attention for those who value convenience and accessibility.",
      style: "bg-green-50 hover:bg-green-100",
    },
  ];

  const items = [
    {
      icon: Link2,
      title: "Seamless Integration",
      desc: "Our concierge services seamlessly incorporate telehealth technology, ensuring continuity of care and constant connection. Whether it’s managing chronic illnesses or addressing urgent health needs, our approach allows you to focus on what matters most—your well-being.",
    },
    {
      icon: Users,
      title: "Who Benefits",
      desc: (
        <>
          Our concierge plans are especially beneficial for:
          <br />
          Busy professionals, college students/young adults, and families
          looking for convenient and affordable flexible care options.
          <br />
          Seniors and vulnerable populations who value in-depth, coordinated
          care.
          <br />
          Patients with ongoing health concerns seeking consistent support.
        </>
      ),
    },
    {
      icon: HeartHandshake,
      title: "Join Today",
      desc: "We’d love to learn more about your health goals and how we can support you. Schedule an enrollment consultation to discuss your needs, and let us guide you toward better health outcomes.",
    },
  ];
  return (
    <>
      <section className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden">
        {/* 🔥 BACKGROUND IMAGE */}
        <img
          src="https://i0.wp.com/centeredcarewellness.org/wp-content/uploads/2024/11/untitled-design-2-1-1.png?resize=980%2C980&ssl=1"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Healthcare"
        />

        {/* 🔥 OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f1b4b]/80 via-[#1f1b4b]/70 to-[#1f1b4b]/90"></div>

        {/* 🔥 CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl px-6"
        >
          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Concierge
            <span className="text-yellow-400"> Medicine</span>
          </h1>

          {/* SUBTITLE */}
          <p className="mt-4 text-lg text-gray-300 font-medium">
            Private Pay Subscription Services at Centered Care Wellness
          </p>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-300 leading-relaxed">
            At Centered Care Wellness, we recognize that healthcare should be as
            accessible and personalized as possible. Our Concierge Medicine
            Program is designed to give patients the quick, convenient, and
            comprehensive care they deserve. Whether you’re managing chronic
            conditions or seeking proactive health support, our
            subscription-based concierge plans ensure you’re always connected to
            your provider.
          </p>
        </motion.div>
      </section>

      <section className="bg-[#f4f6fb] py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* 🔥 HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-[#1f1b4b]"
          >
            Why <span className="text-yellow-500">Choose Us</span>
          </motion.h2>

          {/* 🔥 PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Traditional healthcare often means long waits and rushed
            appointments. With concierge medicine, you gain:
          </motion.p>
        </div>

        {/* 🔥 CARDS */}
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
          className="mt-14 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {data.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  show: { opacity: 1, y: 0 },
                }}
                className="group bg-white p-6 rounded-2xl shadow-md border border-gray-200 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-200/20 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4 group-hover:scale-110 transition">
                  <Icon size={22} />
                </div>

                {/* TITLE */}
                <h3 className="font-semibold text-lg text-[#1f1b4b]">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>

                {/* LINE */}
                <div className="mt-4 h-[3px] w-10 bg-yellow-400 rounded-full group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section className="bg-[#2b2350] py-20 px-6 md:px-16">
        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Plans to Fit Your <span className="text-yellow-500">Needs</span>
          </h2>

          <p className="mt-5 text-white/90 text-lg leading-relaxed">
            We offer four flexible plans to suit different lifestyles:
          </p>
        </div>

        {/* CARDS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: { transition: { staggerChildren: 0.2 } },
          }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {plans.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  show: { opacity: 1, y: 0 },
                }}
                className={`group relative p-6 rounded-2xl border border-gray-200 shadow-md transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${item.style}`}
              >
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow mb-4 group-hover:scale-110 transition">
                  <Icon size={22} className="text-[#1f1b4b]" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-[#1f1b4b]">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>

                {/* UNIQUE EFFECTS */}

                {/* 1️⃣ Glow border (first card) */}
                {i === 0 && (
                  <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition"></div>
                )}

                {/* 2️⃣ Left bar slide */}
                {i === 1 && (
                  <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 origin-top transition duration-500"></div>
                )}

                {/* 3️⃣ Top gradient shine */}
                {i === 2 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-200/40 to-purple-400/0 opacity-0 group-hover:opacity-100 transition"></div>
                )}

                {/* 4️⃣ Bottom progress bar */}
                {i === 3 && (
                  <div className="absolute bottom-0 left-0 h-1 bg-green-500 w-0 group-hover:w-full transition-all duration-500"></div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section className="bg-[#f4f6fb] py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* 🔥 LEFT SIDE (STICKY TEXT) */}
          <div className="lg:sticky lg:top-32 h-fit text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-[#1f1b4b] leading-tight">
              A Better Way to <br />
              <span className="text-yellow-500">Experience Care</span>
            </h2>

            <p className="mt-6 text-gray-600 max-w-md mx-auto lg:mx-0">
              We combine technology, accessibility, and personalized care to
              transform how you experience healthcare—simple, connected, and
              human.
            </p>

            {/* 🔥 BUTTON CENTER */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <button onClick={() => navigate("/contact")} className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>

          {/* 🔥 RIGHT SIDE (TIMELINE) */}
          <div className="relative overflow-hidden">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-400 to-blue-500"></div>

            <div className="space-y-12">
              {items.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className="relative pl-14"
                  >
                    {/* DOT */}
                    <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center border border-gray-200">
                      <Icon size={16} className="text-[#1f1b4b]" />
                    </div>

                    {/* CARD */}
                    <div className="group bg-white p-6 rounded-2xl shadow-md border border-gray-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <h3 className="text-xl font-semibold text-[#1f1b4b]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>

                      {/* Unique hover underline */}
                      <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-yellow-400 to-blue-500 group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
