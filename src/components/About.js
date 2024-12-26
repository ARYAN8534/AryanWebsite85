import React, { useState } from 'react';
import './About.css';

// Import your images here
import AryanPicImage from './image/AryanPic.jpeg';
import Vishu01Image from './image/Vishu01.jpeg';
import Vishu02Image from './image/Vishu02.jpeg';
import Vishu03Image from './image/Vishu03.jpg';
import Vishu04Image from './image/Vishu04.jpeg';
import Vishu05Image from './image/Vishu05.jpg';

const galleryImages = [
  { src: Vishu01Image, caption: "Adventure Begins" },
  { src: Vishu02Image, caption: "Sunset Serenity" },
  { src: Vishu03Image, caption: "Nature's Beauty" },
  { src: Vishu04Image, caption: "Urban Exploration" },
  { src: Vishu05Image, caption: "Hiking to the Top" },
];

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImage(galleryImages[index].src);
    setCurrentIndex(index);
  };

  const navigateImage = (direction) => {
    const newIndex = (currentIndex + direction + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex].src);
    setCurrentIndex(newIndex);
  };


  return (
    <div className="container">
    
      
      <section className="profile-section">
        <img src={AryanPicImage} alt="Aryan Saini" className="profile-image" />
        <div className="profile-info">
          <h2 className="name">Aryan Saini</h2>
          <p className="job-title">Web Developer | UI/UX Designer | Tech Enthusiast</p>
          <p className="bio">
            Namaste! I'm a passionate web developer from India with a strong foundation in creating 
            user-friendly and efficient web applications.
          </p>
          <a href="https://ARYAN8534.github.io/Resume/" className="button" target="_blank" rel="noopener noreferrer">
            Open CV
          </a>
          <div className="resume-section">

          <a 
    href="/resume.pdf" 
    download 
    className="resume-download-button"
  >
    Download Resume
  </a>
  </div>
        </div>
      </section>

      <section className="gallery">
        <h2 style={{ color: 'red' }}>My Image Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div className="gallery-item" key={index} onClick={() => openLightbox(index)}>
              <img src={img.src} alt={`Gallery imag ${index + 1}`} />
              <p className="caption">{img.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <span className="close-btn">&times;</span>
          <img src={selectedImage} alt="Selected" className="lightbox-image" />
          <button className="nav-btn left" onClick={(e) => { e.stopPropagation(); navigateImage(-1); }}>&#8592;</button>
          <button className="nav-btn right" onClick={(e) => { e.stopPropagation(); navigateImage(1); }}>&#8594;</button>
        </div>
      )}

      <section className="hobbies-section">
        <h2 style= {{color: 'red'}}>Hobbies & Interests</h2>
        <div className="hobbies-grid">
          <div className="hobby-card">
            <h3>Cricket</h3>
            <p>I love playing cricket during my free time.</p>
          </div>
          <div className="hobby-card">
            <h3>Music</h3>
            <p>Listening to melodies keeps me energized and focused.</p>
          </div>
          <div className="hobby-card">
            <h3>Travel</h3>
            <p>Exploring new places and cultures fascinates me.</p>
          </div>
        </div>
      </section>

      <section className="timeline">
        <h2 style ={{ color: 'red'}}>My Journey</h2>
        <ul>
          <li><strong>2020:</strong> Passed 12th from UP Board.</li>
          <li><strong>2023:</strong> Pursuing Graduation at Mangalayatan University.</li>
          <li><strong>2024:</strong> Training as Web Developer at OK Soft Solutions.</li>
        </ul>
      </section>
    </div>
  );
}

