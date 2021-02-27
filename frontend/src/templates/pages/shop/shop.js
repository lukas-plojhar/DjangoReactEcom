import React, { Component } from "react";
import "./assets/css/shop.css";
import TopOffer from "../../components/topofferbanner/banner";
import TopNav from "../../components/topnavbar/nav";
import Product from "../../components/product/product";
import ColProduct from "../../components/colproduct/colproduct";
import Banner from "../../components/banner/banner";
import PopularProducts from "../../components/popproducts/popproducts";
import Footer from "../../components/footer/footer";
import Review from "../../components/review/review";
import Instragram from "../../components/instagram/instagram";

/**
 * PRODUCT DATA
 */
const products = [
  {
    id: 1,
    title: "Keep your smile fresh for less.",
    intro:
      "Get 10% off oral care products and free shipping when you spend $30. Use code ORALCARE10 at checkout.",
    image: "/uploads/header.webp",
    left: false,
    white: true,
  },
];
export default class shop extends Component {
  componentDidMount() {
    document.body.classList.add("shop-page");
  }
  render() {
    return (
      <React.Fragment>
        <TopOffer />
        <TopNav />
        {products.map((product) => {
          return <Product data={product} key={product.id} />;
        })}
        <ColProduct />
        <Instragram />
        <Banner />
        <Review />
        <PopularProducts />
        <Footer />
      </React.Fragment>
    );
  }
}
