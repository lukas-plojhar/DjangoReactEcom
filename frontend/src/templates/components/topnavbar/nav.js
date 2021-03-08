import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CartSVG } from "./assets/svg/cart.svg";
import { ReactComponent as MenuSVG } from "./assets/svg/menu.svg";
import { ReactComponent as Close } from "./assets/svg/close.svg";
import logo from "../../../assets/images/teethylogo.png";
import "./assets/css/nav.css";

export default class nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openMobileMenu: false,
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
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <nav id="navbar" className="top-navbar">
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
                  this.setState({ openMobileMenu: true });
                }}
              >
                <MenuSVG />
              </div>
            </div>
          </div>
        </nav>
        <div
          className="mobile-menu-content"
          style={{ display: this.state.openMobileMenu ? "block" : "none" }}
        >
          <div className="menu-top-bar d:grid">
            <img className="logo-menu" src={logo} alt="logo" />
            <Close
              className="close-icon"
              onClick={(e) => {
                this.setState({ openMobileMenu: false });
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
        </div>
      </React.Fragment>
    );
  }
}
