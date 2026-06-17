import React from "react";
import { motion } from "framer-motion";
import { FaUserMd, FaHeartbeat, FaHospital, FaHandsHelping } from "react-icons/fa";

const steps = [
{
title: "Our Foundation",
desc: "Founded with the goal of transforming chronic care management and improving patient lives.",
icon: <FaUserMd />
},
{
title: "Growth & Team",
desc: "We built a team of dedicated professionals committed to delivering exceptional healthcare.",
icon: <FaHandsHelping />
},
{
title: "Innovation",
desc: "Utilizing advanced technologies to improve care delivery and patient outcomes.",
icon: <FaHeartbeat />
},
{
title: "Our Mission Today",
desc: "Making high-quality healthcare accessible to underserved communities with compassion.",
icon: <FaHospital />
}
];

const OurStory = () => {
return (

<section className="py-20 md:py-32 bg-gradient-to-br from-[#020617] via-[#1f1b4b] to-[#1f1b4b] text-white relative overflow-hidden">

<div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

{/* HEADING */}
<motion.div
initial={{ opacity: 0, y: 80 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: false }}
className="text-center max-w-3xl mx-auto"
>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
Our <span className="text-yellow-400">Story</span>
</h2>

<p className="mt-5 text-gray-300 leading-relaxed">
Founded with the goal of transforming chronic care management, Centered Care Wellness has grown to become a leader in innovative health solutions. We have built a team of dedicated professionals committed to delivering exceptional care and support to patients with chronic conditions. Our journey is driven by a passion for making high-quality healthcare accessible to underserved populations, utilizing advanced technologies and compassionate care practices.
</p>
</motion.div>

{/* MOBILE TIMELINE */}
<div className="absolute left-6 top-0 h-full w-[2px] bg-white/10 md:hidden">
<motion.div
initial={{ height: 0 }}
whileInView={{ height: "100%" }}
transition={{ duration: 2 }}
className="w-full bg-yellow-400"
/>
</div>

{/* GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-32 md:gap-x-40 mt-16 relative">

{/* STEP LOOP */}
{steps.map((step, index) => (
<div
key={index}
className={`flex ${
index % 2 === 0 ? "md:justify-end" : "md:justify-start"
} justify-start relative pl-14 md:pl-0`}
>

{/* MOBILE DOT */}
<div className="absolute left-5 top-6 w-3 h-3 bg-yellow-400 rounded-full md:hidden"></div>

<Card step={step} number={`0${index + 1}`} />

</div>
))}

{/* CONNECTORS */}
<svg
className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block"
viewBox="0 0 1000 700"
fill="none"
>

<motion.path
d="M425 120 C420 120 420 120 580 120"
stroke="#facc15"
strokeWidth="3"
strokeLinecap="round"
initial={{ pathLength: 0 }}
whileInView={{ pathLength: 1 }}
transition={{ duration: 1 }}
/>

<motion.path
d="M700 300 C700 460 350 260 300 425"
stroke="#facc15"
strokeWidth="3"
strokeLinecap="round"
initial={{ pathLength: 0 }}
whileInView={{ pathLength: 1 }}
transition={{ duration: 1.2, delay:0.5 }}
/>

<motion.path
d="M420 580 L580 580"
stroke="#facc15"
strokeWidth="3"
strokeLinecap="round"
initial={{ pathLength: 0 }}
whileInView={{ pathLength: 1 }}
transition={{ duration: 1, delay: 1 }}
/>

</svg>

</div>

</div>

</section>

);
};

const Card = ({ step, number }) => {
return (

<motion.div
initial={{ opacity: 0, y: 60 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: false }}
whileHover={{ y: -10, scale: 1.05 }}
className="w-full max-w-[260px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-yellow-400/20 transition"
>

{/* ICON */}
<div className="text-3xl sm:text-4xl text-yellow-400 mb-4 flex justify-center">
{step.icon}
</div>

{/* NUMBER */}
<div className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-2">
{number}
</div>

{/* TITLE */}
<h3 className="text-lg sm:text-xl font-semibold mb-2">
{step.title}
</h3>

{/* DESC */}
<p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
{step.desc}
</p>

</motion.div>

);
};

export default OurStory;