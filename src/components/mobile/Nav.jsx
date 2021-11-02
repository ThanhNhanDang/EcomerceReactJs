import React from "react";

function Nav() {
  return (
    <nav className="mobile-nav">
      <ul className="mobile-menu">
        <li className="active">
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="category.html">Shop</a>
          <ul>
            <li>
              <a href="category-list.html">Shop List</a>
            </li>
            <li>
              <a href="category-2cols.html">Shop Grid 2 Columns</a>
            </li>
            <li>
              <a href="category.html">Shop Grid 3 Columns</a>
            </li>
            <li>
              <a href="category-4cols.html">Shop Grid 4 Columns</a>
            </li>
            <li>
              <a href="category-boxed.html">
                <span>
                  Shop Boxed No Sidebar<span className="tip tip-hot">Hot</span>
                </span>
              </a>
            </li>
            <li>
              <a href="category-fullwidth.html">Shop Fullwidth No Sidebar</a>
            </li>
            <li>
              <a href="product-category-boxed.html">Product Category Boxed</a>
            </li>
            <li>
              <a href="product-category-fullwidth.html">
                <span>
                  Product Category Fullwidth<span className="tip tip-new">New</span>
                </span>
              </a>
            </li>
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
              <a href="/#">Lookbook</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="product.html" className="sf-with-ul">
            Product
          </a>
          <ul>
            <li>
              <a href="product.html">Default</a>
            </li>
            <li>
              <a href="product-centered.html">Centered</a>
            </li>
            <li>
              <a href="product-extended.html">
                <span>
                  Extended Info<span className="tip tip-new">New</span>
                </span>
              </a>
            </li>
            <li>
              <a href="product-gallery.html">Gallery</a>
            </li>
            <li>
              <a href="product-sticky.html">Sticky Info</a>
            </li>
            <li>
              <a href="product-sidebar.html">Boxed With Sidebar</a>
            </li>
            <li>
              <a href="product-fullwidth.html">Full Width</a>
            </li>
            <li>
              <a href="product-masonry.html">Masonry Sticky Info</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="blog.html">Blog</a>

          <ul>
            <li>
              <a href="blog.html">classNameic</a>
            </li>
            <li>
              <a href="blog-listing.html">Listing</a>
            </li>
            <li>
              <a href="/#">Grid</a>
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
              <a href="/#">Masonry</a>
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
              <a href="/#">Mask</a>
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
              <a href="/#">Single Post</a>
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
  );
}

export default Nav;
