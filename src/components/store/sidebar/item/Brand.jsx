import React from "react";

function Brand() {
  return (
    <div className="widget widget-collapsible">
      <h3 className="widget-title">
        <a
          data-toggle="collapse"
          href="#widget-4"
          role="button"
          aria-expanded="true"
          aria-controls="widget-4"
        >
          Brand
        </a>
      </h3>
      {/* End .widget-title */}

      <div className="collapse show" id="widget-4">
        <div className="widget-body">
          <div className="filter-items">
            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="brand-1"
                />
                <label className="custom-control-label" for="brand-1">
                  Next
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            {/* End .filter-item */}

            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="brand-2"
                />
                <label className="custom-control-label" for="brand-2">
                  River Island
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            {/* End .filter-item */}

            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="brand-3"
                />
                <label className="custom-control-label" for="brand-3">
                  Geox
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            {/* End .filter-item */}

            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="brand-4"
                />
                <label className="custom-control-label" for="brand-4">
                  New Balance
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            {/* End .filter-item */}

            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="brand-5"
                />
                <label className="custom-control-label" for="brand-5">
                  UGG
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            {/* End .filter-item */}

            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="brand-6"
                />
                <label className="custom-control-label" for="brand-6">
                  F&F
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            {/* End .filter-item */}

            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="brand-7"
                />
                <label className="custom-control-label" for="brand-7">
                  Nike
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
            {/* End .filter-item */}
          </div>
          {/* End .filter-items */}
        </div>
        {/* End .widget-body */}
      </div>
      {/* End .collapse */}
    </div>
  );
}

export default Brand;
