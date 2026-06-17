import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollHandler() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  // 🔥 Route change → auto scroll top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // 🔥 Scroll detect → show/hide button
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔥 SCROLL BUTTON */}
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.3 }}
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="fixed right-6 bottom-6 bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition z-50"
          >
            <ArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}