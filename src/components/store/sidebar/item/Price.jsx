import React from "react";

function Price() {
  return (
    <div className="widget widget-collapsible">
      <h3 className="widget-title">
        <a
          data-toggle="collapse"
          href="#widget-5"
          role="button"
          aria-expanded="true"
          aria-controls="widget-5"
        >
          Price
        </a>
      </h3>
      {/* End .widget-title */}

      <div className="collapse show" id="widget-5">
        <div className="widget-body">
          <div className="filter-items">
            <div className="filter-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-1"
                />
                <label className="custom-control-label" for="price-1">
                  $0-100
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
                  id="price-2"
                />
                <label className="custom-control-label" for="price-2">
                  $100-200
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
                  id="price-3"
                />
                <label className="custom-control-label" for="price-3">
                  $200-300
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
                  id="price-4"
                />
                <label className="custom-control-label" for="price-4">
                  $400-500
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
                  id="price-5"
                />
                <label className="custom-control-label" for="price-5">
                  $500-600
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
                  id="price-6"
                />
                <label className="custom-control-label" for="price-6">
                  $600-700
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
                  id="price-7"
                />
                <label className="custom-control-label" for="price-7">
                  $700+
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
    </div>
  );
}

export default Price;
