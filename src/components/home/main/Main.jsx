import React from "react";
import Boxes from "./boxes/Boxes";
import Brands from "./brands/Brands";
import DealContainer from "./deals/DealContainer";
import Featured from "./featured/Featured";
import Sale from "./featured/Sale";
import TopRated from "./featured/TopRated";
import Intro from "./intro/Intro";
import Social from "./socialMedia/Social";
import TopSelling from "./topSelling/TopSelling";
import Trending from "./trending/Trending";

function Main() {
  return (
    <main className="main">
      <Intro />
      <div className="container featured">
        <ul
          className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              id="products-featured-link"
              data-toggle="tab"
              href="#products-featured-tab"
              role="tab"
              aria-controls="products-featured-tab"
              aria-selected="true"
            >
              Featured
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="products-sale-link"
              data-toggle="tab"
              href="#products-sale-tab"
              role="tab"
              aria-controls="products-sale-tab"
              aria-selected="false"
            >
              On Sale
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="products-top-link"
              data-toggle="tab"
              href="#products-top-tab"
              role="tab"
              aria-controls="products-top-tab"
              aria-selected="false"
            >
              Top Rated
            </a>
          </li>
        </ul>
        <div className="tab-content tab-content-carousel">
          <Featured />
          <Sale />
          <TopRated />
        </div>
      </div>
      <div className="mb-7 mb-lg-11"></div>
      {/* End .mb-7 */}
      <div className="container">
        <div
          className="cta cta-border cta-border-image mb-5 mb-lg-7"
          style={{
            backgroundImage: "url(assets/images/demos/demo-3/bg-1.jpg)",
          }}
        >
          <div className="cta-border-wrapper bg-white">
            <div className="row justify-content-center">
              <div className="col-md-11 col-xl-11">
                <div className="cta-content">
                  <div className="cta-heading">
                    <h3 className="cta-title text-right">
                      <span className="text-primary">New Deals</span> <br />
                      Start Daily at 12pm e.t.
                    </h3>
                    {/* End .cta-title */}
                  </div>
                  {/* End .cta-heading */}

                  <div className="cta-text">
                    <p>
                      Get{" "}
                      <span className="text-dark font-weight-normal">
                        FREE SHIPPING* & 5% rewards
                      </span>{" "}
                      on <br />
                      every order with Molla Theme rewards program
                    </p>
                  </div>
                  {/* End .cta-text */}
                  <a href="/#" className="btn btn-primary btn-round">
                    <span>Add to Cart for $50.00/yr</span>
                    <i className="icon-long-arrow-right"></i>
                  </a>
                </div>
                {/* End .cta-content */}
              </div>
              {/* End .col-xl-7 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .bg-white */}
        </div>
        {/* End .cta */}
      </div>
      {/* End .container */}

      <DealContainer />
      <Brands />
      <div className="container">
        <hr className="mt-3 mb-6" />
      </div>
      <Trending />
      <div className="container">
        <hr className="mt-5 mb-6" />
      </div>
      <TopSelling />
      <div className="container">
        <hr className="mt-5 mb-0" />
      </div>
      <Boxes />
      <Social />
    </main>
  );
}

export default Main;
