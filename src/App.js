import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";



// Importing Components
import Home from "./components/Home";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contect from "./components/Contect";
import About from "./components/About";


import "./App.css";




  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };


const App = () => {
  const { t, i18n } = useTranslation();
   const [showButton, setShowButton] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

 

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
            <div className="navbar-logo">{t("navbar.logo")}</div>
            <ul className="navbar-links">
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                  {t("navbar.home")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                  {t("navbar.about")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/project" className={({ isActive }) => (isActive ? "active" : "")}>
                  {t("navbar.project")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/skills" className={({ isActive }) => (isActive ? "active" : "")}>
                  {t("navbar.skills")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/contect" className={({ isActive }) => (isActive ? "active" : "")}>
                  {t("navbar.contact")}
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
            {/* Language Selector */}
            <div className="language-selector">
            <select onChange={(e) => changeLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
            </select>

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
    
        {/* Back to Top Button */}
        {showButton && (
          <button className="back-to-top" onClick={scrollToTop}>
            {t("backToTop")}
          </button>
        )}
    

     

      
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
