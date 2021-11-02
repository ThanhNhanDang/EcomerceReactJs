import React from "react";
import { NavLink } from "react-router-dom";

function Left() {
  return (
    <div className="header-left">
      <button className="mobile-menu-toggler">
        <span className="sr-only">Toggle mobile menu</span>
        <i className="icon-bars"></i>
      </button>

      <NavLink to="/" className="logo">
        <img
          src="assets/images/demos/demo-3/logo.png"
          alt="Molla Logo"
          width="105"
          height="25"
        />
      </NavLink>
    </div>
  );
}

export default Left;
