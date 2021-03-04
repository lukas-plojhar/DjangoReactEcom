import React, { Component } from "react";
import "./assets/css/footer.css";
import { ReactComponent as Logo } from "./assets/svg/logo.svg";
import { ReactComponent as Send } from "./assets/svg/send.svg";

export default class footer extends Component {
  render() {
    return (
      <footer className="bottom-footer">
        <div className="container">
          <div className="footer-content d:grid">
            {/*<Logo className="footer-logo" />*/}
            <div className="footer-menu">
              <a href="/">Platba a doručení</a>
              <a href="/">Kontakt</a>
              <a href="/">Obchodní podmínky</a>
              <a href="/">Reklamační řád</a>
            </div>
            {/*<form className="mail-list-container">*/}
            {/*  <input type="email" placeholder="Join our mailing list" />*/}
            {/*  <Send className="send" />*/}
            {/*</form>*/}
            <div className="social-icons">
              <a href="/">fb</a>
              <a href="/">ig</a>
              {/*<a href="/">t</a>*/}
              {/*<a href="/">y</a>*/}
              {/*<a href="/">s</a>*/}
            </div>
            <span className="copyright">
              © 2021 TEETHY. Veškerá práva vyhrazena.
            </span>
          </div>
        </div>
      </footer>
    );
  }
}
