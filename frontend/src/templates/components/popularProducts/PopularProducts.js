import React, {Component} from "react";
import "./assets/css/popularProducts.css";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import {ReactComponent as Star} from "./assets/svg/star.svg";
import {Link} from "react-router-dom";

export default class PopularProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 4,
                    name: "Belici zubni pudr",
                    regularPrice: 499,
                    salePrice: 299,
                    featuredImage: [
                        "https://teethy.cz/wp-content/uploads/2021/03/produkt1-teethy.png"
                    ],
                    shortDescription: "Vhodny k dobeleni hure dostupnych mist.",
                },
                {
                    id: 5,
                    name: "Belici zubni pero",
                    regularPrice: 299,
                    salePrice: 149,
                    featuredImage: [
                        "https://teethy.cz/wp-content/uploads/2021/03/produkt1-teethy.png",
                    ],
                    shortDescription: "Vhodny k dobeleni hure dostupnych mist.",
                },
                {
                    id: 5,
                    name: "Belici zubni pero",
                    regularPrice: 299,
                    salePrice: 149,
                    featuredImage: [
                        "https://teethy.cz/wp-content/uploads/2021/03/produkt1-teethy.png",
                    ],
                    shortDescription: "Vhodny k dobeleni hure dostupnych mist.",
                },
            ],
        };
    }

    // Hooks
    componentDidMount() {
    }

    render() {
        // Data
        const {products} = this.state;

        // Splide slider options
        const options = {
            rewind: true,
            perPage: 3,
            // gap: "1rem",
            pagination: false,
            arrows: false,
            breakpoints: {
                768: {
                    perPage: 2,
                    // gap: "0rem",
                },
                1024: {
                    perPage: 2,
                },
            },
            padding: {
                // right: "3rem",
            },
            perMove: 1,
        };

        if (products.length == 0) return <React.Fragment/>
        return (
            <div
                className="popular-product-container container"
                style={{backgroundColor: this.props.bg}}
            >
                <div className="popular-product-content pt-4">
                    <h1 className="text-center text-sm-left mb-4">
                        Ostatní také zakoupili
                    </h1>
                    <Splide options={options}>
                        {products.map((product, i) => {
                            return (
                                <SplideSlide>
                                    <div className="splide_item" key={i}>
                                        <div className="img-container">
                                            <img src={product.featuredImage[0]} alt="slider"/>
                                        </div>
                                        <h3>{product.name}</h3>
                                        <div className="review-container">
                                            <div className="star d:flex flex:row">
                                                <Star className="star-img"/>
                                                <span
                                                    className="rv-span">{product.rating || 4.8} / ({product.numberOfReview || 905})</span>
                                            </div>
                                        </div>
                                        <p>{product.shortDescription}</p>
                                        <p className="text-center">
                                            <span className="regular-price">{product.regularPrice} ,-</span><br/>
                                            <span className="sale-price">{product.salePrice} ,-</span><br/>
                                            <a href={`/produkt/${product.id}`}>
                                                <button className="btn-underline">více informací</button>
                                            </a>
                                        </p>

                                    </div>
                                </SplideSlide>
                            );
                        })}
                    </Splide>
                </div>
            </div>
        );
    }
}
