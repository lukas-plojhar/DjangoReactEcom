import React, {Component} from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Navbar from "../../components/topnavbar/nav";
import Footer from "../../components/footer/Footer";
import Review from "../../components/review/review";
import "./assets/css/product.css";
import ThumbnailSlider from "../../components/thumbnailslider/ThumbnailSlider";
import {ReactComponent as Star} from "../../components/review/assets/svg/star.svg";
import {
    VariationButton,
    VariationButtonGroup,
} from "../../components/variatiobutton/VariationButton";
import {API} from "../../../Globals";
import axios from "axios";
import {Link} from "react-router-dom";
import HeurekaBadge from "./components/HeurekaBadge";
import PopularProducts from "../../components/popularProducts/PopularProducts";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default class product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                id: props.match.params.id,
            },
            selectedVariation: null,
        };
        this.handleVariationClick = this.handleVariationClick.bind(this);
    }

    // Hooks
    async componentDidMount(props) {
        const {product} = this.state;
        const url = `${API}/products/${product.id}`;
        const data = await axios.get(url).then((response) => response.data);
        this.setState({
            product: {
                id: product.id,
                ...data,
            },
        });
    }

    // Handlers
    handleVariationClick = (id) => {
        const state = this.state;
        state.selectedVariation = id;
        this.setState({state});

        console.log(id);
    }

    render() {
        if (!this.state.product.name) return <React.Fragment/>;

        // Data
        const {selectedVariation, product} = this.state;
        const {
            id,
            name,
            shortDescription,
            featuredImage,
            imageGallery,
            rating,
            numberOfReviews,
            tab,
            variations
        } = product;


        const images = [];

        images.push({
            original: API + featuredImage[0].image,
            thumbnail: API + featuredImage[0].image,
        });

        imageGallery.forEach(image => images.push({
            original: API + image.image,
            thumbnail: API + image.image
        }));

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
                                <h1 className="product-name">{name}</h1>
                                <div className="star-review d:flex flex:row">
                                    <div className="d:flex flex:row">
                                        <Star className="star-icon"/>
                                    </div>
                                    <span className="rv-span">({rating}) / {numberOfReviews} hodnocení</span>
                                </div>
                                <div className="mobile-slider d:grid sm:d:none">
                                    <ThumbnailSlider images={images}/>
                                </div>
                                <div className="product-intro">
                                    <p>{shortDescription}</p>
                                </div>
                                <p>
                                    <small>
                                        Balení obsahuje:
                                    </small>
                                </p>



                                <VariationButtonGroup
                                    selected={selectedVariation}
                                    variations={variations}
                                    label="Oblibene"
                                    handleClick={this.handleVariationClick}
                                />
                                    {/*{*/}
                                    {/*    variations.map((variation, index) => {*/}
                                    {/*        return <VariationButton*/}
                                    {/*            key={index}*/}
                                    {/*            selected={variation.selected ? true : false}*/}
                                    {/*            name={variation.name}*/}
                                    {/*            regularPrice={variation.regularPrice}*/}
                                    {/*            salePrice={variation.salePrice}*/}
                                    {/*            description={variation.description}*/}
                                    {/*        />*/}
                                    {/*    })*/}
                                    {/*}*/}


                                <Link to={`/pokladna/${id}`}>
                                    <button className="add-to-cart">Přidat do košíku</button>
                                </Link>
                                <HeurekaBadge/>
                            </div>
                        </div>

                        <Tabs>
                            <TabList>
                                {tab.map((tab) => (
                                    <Tab>{tab.name}</Tab>
                                ))}
                            </TabList>

                            {tab.map((tab) => {
                                const markup = {__html: tab.content};
                                return (
                                    <TabPanel>
                                        <div dangerouslySetInnerHTML={markup}></div>
                                    </TabPanel>
                                );
                            })}
                        </Tabs>
                    </div>
                </section>

                {/*Other components*/}
                <PopularProducts bg="#f8f9fa"/>
                <Review bg="#fff" page="product"/>
                <Footer/>
            </div>
        );
    }
}
