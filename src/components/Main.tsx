import React from "react";
import '../assets/styles/Main.scss';
import avatar from '../assets/images/Hong Minh Vu - avatar.jpg';

function Main() {
  const cvFileName = 'Minh Vu (Mike) - CV.pdf';
  const cvHref = `${process.env.PUBLIC_URL}/cv/${encodeURIComponent(cvFileName)}`;

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Hong Minh Vu avatar" />
        </div>
        <div className="content">
          <h1>Hong Minh Vu</h1>
          <p>Backend Engineer - AI and Big Data Enthusiast</p>
          <a
            className="cv-download-link"
            href={cvHref}
            target="_blank"
            rel="noreferrer"
            download
          >
            Download My CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;