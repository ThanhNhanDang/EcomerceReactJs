import React from "react";
import Breadcrumb from "../Breadcrumb";
import PageNavigation from "./pageNavigation/PageNavigation";
import Products3 from "./products/Products3";
import Sidebar from "./sidebar/Sidebar";
import Toolbox from "./toolbox/Toolbox";

function Store({productsItem}) {
  return (
    <main className="main">
      <div
        className="page-header text-center"
        style={{
          backgroundImage: "url('assets/images/page-header-bg.jpg')",
        }}
      >
        <div className="container">
          <h1 className="page-title">
            Welcome to the<span>Store</span>
          </h1>
        </div>
      </div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
        <div className="container">
          <ol className="breadcrumb">
            <Breadcrumb />
            <li className="breadcrumb-item active">
              <a href="/#">Store</a>
            </li>
          </ol>
        </div>
      </nav>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <Toolbox />
              <div classNameName="products mb-3">
                <productsItem />
              </div>
              <PageNavigation />
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Store;
