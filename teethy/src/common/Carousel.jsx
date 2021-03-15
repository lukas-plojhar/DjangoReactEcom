import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

export const ProductCarousel = ({items}) => {
        const products = [
        {
            "id": 4,
            "name": "Belici zubni pudr",
            "shortDescription": null,
            "numberOfReviews": "0",
            "stock": false,
            "variations": [
                {
                    "variationId": 4,
                    "productId": 4,
                    "name": "30g",
                    "description": "",
                    "content": "30 gramů pudru, návod",
                    "regularPrice": 399,
                    "salePrice": 199
                }
            ],
            "featuredImage": [
                {
                    "image": "/images/doza_produktovka.jpg"
                }
            ],
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
            "stock": true,
            "variations": [
                {
                    "variationId": 5,
                    "productId": 5,
                    "name": "asd",
                    "description": "",
                    "content": "1x pero o objemu 2 ml",
                    "regularPrice": 249,
                    "salePrice": 149
                }
            ],
            "featuredImage": [
                {
                    "image": "/images/ident5.png"
                }
            ],
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
    ];


    return <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('')}
        onSwiper={(swiper) => console.log(swiper)}>
        {
            products.map((product, i) => {
                return <React.Fragment>
                        <SwiperSlide>
                            <div className="col text-left" key={i}>
                                <img src={product.featuredImage[0].image} alt=""/>
                                <h4>{product.name}</h4>
                                <p>{product.shortDescription}</p>
                                <button className="btn btn-primary btn-sm">Pridat do kosiku</button>
                            </div>
                        </SwiperSlide>
                </React.Fragment>
            })
        }
    </Swiper>
}

export const ReviewCarousel = ({items}) => {
    const itemsDummy = [
        {
            source: 'Heureka',
            description: 'asdasdasd',
            name: 'Jan Novak'
        },
        {
            source: 'Heureka',
            description: 'asdasasdasddasd',
            name: 'Janasd Novak'
        },
        {
            source: 'Heureka',
            description: 'asdaasdasdasdsdasd',
            name: 'Jan Novasdak'
        },
    ];

    return <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        {
            itemsDummy.map((review, i) => {
                return <SwiperSlide>
                    <div className="col text-left" key={i}>
                        <span>{review.source}</span>
                        <h6>{review.name}</h6>
                        <p>{review.description}</p>
                    </div>
                </SwiperSlide>
            })
        }
    </Swiper>
}
