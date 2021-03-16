import React from 'react';
import ImageGallery from 'react-image-gallery';
import Skeleton from "react-loading-skeleton";
import VariationsButtonGroup from "../common/VariationsButtonGroup";
import {BigFooter} from "../common/Footer";

const Homepage = () => {
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

    return <React.Fragment>
        <section className="py-1 my-1 py-md-2 my-md-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <h1>Chceš úsměv jako hollywoodská hvězda?</h1>
                        <p>Vrať svým zubům jejich přirozenou bělost a pevnost. Jednoduše, rychle a za pár korun.</p>
                        <div className="row mt-2 mb-2 mb-md-3">
                            <div className="col">
                                <button className="btn btn-primary mr-md-1" type="button">Mám zájem</button>
                                <button className="btn btn-link" type="button">zjistit vice</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6"><img src="assets/img/4-min-1-min%20(1).png"
                                                   loading="eager" width={'100%'}/></div>
                </div>
            </div>
        </section>


        <section className="text-center py-1 my-2 section-rounded">
            <div className="container bg-gradient bg-rounded pt-2 pb-3 p-md-3">
                <div className="row py-2">
                    <div className="col">
                        <h4 className="text-center font-white"><strong>K zubaři už nemusíš. Do jediné krabičky jsme
                            vložili
                            vše, co tvé zuby potřebují: koncentrovaný gel plný minerálů a přírodních extraktů i UV
                            světlo, které používají zubní lékaři. Už po pár aplikacích budou tvé zuby až o 6 stupňů
                            bělejší.</strong>
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col align-self-center col-12 col-md-4 font-white"><i className="fa fa-star"></i>
                        <h3 className="font-white"><strong>Pohodlně</strong><br/></h3>
                        <p>Jde to i bez zubaře. Sadu na domácí bělení zubů můžeš použít kdykoliv. Jednoduše, bezbolestně
                            a rychle – aplikace ti nezabere víc než 16 minut denně.</p>
                    </div>
                    <div className="col align-self-center col-12 col-md-4 font-white"><i className="fa fa-star"></i>
                        <h3 className="font-white"><strong>Levně</strong><br/></h3>
                        <p>Kvalita něco stojí. Ale nemusí to být tisícovky. Získej péči jako od zubaře a ušetři při tom
                            až 4500,- oproti běžným cenám v ordinacích zubních lékařů.</p>
                    </div>
                    <div className="col align-self-center col-12 col-md-4 font-white"><i className="fa fa-star"></i>
                        <h3 className="font-white"><strong>Spolehlivě</strong><br/></h3>
                        <p>Výsledek uvidíš okamžitě. Speciální gel v kombinaci s UV světlem tvé zuby vybělí, díky
                            extraktům z aloe a heřmánku navíc účinně posílí zubní sklovinu.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-2 my-2">
            <div className="container text-left text-center text-md-center text-lg-left text-xl-left">
                <div className="row">
                    <SingleProductColumn/>
                </div>
            </div>
        </section>
        <BigFooter/>
    </React.Fragment>
}

export default Homepage;

// Component for column product
const SingleProductColumn = () => {
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
    const {featuredImage, imageGallery, name, shortDescription, variations, rating, numberOfReview} = product;
    const images = [{
        original: `${process.env.REACT_APP_URL}${featuredImage[0].image}`,
        thumbnail: `${process.env.REACT_APP_URL}${featuredImage[0].image}`,
    }]

    const handleClick = (e) => {
        alert(e.target.value);
    }

    return <div className="col col-12- col-md-6">
        <ImageGallery
            items={images || <Skeleton/>}
            thumbnailPosition="bottom"
            lazyLoad={true}
            showNav={true}
            showPlayButton={false}
            showFullscreenButton={false}
            useBrowserFullscreen={false}
        />

        <h3 className="text-center text-md-left">
            <strong>{name}</strong><br/>
            <span className="stars">4.8/5.0</span>
        </h3>

        <p className="text-center text-md-left">{shortDescription}</p>

        <VariationsButtonGroup
            variations={variations}
            handleClick={handleClick}

        />
        <p className="text-center mt-1">Ihned k odeslání!<br/><span className="text-muted">Od 89,-</span></p>
    </div>
}
