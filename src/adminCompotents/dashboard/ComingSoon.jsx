// Program.jsx
import { motion } from "framer-motion";
import { Clock, Sparkles, ArrowRight } from "lucide-react";
import comingSoon from "../../assets/comingSoon.png";


export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 text-[#0B1C2D] rounded-full text-base font-semibold mb-8"
          >
            <Sparkles size={18} className="text-[#0B1C2D]" />
            Coming Soon
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B1C2D] mb-6 leading-tight"
          >
            Overview
            <span className="text-blue-600"> Coming Soon</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Exciting new learning Overview are in the works. Structured courses, hands-on projects, live sessions, and certifications — all designed to help you level up.
          </motion.p>


          {/* Subtle teaser visual / illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            <img
              src={comingSoon}
              alt="Coming Soon Illustration"
              className="w-full max-w-lg mx-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-gray-500 text-sm"
          >
            Launching soon • Ipanic
          </motion.p>
        </div>
      </div>
    </div>
  );
}