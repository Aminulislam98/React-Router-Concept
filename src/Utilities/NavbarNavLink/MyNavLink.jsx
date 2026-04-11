import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "text-green-600" : undefined}`
        }
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default MyNavLink;
