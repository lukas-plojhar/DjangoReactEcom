import React, {Component} from "react";
import "./assets/css/home.css";
import TopNav from "../../components/topnavbar/nav";
import ColProduct from "../../components/colproduct/colproduct";
import Usp from "../../components/usp/usp";
import PopularProducts from "../../components/popularProducts/PopularProducts";
import Footer from "../../components/footer/Footer";
import Review from "../../components/review/review";
import Instagram from "../../components/instagram/instagram";

import productImage from "../../../static/img/UV_kit.png";
import {Link} from "react-router-dom";

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
export default class home extends Component {
    componentDidMount() {
        document.body.classList.add("home-page");
    }

    render() {
        return (
            <React.Fragment>
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
                                    <h1 className="mobile-center mt-3 pt-3">Chceš úsměv jako
                                        hollywoodská hvězda?</h1>
                                    <p className="mobile-center">Vrať svým zubům jejich přirozenou bělost
                                        a pevnost. Jednoduše, rychle a za pár korun.</p>
                                    <div className="row">
                                        <div className="col-12 col-sm-6 text-center">
                                            <Link to="/obchod">
                                                <button className="btn btn-primary">Chci bílé zuby
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="col-12 col-sm-6 text-center mobile-hide">
                                            <a href="/#katalog">
                                                <button className="btn-underline">zjistit více</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-img">
                                <img src={productImage} alt="product"/>
                                <div className="badge-overlay"><img
                                    src="https://i2.wp.com/wcdemo.mergadoshop.com/wp-content/uploads/2020/03/overeno_zakazniky_gold_1.png"/>
                                </div>
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
