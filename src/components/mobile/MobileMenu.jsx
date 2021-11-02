import React from "react";
import Nav from "./Nav";

function MobileMenu() {
  return (
    <div className="mobile-menu-container">
      <div className="mobile-menu-wrapper">
        <span className="mobile-menu-close">
          <i className="icon-close"></i>
        </span>
        <form action="#" method="get" className="mobile-search">
          <label for="mobile-search" className="sr-only">
            Search
          </label>
          <input
            type="search"
            className="form-control"
            name="mobile-search"
            id="mobile-search"
            placeholder="Search in..."
            required
          />
          <button className="btn btn-primary" type="submit">
            <i className="icon-search"></i>
          </button>
        </form>
        <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="mobile-menu-link"
              data-toggle="tab"
              href="#mobile-menu-tab"
              role="tab"
              aria-controls="mobile-menu-tab"
              aria-selected="true"
            >
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="mobile-cats-link"
              data-toggle="tab"
              href="#mobile-cats-tab"
              role="tab"
              aria-controls="mobile-cats-tab"
              aria-selected="false"
            >
              Categories
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="mobile-menu-tab"
            role="tabpanel"
            aria-labelledby="mobile-menu-link"
          >
            <Nav />
          </div>
          <div
            className="tab-pane fade"
            id="mobile-cats-tab"
            role="tabpanel"
            aria-labelledby="mobile-cats-link"
          >
            <nav className="mobile-cats-nav">
              <ul className="mobile-cats-menu">
                <li>
                  <a className="mobile-cats-lead" href="/#">
                    Daily offers
                  </a>
                </li>
                <li>
                  <a className="mobile-cats-lead" href="/#">
                    Gift Ideas
                  </a>
                </li>
                <li>
                  <a href="/#">Beds</a>
                </li>
                <li>
                  <a href="/#">Lighting</a>
                </li>
                <li>
                  <a href="/#">Sofas & Sleeper sofas</a>
                </li>
                <li>
                  <a href="/#">Storage</a>
                </li>
                <li>
                  <a href="/#">Armchairs & Chaises</a>
                </li>
                <li>
                  <a href="/#">Decoration </a>
                </li>
                <li>
                  <a href="/#">Kitchen Cabinets</a>
                </li>
                <li>
                  <a href="/#">Coffee & Tables</a>
                </li>
                <li>
                  <a href="/#">Outdoor Furniture </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="social-icons">
          <a href="/#" className="social-icon" target="_blank" title="Facebook">
            <i className="icon-facebook-f"></i>
          </a>
          <a href="/#" className="social-icon" target="_blank" title="Twitter">
            <i className="icon-twitter"></i>
          </a>
          <a href="/#" className="social-icon" target="_blank" title="Instagram">
            <i className="icon-instagram"></i>
          </a>
          <a href="/#" className="social-icon" target="_blank" title="Youtube">
            <i className="icon-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
