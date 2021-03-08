import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./assets/css/nav.css";
import { ReactComponent as CartSVG } from "./assets/svg/cart.svg";
import { ReactComponent as MenuSVG } from "./assets/svg/menu.svg";
import { ReactComponent as Close } from "./assets/svg/close.svg";

// Images
import logo from "../../../assets/images/teethylogo.png";

export default class nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openMobileMenu: false,
    };
  }

  componentDidMount() {
    // window.onscroll = function () {
    //     let navbar = document.getElementById("navbar");
    //
    //     if (window.pageYOffset === 0) {
    //         document.getElementById("fixgap").style.height = "0px";
    //         navbar.classList.remove("sticky");
    //         navbar.classList.remove("sticky-design");
    //     } else {
    //         document.getElementById("fixgap").style.height = "100px";
    //         navbar.classList.add("sticky");
    //         navbar.classList.add("sticky-design");
    //     }
    // };
  }

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
          a
          {/* <div className="menu-top-bar d:flex flex:row">
            <img className="logo" src={logo} alt="logo" />
            <Close className="close-icon" />
          </div> */}
        </div>
        <div id="fixgap" className="hidden"></div>
      </React.Fragment>
    );
  }
}
