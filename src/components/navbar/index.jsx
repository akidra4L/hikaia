import React from "react";
import { NavLink } from "react-router-dom";
import { data } from "./data";

export const Navbar = () => {
  return (
    <div className="navbar">
      {data.map((item) => (
        <div key={item.key} className={item.class}>
          <NavLink
            to={item.link}
            className={({ isActive }) =>
              isActive ? `${item.class}-chosen link` : `${item.class} link`
            }
          >
            <h2>{item.name}</h2>
          </NavLink>
        </div>
      ))}
    </div>
  );
};
