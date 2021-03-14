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
import Skeleton from "react-loading-skeleton";
import {CSSTransition, TransitionGroup} from "react-transition-group";

export default class product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedVariation: 1,
            product: {
                id: props.match.params.id,
            },
        };
        this.handleVariationClick = this.handleVariationClick.bind(this);
    }

    // Hooks
    async componentDidMount(props) {
        const state = this.state;
        const url = `${API}/products/${state.product.id}`;
        const data = await axios.get(url).then((response) => response.data);
        state.product = {
            id: product.id,
            ...data
        };

        if (state.product.variations.length === 1) {
            state.selectedVariation = 0;
        }

        this.setState(state);
    }

    // Handlers
    handleVariationClick = (id) => {
        const state = this.state;
        state.selectedVariation = id;
        this.setState(state);
        // console.log(id);
    }

    render() {
        if (!this.state.product.variations) return <React.Fragment/>;

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
                        <div className="row mt-2">
                            <div className="img-container col-12 col-md-6 d-none d-md-block">
                                <ThumbnailSlider images={images}/>
                            </div>
                            <div className="context-container col-12 col-md-6">
                                <h1 className="product-name">{name || <Skeleton/>}</h1>
                                <div className="star-review d:flex flex:row">
                                    <div className="d:flex flex:row">
                                        <Star className="star-icon"/>
                                    </div>
                                    <span className="rv-span">({rating || <Skeleton/>}) / {numberOfReviews ||
                                    <Skeleton/>} hodnocení</span>
                                </div>
                                <div className="mobile-slider d-md-none">
                                    <ThumbnailSlider images={images}/>
                                </div>
                                <div className="product-intro">
                                    <p>{shortDescription || <Skeleton/>}</p>
                                </div>
                                <TransitionGroup>
                                    <CSSTransition key={variations[selectedVariation].content}
                                                   timeout={350}
                                                   classNames="replace">
                                        <div>
                                            <p className="text-left">
                                                <small>
                                                    Balení obsahuje: {variations[selectedVariation].content ||
                                                <Skeleton/>}
                                                </small>
                                            </p>
                                        </div>
                                    </CSSTransition>
                                </TransitionGroup>
                                <VariationButtonGroup
                                    selectedVariation={selectedVariation}
                                    variations={variations}
                                    label="Oblibene"
                                    handleClick={this.handleVariationClick}
                                />
                                <Link to={`/pokladna/${id}/${selectedVariation}`}>
                                    <button className="add-to-cart">Přidat do košíku</button>
                                </Link>
                                <HeurekaBadge/>
                            </div>
                        </div>

                        <Tabs>
                            <div className="text-md-left text-center">
                                <TabList>
                                    {tab.map((tab) => (
                                        <Tab>{tab.name || <Skeleton/>}</Tab>
                                    ))}
                                </TabList>
                            </div>

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
