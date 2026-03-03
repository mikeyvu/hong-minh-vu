import React from "react";
import '../assets/styles/About.scss';

function About() {
  return (
    <div className="container" id="about">
      <div className="items-container about-me-container">
        <h1>About Me</h1>
        <p>
          I’m a developer who builds solutions for real problems, especially those that involve too much manual work.
          My journey started with Online Vender, my first system to break into a real full-stack application and
          enhance my proficiency in Java, and continued through internships like Sample Assist, where I addressed real pain points
          through AI-driven solutions.
        </p>
        <p>
          I’m drawn to systems that demand both rigor and creativity, whether architecting backend services, designing
          scalable APIs, or creating data-driven applications that solve real-world problems. I care deeply about clean
          architecture, maintainable code, and the craft behind every solution.
        </p>
        <p>
          If you’re curious how I’ve tackled these challenges and grown from each experience, keep scrolling, my
          journey below highlights the projects, problems, and solutions that have shaped me as a developer.
        </p>
      </div>
    </div>
  );
}

export default About;