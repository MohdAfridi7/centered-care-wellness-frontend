import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import { changeEmail, verifyEmail } from "../../../../api/authRoutes";

const ChangeEmail = () => {
  const [step, setStep] = useState(1);
  const [newEmail, setNewEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);

  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  const inputStyle =
    "w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800 transition text-sm shadow-sm";

  // 📧 SEND OTP
  const handleSendOtp = async () => {
    try {
      if (!newEmail) {
        toast.error("Email required");
        return;
      }

      setLoading(true);

      await changeEmail({ newEmail });

      toast.success("OTP sent");
      setStep(2);
      setTimer(30);
      setCanResend(false);

    } catch (err) {
      toast.error(err.msg || err.message || "Failed");
    } finally {
      setLoading(false);
    }
  };

  // ⏳ TIMER
  useEffect(() => {
    let interval;

    if (step === 2 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    if (timer === 0) setCanResend(true);

    return () => clearInterval(interval);
  }, [step, timer]);

  // 🔢 OTP INPUT CHANGE
  const handleOtpChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  // 🔙 BACKSPACE FIX
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        newOtp[index - 1] = "";
        setOtp(newOtp);
        document.getElementById(`otp-${index - 1}`)?.focus();
      }
    }
  };

  // 🔐 VERIFY OTP
  const handleVerify = async () => {
    try {
      const enteredOtp = otp.join("");

      if (enteredOtp.length !== 6) {
        toast.error("Enter valid OTP");
        return;
      }

      setLoading(true);

      await verifyEmail({ otp: enteredOtp });

      toast.success("Email updated successfully");

      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        user.email = newEmail;
        localStorage.setItem("user", JSON.stringify(user));
      }

      setStep(1);
      setNewEmail("");
      setOtp(["", "", "", "", "", ""]);

    } catch (err) {
      toast.error(err.msg || err.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const stepAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: { duration: 0.35 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 px-4">

      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl 
        p-6 md:p-8 w-full max-w-xs md:max-w-sm border border-gray-200"
      >

        <AnimatePresence mode="wait">

          {/* STEP 1 */}
          {step === 1 && (
            <motion.div key="step1" {...stepAnimation} className="space-y-4">

              <h2 className="text-xl font-bold">Change Email</h2>

              <div>
                <label className="text-xs text-gray-500">NEW EMAIL</label>
                <input
                  type="email"
                  value={newEmail}
                  placeholder="Enter new email"
                  onChange={(e) => setNewEmail(e.target.value)}
                  className={inputStyle}
                />
              </div>

              <motion.button
                disabled={loading}
                onClick={handleSendOtp}
                className="w-full bg-gradient-to-r from-blue-800 to-blue-950
                text-white py-2 rounded-lg shadow-lg disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send OTP →"}
              </motion.button>

            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <motion.div key="step2" {...stepAnimation} className="space-y-5">

              <h2 className="text-xl font-bold text-center">
                Verify OTP
              </h2>

              {/* ✅ EMAIL SHOW */}
              <p className="text-center text-sm text-gray-500">
                OTP sent to{" "}
                <span className="font-semibold">{newEmail}</span>
              </p>

              {/* OTP BOXES */}
            <div className="flex justify-center gap-2 sm:gap-3">
  {otp.map((digit, index) => (
    <input
      key={index}
      id={`otp-${index}`}
      maxLength="1"
      value={digit}
      onChange={(e) =>
        handleOtpChange(e.target.value, index)
      }
      onKeyDown={(e) => handleKeyDown(e, index)}
      className="
        w-10 h-10 
        sm:w-12 sm:h-12 
        text-center border border-gray-300 
        rounded-xl text-base sm:text-lg shadow-sm
        focus:outline-none focus:ring-2 focus:ring-blue-800 
      "
    />
  ))}
</div>

              {/* 🔁 RESEND */}
              <div className="text-center text-sm mt-4">
                {canResend ? (
                  <button
                    onClick={handleSendOtp}
                    className="text-blue-700 font-semibold"
                  >
                    Resend OTP
                  </button>
                ) : (
                  <span className="text-gray-500">
                    Resend in{" "}
                    <span className="text-blue-700 font-semibold">
                      {timer}s
                    </span>
                  </span>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="w-1/2 border py-2 rounded-lg text-sm hover:bg-gray-100"
                >
                  ← Back
                </button>

                <motion.button
                  disabled={loading}
                  onClick={handleVerify}
                  className="w-1/2 bg-gradient-to-r from-blue-800 to-blue-950
                  text-white py-2 rounded-lg shadow-lg"
                >
                  {loading ? "Verifying..." : "Verify"}
                </motion.button>
              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </motion.div>
    </div>
  );
};

export default ChangeEmail;