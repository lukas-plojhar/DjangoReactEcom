import React, {Component} from "react";
import "./assets/css/pop.css";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import {ReactComponent as Star} from "./assets/svg/star.svg";

const StarReview = (reviews, stars = 5) => {
    return <div className="review-container d:flex flex:row">
        <div className="star d:flex flex:row">
            {[...Array(stars)].map((e, i) => <Star className="star-img" key={i}/>)}
        </div>
        <p>{reviews} Reviews</p>
    </div>
}


export default class popproducts extends Component {
    render() {
        return (
            <div className="popular-product-container">
                <div className="container">
                    <div className="popular-product-content">
                        <h1>Ostatní také zakoupili</h1>
                        <Splide
                            options={{
                                rewind: true,
                                perPage: 3,
                                gap: "1rem",
                                pagination: false,
                                breakpoints: {
                                    640: {
                                        perPage: 1,
                                    },
                                },
                                padding: {
                                    right: "10rem",
                                },
                                perMove: 1,
                            }}
                        >
                            <SplideSlide>
                                <div className="splide_item d:grid">
                                    <div className="img-container">
                                        <img src="/uploads/product_3.png" alt="1"/>
                                    </div>
                                    <a href="/" className="d:block">
                                        Sada bělicích per
                                    </a>
                                    <div className="review-container d:flex flex:row">
                                        <div className="star d:flex flex:row">
                                            <Star className="star-img"/>
                                            <span className="rv-span">4.8 / (185)</span>
                                        </div>
                                    </div>
                                    <button className="btn-secondary">
                                        >  více informací
                                    </button>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="splide_item d:grid">
                                    <div className="img-container">
                                        <img src="/uploads/product_4.png" alt="1"/>
                                    </div>
                                    <a href="/" className="d:block">
                                        Mineralizující zubní pudr
                                    </a>
                                    <div className="review-container d:flex flex:row">
                                        <div className="star d:flex flex:row">
                                            <Star className="star-img"/>
                                            <span className="rv-span">4.8 / (185)</span>
                                        </div>
                                    </div>
                                    <button className="btn-secondary">
                                        >  více informací
                                    </button>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </div>
        );
    }
}
