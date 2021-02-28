import React, {Component} from "react";
import "./assets/css/shop.css";
import TopOffer from "../../components/topofferbanner/banner";
import TopNav from "../../components/topnavbar/nav";
import Product from "../../components/product/product";
import ColProduct from "../../components/colproduct/colproduct";
import Usp from "../../components/usp/usp";
import PopularProducts from "../../components/popproducts/popproducts";
import Footer from "../../components/footer/footer";
import Review from "../../components/review/review";
import Instagram from "../../components/instagram/instagram";

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
                {/*<TopOffer/>*/}
                <TopNav/>
                <div
                    className="product-container white-bg"
                >
                    <div className="container">
                        <div
                            className="product-content d:flex flex:col md:flex:row"
                        >
                            <div className="product-details d:grid">
                                <div className="content">
                                    <h1>Chceš úsměv jako
                                        hollywoodská hvězda?</h1>
                                    <p>Vrať svým zubům jejich přirozenou bělost a
                                        pevnost. Jednoduše, rychle a za pár korun.</p>
                                    <a href="/" className="theme-bg d:inline-block">
                                        Chci bílé zuby
                                    </a>
                                </div>
                            </div>
                            <div className="product-img">
                                <img src="https://ident-system.cz/wp-content/uploads/2021/03/uv-sada-copy.png" alt="product"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/*{products.map((product) => {*/}
                {/*    return <Product data={product} key={product.id}/>;*/}
                {/*})}*/}
                <Usp/>
                <ColProduct/>
                <PopularProducts/>
                <Instagram/>
                <Review/>
                <Footer/>
            </React.Fragment>
        );
    }
}
