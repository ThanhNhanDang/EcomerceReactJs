import React from "react";
import HeaderMiddleCenter from "./HeaderMiddleCenter";
import HeaderMiddleLeft from "./HeaderMiddleLeft";
import HeaderMiddleRight from "./HeaderMiddleRight";

function HeaderMiddle() {
  return (
    <div className="header-middle">
      <div className="container">
        <HeaderMiddleLeft />
        <HeaderMiddleCenter/>
        <HeaderMiddleRight/>
      </div>
    </div>
  );
}

export default HeaderMiddle;
