import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./assets/css/nav.css";
import { ReactComponent as Logo } from "./assets/svg/logo.svg";
import { ReactComponent as CartSVG } from "./assets/svg/cart.svg";
import { ReactComponent as MenuSVG } from "./assets/svg/menu.svg";

export default class nav extends Component {
  componentDidMount() {
    window.onscroll = function () {
      let navbar = document.getElementById("navbar");

      if (window.pageYOffset === 0) {
        document.getElementById("fixgap").style.height = "0px";
        navbar.classList.remove("sticky");
        navbar.classList.remove("sticky-design");
      } else {
        document.getElementById("fixgap").style.height = "100px";
        navbar.classList.add("sticky");
        navbar.classList.add("sticky-design");
      }
    };
  }
  render() {
    return (
      <React.Fragment>
        <nav id="navbar" className="top-navbar">
          <div className="container">
            <div className="nav d:none sm:d:grid ">
              <div className="logo">
                <Logo />
              </div>
              <div className="menu-container d:flex flex:row">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop All</Link>
              </div>
              <div className="cart-svg">
                <CartSVG />
              </div>
            </div>
            <div className="mobile-nav d:grid sm:d:none">
              <div className="logo">
                <Logo className="mobile-logo" />
              </div>
              <div className="man-svg">
                <CartSVG />
              </div>
              <div className="cart-svg">
                <MenuSVG />
              </div>
            </div>
          </div>
        </nav>
        <div id="fixgap" className="hidden"></div>
      </React.Fragment>
    );
  }
}
