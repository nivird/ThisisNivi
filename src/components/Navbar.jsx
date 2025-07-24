import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="bg-[#ccfff2] text-[#333] px-4 py-3 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Brand / Logo */}
          <Link to="/" className="text-2xl font-bold text-pink-600">
            Nivethitha.dev
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-pink-600" : "hover:text-pink-500"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? (
                <FiX className="text-2xl text-pink-600" />
              ) : (
                <FiMenu className="text-2xl text-pink-600" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-[#e6fff7] shadow-lg z-40 flex flex-col items-center justify-center space-y-8 text-xl font-medium"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? "text-pink-600" : "hover:text-pink-500"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


{/* Tailwind css */}
{/*Framer -motion used to mobile slide-out menu and animation */}