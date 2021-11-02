import React from "react";
import { products } from "../../data";

function Products1() {
  return (
    <React.Fragment>
      {products.map((product, index) => (
        <div class="product product-list" key={index}>
          <div class="row">
            <div class="col-6 col-lg-3">
              <figure class="product-media">
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
                    class="product-image"
                  />
                </a>
              </figure>
            </div>

            <div class="col-6 col-lg-3 order-lg-last">
              <div class="product-list-action">
                <div class="product-price">{"$" + product.price}</div>
                <div class="ratings-container">
                  <div class="ratings">
                    <div
                      class="ratings-val"
                      style={{ width: product.ratingsVal + "%" }}
                    ></div>
                  </div>
                  <span class="ratings-text">
                    ( {product.reviews} Reviews )
                  </span>
                </div>

                <div class="product-action">
                  <a
                    href="popup/quickView.html"
                    class="btn-product btn-quickview"
                    title="Quick view"
                  >
                    <span>quick view</span>
                  </a>
                  <a href="#" class="btn-product btn-compare" title="Compare">
                    <span>compare</span>
                  </a>
                </div>

                <a href="#" class="btn-product btn-cart">
                  <span>add to cart</span>
                </a>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="product-body product-action-inner">
                <a
                  href="#"
                  class="btn-product btn-wishlist"
                  title="Add to wishlist"
                >
                  <span>add to wishlist</span>
                </a>
                <div class="product-cat">
                  <a href="#">{product.cat}</a>
                </div>
                <h3 class="product-title">
                  <a href="product.html">{product.title}</a>
                </h3>

                <div class="product-content">
                  <p>{product.description}</p>
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
        </div>
      ))}
    </React.Fragment>
  );
}

export default Products1;
