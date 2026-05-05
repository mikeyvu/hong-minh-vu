import React from "react";
import '../assets/styles/Main.scss';
import avatar from '../assets/images/Mike Vu - avatar.jpg';

function Main() {
  const cvFileName = 'Minh Vu(Mike) - CV.pdf';
  const cvHref = `${process.env.PUBLIC_URL}/cv/${encodeURIComponent(cvFileName)}`;

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Mike Vu avatar" />
        </div>
        <div className="content">
          <h1>Mike Vu</h1>
          <p>Full Stack Software Engineer Graduate - AI and Big Data Engineer</p>
          <div className="cta-actions">
            <a
              className="cv-download-link"
              href={cvHref}
              target="_blank"
              rel="noreferrer"
              download
            >
              View My CV
            </a>
            <a className="cv-download-link" href="#contact">
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;