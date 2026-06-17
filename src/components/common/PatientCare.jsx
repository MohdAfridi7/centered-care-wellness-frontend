import { useState } from "react";
import { motion } from "framer-motion";
import { Link, X } from "lucide-react";
import img1 from "../../assets/15.png";
import img2 from "../../assets/12.png";
import img3 from "../../assets/13.png";
import img4 from "../../assets/meditationImg.jpeg";

const cards = [
  {
    img: img1,
    title: "Dedicated Care Team",
    desc: "Our experienced healthcare professionals provide personalized care and continuous support for every patient.",
  },
  {
    img: img2,
    title: "Post-Hospital Care",
    desc: "Seamless transitional care ensures safe recovery with follow-ups, medication review, and ongoing monitoring.",
  },
  {
    img: img3,
    title: "Remote Patient Monitoring",
    desc: "Track your health in real-time with connected devices, enabling proactive care and early intervention.",
  },
  {
    img: img4,
    title: "Medication Management",
    desc: "Get expert guidance to manage medications, improve adherence, and avoid complications.",
  },
];

const PatientCare = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [sliderOpen, setSliderOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-[#f7f7ff]">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Commitment To{" "}
            <span className="text-yellow-500">Personalized</span> Patient Care
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We focus on delivering continuous, coordinated, and patient-centered care to improve outcomes and support long-term health.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-12">

          {cards.map((item, i) => (
            <motion.div
              key={i}
              onClick={() => setActiveCard(i)} // 👈 mobile click
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -6 }}
              className="relative group overflow-hidden rounded-3xl cursor-pointer"
            >

              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[350px] object-cover rounded-3xl"
              />

              {/* Overlay */}
              <div className={`
                absolute inset-0 
                bg-gradient-to-b from-purple-400/80 to-indigo-500/80 
                backdrop-blur-sm
                flex flex-col items-center justify-center text-center px-4
                text-white
                transition duration-500
                ${activeCard === i ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
              `}>

                {/* ICON CLICK → SLIDER */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(i);
                    setSliderOpen(true);
                  }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400 text-black mb-3 cursor-pointer hover:scale-110 transition"
                >
                  <Link size={18} />
                </div>

                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-sm mt-2">{item.desc}</p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>

      {/* ===== FULLSCREEN SLIDER ===== */}
      {sliderOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">

          {/* Close */}
          <button
            onClick={() => setSliderOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? cards.length - 1 : prev - 1
              )
            }
            className="absolute left-4 text-white text-3xl"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={cards[currentIndex].img}
            alt=""
            className="w-[90%] md:w-[70%] max-h-[80vh] object-contain rounded-xl"
          />

          {/* Next */}
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === cards.length - 1 ? 0 : prev + 1
              )
            }
            className="absolute right-4 text-white text-3xl"
          >
            ›
          </button>

        </div>
      )}
    </section>
  );
};

export default PatientCare;