import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderTop from "./components/header/headerTop/HeaderTop";
import HeaderMiddle from "./components/header/headerMiddle/HeaderMiddle";
import HeaderBottom from "./components/header/headerBottom/HeaderBottom";
import Main from "./components/home/main/Main";
import Footer from "./components/footer/Footer";
import MobileMenu from "./components/mobile/MobileMenu";
import LoginRegister from "./components/loginRegister/LoginRegister";
import NewsLetter from "./components/newsLetter/NewsLetter";
import E404 from "./components/error/E404";
import Store from "./components/store/Store";
import Products3 from "./components/store/products/Products3";
import Products1 from "./components/store/products/Products1";
import Products2 from "./components/store/products/Products2";
import Products4 from "./components/store/products/Products4";
import PageNavigation from "./components/store/pageNavigation/PageNavigation";
import Sidebar from "./components/store/sidebar/Sidebar";
import Toolbox from "./components/store/toolbox/Toolbox";
import Breadcrumb from "./components/Breadcrumb";
function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="page-wrapper">
          <header className="header header-intro-clearance header-3">
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom />
          </header>
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
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
                        <Route path="/store-3cols" exact>
                          <Products3 />
                        </Route>
                        <Route path="/store-list" exact>
                          <Products1 />
                        </Route>
                        <Route path="/store-2cols" exact>
                          <Products2 />
                        </Route>
                        <Route path="/store-4cols" exact>
                          <Products4 />
                        </Route>
                      </div>
                      <PageNavigation />
                    </div>
                    <Sidebar />
                  </div>
                </div>
              </div>
            </main>

            <Route>
              <E404 />
            </Route>
          </Switch>
          <Footer />
        </div>
        <button id="scroll-top" title="Back to Top">
          <i class="icon-arrow-up"></i>
        </button>
        <div class="mobile-menu-overlay"></div>
        <MobileMenu />
        <LoginRegister />
        <NewsLetter />
      </Router>
    </React.Fragment>
  );
}

export default App;
