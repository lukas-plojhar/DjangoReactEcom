import React, {useState} from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {Link} from "react-router-dom";


export const UpsellCarousel = ({items, buttonText, handleClick}) => {
    // Data
    const [products, setProducts] = useState(
        [
            {
                "id": 4,
                "name": "Belici zubni pudr",
                "shortDescription": null,
                "numberOfReviews": "0",
                "variations": [
                    {
                        "name": "30g",
                        "description": "",
                        "content": "30 gramů pudru, návod",
                        "regularPrice": 399,
                        "salePrice": 199
                    }
                ],
                "featuredImage": "/images/doza_produktovka.jpg",
                "imageGallery": [],
                "tab": [
                    {
                        "name": "Popis",
                        "content": null
                    }
                ],
                "headline": null,
                "rating": "5.0"
            },
            {
                "id": 5,
                "name": "Belici zubni pero",
                "shortDescription": null,
                "numberOfReviews": "0",
                "variations": [
                    {
                        "name": "asd",
                        "description": "",
                        "content": "1x pero o objemu 2 ml",
                        "regularPrice": 249,
                        "salePrice": 149
                    }
                ],
                "featuredImage": "/images/ident5.png",
                "imageGallery": [],
                "tab": [
                    {
                        "name": "Popis",
                        "content": "Vhodny k dobeleni hure dostupnych mist."
                    }
                ],
                "headline": null,
                "rating": "5.0"
            }
        ]
    );

    // Splide slider options
    const options = {
        rewind: true,
        perPage: 3,
        // gap: "1rem",
        pagination: false,
        arrows: false,
        breakpoints: {
            768: {
                perPage: 1,
                // gap: "0rem",
            },
            1024: {
                perPage: 2,
            },
        },
        padding: {
            right: "3rem",
        },
        perMove: 1,
    };

    return <div className="col-12 px-1">
        <Splide options={options}>
            {products.map((product, i) =>
                <SplideSlide key={i}>
                    <Link to={`/produkt/${product.id}`}>
                        <img src={process.env.REACT_APP_URL + product.featuredImage} className="mb-1"/>
                        <h4 className="mb-1">{product.name}</h4>
                    </Link>
                    <p>{product.shortDescription}</p>
                    <p className="text-center">
                        <h4 className="d-inline-block strikethrough mb-1">{product.variations[0].regularPrice}{process.env.REACT_APP_CURRENCY}</h4>
                        <h6 className="mb-2"
                            style={{fontWeight: 'bolder'}}>{product.variations[0].salePrice}{process.env.REACT_APP_CURRENCY}</h6>
                        <button className="btn-sm btn-primary"
                                onClick={() => handleClick(product.id)}>{buttonText}</button>

                    </p>
                </SplideSlide>
            )
            }
        </Splide>
    </div>
}

export const ProductCarousel = ({items, buttonText}) => {
    // Data
    const [products, setProducts] = useState(
        [
            {
                id: 4,
                name: "Belici zubni pudr",
                regularPrice: 499,
                salePrice: 299,
                featuredImage: "https://teethy.cz/wp-content/uploads/2021/03/produkt1-teethy.png",
                shortDescription: "Vhodny k dobeleni hure dostupnych mist.",
            },
            {
                id: 5,
                name: "Belici zubni pero",
                regularPrice: 299,
                salePrice: 149,
                featuredImage: "https://teethy.cz/wp-content/uploads/2021/03/produkt1-teethy.png",
                shortDescription: "Vhodny k dobeleni hure dostupnych mist.",
            },
            {
                id: 5,
                name: "Belici zubni pero",
                regularPrice: 299,
                salePrice: 149,
                featuredImage: "https://teethy.cz/wp-content/uploads/2021/03/produkt1-teethy.png",
                shortDescription: "Vhodny k dobeleni hure dostupnych mist.",
            },
        ]
    );

    // Splide slider options
    const options = {
        rewind: true,
        perPage: 3,
        // gap: "1rem",
        pagination: false,
        arrows: false,
        breakpoints: {
            768: {
                perPage: 1,
                // gap: "0rem",
            },
            1024: {
                perPage: 2,
            },
        },
        padding: {
            right: "3rem",
        },
        perMove: 1,
    };

    return <div className="col-12 px-1">
        <Splide options={options}>
            {products.map((product, i) =>
                <SplideSlide key={i}>
                    <Link to={`/produkt/${product.id}`}>
                        <img src={product.featuredImage} className="mb-1"/>
                        <h4 className="mb-1">{product.name}</h4>
                    </Link>
                    <p>{product.shortDescription}</p>
                    <p className="text-center">
                        <h4 className="d-inline-block strikethrough mb-1">{product.regularPrice}{process.env.REACT_APP_CURRENCY}</h4>
                        <h6 className="mb-2"
                            style={{fontWeight: 'bolder'}}>{product.salePrice}{process.env.REACT_APP_CURRENCY}</h6>
                        <Link to={`/produkt/${product.id}`}>
                            <button className="btn-sm btn-primary">{buttonText || 'zjistit vice'}</button>
                        </Link>
                    </p>
                </SplideSlide>
            )
            }
        </Splide>
    </div>
}

export const ReviewCarousel = () => {
    const [reviews, setReviews] = useState([
        {
            image: 'https://ident-system.cz/wp-content/uploads/2020/12/ins4.png',
            name: '@clairebendova'
        },
        {
            image: 'https://ident-system.cz/wp-content/uploads/2020/12/ins4.png',
            name: '@clairebendova'
        },
        {
            image: 'https://ident-system.cz/wp-content/uploads/2020/12/ins4.png',
            name: '@clairebendova'
        },
        {
            image: 'https://ident-system.cz/wp-content/uploads/2020/12/ins4.png',
            name: '@clairebendova'
        },

    ]);

    const options = {
        rewind: true,
        perPage: 4,
        gap: "1rem",
        pagination: false,
        arrows: false,
        breakpoints: {
            768: {
                perPage: 1,
                gap: "0rem",
            },
            1024: {
                perPage: 3,
            },
        },
        padding: {
            right: "4rem",
        },
        perMove: 1,
    };

    return <div className="col-12 px-1">
        <Splide options={options}>
            {reviews.map((review, i) =>
                <SplideSlide key={i}>
                    <Link to='/recenze'>
                        <img src={review.image} className="bg-shadow mb-2"/>
                        <span className="font-white">{review.source}</span>
                        <h6 className="font-white">{review.name}</h6>
                        <p className="font-white">{review.description}</p>
                    </Link>
                </SplideSlide>
            )
            }
        </Splide>
    </div>
}
