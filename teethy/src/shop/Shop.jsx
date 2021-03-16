import React from 'react';
import {Footer} from "../common/Footer";
import {Stars} from "../common/Stars";
import {Link} from "react-router-dom";

const ShopPage = () => {
    const products = [
        {
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
        },
        {
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
        }
    ];

    return <React.Fragment>
        {
            products.map((product, index) => {
                return <section className={"py-2 my-2 py-md-2 my-md-2 " + (index % 2 === 1 ? "bg-light" : "")}>
                    <div className="container">
                        <div className="row">
                            <div className={"col-12 col-md-6 text-center text-md-left align-self-center " + (index % 2 === 1 ? "order-md-1" : "")}>
                                <h1>Chceš úsměv jako hollywoodská hvězda?</h1>
                                <Stars/>
                                <p>Vrať svým zubům jejich přirozenou bělost a pevnost. Jednoduše, rychle a za pár
                                    korun.</p>
                                <div className="row mt-2 mb-2 mb-md-3">
                                    <div className="col">
                                        <Link to=''>
                                            <button className="btn btn-primary mr-md-1" type="button">Mám zájem</button>
                                        </Link>
                                        <Link to=''>
                                            <button className="btn btn-link" type="button">zjistit vice</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <img src={process.env.REACT_APP_URL + product.featuredImage}/>
                            </div>
                        </div>
                    </div>
                </section>
            })
        }
        <Footer/>
    </React.Fragment>
}

export default ShopPage;