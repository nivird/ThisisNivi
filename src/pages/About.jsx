import React from "react";
import { motion } from "framer-motion";

{/*export default function About() {
  return (
    <div className="bg-[#e6fff7] min-h-screen px-6 py-10 text-[#333]">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-pink-600 mb-6">About Me</h1>

        <p className="text-lg leading-relaxed mb-4">
          Hello! I’m <span className="font-semibold text-pink-500">Nivethitha</span>,
          a passionate and curious full stack developer who loves turning ideas
          into interactive, responsive, and meaningful web applications.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          I specialize in building modern apps with{" "}
          <span className="text-pink-500 font-medium">React.js</span>,
          <span className="text-pink-500 font-medium"> Node.js</span>, and
          <span className="text-pink-500 font-medium"> MongoDB</span>. I enjoy
          combining clean design, creative thinking, and powerful functionality.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          My journey started as a teacher, and now I channel that same love of
          problem-solving and communication into writing code and crafting
          digital experiences. Whether I’m developing backend APIs, animating
          interfaces, or learning a new framework — I bring dedication and
          positivity to every project!
        </p>

        <p className="text-lg leading-relaxed">
          When I’m not coding, I enjoy reciting slokams, guiding students,
          spending time with my family, and sipping tea while brainstorming
          side projects.
        </p>
      </motion.div>
    </div>
  );
}*/}


const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS / Tailwind", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "PHP / Laravel", level: 70 },
  ];
  
  export default function About() {
    return (
      <div className="bg-[#e6fff7] min-h-screen px-6 py-10 text-[#333]">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-pink-600 mb-6">About Me</h1>
  
          <p className="text-lg leading-relaxed mb-4">
            Hello! I’m <span className="font-semibold text-pink-500">Nivethitha</span>,
            a passionate full stack developer who loves creating responsive,
            interactive web apps using technologies like React, Node.js and MongoDB.
          </p>
  
          <p className="text-lg leading-relaxed mb-4">
            With a background in teaching and a strong foundation in software and
            mathematics, I combine clear communication with solid technical skills
            to build modern and meaningful digital experiences.
          </p>
  
          <p className="text-lg leading-relaxed mb-6">
            I'm constantly learning and exploring new technologies, with a strong
            focus on both frontend and backend development.
          </p>
  
          {/* Skills Section */}
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Skills</h2>
          <div className="space-y-6">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-[#ccfff2] rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 + idx * 0.1 }}
                    className="h-full bg-pink-400 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }



