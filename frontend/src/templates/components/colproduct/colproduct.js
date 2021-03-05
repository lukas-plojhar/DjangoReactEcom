import React, {Component} from "react";
import "./assets/css/product.css";
import {VariationButton, VariationButtonGroup} from "../variatiobutton/VariationButton";

// Images
import productImage1 from "../../../static/img/whitening_strips.png";
import productImage2 from "../../../static/img/UV_kit.png";
import {ReactComponent as Star} from "../review/assets/svg/star.svg";

export default class colproduct extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="multiple-product-container" id="katalog">
                <div className="container">
                    <div className="multiple-product-content d:flex flex:col sm:flex:row">

                        <div className="product d:grid">
                            <img src={productImage1} alt="product"/>
                            <h1 className="colproduct-headline">Bělicí zubní pásky</h1>
                            <div className="star-review d:flex flex:row">
                                <div className="d:flex flex:row">
                                    <Star className="star-icon"/>
                                </div>
                                <span className="rv-span">(4.8) / 903 hodnocení</span>
                            </div>
                            <p>
                                Získej bílé zuby jako z plakátu – jednoduše, bez bolesti a za pouhých 30 minut. Bělicí
                                pásky na zuby od Teethy obsahují koncentrovaný gel a jedinečný způsob aplikace
                                urychlující vstřebávání účinných látek. Kvalita a výsledky jsou pro nás na prvním místě,
                                bělicí pásky proto vyrábíme přímo v České republice.
                            </p>
                            <small className="mt-3">
                                Balení obsahuje: 14x horní pásek, 14x dolní pásek, stupnici pro kontrolu bělosti, návod
                                k použití v českém jazyce
                            </small>
                            <div className="text-center">
                                <VariationButtonGroup selected={0}>
                                    <VariationButton
                                        name="2 tydenni kura"
                                        price="499"
                                        secondPrice={false}
                                    />
                                    <VariationButton
                                        selected={true}
                                        label="Oblibene"
                                        name="4 tydenni kura"
                                        price="799"
                                        secondPrice={false}
                                    />
                                    <VariationButton
                                        name="6 tydenni kura"
                                        price="999"
                                        secondPrice={false}
                                    />
                                </VariationButtonGroup>
                                <button className="btn btn-primary">Přidat do košíku</button>
                            </div>
                        </div>

                        <div className="product d:grid">
                            <img src={productImage2} alt="product"/>

                            <h1 className="colproduct-headline">Sada na bělení zubů s UV světlem</h1>
                            <div className="star-review d:flex flex:row">
                                <div className="d:flex flex:row">
                                    <Star className="star-icon"/>
                                </div>
                                <span className="rv-span">(4.8) / 903 hodnocení</span>
                            </div>
                            <p>
                                Získej bílé zuby jako z plakátu – jednoduše, bez bolesti a za pouhých 16 minut. Bělicí
                                sada od iDentu obsahuje koncentrovaný gel a profesionální UV světlo urychlující
                                vstřebávání účinných látek. Kvalita a výsledky jsou pro nás na prvním místě, celou
                                bělicí sadu proto vyrábíme přímo v České republice.
                            </p>
                            <small className="mt-3">
                                Sada obsahuje: náustek se 16 diodami z lékařského silikonu, tři bělicí pera o objemu 2
                                ml, adaptér pro Android a iPhone (microUSB, USB-C, Apple Lightning), stupnice pro
                                kontrolu bělosti, návod k použití v češtině
                            </small>
                            <div className="col-12 text-center">
                                <VariationButtonGroup selected={1}>
                                    <VariationButton
                                        name="3 belici pera"
                                        price="1399"
                                        secondPrice={false}
                                    />
                                    <VariationButton
                                        label="Oblibene"
                                        name="6 belicich per"
                                        price="1699"
                                        secondPrice={false}
                                        selected={true}

                                    />
                                    <VariationButton
                                        name="9 belicich per"
                                        price="1999"
                                        secondPrice={false}
                                    />
                                </VariationButtonGroup>
                            </div>

                            <button className="btn btn-primary">Přidat do košíku</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
