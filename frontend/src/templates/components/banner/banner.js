import React, { Component } from "react";
import "./assets/css/banner.css";
import { ReactComponent as B1 } from "./assets/svg/b1.svg";
import { ReactComponent as B2 } from "./assets/svg/b2.svg";
import { ReactComponent as B3 } from "./assets/svg/b3.svg";
import { ReactComponent as B4 } from "./assets/svg/b4.svg";

export default class banner extends Component {
  render() {
    return (
      <div className="banner-container">
        <div className="container">
          <div className="banner-content d:grid">
            <div className="brand d:grid">
              <B1 />
              <p>
                “TBH, receiving the entire package was like getting a mega-gift
                from the Tooth Fairy.”
              </p>
            </div>
            <div className="brand d:grid">
              <B2 />
              <p>
                “TBH, receiving the entire package was like getting a mega-gift
                from the Tooth Fairy.”
              </p>
            </div>
            <div className="brand d:grid">
              <B3 />
              <p>
                “TBH, receiving the entire package was like getting a mega-gift
                from the Tooth Fairy.”
              </p>
            </div>
            <div className="brand d:grid">
              <B4 />
              <p>
                “TBH, receiving the entire package was like getting a mega-gift
                from the Tooth Fairy.”
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
