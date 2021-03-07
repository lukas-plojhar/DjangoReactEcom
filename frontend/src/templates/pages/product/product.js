import React, {Component} from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Navbar from "../../components/topnavbar/nav";
import Footer from "../../components/footer/footer";
import Review from "../../components/review/review";
import "./assets/css/product.css";
import ThumbnailSlider from "../../components/thumbnailslider/ThumbnailSlider";
import {ReactComponent as Star} from "../../components/review/assets/svg/star.svg";
import {VariationButton, VariationButtonGroup} from "../../components/variatiobutton/VariationButton";
import {API} from "../../../Globals";
import axios from "axios";
import {Link} from "react-router-dom";
import HeurekaBadge from "./components/HeurekaBadge";
import PopularProducts from "../../components/popularProducts/PopularProducts";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css'

export default class product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                id: props.match.params.id,
            },
            selectedVariation: 1,
        }
    }

    // Hooks
    async componentDidMount(props) {
        const {product} = this.state;
        const url = `${API}/products/${product.id}`;
        const data = await axios.get(url).then(response => response.data);
        this.setState({
            product: {
                id: product.id,
                ...data
            }
        });
    }

    render() {
        if (!this.state.product.name) return <React.Fragment/>

        // Data
        const {selectedVariation, product} = this.state;
        const {
            id,
            name,
            description,
            shortDescription,
            featuredImage,
            regularPrice,
            salePrice,
            rating,
            numberOfReviews,
            tab,
        } = product;

        const images = [
            {
                original: 'https://picsum.photos/id/1018/600/600/',
                thumbnail: 'https://picsum.photos/id/1018/250/150/',
            }, {
                original: 'https://picsum.photos/id/1019/600/600/',
                thumbnail: 'https://picsum.photos/id/1019/250/150/',
            }, {
                original: 'https://picsum.photos/id/1020/600/600/',
                thumbnail: 'https://picsum.photos/id/1020/250/150/',
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
                                <VariationButtonGroup selected={selectedVariation}>
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

                                <p><small>Balení obsahuje: {(selectedVariation + 1) * 14}x horní
                                    pásek, {(selectedVariation + 1) * 14}x dolní pásek, stupnici pro
                                    kontrolu
                                    bělosti, návod k použití
                                    v českém jazyce</small></p>
                                <Link to={`/checkout/?add-to-cart=${id}`}>
                                    <button className="add-to-cart">Přidat do košíku</button>
                                </Link>
                                <div className="product-intro">
                                    <p>{shortDescription}</p>
                                </div>
                                <HeurekaBadge/>
                            </div>
                        </div>

                        <Tabs>
                            <TabList>
                                {tab.map(tab => <Tab>{tab.name}</Tab>)}
                            </TabList>

                            {tab.map(tab => {
                                const markup = {__html: tab.content};
                                return <TabPanel>
                                    <div dangerouslySetInnerHTML={markup}></div>
                                </TabPanel>
                            })}
                        </Tabs>

                    </div>
                </section>

                <PopularProducts bg="#f8f9fa"/>

                <Review bg="#fff" page="product"/>
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
