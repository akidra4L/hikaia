import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <NavLink to="/" className="link">
          <h1>hikaia</h1>
        </NavLink>
      </div>
    </div>
  );
};
