import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "UCONN Marketplace",
    description: "A full-stack university marketplace app with user authentication, product listings, and real-time updates.",
    liveLink: "https://your-live-demo-link.com",
    githubLink: "https://github.com/your-repo/uconn-marketplace",
  },
  {
    title: "Task Board",
    description: "A drag-and-drop task board using React, Node.js, and MongoDB for dynamic workflow management.",
    liveLink: "https://your-live-demo-link.com",
    githubLink: "https://github.com/your-repo/task-board",
  },
  {
    title: "Social API",
    description: "RESTful API using Express and MongoDB to support a social network platform with user and thought data.",
    liveLink: "",
    githubLink: "https://github.com/your-repo/social-api",
  },
];

export default function Projects() {
  return (
    <div className="bg-[#e6fff7] min-h-screen px-6 py-10 text-[#333]">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-pink-600 mb-10 text-center">My Projects</h1>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border-l-8 border-pink-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-pink-600 mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex gap-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700 flex items-center gap-1"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700 flex items-center gap-1"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
