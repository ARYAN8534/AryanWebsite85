import React from "react";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import Contect from "./Contect";

const Home = () => {
  return (
    <div>
    <section id="home" style={{ color: 'black' }}>
        <h1 style={{ color: 'black'  }}>Welcome to My Portfolio</h1>
        <p>This is the Home section.</p>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Project Section */}
      <section id="project">
        <Project />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contect">
        <Contect />
      </section>
    </div>
  );
};

export default Home;
