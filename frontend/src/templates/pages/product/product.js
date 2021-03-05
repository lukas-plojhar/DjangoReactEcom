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
import API from "../../../API";
import axios from "axios";
import {Link} from "react-router-dom";

const HeurekaBadge = () => {
    return <React.Fragment>
        <hr/>
        <div className="buy-another d:grid">
            <img src="https://www.nazuby.cz/file/img/33777?w=84&h=84&rt=fsp" alt="product"/>
            <p>
                <b>99 % lidí nás doporučuje </b><br/>
                100 % lidí dorazilo zboží včas <br/>
                1,9 dne je průměrná doba dodání
            </p>
        </div>
    </React.Fragment>
}

export default class product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ui: {
                selectedVariation: 1,
                selectedTab: 1
            },
            id: 1
        }
    }

    async componentDidMount(props) {
        const url = `${API}/products/${this.state.id}`;
        const data = await axios.get(url).then(response => response.data);
        this.setState({...data});
        console.log(data);
    }

    handleTabChange(e) {
        let state = this.state;
        state.ui.selectedTab = e.target.id;
        this.setState(state);
        alert(e.target.value);
    }

    render() {
        if (!this.state.name) return <React.Fragment/>
        const {id, name, description, featuredImage, regularPrice, salePrice} = this.state;
        const rating = 4.8;
        const numberOfReviews = 905;
        const images = [
            {
                original: 'https://picsum.photos/id/1018/250/150/',
                thumbnail: 'https://picsum.photos/id/1018/250/150/',
            },
        ]

        return (
            <div>
                <Navbar/>
                <section className="single-product-container">
                    <div className="container">
                        <div className="single-product-content d:flex flex:row">
                            <div className="img-container d:none sm:d:flex">
                                <ThumbnailSlider images={images}/>
                            </div>
                            <div className="context-container">
                                <div className="star-review d:flex flex:row">
                                    <div className="d:flex flex:row">
                                        <Star className="star-icon"/>
                                    </div>
                                    <span className="rv-span">({rating}) / {numberOfReviews} hodnocení</span>
                                </div>
                                <h1>{name}</h1>
                                <div className="mobile-slider d:grid sm:d:none">
                                    <ThumbnailSlider/>
                                </div>
                                {/*<div className="mobile-slider d:grid sm:d:none">*/}
                                {/*    <Splide*/}
                                {/*        id="mobileSlider01"*/}
                                {/*        options={{*/}
                                {/*            rewind: true,*/}
                                {/*            width: 300,*/}
                                {/*        }}*/}
                                {/*    >*/}
                                {/*        <SplideSlide>*/}
                                {/*            <img src="https://teethy.cz/wp-content/uploads/2018/10/na-hlavn%C3%AD-stranu-2-min.png" alt="product"/>*/}
                                {/*        </SplideSlide>*/}
                                {/*        <SplideSlide>*/}
                                {/*            <img src="https://teethy.cz/wp-content/uploads/2018/10/p%C5%99ed%C4%9Blan%C3%A9-balen%C3%AD-min.png" alt="product"/>*/}
                                {/*        </SplideSlide>*/}
                                {/*    </Splide>*/}
                                {/*</div>*/}
                                <VariationButtonGroup selected={this.state.ui.selectedVariation}>
                                    <VariationButton
                                        name="2 tydenni kura"
                                        price={regularPrice}
                                        salePrice={salePrice}
                                        secondPrice={36}
                                    />
                                    <VariationButton
                                        selected={true}
                                        label="Oblibene"
                                        name="4 tydenni kura"
                                        price={799}
                                        salePrice={1399}
                                        secondPrice={28}
                                    />
                                    <VariationButton
                                        name="6 tydenni kura"
                                        price={999}
                                        salePrice={1999}
                                        secondPrice={24}
                                    />
                                </VariationButtonGroup>

                                <p><small>Balení obsahuje: 14x horní pásek, 14x dolní pásek, stupnici pro kontrolu
                                    bělosti, návod k použití
                                    v českém jazyce</small></p>
                                <Link to={`/checkout/${id}`}>
                                    <button className="add-to-cart">Přidat do košíku</button>
                                </Link>
                                <div className="product-intro">
                                    <p>
                                        {description}
                                    </p>
                                </div>
                                <HeurekaBadge/>
                            </div>
                        </div>
                        <div className="product-tabs-container">
                            <div className="tab-container">
                                <div className="tab-link">
                                    <a
                                        href="#fea"
                                        className={this.state.feaTab ? "active" : null}
                                        id={1}
                                        onClick={(e) => this.handleTabChange(e)}
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
                        asd
                      </span>
                                    </div>
                                    <div
                                        id="directions"
                                        style={{display: this.state.direTab ? "block" : "none"}}
                                    >
                      <span>
                        asd
                      </span>
                                    </div>
                                    <div
                                        id="details"

                                        style={{display: this.state.deaTab ? "block" : "none"}}
                                    >
                      <span>
                        asd
                      </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Poproduct/>
                <Review bg="#f8f9fa" page="product"/>
                {/*<section className="comments-section">*/}
                {/*    <div className="container">*/}
                {/*        <div className="comment-content">*/}
                {/*            <h1 className="text:center">All Reviews</h1>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                <Footer/>
            </div>
        );
    }
}
