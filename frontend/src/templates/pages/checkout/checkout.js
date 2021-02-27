import React, { Component } from "react";
import TopOffer from "../../components/topofferbanner/banner";
import Navbar from "../../components/topnavbar/nav";
import Footer from "../../components/footer/footer";
import "./assets/css/checkout.css";

export default class checkout extends Component {
  render() {
    return (
      <div>
        <TopOffer />
        <Navbar />
        <section className="checkout-container">
          <div className="container">
            <div className="checkout-content">
              <p className="checkout-title">Product List</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
