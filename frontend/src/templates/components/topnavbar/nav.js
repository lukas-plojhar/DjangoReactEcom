/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from "react";
import {Link} from "react-router-dom";
// import { ReactComponent as MenuSVG } from "./assets/svg/menu.svg";
// import { ReactComponent as Close } from "./assets/svg/close.svg";
import logo from "../../../assets/images/teethylogo.png";
import "./assets/css/nav.css";

import { Navbar, Nav } from 'react-bootstrap';

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
        this.setState({openMobileMenu: false});
    };

    render() {

        return (
            <React.Fragment>
                <Navbar bg="light" expand="lg" className="container py-sm-3 py-1">
                    <Navbar.Brand href="/">
                        <img src={logo} className="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/produkt/2">Sada na bělení zubů</Nav.Link>
                            <Nav.Link href="/obchod">Nabídka produktů</Nav.Link>
                            <Nav.Link href="/recenze">Recenze a výsledky</Nav.Link>
                            <Nav.Link href="/kontakt">Kontakt</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
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
