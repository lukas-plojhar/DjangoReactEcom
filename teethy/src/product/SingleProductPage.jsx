import React from 'react';
import Skeleton from "react-loading-skeleton";
import ImageGallery from "react-image-gallery";
import {Tabs, Tab} from "react-bootstrap";
import {ProductCarousel, ReviewCarousel} from "../common/Carousel";
import {Link} from "react-router-dom";

const SingleProductPage = () => {
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
    const product = {
        "id": 1,
        "name": "Sada na bělení zubů",
        "shortDescription": "Získej bílé zuby jako z plakátu – jednoduše, bez bolesti a za pouhých 16 minut. Bělicí sada od iDentu obsahuje koncentrovaný gel a profesionální UV světlo urychlující vstřebávání účinných látek. Kvalita a výsledky jsou pro nás na prvním místě, celou bělicí sadu proto vyrábíme přímo v České republice.",
        "numberOfReviews": "903",
        "stock": true,
        "variations": [
            {
                "variationId": 6,
                "productId": 1,
                "name": "na 2 týdny",
                "description": "",
                "content": "1x UV náustek z lékařského silikonu, 3x 2ml bělicí pera",
                "regularPrice": 2999,
                "salePrice": 1399
            },
            {
                "variationId": 7,
                "productId": 1,
                "name": "na 4 týdny",
                "description": "",
                "content": "1x UV náustek z lékařského silikonu, 6x 2 ml bělicí pera",
                "regularPrice": 3999,
                "salePrice": 1999
            },
            {
                "variationId": 8,
                "productId": 1,
                "name": "na 6 týdnů",
                "description": "asd",
                "content": "1x UV náustek z lékařského silikonu, 9x 2 ml bělicí pera",
                "regularPrice": 4999,
                "salePrice": 2499
            }
        ],
        "featuredImage": [
            {
                "image": "/images/ident1.png"
            }
        ],
        "imageGallery": [
            {
                "image": "/images/ident2.png"
            },
            {
                "image": "/images/ident3.jpeg"
            },
            {
                "image": "/images/ident4.png"
            }
        ],
        "tab": [
            {
                "name": "Popis",
                "content": "Získej bílé zuby jako z plakátu – jednoduše, bez bolesti a za pouhých 16 minut. Bělicí sada od iDentu obsahuje koncentrovaný gel a profesionální UV světlo urychlující vstřebávání účinných látek. Kvalita a výsledky jsou pro nás na prvním místě, celou bělicí sadu proto vyrábíme přímo v České republice."
            },
            {
                "name": "Obsah baleni",
                "content": "asdaddßcvvvvvvbadasd"
            }
        ],
        "headline": "Profesionalni pece za par korun",
        "rating": "4.8"
    };
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    const {id, name, shortDescription, numberOfReviews, variations, tab, headline, rating} = product;

    return <React.Fragment>
        <section>
            <div className="container">
                <div className="row pt-2 mt-2 py-md-2 my-md-2">
                    <div className="col-12 col-md-6">
                        <ImageGallery
                            items={images || <Skeleton/>}
                            thumbnailPosition="bottom"
                            lazyLoad={true}
                            showNav={false}
                            showPlayButton={false}
                            showFullscreenButton={false}
                            useBrowserFullscreen={false}
                        />
                    </div>
                    <div className="col-12 col-md-6 text-center text-sm-center text-md-left mb-2 py-md-1 my-md-1">
                        <h1>{name}</h1>
                        <p>{shortDescription}</p>
                        <h1 className="display-4">499 Kč</h1>
                        <Link>
                            <button className="btn btn-primary" type="button">Pridat do kosiku</button>
                        </Link>
                        <div
                            className="d-flex d-xl-flex justify-content-center align-items-center justify-content-lg-start justify-content-xl-start align-items-xl-center mt-2">
                            <img src=""/>
                            <p className="d-xl-flex">HEUREKA</p>
                        </div>
                    </div>
                </div>
                <div className="row pb-2 mb-2 py-md-2 my-md-2">
                    <div className="col text-sm-center text-md-left">
                        <Tabs defaultActiveKey="description" id="tabs">
                            {tab.map((tab, i) => {
                                return <Tab eventKey={tab.name} title={tab.name}>
                                    {tab.content}
                                </Tab>
                            })}
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>

        {/*Related products*/}
        <section className="bg-light">
            <div className="container py-1">
                <div className="row pb-2 mb-2 py-md-2 my-md-2">
                    <ProductCarousel items={products}/>
                </div>
            </div>
        </section>

        {/*Reviews*/}
        <section className="bg-light">
            <div className="container py-1">
                <div className="row pb-2 mb-2 py-md-2 my-md-2">
                    <ReviewCarousel items={null}/>
                </div>
            </div>
        </section>
    </React.Fragment>
}

export default SingleProductPage;