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
            <Logo className="footer-logo" />
            <div className="footer-menu">
              <a href="/">Return Policy</a>
              <a href="/">Contact Us</a>
              <a href="/">How it works</a>
              <a href="/">Results</a>
              <a href="/">Locations</a>
            </div>
            <form className="mail-list-container">
              <input type="email" placeholder="Join our mailing list" />
              <Send className="send" />
            </form>
            <div className="social-icons">
              <a href="/">f</a>
              <a href="/">p</a>
              <a href="/">t</a>
              <a href="/">y</a>
              <a href="/">s</a>
            </div>
            <span className="copyright">
              © 2020 SmileDirectClub. All Rights Reserved.
            </span>
            <div className="bottom-link">
              <a href="/">Privacy</a>
              <a href="/">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
