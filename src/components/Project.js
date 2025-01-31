import React from "react";
import chessgameImage from "./image/chessgame.jpg";
import MemoriGame2Image from "./image/MemoriGame2.jpg";
import TypingImage from "./image/Typing.avif";
import "./Project.css";

function Projects() {
  const projects = [
    {
      title: "Chess Game",
      image: chessgameImage,
      link: " https://aryan8534.github.io/ChessGame11/",

      description: "Chess Game is an interactive and challenging digital version of the classic chessboard. It allows users to play against a computer or another player."
    },
    {
      title: "Memory Matching Game",   
      image: MemoriGame2Image,
      link: " https://aryan8534.github.io/MemoriMetchingGame/", 
      description: "Memory Matching Game is a fun and educational game designed to test and improve memory and concentration by matching pairs of cards."
    },
    {
      title: "Typing Master",
      image: TypingImage,
      link: "https://ARYAN8534.github.io/Typing1Speed",
      description: "Typing Master is a tool to enhance typing speed and accuracy, offering various levels and challenges to track your progress."
    },
  ];

  return (
    <div className="projects">
    <div className="abcd">
      <h1  style={{ color: 'Red'  }}>Visit My Project</h1>
    </div>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="overlay">
                <h2>{project.title}</h2>
                <p>{project.description}</p> {/* Add description here */}
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
