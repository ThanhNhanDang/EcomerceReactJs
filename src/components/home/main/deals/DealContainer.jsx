import React from "react";

function DealContainer() {
  const products = [
    {
      top: true,
      sale: true,
      img: "assets/images/demos/demo-3/products/product-5.jpg",
      imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
      cat: "Digital Cameras",
      title: "Canon - EOS 5D Mark IV DSLR Camera",
      newPrice: 3599.99,
      oldPrice: 3999.99,
      ratingsVal: 80,
      reviews: 5,
    },
    {
      top: true,
      sale: false,
      img: "assets/images/demos/demo-3/products/product-6.jpg",
      imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
      cat: "Digital Cameras",
      title: "Canon - EOS 5D Mark IV DSLR Camera",
      newPrice: 3599.99,
      oldPrice: 3999.99,
      ratingsVal: 100,
      reviews: 1201,
    },
  ];

  return (
    <div className="bg-light deal-container pt-7 pb-7 mb-5">
      <div className="container">
        <div className="heading text-center mb-4">
          <h2 className="title">Deals & Outlet</h2>
          <p className="title-desc">Today’s deal and more</p>
        </div>
        <div className="row">
          <div className="col-lg-6 deal-col">
            <div
              className="deal"
              style={{
                backgroundImage:
                  "url('assets/images/demos/demo-3/deal/bg-1.jpg')",
              }}
            >
              <div className="deal-top">
                <h2>Deal of the Day.</h2>
                <h4>Limited quantities. </h4>
              </div>
              <div className="deal-content">
                <h3 className="product-title">
                  <a href="product.html">
                    Home Smart Speaker with Google Assistant
                  </a>
                </h3>

                <div className="product-price">
                  <span className="new-price">$129.00</span>
                  <span className="old-price">Was $150.99</span>
                </div>

                <a href="product.html" className="btn btn-link">
                  <span>Shop Now</span>
                  <i className="icon-long-arrow-right"></i>
                </a>
              </div>
              <div className="deal-bottom">
                <div className="deal-countdown" data-until="+10h"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="products">
              <div className="row">
                {products.map((product, index) => (
                  <div className="col-6" key={index}>
                    <div className="product product-2">
                      <figure className="product-media">
                        {product.top && (
                          <span className="product-label label-circle label-top">
                            Top
                          </span>
                        )}
                        {product.sale && (
                          <span className="product-label label-circle label-sale">
                            Sale
                          </span>
                        )}

                        <a href="product.html">
                          <img
                            src={product.img}
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src={product.imgHover}
                            alt="Product image"
                            className="product-image-hover"
                          />
                        </a>

                        <div className="product-action-vertical">
                          <a
                            href="/#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        {/* End .product-action */}

                        <div className="product-action product-action-dark">
                          <a
                            href="/#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}

                      <div className="product-body">
                        <div className="product-cat">
                          <a href="/#">{product.cat}</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">{product.title}</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">${product.newPrice}</span>
                          <span className="old-price">
                            Was ${product.oldPrice}
                          </span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: product.ratingsVal + "%" }}
                            ></div>
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">
                            ( {product.reviews} Reviews )
                          </span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                ))}
              </div>
              {/* End .row */}
            </div>
          </div>
        </div>
        <div className="more-container text-center mt-3 mb-0">
          <a href="/#" className="btn btn-outline-dark-2 btn-round btn-more">
            <span>Shop more Outlet deals</span>
            <i className="icon-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DealContainer;
