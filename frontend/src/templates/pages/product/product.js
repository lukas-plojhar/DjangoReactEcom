import React, {Component} from "react";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import TopBanner from "../../components/topofferbanner/banner";
import Navbar from "../../components/topnavbar/nav";
import Footer from "../../components/footer/footer";
import Poproduct from "../../components/popproducts/popproducts";
import Review from "../../components/review/review";
import "./assets/css/product.css";
import ThumbnailSlider from "../../components/thumbnailslider/ThumbnailSlider";
import {ReactComponent as Star} from "../../components/review/assets/svg/star.svg";
import {VariationButton, VariationButtonGroup} from "../../components/variatiobutton/VariationButton";

export default class product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feaTab: true,
            direTab: false,
            deaTab: false,
            discount: true,
            regular: false,
        };
    }

    render() {
        return (
            <div>
                <TopBanner/>
                <Navbar/>
                {/*<section className="bandcamp-section">*/}
                {/*    BREADCRUMBS*/}
                {/*    <div className="container">*/}
                {/*      <a href="/">Shop All</a>*/}
                {/*      <span>/ Electric Tootbrush</span>*/}
                {/*    </div>*/}
                {/*</section>*/}
                <section className="single-product-container">
                    <div className="container">
                        <div className="single-product-content d:flex flex:row">
                            <div className="img-container d:none sm:d:flex">
                                <ThumbnailSlider/>
                            </div>
                            <div className="context-container">
                                <div className="star-review d:flex flex:row">
                                    <div className="d:flex flex:row">
                                        <Star className="star-icon"/>
                                    </div>
                                    <span className="rv-span">(4.8) / 903 hodnocení</span>
                                </div>
                                <h1>Bělicí pásky na zuby</h1>

                                <div className="mobile-slider d:grid sm:d:none">
                                    <Splide
                                        id="mobileSlider01"
                                        options={{
                                            rewind: true,
                                            width: 300,
                                        }}
                                    >
                                        <SplideSlide>
                                            <img src="/uploads/p1.png" alt="product"/>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <img src="/uploads/p2.png" alt="product"/>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <img src="/uploads/p3.png" alt="product"/>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <img src="/uploads/p4.png" alt="product"/>
                                        </SplideSlide>
                                    </Splide>
                                </div>
                                <VariationButtonGroup selected={1}>
                                <VariationButton
                                    name="2 tydenni kura"
                                    price={499}
                                    secondPrice={36}
                                />
                                <VariationButton
                                    selected={true}
                                    label="Oblibene"
                                    name="4 tydenni kura"
                                    price={799}
                                    secondPrice={28}
                                />
                                <VariationButton
                                    name="6 tydenni kura"
                                    price={999}
                                    secondPrice={24}
                                />
                            </VariationButtonGroup>

                                <small>14x horní pásek, 14x dolní pásek, stupnici pro kontrolu bělosti, návod k použití
                                    v českém jazyce</small>
                                <button className="add-to-cart">Přidat do košíku</button>
                                <div className="product-intro">
                                    <p>
                                        Získej bílé zuby jako z plakátu – jednoduše, bez bolesti a za pouhých 30 minut.
                                        Bělicí pásky na zuby od Teethy obsahují koncentrovaný gel a jedinečný způsob
                                        aplikace urychlující vstřebávání účinných látek. Kvalita a výsledky jsou pro nás
                                        na prvním místě, bělicí pásky proto vyrábíme přímo v České republice.
                                    </p>
                                </div>
                                <hr/>
                                <div className="buy-another d:grid">
                                    <img src="https://www.nazuby.cz/file/img/33777?w=84&h=84&rt=fsp" alt="product"/>
                                    <p>
                                        <b>99 % lidí nás doporučuje </b><br/>
                                        100 % lidí dorazilo zboží včas <br/>
                                        1,9 dne je průměrná doba dodání
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="product-tabs-container">
                            <div className="tab-container">
                                <div className="tab-link">
                                    <a
                                        href="#fea"
                                        className={this.state.feaTab ? "active" : null}
                                        onClick={(e) => {
                                            this.setState({
                                                feaTab: true,
                                                deaTab: false,
                                                direTab: false,
                                            });
                                        }}
                                    >
                                        Přehled
                                    </a>
                                    <a
                                        href="#dir"
                                        className={this.state.direTab ? "active" : null}
                                        onClick={(e) => {
                                            this.setState({
                                                feaTab: false,
                                                deaTab: false,
                                                direTab: true,
                                            });
                                        }}
                                    >
                                        Návod k použití
                                    </a>
                                    <a
                                        href="#det"
                                        className={this.state.deaTab ? "active" : null}
                                        onClick={(e) => {
                                            this.setState({
                                                feaTab: false,
                                                deaTab: true,
                                                direTab: false,
                                            });
                                        }}
                                    >
                                        Obsah balení
                                    </a>
                                </div>
                                <div className="tab-content">
                                    <div
                                        id="feature"
                                        style={{display: this.state.feaTab ? "block" : "none"}}
                                    >
                      <span>
                        <ul>
                          <li>
                            8 bright on premium whitening pens (2 full whitening
                            treatments)
                          </li>
                          <li>
                            Hands-free, smartphone-powered LED accelerator
                            light, so you can brighten on the go
                          </li>
                        </ul>
                      </span>
                                    </div>
                                    <div
                                        id="directions"
                                        style={{display: this.state.direTab ? "block" : "none"}}
                                    >
                      <span>
                        <ul>
                          <li>
                            Last but not least, go forth and shine.
                            <p>
                              <br/>
                            </p>
                          </li>
                        </ul>
                      </span>
                                    </div>
                                    <div
                                        id="details"

                                        style={{display: this.state.deaTab ? "block" : "none"}}
                                    >
                      <span>
                        Our teeth whitening kit contains everything you’ll need
                        to achieve full enbrightenment. Behold, 2 full whitening
                        treatments (a year's supply) plus our LED whitening
                        accelerator light. The blue LED wavelength accelerates
                        our Bright Boost™ formula, so you could see your
                        brightest bright even faster. Now go forth and shine.
                      </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Poproduct tag="People Also Viewed"/>
                <Review bg="#f8f9fa" page="product"/>
                <section className="comments-section">
                    <div className="container">
                        <div className="comment-content">
                            <h1 className="text:center">All Reviews</h1>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}
