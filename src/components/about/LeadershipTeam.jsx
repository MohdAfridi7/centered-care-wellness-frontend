import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/04.png";
import img5 from "../../assets/05.png";


const teamData = [
    {
    name: "Errisha Richardson",
    role: "COO, MD, Internal Medicine-Pediatrics",
    image: img3,
    description: `Dr. Errisha Richardson was born in Oakland, California and is a graduate of Spelman College in Atlanta, Georgia. She obtained her medical degree at the American University of Antigua. Her residency was at the University of Missouri, Columbia in combined internal medicine-pediatrics and she completed training with a fellowship at the University of Texas Southwestern in geriatric medicine.

Having wanting to be a doctor since early childhood, one of the main reasons why she chose to be a doctor was to help her community including those with disadvantaged and underserved backgrounds. With training and experience in internal medicine, pediatrics, and geriatrics, she is equipped to assist all ages in working together to improve health, and create health goals. She also has a special interest in treating rheumatological conditions.

In her spare time, Dr Richardson enjoys spending time with family and friends, traveling, photography, cooking, baking, reading suspense novels, binge watching shows and beach activities.`,
  },
    {
    name: "Brenda Richardson",
    role: "CEO, MSN, APRN, FNP",
    image: img4,
    description: `For the past 30+ years, Brenda Richardson has worked as a registered nurse (RN) and nurse practitioner (NP) in clinical, management and leadership roles for large healthcare organizations within life changing environments.

She has a passion for engaging and mentoring healthcare professionals and patients at all levels.

Based on her extensive experience, Brenda developed programs designed to effectively drive patient care services, strategies, solutions and operations for healthcare systems. She has a strong commitment to developing collaborative relationships and serving as a catalyst for efficient healthcare outcomes.

She is passionate about advocating for improved patient access to care and healthcare delivery.

Brenda is a certified telehealth coordinator with expertise in:
• Emergency
• Medical-surgical
• Quality
• Utilization management
• Nursing leadership
• Patient care coordination

She has worked for Kaiser Permanente, Alameda Health Systems, and Contra Costa Health Systems.

Brenda has been recognized for inpatient and outpatient team leadership, performance improvements, and aligning care objectives with professional development goals.

She also facilitated training sessions on healthcare education and guided individuals and teams toward success.

In her free time, Brenda enjoys spending time with family and traveling.`,
  },


  {
    name: "Pamela Hanseth",
    role: "MS, RN, FNP-C",
    image: img2,
    description: `Pamela Hanseth brings years of critical care and hospital experience to her role as a Nurse Practitioner at Centered Care Wellness.

Before becoming an NP, she cared for patients in the ICU, gaining extensive expertise in managing complex, rapidly changing conditions. She has since expanded her skills by working alongside hospitalists and is now excited to build long-term relationships with patients in the outpatient setting.

Pam’s care philosophy is rooted in compassion, clear communication, and empowering patients to actively manage their health. She believes in treating the whole person, addressing physical, emotional, and preventive needs with trust and respect.

Outside of work, Pam loves cheering on her kids at sports and unwinding at the beach or by the pool.

She joined Centered Care Wellness because its mission-driven, patient-first approach matches her passion for delivering accessible, high-quality care to those who need it most.`,
  },

  {
    name: "Karen Glover",
    role: "MD, Family Medicine",
    image: img1,
    description: `Karen Glover, MD is a Board Certified Family Medicine physician with over 24 years of direct patient care experience. She is a Diplomat of the American Board of Integrative Holistic Medicine, has advanced Certification in Hospice and Palliative Medicine, and a Registered Dietitian Nutritionist for over 30 years.

After completing residency, she worked as an outpatient physician in both the private and corporate sector. Besides providing outpatient and telemedicine services, Dr. Glover also practiced as a hospice and palliative care physician for 13 years, mostly acting as a Medical Director for Hospice organizations.

Dr. Glover has always put her patients first—caring for and devoting her time to their needs. Her strengths lie in compassionate listening and her willingness to allow patients to take part in their own journey to health. She focuses on lifestyle changes as a means to improve health, particularly with nutrition.

She emphasizes the Mind-Body relationship and focuses on directing solutions to symptoms and illness which can be manifestations of stress and past traumas.

Dr. Glover’s other interests include gardening, listening to music, creative cooking, and practicing environmentally-friendly actions.`,
  },

  {
    name: "Fiera Foreman",
    role: "MSN, PMHNP-BC Psychiatric Mental Health Nurse Practitioner",
    image: img5,
    description: `Fiera Foreman is a board-certified Psychiatric Mental Health Nurse Practitioner with more than a decade of diverse nursing experience in inpatient, community, and correctional healthcare settings.

She earned her Master of Science in Nursing from the University of California, San Francisco, and her Bachelor of Science in Nursing from the University of Phoenix.

Fiera has worked with Contra Costa Health Services, Alameda County Behavioral Health, and the San Francisco Department of Public Health to expand access to patient-centered, community-based mental health care.

Skilled in developing data-driven treatment plans, she integrates education, screenings, referrals, and both pharmacological and non-pharmacological interventions into her practice.

Dedicated to serving culturally diverse communities and individuals with mental health and co-occurring conditions, Fiera embraces a collaborative, multidisciplinary approach.

At Centered Care Wellness, she provides whole-person psychiatric support, including medication management, harm-reduction strategies, and preventive therapies to help patients achieve their treatment goals.`,
  },

  
];

export default function LeadershipTeam() {
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);
  const sectionRef = useRef(null);

  const perPage = 3;
  const totalPages = Math.ceil(teamData.length / perPage);

  const indexOfLast = page * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const data = teamData.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (p) => {
    setPage(p);
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const getPagination = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      return [...Array(totalPages)].map((_, i) => i + 1);
    }

    let start = Math.max(page - 2, 1);
    let end = Math.min(page + 2, totalPages);

    if (page <= 3) {
      start = 1;
      end = maxVisible;
    }

    if (page >= totalPages - 2) {
      start = totalPages - (maxVisible - 1);
      end = totalPages;
    }

    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const getPreview = (text) =>
    text.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <section id="leadership-team" ref={sectionRef} className="py-20 bg-[#f7f7ff]">
      <div className="max-w-7xl overflow-x-hidden mx-auto px-4 text-center">

{/* HEADING */}
<motion.h2
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  className="text-3xl md:text-5xl font-bold"
>
  Our <span className="text-yellow-500">Leadership Team</span>
</motion.h2>

{/* PARAGRAPH */}
<motion.p
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  viewport={{ once: false }}
  className="mt-4 text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
>
  Meet the dedicated professionals behind our success. Our leadership team brings years of experience, compassion, and innovation to deliver exceptional healthcare services and ensure the highest level of patient care.
</motion.p>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: false }}
              whileHover={{ y: -10 }}
              className="bg-white shadow-md hover:shadow-2xl overflow-hidden group"
            >
              <div className="h-120 overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full  object-cover object-top  group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-yellow-500 text-sm">{item.role}</p>

                <p className="text-gray-500 text-sm mt-3">
                  {getPreview(item.description)}
                </p>

                <button
                  onClick={() => setSelected(item)}
                  className="mt-4 text-sm text-blue-600 hover:underline"
                >
                  View Full Profile →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== PREMIUM PAGINATION ===== */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-2 bg-[#f9fafb] border border-gray-200 rounded-full px-4 py-2 shadow-sm">

            <button
              disabled={page === 1}
              onClick={() => handlePageChange(page - 1)}
              className="px-4 py-1.5 text-sm rounded-full hover:bg-yellow-100 disabled:opacity-40"
            >
              ← Prev
            </button>

            {getPagination().map((item, i) =>
              item === "..." ? (
                <span key={i} className="px-2 text-gray-400">
                  ...
                </span>
              ) : (
                <button
                  key={i}
                  onClick={() => handlePageChange(item)}
                  className={`w-9 h-9 rounded-full ${
                    page === item
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {item}
                </button>
              )
            )}

            <button
              disabled={page === totalPages}
              onClick={() => handlePageChange(page + 1)}
              className="px-4 py-1.5 text-sm rounded-full hover:bg-yellow-100 disabled:opacity-40"
            >
              Next →
            </button>

          </div>
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              onClick={() => setSelected(null)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white custom-scrollbar max-w-4xl w-full p-6 md:p-10 relative overflow-y-auto max-h-[90vh]"
              >
                                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-xl"
                >
                  ✕
                </button>
                <img
                  src={selected.image}
                  className="w-32 h-32 object-cover  rounded-full mx-auto"
                />

                <h3 className="text-center mt-4 font-bold">
                  {selected.name}
                </h3>

                <p className="text-center text-yellow-500">
                  {selected.role}
                </p>

                <p className="mt-6 whitespace-pre-line text-sm text-gray-600">
                  {selected.description}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}