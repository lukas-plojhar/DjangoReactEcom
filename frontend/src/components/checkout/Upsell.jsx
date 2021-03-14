import React, {Component} from 'react';
import axios from 'axios';
import {API} from "../../Globals";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {Link} from "react-router-dom";
import {ReactComponent as Star} from "../../templates/components/popularProducts/assets/svg/star.svg";
import Skeleton from "react-loading-skeleton";
import {TransitionGroup, CSSTransition} from "react-transition-group";

class Upsells extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    // Hooks
    async componentDidMount() {
        const products = await axios.get(`${API}/products/upsells`).then(response => response.data);
        this.setState({products});
    }

    render() {
        // Data
        const {products} = this.state;

        // Splide slider options
        const options = {
            rewind: true,
            perPage: 3,
            gap: "1rem",
            pagination: false,
            breakpoints: {
                768: {
                    perPage: 2,
                },
                1024: {
                    perPage: 2
                }
            },
            padding: {
                right: "3rem",
            },
            perMove: 1,
        }

        return (
            <div className="popular-product-container upsell-container" style={{backgroundColor: this.props.bg}}>
                <div className="popular-product-content">
                    <h2 className="text-center">Přidej k objednávce se slevou</h2>
                    <Splide options={options}>
                        {products.map((product, index) => {
                            return <SplideSlide>
                                <div className="splide_item d:grid" key={index}>
                                    <div className="img-container">
                                        <img
                                            src={API + product.featuredImage[0].image}/>
                                    </div>
                                    <a href="/" className="d:block">
                                        {product.name}
                                    </a>
                                    <p>
                                        {product.shortDescription}
                                    </p>
                                    <div className="review-container d:flex flex:row">
                                        <div className="star d:flex flex:row">
                                            <Star className="star-img"/>
                                            <span
                                                className="rv-span">{product.rating} / ({product.numberOfReviews})</span>
                                        </div>
                                    </div>
                                    <span>{product.variations[0].regularPrice} ,-</span>
                                    <span><b>{product.variations[0].salePrice} ,-</b></span>
                                    <button className="btn btn-primary"
                                            onClick={() => this.props.addToCart(product.id)}>
                                        přidat do košíku
                                    </button>
                                </div>
                            </SplideSlide>
                        })}
                    </Splide>
                </div>
            </div>
        );
    }
}

export default Upsells;