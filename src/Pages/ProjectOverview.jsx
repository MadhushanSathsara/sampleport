import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projectData';
import { motion } from 'framer-motion';

import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaCode
} from 'react-icons/fa';

import Loader from '../components/Loader';
import './ProjectOverview.css';

function ProjectOverview() {

  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  const [loading, setLoading] = useState(true);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) return <Loader />;

  if (!project) {
    return (
      <div className="not-found">
        <h1>Project Not Found</h1>
      </div>
    );
  }

  return (
    <motion.div
      className="project-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      {/* HERO */}
      <div className="project-hero">
        <img src={project.image} alt={project.title} />
        <div className="hero-overlay"></div>
      </div>

      {/* CONTENT */}
      <div className="project-content">

        {/* BACK */}
        <Link to="/" className="back-btn">
          <FaArrowLeft />
          Back Home
        </Link>

        {/* TITLE */}
        <div className="title-section">
          <span className="project-tag">FEATURED PROJECT</span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>

        {/* 🔥 CLEAR PREVIEW IMAGE (IMPORTANT UX FIX) */}
        <div className="preview-section">
          <h2>Project Preview</h2>

          <div className="preview-box">
            <img
              src={project.image}
              alt="preview"
              onClick={() => setSelectedImg(project.image)}
            />
            <p>Click to view full size</p>
          </div>
        </div>

        {/* INFO */}
        <div className="info-grid">

          <div className="info-card">
            <FaCalendarAlt />
            <h3>Start Date</h3>
            <span>{project.startDate}</span>
          </div>

          <div className="info-card">
            <FaCalendarAlt />
            <h3>End Date</h3>
            <span>{project.endDate}</span>
          </div>

          <div className="info-card">
            <FaCode />
            <h3>Scope</h3>
            <span>{project.scope}</span>
          </div>

        </div>

        {/* OVERVIEW */}
        <div className="project-about">
          <h2>Project Overview</h2>
          <p>{project.description}</p>
        </div>

        {/* GALLERY */}
        <div className="gallery-section">
          <h2>More Screenshots</h2>

          <div className="gallery-grid">
            {project.images?.map((img, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => setSelectedImg(img)}
              >
                <img src={img} alt={`img-${index}`} />
              </div>
            ))}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="project-buttons">

          <a href="/" className="live-btn">
            <FaExternalLinkAlt />
            Live Demo
          </a>

          <a href="/" className="github-btn">
            <FaGithub />
            Source Code
          </a>

        </div>

      </div>

      {/* LIGHTBOX */}
      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="full" />
        </div>
      )}

    </motion.div>
  );
}

export default ProjectOverview;