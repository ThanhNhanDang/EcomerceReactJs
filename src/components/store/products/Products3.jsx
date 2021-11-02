import React from "react";
import { products } from "../../data";

function Products3() {
 
  return (
    <div className="row justify-content-center">
      {products.map((product, index) => (
        <div
          key={index}
          className="carousel-equal-height col-6 col-md-4 col-lg-4"
        >
          <div className="product product-7 text-center">
            <figure className="product-media">
              {product.top && (
                <span className="product-label label-top">Top</span>
              )}
              {product.sale && (
                <span className="product-label label-sale">Sale</span>
              )}
              {product.new && (
                <span className="product-label label-new">New</span>
              )}
              {product.outOfStock && (
                <span class="product-label label-out">Out of Stock</span>
              )}

              <a href="product.html">
                <img
                  src={product.img}
                  alt="Product image"
                  className="owl-full carousel-equal-height product-image"
                />
              </a>

              <div className="product-action-vertical">
                <a
                  href="/#"
                  className="btn-product-icon btn-wishlist btn-expandable"
                >
                  <span>add to wishlist</span>
                </a>
                <a
                  href="popup/quickView.html"
                  className="btn-product-icon btn-quickview btn-expandable"
                  title="Quick view"
                >
                  <span>Quick view</span>
                </a>
                <a
                  href="/#"
                  className="btn-product-icon btn-compare btn-expandable"
                  title="Compare"
                >
                  <span>Compare</span>
                </a>
              </div>

              <div className="product-action">
                <a href="/#" className="btn-product btn-cart">
                  <span>add to cart</span>
                </a>
              </div>
            </figure>

            <div className="product-body">
              <div className="product-cat">
                <a href="/#">{product.cat}</a>
              </div>
              <h3 className="product-title">
                <a href="product.html">{product.title}</a>
              </h3>
              <div className="product-price">${product.price}</div>
              <div className="ratings-container">
                <div className="ratings">
                  <div
                    className="ratings-val"
                    style={{ width: product.ratingsVal + "%" }}
                  ></div>
                </div>
                <span className="ratings-text">
                  ( {product.reviews} Reviews )
                </span>
              </div>
              {product.color && (
                <div className="product-nav product-nav-dots">
                  {product.colors.map((color, index) => (
                    <a
                      href="/#"
                      key={index}
                      className={color.active ? "active" : " "}
                      style={{ background: color.color }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products3;
