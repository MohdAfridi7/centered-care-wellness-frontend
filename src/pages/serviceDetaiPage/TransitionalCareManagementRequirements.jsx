import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/12.png";
import img2 from "../../assets/9.png";
import {
  CheckCircle,
  Building,
  Home,
  Clock,ArrowRight,
  Activity,
  ShieldCheck, Users
} from "lucide-react";

export default function TransitionalCareManagementRequirements() {
const navigate = useNavigate();
 const features = [
    {
      text: "Support a patient’s transition back to a community setting",
      icon: <Users />
    },
    {
      text: "Transitional Care Management (TCM) providers make sure that there is no gap between inpatient discharge and return back home",
      icon: <ShieldCheck />
    },
    {
      text: "TCM providers take over responsibility for patient’s medical care during this post in-patient stay period",
      icon: <Activity />
    },
    {
      text: "Moderate or high complexity medical decision making for patients with medical or psychosocial problems",
      icon: <CheckCircle />
    }
  ];

  const facilities = [
    "Inpatient acute care hospital",
    "Inpatient psychiatric hospital",
    "Inpatient rehabilitation facility",
    "Long-term care hospital",
    "Skilled nursing facility",
    "Hospital outpatient observation or partial hospitalization",
    "Partial hospitalization at a community mental health center"

  ];

  const homes = [
    "Home",
    "Group home / boarding house",
    "Nursing facility",
    "Assisted living facility"
  ];

  const expect = [
    "You will be contacted by the TCM provider or their staff within 2 business days of your discharge from an inpatient stay.",
    "You will have at least one face to face visit (telehealth or in person): within 14 days for a moderate complexity patient, within 7 days for a high complexity patient.",
    "Your TCM team will review all of your medications on or before the face to face visit.",
    "Your TCM team will review your discharge information, review your need for follow up on testing/procedures/treatments, establish referrals and arrange for community resources, help schedule follow up appointments, and educate you, your family or caregivers to support your independence and self-management."
  ];

  return (
    <div className="bg-[#f8fafc]">

      {/* 🔥 HERO */}
      <section className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden">

      {/* 🔥 Background Image */}
      <motion.img
        src={img2}
        alt="TCM"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 w-full h-full "
      />

      {/* 🔥 Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🔥 Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-16 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl"
        >
          Transitional Care{" "}
          <span className="text-yellow-400">Management</span>
        </motion.h1>

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



      {/* 🔥 REQUIREMENTS */}
        <section className="py-16 px-6 md:px-16 bg-[#f8fafc]">

      <div className="max-w-6xl mx-auto">

        {/* 🔥 Top Highlight Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm mb-10"
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            <span className="font-semibold text-[#1f1b4b]">
              Transitional Care Management Services
            </span>{" "}
            help patients successfully transition back to home after an inpatient stay 
            over a 30-day period starting on the day you are discharged.
          </p>
        </motion.div>

        {/* 🔥 Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold text-[#1f1b4b] mb-8"
        >
          These services include
        </motion.h2>

        {/* 🔥 Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white p-5 rounded-xl shadow-sm 
              hover:shadow-md hover:-translate-y-1 transition duration-300"
            >

              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center 
              rounded-lg bg-yellow-100 text-yellow-600 mb-4 
              group-hover:bg-yellow-500 group-hover:text-white transition">
                {item.icon}
              </div>

              {/* Text */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.text}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>

      {/* 🔥 FACILITY */}
       <section className="py-16 px-6 md:px-16 bg-white">

      <div className="max-w-6xl mx-auto text-center">

        {/* 🔥 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold text-[#1f1b4b] mb-10"
        >
          What is a qualifying{" "}
          <span className="text-yellow-500">discharge facility?</span>
        </motion.h2>

        {/* 🔥 Pills Container */}
       <div className="flex flex-wrap justify-center gap-3 md:gap-4">

  {facilities.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: i * 0.05 }}
      whileHover={{ y: -5 }}
      className="group flex items-center gap-3 
      w-full sm:w-auto
      px-4 py-3 md:px-5 
      rounded-full 
      bg-[#f4f6fb] text-gray-700 
      shadow-sm hover:shadow-md 
      transition duration-300 cursor-pointer"
    >

      {/* Icon */}
      <div className="w-8 h-8 flex items-center justify-center 
      rounded-full bg-indigo-100 text-indigo-600 
      group-hover:bg-indigo-500 group-hover:text-white transition shrink-0">
        <Building size={16} />
      </div>

      {/* Text */}
      <span className="text-sm font-medium break-words text-left">
        {item}
      </span>

    </motion.div>
  ))}

</div>

      </div>
    </section>

      {/* 🔥 HOME */}
      <section className="py-14 px-6 md:px-16 bg-white">

      <div className="max-w-5xl mx-auto">

        {/* 🔥 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl text-center font-bold text-[#1f1b4b] mb-8"
        >
          What qualifies as{" "}
          <span className="text-yellow-500">home?</span>
        </motion.h2>

        {/* 🔥 Steps */}
        <div className="space-y-4">

          {homes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group flex items-center justify-between 
              bg-[#f8fafc] px-5 py-4 rounded-xl 
              hover:bg-white hover:shadow-md transition duration-300"
            >

              {/* Left Content */}
              <div className="flex items-center gap-4">

                {/* Number */}
                <div className="w-9 h-9 flex items-center justify-center 
                rounded-full bg-yellow-100 text-yellow-600 font-semibold 
                group-hover:bg-yellow-500 group-hover:text-white transition">
                  {i + 1}
                </div>

                {/* Text */}
                <p className="text-gray-700 font-medium">
                  {item}
                </p>

              </div>

              

            </motion.div>
          ))}

        </div>

      </div>
    </section>

      {/* 🔥 EXPECT */}
    <section className="py-20 px-6 md:px-16 bg-[#f8fafc] overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* 🔥 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold mb-14 text-[#1f1b4b] text-center"
        >
          What can I <span className="text-yellow-500">expect?</span>
        </motion.h2>

        {/* 🔥 Floating Layout */}
        <div className="grid md:grid-cols-2 gap-8">

          {expect.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`group relative p-6 rounded-2xl bg-white shadow-sm 
              hover:shadow-xl transition duration-300
              ${i % 2 === 0 ? "md:mt-0" : "md:mt-12"}`}
            >

              {/* Glow Hover */}
              <div className="absolute inset-0 rounded-2xl bg-yellow-400 opacity-0 
              group-hover:opacity-10 blur-xl transition"></div>

              {/* Content */}
              <div className="relative flex gap-4">

                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center 
                rounded-lg bg-blue-100 text-blue-600 
                group-hover:bg-yellow-400 group-hover:text-white transition">
                  <Clock size={18} />
                </div>

                {/* Text */}
                <p className="text-gray-700 leading-relaxed">
                  {item}
                </p>

              </div>

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