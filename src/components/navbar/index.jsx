import React from "react";
import { NavLink } from "react-router-dom";

const items = [
  {
    key: 0,
    name: "источники",
    link: "/source",
    class: "navbar-references",
  },
  {
    key: 1,
    name: "hikaia",
    link: "/",
    class: "navbar-title",
  },
  {
    key: 2,
    name: "faq",
    link: "/faq",
    class: "navbar-faq",
  },
];

export const Navbar = () => {
  return (
    <div className="navbar">
      {items.map((item) => (
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
