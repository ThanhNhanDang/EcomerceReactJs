import React from "react";
import OwlCarousel from "react-owl-carousel";
import {optionsFeatured} from "../../../data";
function Sale() {
  const productsSale = [
    {
      img: "assets/images/demos/demo-3/products/product-2.jpg",
      new: false,
      color: false,
      colors: [],
      imgHover: "assets/images/demos/demo-3/products/product-1.jpg",
      cat: "Cameras & Camcorders",
      title: "GoPro - HERO7 Black HD Waterproof Action",
      price: 349.99,
      ratings: 2,
    },
    {
      img: "assets/images/demos/demo-3/products/product-2.jpg",
      new: false,
      color: true,
      colors: [
        { active: true, color: "#e2e2e2" },
        { active: false, color: "#333333" },
        { active: false, color: "#f2bc9e" },
      ],
      imgHover: "assets/images/demos/demo-3/products/product-1.jpg",
      cat: "Cameras & Camcorders",
      title: "GoPro - HERO7 Black HD Waterproof Action",
      price: 349.99,
      ratings: 2,
    },
    {
      img: "assets/images/demos/demo-3/products/product-1.jpg",
      new: true,
      color: true,
      colors: [
        { active: true, color: "#e2e2e2" },
        { active: false, color: "#333333" },
        { active: false, color: "#f2bc9e" },
      ],
      imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
      cat: "Cameras & Camcorders",
      title: "GoPro - HERO7 Black HD Waterproof Action",
      price: 349.99,
      ratings: 2,
    },
    {
      img: "assets/images/demos/demo-3/products/product-1.jpg",
      new: true,
      color: false,
      colors: [],
      imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
      cat: "Cameras & Camcorders",
      title: "GoPro - HERO7 Black HD Waterproof Action",
      price: 349.99,
      ratings: 2,
    },
    {
      img: "assets/images/demos/demo-3/products/product-1.jpg",
      new: true,
      color: false,
      colors: [],
      imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
      cat: "Cameras & Camcorders",
      title: "GoPro - HERO7 Black HD Waterproof Action",
      price: 349.99,
      ratings: 2,
    },
    {
      img: "assets/images/demos/demo-3/products/product-1.jpg",
      new: true,
      color: true,
      colors: [
        { active: true, color: "#e2e2e2" },
        { active: false, color: "#333333" },
        { active: false, color: "#f2bc9e" },
      ],
      imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
      cat: "Cameras & Camcorders",
      title: "GoPro - HERO7 Black HD Waterproof Action",
      price: 349.99,
      ratings: 2,
    },
    {
      img: "assets/images/demos/demo-3/products/product-1.jpg",
      new: false,
      color: false,
      colors: [],
      imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
      cat: "Cameras & Camcorders",
      title: "GoPro - HERO7 Black HD Waterproof Action",
      price: 349.99,
      ratings: 2,
    },
    {
      img: "assets/images/demos/demo-3/products/product-1.jpg",
      new: false,
      color: false,
      colors: [],
      imgHover: "assets/images/demos/demo-3/products/product-2.jpg",
      cat: "Cameras & Camcorders",
      title: "GoPro - HERO7 Black HD Waterproof Action",
      price: 349.99,
      ratings: 2,
    },
  ];
  return (
    <div
      className="tab-pane p-0 fade"
      id="products-sale-tab"
      role="tabpanel"
      aria-labelledby="products-sale-link"
    >
      <OwlCarousel
        className="owl-full carousel-equal-height carousel-with-shadow"
        {...optionsFeatured}

      >
        {productsSale.map((product, index) => (
          <div className="product product-2" key={index}>
            <figure className="product-media">
              {product.new && (
                <span className="product-label label-circle label-new">
                  New
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
                  <div className="ratings-val" style={{ width: "60%" }}></div>
                </div>
                <span className="ratings-text">
                  ( {product.ratings} Reviews )
                </span>
              </div>
              {product.color && (
                <div className="product-nav product-nav-dots">
                  {product.colors.map((color, index) => (
                    <a
                      key={index}
                      href="/#"
                      className={color.active ? "active" : " "}
                      style={{ background: color.color }}
                    >
                      <span className="sr-only">Color</span>
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

export default Sale;
