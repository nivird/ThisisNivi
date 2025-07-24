import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-[#e6fff7] min-h-screen flex items-center justify-center px-6 py-10 text-[#333]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
          Hi, I'm Nivethitha
        </h1>

        <p className="text-lg md:text-xl mb-6 text-gray-700">
          A Full Stack Developer with a love for building modern web apps,
          blending clean design and functionality with creativity.
        </p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            View My Projects <FaArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
