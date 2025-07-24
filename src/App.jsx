import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {motion} from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="bg-[#e6fff7] text-[#333] min-h-screen flex flex-col">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-grow"
        >
       {/*In React Router v6 (used in modern React apps), <Routes> is a container for all your route definitions.
        It replaces the older <Switch> component from React Router v5.*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
           
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
