import React, {useState} from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {Link} from "react-router-dom";


export const ProductCarousel = ({items}) => {
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
                            <button className="btn-sm btn-outline-seondary">zjistit více</button>
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
            source: 'Heureka',
            description: 'asdasdasd',
            name: 'Jan Novak'
        },
        {
            image: 'https://ident-system.cz/wp-content/uploads/2020/12/ins4.png',
            source: 'Heureka',
            description: 'asdasasdasddasd',
            name: 'Janasd Novak'
        },
        {
            image: 'https://ident-system.cz/wp-content/uploads/2020/12/ins4.png',
            source: 'Heureka',
            description: 'asdaasdasdasdsdasd',
            name: 'Jan Novasdak'
        },
        {
            image: 'https://ident-system.cz/wp-content/uploads/2020/12/ins4.png',
            source: 'Heureka',
            description: 'asdaasdasdasdsdasd',
            name: 'Jan Novasdak'
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
