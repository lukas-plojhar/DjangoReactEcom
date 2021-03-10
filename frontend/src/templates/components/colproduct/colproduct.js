import React, {Component} from "react";
import "./assets/css/product.css";
import {
    VariationButton,
    VariationButtonGroup,
} from "../variatiobutton/VariationButton";

// Images
import productImage1 from "../../../static/img/whitening_strips.png";
import productImage2 from "../../../static/img/UV_kit.png";
import {ReactComponent as Star} from "../review/assets/svg/star.svg";
import {Link} from "react-router-dom";

class SingleColProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedVariation: 0,
            id: this.props.productId,
            name: "Bělicí zubní pásky",
            description:
                "Získej bílé zuby jako z plakátu – jednoduše, bez bolesti a za pouhých 30 minut. Bělicí\n" +
                "                    pásky na zuby od Teethy obsahují koncentrovaný gel a jedinečný způsob aplikace\n" +
                "                    urychlující vstřebávání účinných látek. Kvalita a výsledky jsou pro nás na prvním místě,\n" +
                "                    bělicí pásky proto vyrábíme přímo v České republice.",
            content:
                "Balení obsahuje: 14x horní pásek, 14x dolní pásek, stupnici pro kontrolu bělosti, návod\n" +
                "                    k použití v českém jazyce",
            featuredImage:
                "https://teethy.cz/wp-content/uploads/2021/03/produkt1-teethy.png",
            rating: 4.8,
            numberOfReviews: 903,
        };
    }

    render() {
        const {
            id,
            name,
            description,
            content,
            featuredImage,
            selectedVariation,
            rating,
            numberOfReviews,
            variations,
        } = this.state;
        return (
            <div className="product d:grid">
                <img src={featuredImage} alt="product"/>
                <h1 className="colproduct-headline">{name}</h1>
                <div className="star-review d:flex flex:row">
                    <div className="d:flex flex:row">
                        <Star className="star-icon"/>
                    </div>
                    <span className="rv-span">
            ({rating}) {numberOfReviews}x
          </span>
                </div>
                <p className="product-description">{description}</p>
                <div className="text-center">
                    <VariationButtonGroup selected={selectedVariation}>
                        <VariationButton
                            name="na 14 dni"
                            price="499"
                            secondPrice={false}
                        />
                        <VariationButton
                            selected={true}
                            label="Oblibene"
                            name="na 28 dni"
                            price="799"
                            secondPrice={false}
                        />
                        <VariationButton
                            name="na 42 dni"
                            price="999"
                            secondPrice={false}
                        />
                    </VariationButtonGroup>
                    <p className="text-center content-text">{content}</p>
                    <Link to={`/pokladna/${id}`}>
                        <button className="btn btn-primary">Přidat do košíku</button>
                    </Link>
                </div>
            </div>
        );
    }
}

const colproduct = () => {
    const variations1 = [
        {
            name: "2 tydenni kura",
            price: "499",
            secondPrice: false,
        },
        {
            name: "4 tydenni kura",
            price: "799",
            secondPrice: false,
        },
        {
            name: "6 tydenni kura",
            price: "999",
            secondPrice: false,
        },
    ];

    return (
        <div className="multiple-product-container" id="katalog">
            <div className="container">
                <div className="multiple-product-content d:flex flex:col sm:flex:row">
                    <SingleColProduct productId={1} variations={variations1}/>
                    <SingleColProduct productId={1} variations={variations1}/>
                </div>
            </div>
        </div>
    );
};

export default colproduct;
