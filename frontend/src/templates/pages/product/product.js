import React, {Component} from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Navbar from "../../components/topnavbar/nav";
import Footer from "../../components/footer/footer";
import Poproduct from "../../components/popproducts/popproducts";
import Review from "../../components/review/review";
import "./assets/css/product.css";
import ThumbnailSlider from "../../components/thumbnailslider/ThumbnailSlider";
import {ReactComponent as Star} from "../../components/review/assets/svg/star.svg";
import {VariationButton, VariationButtonGroup} from "../../components/variatiobutton/VariationButton";
import {API} from "../../../Globals";
import axios from "axios";
import {Link} from "react-router-dom";
import HeurekaBadge from "./components/HeurekaBadge";


export default class product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ui: {
                selectedVariation: 1,
                selectedTab: 1
            },
            id: props.match.params.id,
        }
    }

    // Hooks
    async componentDidMount(props) {
        const {id} = this.state;
        const url = `${API}/products/${id}`;
        const data = await axios.get(url).then(response => response.data);
        this.setState({...data});
        console.log(data);
    }

    // Handlers
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
                                <VariationButtonGroup selected={this.state.ui.selectedVariation}>
                                    <VariationButton
                                        name="2 tydenni kura"
                                        price={regularPrice}
                                        salePrice={salePrice}
                                        secondPrice={36}
                                    />
                                    <VariationButton
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

                                <p><small>Balení obsahuje: {(this.state.ui.selectedVariation + 1) * 14}x horní
                                    pásek, {(this.state.ui.selectedVariation + 1) * 14}x dolní pásek, stupnici pro kontrolu
                                    bělosti, návod k použití
                                    v českém jazyce</small></p>
                                <Link to={`/checkout/?add-to-cart=${id}`}>
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
