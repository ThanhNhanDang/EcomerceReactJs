import React from "react";
import { NavLink } from "react-router-dom";

function Toolbox() {
  return (
    <div className="toolbox">
      <div className="toolbox-left">
        <div className="toolbox-info">
          Showing <span>9 of 56</span> Products
        </div>
      </div>
      <div className="toolbox-right">
        <div className="toolbox-sort">
          <label for="sortby">Sort by:</label>
          <div className="select-custom">
            <select name="sortby" id="sortby" className="form-control">
              <option value="popularity" selected="selected">
                Most Popular
              </option>
              <option value="rating">Most Rated</option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>
        <div className="toolbox-layout">
          <NavLink
            to="/store-list"
            className="btn-layout"
            activeClassName="active"
          >
            <svg width="16" height="10">
              <rect x="0" y="0" width="4" height="4" />
              <rect x="6" y="0" width="10" height="4" />
              <rect x="0" y="6" width="4" height="4" />
              <rect x="6" y="6" width="10" height="4" />
            </svg>
          </NavLink>
          <NavLink to="/store-2cols" className="btn-layout" activeClassName="active">
            <svg width="10" height="10">
              <rect x="0" y="0" width="4" height="4" />
              <rect x="6" y="0" width="4" height="4" />
              <rect x="0" y="6" width="4" height="4" />
              <rect x="6" y="6" width="4" height="4" />
            </svg>
          </NavLink>
          <NavLink to="/store-3cols" className="btn-layout" activeClassName="active">
            <svg width="16" height="10">
              <rect x="0" y="0" width="4" height="4" />
              <rect x="6" y="0" width="4" height="4" />
              <rect x="12" y="0" width="4" height="4" />
              <rect x="0" y="6" width="4" height="4" />
              <rect x="6" y="6" width="4" height="4" />
              <rect x="12" y="6" width="4" height="4" />
            </svg>
          </NavLink>
          <NavLink to="/store-4cols" className="btn-layout" activeClassName="active">
            <svg width="22" height="10">
              <rect x="0" y="0" width="4" height="4" />
              <rect x="6" y="0" width="4" height="4" />
              <rect x="12" y="0" width="4" height="4" />
              <rect x="18" y="0" width="4" height="4" />
              <rect x="0" y="6" width="4" height="4" />
              <rect x="6" y="6" width="4" height="4" />
              <rect x="12" y="6" width="4" height="4" />
              <rect x="18" y="6" width="4" height="4" />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Toolbox;
