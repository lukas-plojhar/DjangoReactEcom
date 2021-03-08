import React, {Component} from "react";
import './assets/css/shop.css';
import TopNav from "../../components/topnavbar/nav";
import {Link} from "react-router-dom";

const Product = ({id, price, imageLeft, title, headline, description, image}) => {
    return <div
        className={imageLeft
            ? "product-container white-bg"
            : "product-container whitesmoke-bg"
        }
    >
        <div className="container">
            <div className="col-12 mt-5">
                <div
                    className={
                        imageLeft
                            ? "product-content d:flex flex:col md:flex:row-reverse"
                            : "product-content d:flex flex:col md:flex:row"
                    }
                >
                    <div className="product-details d:grid">
                        <div className="content">
                            <Link to={`/produkt/${id}`}>
                                <h1>{title}</h1>
                            </Link>
                            <h6>{headline}</h6>
                            <p>{description}</p>
                            <h3>již od {price} ,-</h3>
                            <Link to={`/produkt/${id}`}>
                                <button className="btn btn-primary">Vice informaci</button>
                            </Link>
                        </div>
                    </div>
                    <div className="product-img">
                        <Link to={`/produkt/${id}`}>
                            <img src={image}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    "id": 2,
                    "name": "Sada na bělení zubů - 4 týdenní kúra",
                    "regularPrice": 2999,
                    "salePrice": 1999,
                    "shortDescription": null,
                    "numberOfReviews": "0",
                    "stock": true,
                    "featuredImage": [],
                    "headline": null,
                    "rating": "5.0"
                }, {
                    "id": 1,
                    "name": "Sada na bělení zubů - 2 týdenní kúra",
                    "regularPrice": 1999,
                    "salePrice": 1399,
                    "numberOfReviews": "903",
                    "shortDescription": "short description",
                    "featuredImage": [
                        {
                            "image": "/images/4cb8a2def9b03fe90e59209cebdb1aa30d-boi--.w710.jpg"
                        }
                    ],
                    "headline": "Profesionalni pece za par korun",
                    "rating": "4.8"
                }, {
                    "id": 1,
                    "name": "Sada na bělení zubů - 2 týdenní kúra",
                    "regularPrice": 1999,
                    "salePrice": 1399,
                    "numberOfReviews": "903",
                    "shortDescription": "short description",
                    "featuredImage": [
                        {
                            "image": "/images/4cb8a2def9b03fe90e59209cebdb1aa30d-boi--.w710.jpg"
                        }
                    ],
                    "headline": "Profesionalni pece za par korun",
                    "rating": "4.8"
                }
            ]
        };
    }


    render() {
        const {products} = this.state;
        return (
            <React.Fragment>
                <TopNav/>
                {products.map((product, index) => <Product
                    id={product.id}
                    imageLeft={index % 2 === 0}
                    title={product.name}
                    headline={product.headline}
                    description={product.shortDescription}
                    image={product.featuredImage.image}
                    price={product.salePrice}
                />)}
                {/*<Product*/}
                {/*    imageLeft={true}*/}
                {/*    title="Sada bělicích per"*/}
                {/*    intro="nejaky content blalbalbalba"*/}
                {/*    image="https://ident-system.cz/wp-content/uploads/2020/11/pera-600x600.png"*/}
                {/*    price={1399}*/}
                {/*/>*/}
                {/*<Product*/}
                {/*    imageLeft={false}*/}
                {/*    title="Sada na bělení zubů s UV světlem"*/}
                {/*    intro="náustek se 16 diodami z lékařského silikonu, tři bělicí pera o objemu 2 ml, adaptér pro Android a iPhone (microUSB, USB-C, Apple Lightning), stupnice pro kontrolu bělosti, návod k použití v češtině"*/}
                {/*    image="https://ident-system.cz/wp-content/uploads/2020/12/4-min-1-min.png"*/}
                {/*    price={499}*/}
                {/*/>*/}
                {/*<Product*/}
                {/*    imageLeft={true}*/}
                {/*    title="Bělicí zubní páský"*/}
                {/*    intro="14x horní pásek, 14x dolní pásek, stupnici pro kontrolu bělosti, návod k použití v českém jazyce"*/}
                {/*    image="https://teethy.cz/wp-content/uploads/2018/10/na-hlavn%C3%AD-stranu-2-min.png"*/}
                {/*    price={499}*/}
                {/*/>*/}
            </React.Fragment>
        );
    }
}
