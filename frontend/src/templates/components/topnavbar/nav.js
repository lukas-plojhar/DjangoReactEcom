/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as CartSVG } from "./assets/svg/cart.svg";
// import { ReactComponent as MenuSVG } from "./assets/svg/menu.svg";
// import { ReactComponent as Close } from "./assets/svg/close.svg";
import logo from "../../../assets/images/teethylogo.png";
import "./assets/css/nav.css";

export default class nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openMobileMenu: false,
      menuAmi: false,
      hideAmi: false,
    };
  }

  /**
   * Hide Open Mobile Menu
   * @returns void
   */
  hideOpenMobileMenu = (e) => {
    this.setState({ openMobileMenu: false });
  };

  render() {
    return (
      <React.Fragment>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
        {/* <nav id="navbar" className="top-navbar">
          <div className="container">
            <div className="nav d:none sm:d:grid ">
              <Link to="/">
                <div className="logo">
                  <img src={logo} alt="" className="logo" />
                </div>
              </Link>
              <div className="menu-container text-center">
                <Link to="/shop">Produkty</Link>
                <Link to="/recenze">Výsledky</Link>
                <Link to="/faq">Časté dotazy</Link>
                <Link to="/kontakt">Kontakt</Link>
              </div>
              <div className="cart-svg">
                <CartSVG />
              </div>
            </div>
            <div className="mobile-nav d:grid sm:d:none">
              <Link to="/">
                <div className="logo">
                  <img src={logo} className="mobile-logo" alt="logo" />
                </div>
              </Link>
              <div
                className="cart-svg m-menu"
                onClick={(e) => {
                  this.setState({ openMobileMenu: true, menuAmi: true });
                  document
                    .getElementById("menuContent")
                    .classList.remove("showAmi");
                  document
                    .getElementById("menuContent")
                    .classList.add("hideAmi");
                }}
              >
                <MenuSVG />
              </div>
            </div>
          </div>
        </nav>
        <div 
          id="menuContent"
          className={
            this.state.menuAmi
              ? "mobile-menu-content showAmi"
              : "mobile-menu-content "
          }
          style={{ display: this.state.openMobileMenu ? "block" : "none" }}
        >
          <div className="menu-top-bar d:grid">
            <img className="logo-menu" src={logo} alt="logo" />
            <Close
              className="close-icon"
              onClick={(e) => {
                this.setState({ openMobileMenu: false, hideAmi: true });
              }}
            />
          </div>
          <div className="m-menu-link">
            <Link to="/shop" onClick={this.hideOpenMobileMenu}>
              Shop
            </Link>
            <Link to="/shop" onClick={this.hideOpenMobileMenu}>
              Shop A
            </Link>
            <Link to="/shop" onClick={this.hideOpenMobileMenu}>
              Shop B
            </Link>
            <Link to="/shop" onClick={this.hideOpenMobileMenu}>
              Shop D
            </Link>
          </div>
            </div>*/}
      </React.Fragment>
    );
  }
}
