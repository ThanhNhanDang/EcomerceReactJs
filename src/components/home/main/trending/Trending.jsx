import React from "react";
import AccessOries from "./category/AccessOries";
import All from "./category/All";
import Computers from "./category/Computers";
import SmartWatches from "./category/SmartWatches";
import TabletsAndCellPhones from "./category/TabletsAndCellPhones";
import TV from "./category/TV";

function Trending() {
  
  return (
    <div className="container trending">
      <div className="heading heading-flex mb-3">
        <div className="heading-left">
          <h2 className="title">Trending Products</h2>
        </div>
        <div className="heading-right">
          <ul
            className="nav nav-pills nav-border-anim justify-content-center"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="trending-all-link"
                data-toggle="tab"
                href="#trending-all-tab"
                role="tab"
                aria-controls="trending-all-tab"
                aria-selected="true"
              >
                All
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="trending-tv-link"
                data-toggle="tab"
                href="#trending-tv-tab"
                role="tab"
                aria-controls="trending-tv-tab"
                aria-selected="false"
              >
                TV
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="trending-computers-link"
                data-toggle="tab"
                href="#trending-computers-tab"
                role="tab"
                aria-controls="trending-computers-tab"
                aria-selected="false"
              >
                Computers
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="trending-phones-link"
                data-toggle="tab"
                href="#trending-phones-tab"
                role="tab"
                aria-controls="trending-phones-tab"
                aria-selected="false"
              >
                Tablets & Cell Phones
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="trending-watches-link"
                data-toggle="tab"
                href="#trending-watches-tab"
                role="tab"
                aria-controls="trending-watches-tab"
                aria-selected="false"
              >
                Smartwatches
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="trending-acc-link"
                data-toggle="tab"
                href="#trending-acc-tab"
                role="tab"
                aria-controls="trending-acc-tab"
                aria-selected="false"
              >
                Accessories
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-5col d-none d-xl-block">
          <div className="banner">
            <a href="/#">
              <img
                src="assets/images/demos/demo-3/banners/banner-4.jpg"
                alt="banner"
              />
            </a>
          </div>
        </div>
        <div className="col-xl-4-5col">
          <div className="tab-content tab-content-carousel just-action-icons-sm">
            <All />
            <TV />
            <Computers />
            <TabletsAndCellPhones />
            <SmartWatches />
            <AccessOries />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
