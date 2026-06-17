import { motion } from "framer-motion";
import { useState } from "react";
import { createContact } from "../../api/contactRoutes"; // path adjust kar lena
import { toast } from "react-hot-toast";
import formImg from "../../assets/formImg.png";

const ContactFormSection = () => {

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // HANDLE CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔥 validation
    if (!form.fullName || !form.email || !form.phone || !form.message) {
      return toast.error("All fields are required");
    }

    try {
      setLoading(true);

      const res = await createContact({ data: form });

      if (res.success) {
        toast.success("Message sent successfully ✅");

        // reset form
        setForm({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      }

    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-[#f3f3f8] overflow-hidden">
      <div className="mx-auto px-4 relative">

        {/* ===== BACKGROUND ===== */}

        <motion.div
          initial={{ x: 500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="absolute right-0 bottom-0 w-[55%] h-[40%] bg-[#26235c] rounded-l-3xl hidden md:block"
        />

        <motion.div
          initial={{ x: -600, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="absolute left-0 top-0 w-[80%] h-[50%] bg-[#3ed0f5] rounded-br-2xl rounded-r-3xl hidden md:block"
        />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">

          {/* ===== FORM ===== */}
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="bg-white max-w-[500px] relative -top-5 ms-auto rounded-3xl shadow-xl p-8 md:p-10"
          >

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Fill The Form To Book An Appointment
            </h2>

            <p className="text-gray-500 text-sm mt-3 mb-6">
              We’re here to help you. Fill out the form and we’ll get back shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 text-sm"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 text-sm"
              />

              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 text-sm"
              />

              <textarea
                rows="3"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 text-sm resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-full font-semibold transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Submit Inquiry"}
              </button>

            </form>

          </motion.div>

          {/* ===== IMAGE ===== */}
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="relative flex justify-center md:justify-start"
          >
            <img
              src={formImg}
              alt="Doctor"
              className="w-full max-w-[360px] h-[350px] md:h-[500px] object-cover rounded-3xl shadow-lg"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;