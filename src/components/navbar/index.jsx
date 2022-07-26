import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-references">
        <Link to="/source" className="link">
          <h2>источники</h2>
        </Link>
      </div>
      <div className="navbar-title">
        <Link to="/" className="link">
          <h1>hikaia</h1>
        </Link>
      </div>
      <div className="navbar-faq">
        <Link to="/faq" className="link">
          <h2>faq</h2>
        </Link>
      </div>
    </div>
  );
};
