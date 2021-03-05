import React, {Component} from "react";
import "./assets/css/pop.css";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import {ReactComponent as Star} from "./assets/svg/star.svg";

const ProductSlide = ({image, name, price, rating, numberOfReview}) => {
    return <SplideSlide>
        <div className="splide_item d:grid">
            <div className="img-container">
                <img src={image}/>
            </div>
            <a href="/" className="d:block">
                {name}
            </a>
            <div className="review-container d:flex flex:row">
                <div className="star d:flex flex:row">
                    <Star className="star-img"/>
                    <span className="rv-span">{rating} / ({numberOfReview})</span>
                </div>
            </div>
            <span>{price} ,-</span>
            <button className="btn-underline">
                více informací
            </button>
        </div>
    </SplideSlide>
}


export default class popproducts extends Component {
    render() {
        return (
            <div className="popular-product-container">
                <div className="container">
                    <div className="popular-product-content">
                        <h2>Ostatní také zakoupili</h2>
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
                            <ProductSlide
                                image="/uploads/product_3.png"
                                name="Sada belicich per"
                                price={499}
                                rating={4.8}
                                numberOfReview={185}
                            />

                            <ProductSlide
                                image="/uploads/product_3.png"
                                name="Mineralizující zubní pudr"
                                price={249}
                                rating={4.8}
                                numberOfReview={185}
                            />
                        </Splide>
                    </div>
                </div>
            </div>
        );
    }
}
