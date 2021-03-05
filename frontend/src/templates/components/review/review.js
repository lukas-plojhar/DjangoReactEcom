import React, {Component} from "react";
import "./assets/css/review.css";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import {ReactComponent as Star} from "./assets/svg/star.svg";

const Stars = ({count}) => {
    return <div className="star-review-box d:flex flex:row">
        <Star className="single-star-ic"/>
        <Star className="single-star-ic"/>
        <Star className="single-star-ic"/>
        <Star className="single-star-ic"/>
        <Star className="single-star-ic"/>
    </div>
}

const ReviewSlide = ({stars, name, children}) => {
    return <SplideSlide>
        <div className="single-review-box d:grid">
            <img src="https://onas.heureka.cz/upload/221-logoheurekanoclaim.png"
                 className="review-avatar"/>
            {/*<Stars count={stars}/>*/}
            {/*<h2>Awesome</h2>*/}
            <div className="review-user d:grid">
                {/*<img src="/uploads/avatar.png" alt="avater"/>*/}
                {/*<span>New York, NY</span>*/}
            </div>
            <span>{children}</span>
            <p><b>- {name}</b></p>
        </div>
    </SplideSlide>
}

export default class review extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div
                style={{background: this.props.bg != null ? this.props.bg : null}}
                className="review-container-compo"
            >
                <div className="container">
                    <div className="review-content">
                        <div className="top-header d:flex flex:row">
                            <h1>Ohlasy našich zákazníků</h1>
                            {/*<div className="right-header d:grid">*/}
                            {/*  <span className="d:block">*/}
                            {/*    Více než <b>1,000</b> hodnocení*/}
                            {/*  </span>*/}
                            {/*  <button>Prohlédnout produkty</button>*/}
                            {/*</div>*/}
                        </div>
                        <Splide
                            options={{
                                perPage: 4,
                                rewind: true,
                                gap: "1rem",
                                pagination: false,
                                breakpoints: {
                                    640: {
                                        perPage: 1,
                                    },
                                },
                            }}
                            className="review-slider-compo"
                        >
                            <ReviewSlide name="Jan Novak" stars={5}>
                                měl jsem obavy protože mám citlivé zuby ale bez problémů fungujem, jemné štípání hned odezní
                            </ReviewSlide>

                            <ReviewSlide name="Tereza Novotna" stars={5}>
                                zkoušel jsem bělící pudr a ale tohle je mnohem lepší a pohodlnější. i bělení se mi zdá výraznější
                            </ReviewSlide>
                        </Splide>
                    </div>
                </div>
            </div>
        );
    }
}
