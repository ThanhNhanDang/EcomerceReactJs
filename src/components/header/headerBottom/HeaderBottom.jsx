import React from "react";
import HeaderCenter from "./HeaderCenter";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

function HeaderBottom() {
  return (
    <div className="header-bottom sticky-header">
      <div className="container">
          <HeaderLeft/>
          <HeaderCenter/>
          <HeaderRight/>
      </div>
    </div>
  );
}

export default HeaderBottom;
