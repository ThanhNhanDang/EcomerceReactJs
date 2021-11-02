import React from "react";
import OwlCarousel from "react-owl-carousel";
import { optionsTrending } from "../../../../data";
function AccessOries() {
  const products = [
    {
      img: "assets/images/demos/demo-3/products/product-13.jpg",
      imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
      top: true,
      sale: false,
      color: false,
      colors: [],
      cat: "Cameras & Camcorders",
      title: "GoPro - HERO7 Black HD Waterproof Action",
      price: 349.99,
      ratingsVal: 50,
      reviews: 2,
    },
    {
      img: "assets/images/demos/demo-3/products/product-12.jpg",
      top: true,
      sale: false,
      color: true,
      colors: [
        { active: false, color: "#69b4ff" },
        { active: false, color: "#ff887f" },
        { active: true, color: "#333333" },
      ],
      imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
      cat: "Cameras & Camcorders",
      title: "GoPro - HERO7 Black HD Waterproof Action",
      price: 349.99,
      ratingsVal: 10,
      reviews: 2,
    },
    {
      img: "assets/images/demos/demo-3/products/product-14.jpg",
      imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
      top: true,
      sale: true,
      color: true,
      colors: [
        { active: false, color: "#69b4ff" },
        { active: false, color: "#ff887f" },
        { active: true, color: "#333333" },
      ],
      cat: "Cameras & Camcorders",
      title: "GoPro - HERO7 Black HD Waterproof Action",
      price: 349.99,
      ratingsVal: 90,
      reviews: 2,
    },
    {
      img: "assets/images/demos/demo-3/products/product-11.jpg",
      top: false,
      sale: true,
      color: false,
      colors: [],
      imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
      cat: "Cameras & Camcorders",
      title: "GoPro - HERO7 Black HD Waterproof Action",
      price: 349.99,
      ratingsVal: 100,
      reviews: 2,
    },
    {
      img: "assets/images/demos/demo-3/products/product-15.jpg",
      top: false,
      sale: false,
      color: true,
      colors: [
        { active: false, color: "#69b4ff" },
        { active: false, color: "#ff887f" },
        { active: true, color: "#333333" },
      ],
      imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
      cat: "Cameras & Camcorders",
      title: "GoPro - HERO7 Black HD Waterproof Action",
      price: 349.99,
      ratingsVal: 20,
      reviews: 2,
    },
    {
      img: "assets/images/demos/demo-3/products/product-11.jpg",
      top: true,
      sale: true,
      color: false,
      colors: [],
      imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
      cat: "Cameras & Camcorders",
      title: "GoPro - HERO7 Black HD Waterproof Action",
      price: 349.99,
      ratingsVal: 60,
      reviews: 2,
    },
  ];
  return (
    <div
      className="tab-pane p-0 fade"
      id="trending-acc-tab"
      role="tabpanel"
      aria-labelledby="trending-acc-link"
    >
      <OwlCarousel
        className="owl-full carousel-equal-height carousel-with-shadow"
        {...optionsTrending}
      >
        {products.map((product, index) => (
          <div key={index} className="product product-2">
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
        ))}
      </OwlCarousel>
    </div>
  );
}

export default AccessOries;
