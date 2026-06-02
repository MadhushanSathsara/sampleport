import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import "./Education.css";

function Education() {
  const education = [
    {
      degree: "BSc in Computer Science",
      institute: "University / Institute Name",
      period: "2024 - Present",
      description:
        "Currently studying core computer science subjects including software engineering, databases, and web development.",
    },
    {
      degree: "Diploma in Information Technology",
      institute: "Technical College / Academy",
      period: "2022 - 2023",
      description:
        "Learned programming fundamentals, web development, and database management systems.",
    },
    {
      degree: "Advanced Level (A/L) - Mathematics",
      institute: "School Name",
      period: "Completed 2021",
      description:
        "Focused on mathematics, logic, and problem-solving foundations.",
    },
  ];

  return (
    <div className="education-page">

      <motion.h1
        className="edu-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Education
      </motion.h1>

      <div className="edu-timeline">

        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="edu-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >

            <div className="edu-icon">
              <FaGraduationCap />
            </div>

            <div className="edu-content">

              <h2>{edu.degree}</h2>

              <h3>{edu.institute}</h3>

              <p className="edu-period">
                <FaCalendarAlt /> {edu.period}
              </p>

              <p className="edu-desc">
                {edu.description}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}

export default Education;