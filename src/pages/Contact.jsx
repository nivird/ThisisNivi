import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState({ success: "", error: "" });

  return (
    <div className="bg-[#e6fff7] min-h-screen px-6 py-10 text-[#333]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-pink-600 mb-8 text-center">Contact Me</h1>

        <p className="text-lg mb-8 text-center text-gray-700">
          Have a question or want to work together? Drop a message below and I'll get back to you!
        </p>

        <form
          className="bg-white p-6 rounded-2xl shadow-md space-y-6"
          onSubmit={async (e) => {
            e.preventDefault();
            setStatus({ success: "", error: "" });

            const form = e.target;
            const formData = new FormData(form);
            const payload = {
              name: formData.get("name"),
              email: formData.get("email"),
              message: formData.get("message"),
            };

            try {
              const res = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              });

              const data = await res.json();

              if (!res.ok) {
                throw new Error(data.message || "Submission failed");
              }

              setStatus({ success: data.message, error: "" });
              form.reset();
            } catch (err) {
              console.error("Error:", err);
              setStatus({ success: "", error: err.message || "Something went wrong." });
            }
          }}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-pink-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-pink-600 transition"
          >
            Send Message
          </motion.button>

          {status.success && (
            <p className="text-green-600 text-center font-medium">{status.success}</p>
          )}
          {status.error && (
            <p className="text-red-600 text-center font-medium">{status.error}</p>
          )}
        </form>

        {/* Contact Info */}
        <div className="mt-10 text-center space-y-2 text-gray-600">
          <p className="flex justify-center items-center gap-2">
            <FaEnvelope className="text-pink-500" /> your.email@example.com
          </p>
          <p className="flex justify-center items-center gap-2">
            <FaPhoneAlt className="text-pink-500" /> +1 234 567 8900
          </p>
        </div>
      </motion.div>
    </div>
  );
}
