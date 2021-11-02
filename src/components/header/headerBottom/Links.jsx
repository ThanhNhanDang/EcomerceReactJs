import React from "react";
import { Link } from "react-router-dom";

function Links({ item }) {
  return (
    <li key={index}>
      <Link to={item.path}>{item.label}</Link>
    </li>
  );
}

export default Links;
