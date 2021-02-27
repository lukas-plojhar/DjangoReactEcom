import React, { Component } from "react";
import "./assets/css/banner.css";

export default class banner extends Component {
  render() {
    return (
      <div className="top-offer-banner theme-bg text:center d:none sm:d:block">
        <a href="/offer">
          10% off oral care products + free shipping when you spend $30. Use
          code ORALCARE10.
        </a>
      </div>
    );
  }
}
