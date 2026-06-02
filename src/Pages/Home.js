
import React from 'react';
import './index.css';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight
} from 'react-icons/fa';

import profilePic from '../../src/Assets/propic.jpg';
import profilePic2 from '../../src/Assets/propic2.jpg';

import pro1 from '../../src/Assets/pro1.jpg';
import pro2 from '../../src/Assets/pro2.jpg';
import pro3 from '../../src/Assets/pro3.jpg';
import pro4 from '../../src/Assets/pro4.jpg';
import pro5 from '../../src/Assets/pro5.jpg';
import pro6 from '../../src/Assets/pro6.jpg';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const navigate = useNavigate();

  const projects = [
    { id: 1, image: pro1, title: 'E-Commerce Platform' },
    { id: 2, image: pro2, title: 'Portfolio Website' },
    { id: 3, image: pro3, title: 'Task Management App' },
    { id: 4, image: pro4, title: 'Restaurant Website' },
    { id: 5, image: pro5, title: 'Booking System' },
    { id: 6, image: pro6, title: 'Dashboard UI' },
  ];

  return (
    <div className="main-container">

      {/* HERO SECTION */}
      <section id="home-section" className="hero-section">

        <div className="hero-left">

          <span className="tag">FULL STACK DEVELOPER</span>

          <h1>
            Building Modern <br />
            Digital Experiences
          </h1>

          <p>
            I design and develop modern web applications using
            React, JavaScript, PHP, Bootstrap, and MySQL.
            Creating fast, responsive, and beautiful user experiences.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="primary-btn">
              Hire Me
            </Link>

            <a href="#project-section" className="secondary-btn">
              View Work
            </a>
          </div>

          <div className="social-icons">
            <FaGithub />
            <FaLinkedin />
            <FaInstagram />
          </div>

        </div>

        <div className="hero-right">
          <img src={profilePic} alt="profile" className="hero-image" />
        </div>

      </section>

      {/* ABOUT SECTION */}
      <section id="about-section" className="about-section">

        <div className="about-image">
          <img src={profilePic2} alt="about" />
        </div>

        <div className="about-content">

          <span className="tag">ABOUT ME</span>

          <h2>
            Passionate About Building
            Creative Websites
          </h2>

          <p>
            I specialize in frontend and backend development,
            creating responsive and high-performance web applications.
            My focus is delivering clean UI/UX with scalable architecture.
          </p>

          <div className="skills">
            <span>React</span>
            <span>JavaScript</span>
            <span>Bootstrap</span>
            <span>PHP</span>
            <span>MySQL</span>
          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="project-section" className="projects-section">

        <span className="tag">MY WORK</span>

        <h2>Featured Projects</h2>

        <div className="projects-grid">

          {projects.map((project) => (
            <div className="project-card" key={project.id}>

              <img src={project.image} alt={project.title} />

              <div className="project-overlay">

                <h3>{project.title}</h3>

                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  View Project <FaArrowRight />
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;

