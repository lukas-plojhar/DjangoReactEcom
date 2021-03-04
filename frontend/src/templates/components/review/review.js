import React, { Component } from "react";
import "./assets/css/review.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { ReactComponent as Star } from "./assets/svg/star.svg";

export default class review extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        style={{ background: this.props.bg != null ? this.props.bg : null }}
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
              <SplideSlide>
                <div className="single-review-box d:grid">
                  <div className="star-review-box d:flex flex:row">
                    <Star className="single-star-ic" />
                    <Star className="single-star-ic" />
                    <Star className="single-star-ic" />
                    <Star className="single-star-ic" />
                    <Star className="single-star-ic" />
                  </div>
                  <h2>Awesome</h2>
                  <span>
                    I just received my teeth whitening kit and it is AMAZING! I
                    had a little problem with my order but customer service was
                    absolutely wonderful and solved the problem right away!
                    Definitely would recommend this product to any and
                    everyone!!
                  </span>
                  <div className="review-user d:grid">
                    <img src="/uploads/avatar.png" alt="avater" />
                    <p>Cassandra C.</p>
                    <span>New York, NY</span>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="single-review-box d:grid">
                  <div className="star-review-box d:flex flex:row">
                    <Star className="single-star-ic" />
                    <Star className="single-star-ic" />
                    <Star className="single-star-ic" />
                    <Star className="single-star-ic" />
                    <Star className="single-star-ic" />
                  </div>
                  <h2>Awesome</h2>
                  <span>
                    I just received my teeth whitening kit and it is AMAZING! I
                    had a little problem with my order but customer service was
                    absolutely wonderful and solved the problem right away!
                    Definitely would recommend this product to any and
                    everyone!!
                  </span>
                  <div className="review-user d:grid">
                    <img src="/uploads/avatar.png" alt="avater" />
                    <p>Cassandra C.</p>
                    <span>New York, NY</span>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    );
  }
}
