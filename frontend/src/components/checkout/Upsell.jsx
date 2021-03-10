import React, {Component} from 'react';
import axios from 'axios';
import {API} from "../../Globals";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {ReactComponent as Star} from "../../templates/components/popularProducts/assets/svg/star.svg";

class Upsells extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    "id": 4,
                    "name": "Belici zubni pudr",
                    "regularPrice": 499,
                    "salePrice": 299,
                    "featuredImage": "http://127.0.0.1:8000/images/products/doza_produktovka.jpg",
                    "shortDescription": null,
                },
                {
                    "id": 5,
                    "name": "Belici zubni pero",
                    "regularPrice": 299,
                    "salePrice": 149,
                    "featuredImage": "http://127.0.0.1:8000/images/products/belici_pero_produktovka.jpg",
                    "shortDescription": "Vhodny k dobeleni hure dostupnych mist.",
                }
            ]
        }
    }

    async componentDidMount() {
        const items = await axios.get(`${API}/products/upsells`).then(response => response.data);

        this.setState({items});
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
                    perPage: 1,
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
            <div className="popular-product-container" style={{backgroundColor: this.props.bg}}>
                <div className="popular-product-content">
                    <h2 className="text-center">Přidej k objednávce se slevou</h2>
                    <Splide options={options}>
                        {products.map((product, index) => {
                            return <UpsellSlide
                                key={index}
                                image={product.featuredImage}
                                name={product.name}
                                regularPrice={product.regularPrice}
                                salePrice={product.salePrice}
                                rating={product.rating || 4.8}
                                numberOfReview={product.numberOfReviews || 905}
                            />
                        })}
                    </Splide>
                </div>
            </div>
        );
    }
}

export default Upsells;

const UpsellSlide = ({image, name, regularPrice, salePrice, rating, numberOfReview}) => {
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
            <span>{regularPrice} ,-</span>
            <span><b>{salePrice} ,-</b></span>
            <button className="btn btn-primary">
                přidat do košíku
            </button>
        </div>
    </SplideSlide>
}

// // Component for single upsell product
// const Upsell = ({id, image, name, description, price, handleClick}) => {
//     return (
//
//         <div className="col-6 col-md-4 center">
//             <img src={image} alt=""/>
//             <h5>{name}</h5>
//             <p>{description}</p>
//             <p>{price},-</p>
//             <button className="btn btn-primary btn-upsell" value={id} onClick={handleClick}>Pridat do kosiku
//             </button>
//         </div>
//
//     )
// }

// class Upsells extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [],
//         }
//     }
//
//     async componentDidMount() {
//         const items = await axios.get(`${API}/products/upsells`).then(response => response.data);
//
//         this.setState({items});
//     }
//
//     render() {
//         const {items} = this.state;
//         return <div className="row py-4 upsells">
//             {items.map(item => {
//                 return <Upsell
//                     id={item.id}
//                     image={item.featuredImage}
//                     name={item.name}
//                     description={item.description}
//                     price={item.salePrice}
//                     handleClick={(e => this.props.addToCart(e.target.value))}
//                 />
//             })}
//         </div>
//     }
// }


