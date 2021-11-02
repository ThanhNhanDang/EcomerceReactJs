import React from "react";
import Brand from "./item/Brand";
import Category from "./item/Category";
import Color from "./item/Color";
import Price from "./item/Price";
import Size from "./item/Size";

function Sidebar() {
  return (
    <aside className="col-lg-3 order-lg-first">
      <div className="sidebar sidebar-shop">
        <div className="widget widget-clean">
          <label>Filters:</label>
          <a href="/#" className="sidebar-filter-clear">
            Clean All
          </a>
        </div>
        <Category />
        <Size />
        <Color />
        <Brand />
        <Price />
      </div>
    </aside>
  );
}

export default Sidebar;
