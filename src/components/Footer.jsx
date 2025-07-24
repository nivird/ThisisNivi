{/* install framer-moion react-icons  */}
{/*install react-router-dom */}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFooter = () => setIsOpen(!isOpen);

  return (
    <footer className="bg-[#ccfff2] text-[#333] mt-8 shadow-inner px-4 py-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Brand / Logo */}
        <div className="text-lg font-bold text-pink-600 mb-4 md:mb-0">
          © {new Date().getFullYear()} Nivethitha.dev
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-pink-500">Home</Link>
          <Link to="/about" className="hover:text-pink-500">About</Link>
          <Link to="/projects" className="hover:text-pink-500">Projects</Link>
          <Link to="/resume" className="hover:text-pink-500">Resume</Link>
          <Link to="/contact" className="hover:text-pink-500">Contact</Link>
        </div>

        {/* Mobile Slide-Up Toggle Button */}
        <div className="md:hidden flex justify-center w-full mt-2">
          <button onClick={toggleFooter}>
            {isOpen ? (
              <FiChevronDown className="text-2xl text-pink-600" />
            ) : (
              <FiChevronUp className="text-2xl text-pink-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Up Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="md:hidden mt-4 flex flex-col items-center space-y-4 text-base font-medium"
          >
            <Link to="/" onClick={toggleFooter} className="hover:text-pink-500">Home</Link>
            <Link to="/about" onClick={toggleFooter} className="hover:text-pink-500">About</Link>
            <Link to="/projects" onClick={toggleFooter} className="hover:text-pink-500">Projects</Link>
            <Link to="/resume" onClick={toggleFooter} className="hover:text-pink-500">Resume</Link>
            <Link to="/contact" onClick={toggleFooter} className="hover:text-pink-500">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}

