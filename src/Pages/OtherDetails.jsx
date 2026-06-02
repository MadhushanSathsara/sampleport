import React from "react";
import { motion } from "framer-motion";
import "./OtherDetails.css";

function OtherDetails() {

  const skills = [
    { name: "React", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "CSS", level: 90 },
    { name: "PHP", level: 70 },
    { name: "MySQL", level: 65 },
  ];

  const tools = [
    "VS Code",
    "Git & GitHub",
    "Figma",
    "Postman",
    "Chrome DevTools",
  ];

  const learning = [
    "Node.js APIs",
    "TypeScript",
    "Next.js",
    "System Design Basics",
  ];

  const softSkills = [
    "Problem Solving",
    "Team Work",
    "Communication",
    "Time Management",
  ];

  return (
    <div className="other-page">

      {/* TITLE */}
      <motion.h1
        className="other-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Other Details
      </motion.h1>

      {/* SKILLS */}
      <div className="section">

        <h2>Skills</h2>

        <div className="skills-container">

          {skills.map((skill, i) => (
            <div className="skill" key={i}>

              <div className="skill-top">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="bar">
                <div
                  className="fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* TOOLS */}
      <div className="section">

        <h2>Tools</h2>

        <div className="tags">

          {tools.map((tool, i) => (
            <span key={i}>{tool}</span>
          ))}

        </div>

      </div>

      {/* LEARNING */}
      <div className="section">

        <h2>Currently Learning</h2>

        <div className="tags">

          {learning.map((item, i) => (
            <span key={i}>{item}</span>
          ))}

        </div>

      </div>

      {/* SOFT SKILLS */}
      <div className="section">

        <h2>Soft Skills</h2>

        <div className="tags">

          {softSkills.map((item, i) => (
            <span key={i}>{item}</span>
          ))}

        </div>

      </div>

      {/* GOALS */}
      <div className="section">

        <h2>Career Goals</h2>

        <div className="goal-card">

          <p>
            I aim to become a full-stack developer specializing in
            modern web applications and scalable systems. I am also
            interested in building SaaS products and improving UI/UX
            design skills.
          </p>

        </div>

      </div>

    </div>
  );
}

export default OtherDetails;