import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Tech Solutions Pvt Ltd",
      period: "Jan 2025 - Apr 2025",
      description:
        "Worked on React-based web applications, improved UI performance, and built reusable components.",
      skills: ["React", "JavaScript", "CSS", "Bootstrap"],
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2024 - Present",
      description:
        "Built responsive websites for small businesses and personal clients using React and PHP.",
      skills: ["React", "PHP", "MySQL", "Responsive Design"],
    },
    {
      role: "UI/UX Practice Projects",
      company: "Personal Projects",
      period: "2023 - 2024",
      description:
        "Designed and developed portfolio projects focusing on modern UI/UX and frontend development.",
      skills: ["Figma", "React", "CSS Animations"],
    },
  ];

  return (
    <div className="experience-page">

      <motion.h1
        className="exp-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Work Experience
      </motion.h1>

      <div className="timeline">

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="exp-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >

            <div className="exp-icon">
              <FaBriefcase />
            </div>

            <div className="exp-content">

              <h2>{exp.role}</h2>

              <h3>{exp.company}</h3>

              <p className="exp-period">
                <FaCalendarAlt /> {exp.period}
              </p>

              <p className="exp-desc">
                {exp.description}
              </p>

              <div className="exp-skills">
                {exp.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}

export default Experience;