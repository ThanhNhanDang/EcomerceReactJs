import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AdminRouter } from "../../AdminRouter";

function HeaderCenter() {


  return (
    <div className="header-center">
      <nav>
        <ul className="menu sf-arrows">
          {AdminRouter.map((item, index) => (
            <li
              key={index}  
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
          <li>
            <a href="product.html" className="sf-with-ul">
              Products
            </a>

            <div className="megamenu megamenu-md">
              <div className="row no-gutters">
                <div className="col-md-8">
                  <div className="menu-col">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="menu-title">Shop with sidebar</div>
                        <ul>
                          <li>
                            <a href="category-list.html">Shop List</a>
                          </li>
                          <li>
                            <a href="category-2cols.html">
                              Shop Grid 2 Columns
                            </a>
                          </li>
                          <li>
                            <a href="category.html">Shop Grid 3 Columns</a>
                          </li>
                          <li>
                            <a href="category-4cols.html">
                              Shop Grid 4 Columns
                            </a>
                          </li>
                          <li>
                            <a href="category-market.html">
                              <span>
                                Shop Market
                                <span className="tip tip-new">New</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                        <div className="menu-title">Shop no sidebar</div>
                        <ul>
                          <li>
                            <a href="category-boxed.html">
                              <span>
                                Shop Boxed No Sidebar
                                <span className="tip tip-hot">Hot</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="category-fullwidth.html">
                              Shop Fullwidth No Sidebar
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <div className="menu-title">Product Category</div>
                        <ul>
                          <li>
                            <a href="product-category-boxed.html">
                              Product Category Boxed
                            </a>
                          </li>
                          <li>
                            <a href="product-category-fullwidth.html">
                              <span>
                                Product Category Fullwidth
                                <span className="tip tip-new">New</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                        <div className="menu-title">Shop Pages</div>
                        <ul>
                          <li>
                            <a href="cart.html">Cart</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wishlist</a>
                          </li>
                          <li>
                            <a href="dashboard.html">My Account</a>
                          </li>
                          <li>
                            <a href="/#">Lookbook</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="banner banner-overlay">
                    <a href="/category" className="banner banner-menu">
                      <img src="assets/images/menu/banner-1.jpg" alt="Banner" />
                      <div className="banner-content banner-content-top">
                        <div className="banner-title text-white">
                          Last
                          <br />
                          Chance
                          <br />
                          <span>
                            <strong>Sale</strong>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="blog.html" className="sf-with-ul">
              Blog
            </a>

            <ul>
              <li>
                <a href="blog.html">classNameic</a>
              </li>
              <li>
                <a href="blog-listing.html">Listing</a>
              </li>
              <li>
                <a href="/#" className="sf-with-ul">
                  Grid
                </a>
                <ul>
                  <li>
                    <a href="blog-grid-2cols.html">Grid 2 columns</a>
                  </li>
                  <li>
                    <a href="blog-grid-3cols.html">Grid 3 columns</a>
                  </li>
                  <li>
                    <a href="blog-grid-4cols.html">Grid 4 columns</a>
                  </li>
                  <li>
                    <a href="blog-grid-sidebar.html">Grid sidebar</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/#" className="sf-with-ul">
                  Masonry
                </a>
                <ul>
                  <li>
                    <a href="blog-masonry-2cols.html">Masonry 2 columns</a>
                  </li>
                  <li>
                    <a href="blog-masonry-3cols.html">Masonry 3 columns</a>
                  </li>
                  <li>
                    <a href="blog-masonry-4cols.html">Masonry 4 columns</a>
                  </li>
                  <li>
                    <a href="blog-masonry-sidebar.html">Masonry sidebar</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/#" className="sf-with-ul">
                  Mask
                </a>
                <ul>
                  <li>
                    <a href="blog-mask-grid.html">Blog mask grid</a>
                  </li>
                  <li>
                    <a href="blog-mask-masonry.html">Blog mask masonry</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/#" className="sf-with-ul">
                  Single Post
                </a>
                <ul>
                  <li>
                    <a href="single.html">Default with sidebar</a>
                  </li>
                  <li>
                    <a href="single-fullwidth.html">Fullwidth no sidebar</a>
                  </li>
                  <li>
                    <a href="single-fullwidth-sidebar.html">
                      Fullwidth with sidebar
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderCenter;
