import { motion } from "framer-motion";
  import { useNavigate } from "react-router-dom";
import {
  Globe,
  MapPin,
  Calendar,
  RefreshCw,
  ShieldCheck,
 HeartPulse,
  Activity,
  Stethoscope,
  Pill,
  BookOpen,
  Brain,
  FlaskConical,
  Users,
  ClipboardCheck,
  ArrowRightCircle,
} from "lucide-react";

export default function PrimaryCareService() {
  const navigate = useNavigate();
const data = [
  {
    icon: HeartPulse,
    desc: "Annual wellness visits and preventive health screenings",
  },
  {
    icon: Activity,
    desc: "Management of chronic conditions such as diabetes, hypertension, asthma, and high cholesterol",
  },
  {
    icon: Stethoscope,
    desc: "Evaluation and treatment of common illnesses, including colds, flu, allergies, sinus infections, and minor infections",
  },
  {
    icon: Pill,
    desc: "Medication management and prescription refills",
  },
  {
    icon: BookOpen,
    desc: "Health education and lifestyle counseling",
  },
  {
    icon: Brain,
    desc: "Mental health screening and referrals",
  },
  {
    icon: FlaskConical,
    desc: "Laboratory and diagnostic test ordering and review",
  },
  {
    icon: Users,
    desc: "Care coordination with specialists and other healthcare providers",
  },
  {
    icon: ClipboardCheck,
    desc: "Follow-up care after hospitalizations or emergency room visits",
  },
  {
    icon: ArrowRightCircle,
    desc: "Referrals to specialists, imaging services, and community resources as needed",
  },
];

 const plans = [
  {
    icon: Globe,
    desc: "Convenient access to care from any location",
    style: "bg-yellow-50 hover:bg-yellow-100",
  },
  {
    icon: MapPin,
    desc: "Reduced travel time and transportation barriers",
    style: "bg-blue-50 hover:bg-blue-100",
  },
  {
    icon: Calendar,
    desc: "Flexible scheduling options",
    style: "bg-purple-50 hover:bg-purple-100",
  },
  {
    icon: RefreshCw,
    desc: "Continuity of care with ongoing provider relationships",
    style: "bg-green-50 hover:bg-green-100",
  },
  {
    icon: ShieldCheck,
    desc: "Secure, HIPAA-compliant virtual consultations",
    style: "bg-yellow-50 hover:bg-yellow-100",
  },
  {
    icon: HeartPulse,
    desc: "Improved management of chronic health conditions through regular monitoring and follow-up",
    style: "bg-blue-50 hover:bg-blue-100",
  },
];


  return (
    <>
      <section className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden">
        {/* 🔥 BACKGROUND IMAGE */}
        <img
          src="https://sfotechnologies.net/images/innerslider/slide-healthcare-slide1.jpg"
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
            Primary Care
            <span className="text-yellow-400"> Service</span>
          </h1>

        

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-300 leading-relaxed">
            Our telehealth primary care services provide convenient, comprehensive healthcare for patients of all ages from the comfort of their home. Licensed healthcare providers deliver preventive, acute, and chronic care management through secure virtual visits, ensuring timely access to quality medical care.
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
            Services <span className="text-yellow-500">include:</span>
          </motion.h2>

         
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

             

                {/* DESC */}
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>

                {/* LINE */}
                <div className="mt-4 h-[3px] w-10 bg-yellow-400 rounded-full group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
<section className="relative py-24 px-6 md:px-16 overflow-hidden bg-gradient-to-b from-[#241c49] via-[#241c49] to-[#6765cc]">
  {/* Background Glow Effects */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 blur-[140px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full"></div>

  <div className="relative max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center max-w-4xl mx-auto mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
        Benefits of
        <span className="block text-yellow-400 mt-2">
          Telehealth Primary Care
        </span>
      </h2>
    </div>

    {/* Benefits Grid */}
    <div className="grid md:grid-cols-2 gap-6">
      {plans.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            className="group relative flex items-start gap-5 p-7 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-yellow-400/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Icon */}
            <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition duration-300">
              <Icon size={24} className="text-[#241c49]" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <p className="text-white text-base md:text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* Bottom Statement */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-16"
    >
      <div className=" p-8 md:p-10 text-center">
        <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
          Our goal is to provide patient-centered, accessible healthcare
          that supports overall wellness, disease prevention, and long-term
          health management through innovative telehealth technology.
        </p>
      </div>
    </motion.div>
  </div>
</section>

 
    </>
  );
}
