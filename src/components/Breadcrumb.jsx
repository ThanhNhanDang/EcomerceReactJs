import React from "react";
import { NavLink } from "react-router-dom";

function Breadcrumb() {
  return (
    <li class="breadcrumb-item">
      <NavLink to="/">Home</NavLink>
    </li>
  );
}
export default Breadcrumb;
