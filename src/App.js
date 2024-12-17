import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

// Importing Components
import Home from "./components/Home";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contect from "./components/Contect";
import About from "./components/About";


import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light"); // State for theme (light/dark)

  // Theme toggle function
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Set theme on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

 

  // Handle scroll event to update active navbar links
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navbarLinks = document.querySelectorAll(".navbar-links a");

    const onScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
          current = section.getAttribute("id");
        }
      });

      navbarLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll); // Cleanup
  }, []);

  return (
    <div className={`app ${theme}`}>
      <Router>
        {/* Navbar */}
        <nav className={`navbar ${theme}`}>
          <div className="navbar-logo">My Portfolio</div>
          <ul className="navbar-links">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" className={({ isActive }) => (isActive ? "active" : "")}>
                Project
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" className={({ isActive }) => (isActive ? "active" : "")}>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/contect" className={({ isActive }) => (isActive ? "active" : "")}>
                Contact
              </NavLink>
            </li>
          </ul>
          {/* Theme Toggle */}
          <div className="theme-toggle">
            <label className="switch">
              <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
              <span className="slider"></span>
            </label>


          </div>
        </nav>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contect" element={<Contect />} />
          </Routes>
        </main>
      </Router>

     

      
      {/* Footer */}
      <div className="footer">
        <p>
          <a href="/path/to/portfolio.pdf" download>
            Download My Portfolio
          </a>
        </p>
        <p>&copy; 2024 Aryan Saini. All Rights Reserved.</p>
        <div className="social-media-icons">
          <a href="https://www.facebook.com/aryansaini.nishu" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://x.com/aryan64835" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/om__shivaay121/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/aryan-saini-312b0b2a1/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <p>
          Call or Message me on{" "}
          <a href="https://wa.me/8534013439" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366" }}>
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </a>
        </p>
        <p>"Your Success, Our Commitment!"</p>
        <p>Designed and Developed by Aryan Saini</p>
      </div>
    </div>
  );
};

export default App;
