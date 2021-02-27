import React, { Component } from "react";
import "./assets/css/product.css";

export default class product extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        className={
          this.props.data.white
            ? "product-container white-bg"
            : "product-container whitesmoke-bg"
        }
      >
        <div className="container">
          <div
            className={
              this.props.data.left
                ? "product-content d:flex flex:col md:flex:row-reverse"
                : "product-content d:flex flex:col md:flex:row"
            }
          >
            <div className="product-details d:grid">
              <div className="content">
                <h1>{this.props.data.title}</h1>
                <p>{this.props.data.intro}</p>
                <a href="/" className="theme-bg d:inline-block">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="product-img">
              <img src={this.props.data.image} alt="product" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
