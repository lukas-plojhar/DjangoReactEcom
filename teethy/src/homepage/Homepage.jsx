import React, {useState, useEffect} from 'react';
import ImageGallery from 'react-image-gallery';
import VariationsButtonGroup from "../common/VariationsButtonGroup";
import Stars from "../common/Stars";
import {BigFooter} from "../common/Footer";
import axios from "axios";
import {Link} from "react-router-dom";

const Homepage = () => {
    return <React.Fragment>
        <section className="py-1 my-1 py-md-2 my-md-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center align-self-center">
                        <h1>Chceš úsměv jako hollywoodská hvězda?</h1>
                        <p>Vrať svým zubům jejich přirozenou bělost a pevnost. Jednoduše, rychle a za pár korun.</p>
                        <div className="row mt-2 mb-2 mb-md-3">
                            <div className="col">
                                <button className="btn btn-primary mr-md-1" type="button">Mám zájem</button>
                                <button className="btn btn-link" type="button">zjistit vice</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="assets/img/4-min-1-min%20(1).png"/>
                    </div>
                </div>
            </div>
        </section>

        {/*USP sekce*/}
        <section className="text-center py-1 my-0 my-md-2 section-rounded">
            <div className="container bg-gradient bg-rounded pt-2 pb-3 p-md-3">
                <div className="row py-2">
                    <div className="col">
                        <h4 className="text-center font-white"><strong>
                            K zubaři už nemusíš. Do jediné krabičky jsme
                            vložili vše, co tvé zuby potřebují: koncentrovaný gel plný minerálů a přírodních extraktů i
                            UV světlo, které používají zubní lékaři. Už po pár aplikacích budou tvé zuby až o 6 stupňů
                            bělejší.</strong>
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col align-self-center col-12 col-md-4 font-white"><i className="fa fa-star"></i>
                        <h3 className="font-white"><strong>Pohodlně</strong></h3>
                        <p>Jde to i bez zubaře. Sadu na domácí bělení zubů můžeš použít kdykoliv. Jednoduše, bezbolestně
                            a rychle – aplikace ti nezabere víc než 16 minut denně.</p>
                    </div>
                    <div className="col align-self-center col-12 col-md-4 font-white"><i className="fa fa-star"></i>
                        <h3 className="font-white"><strong>Levně</strong></h3>
                        <p>Kvalita něco stojí. Ale nemusí to být tisícovky. Získej péči jako od zubaře a ušetři při tom
                            až 4500,- oproti běžným cenám v ordinacích zubních lékařů.</p>
                    </div>
                    <div className="col align-self-center col-12 col-md-4 font-white"><i className="fa fa-star"></i>
                        <h3 className="font-white"><strong>Spolehlivě</strong></h3>
                        <p>Výsledek uvidíš okamžitě. Speciální gel v kombinaci s UV světlem tvé zuby vybělí, díky
                            extraktům z aloe a heřmánku navíc účinně posílí zubní sklovinu.</p>
                    </div>
                </div>
            </div>
        </section>

        {/*Produktova sekce*/}
        <section className="py-1 my-1 py-md-2 my-md-2">
            <div className="container text-left text-center text-md-center text-lg-left text-xl-left">
                <div className="row">
                    <div className="col col-12- col-md-6 mb-3">
                        <SingleProductColumn id="1"/>
                    </div>
                    <div className="col col-12- col-md-6">
                        <SingleProductColumn id="6"/>
                    </div>
                </div>
            </div>
        </section>
        <BigFooter/>
    </React.Fragment>
}

export default Homepage;

// Component for column product
const SingleProductColumn = ({id}) => {
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(async () => {
        const data = await axios.get(`${process.env.REACT_APP_URL}/products/${id}`).then(response => response.data);
        setProduct(data)
        setIsLoading(false);
    });

    if (isLoading) return <p>Loading ...</p>;

    // Data
    const {featuredImage, imageGallery, name, shortDescription, variations, rating, numberOfReviews} = product;
    const images = [];
    images.push({
        original: `${process.env.REACT_APP_URL}${featuredImage}`,
        thumbnail: `${process.env.REACT_APP_URL}${featuredImage}`,
    });

    imageGallery.forEach(image => images.push({
        original: `${process.env.REACT_APP_URL}${image}`,
        thumbnail: `${process.env.REACT_APP_URL}${image}`,
    }));

    return <React.Fragment>
        <ImageGallery
            items={images}
            thumbnailPosition="bottom"
            lazyLoad={true}
            showNav={false}
            showPlayButton={false}
            showFullscreenButton={false}
            useBrowserFullscreen={false}
        />

        <Link to={`/produkt/${id}`}>
            <h3 className="text-center text-md-left mb-1">
                <strong>{name}</strong>
            </h3>
        </Link>

        <Stars rating={rating} numberOfReview={numberOfReviews}/>

        <p className="text-center text-md-left">{shortDescription}</p>

        <VariationsButtonGroup
            id={id}
            variations={variations}
        />

        <p className="text-center mt-1">Ihned k odeslání!<br/><span
            className="text-muted">od 89{process.env.REACT_APP_CURRENCY}</span></p>
    </React.Fragment>
}
