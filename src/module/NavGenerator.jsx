import React from "react";
import { NavLink } from "react-router-dom";

const NavGenerator = (navData) => {
  return navData().map((item) => {
    const key = item.to || item.header;
    return item.header ? (
      <span className="text-secondary border-bottom pb-2 mb-2 mt-4" key={key}>
        {item.header}
      </span>
    ) : (
      <li className="nav-item" key={key}>
        <NavLink to={item.to} activeClassName="active" className="nav-link">
          <i className={item.icon}></i>
          {" " + item.title}
        </NavLink>
      </li>
    );
  });
};

export default NavGenerator;
