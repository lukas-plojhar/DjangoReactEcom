import React, { Component } from "react";
import TopBanner from "../../components/topofferbanner/banner";
import Navbar from "../../components/topnavbar/nav";
import Footer from "../../components/footer/footer";
import Poproduct from "../../components/popproducts/popproducts";
import Review from "../../components/review/review";
import "./assets/css/product.css";
import ThumbnailSlider from "../../components/thumbnailslider/ThumbnailSlider";

export default class product extends Component {
  render() {
    return (
      <div>
        <TopBanner />
        <Navbar />
        <section className="bandcamp-section">
          <div className="container">
            <a href="/">Shop All</a>
            <span>/ Electric Tootbrush</span>
          </div>
        </section>
        <section className="single-product-container">
          <div className="container">
            <div className="single-product-content d:flex flex:row">
              <div className="img-container">
                <ThumbnailSlider />
              </div>
              <div className="context-container"></div>
            </div>
          </div>
        </section>
        <Poproduct tag="People Also Viewed" />
        <Review bg="#32bef0" />
        <Footer />
        <p>Product</p>
      </div>
    );
  }
}
