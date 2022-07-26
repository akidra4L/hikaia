import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-empty"></div>
      <div className="footer-text">
        <p>made by Alikhan Gubayev</p>
        <p>nFactorial Summer 2022</p>
      </div>
      <div className="footer-links">
        <a
          href="https://www.instagram.com/gubayevv/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/alikhan-gubayev-773855233/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/akidra4L" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};
