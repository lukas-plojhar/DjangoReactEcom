import React, { Component } from "react";
import "./assets/css/pop.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { ReactComponent as Star } from "./assets/svg/star.svg";

export default class popproducts extends Component {
  render() {
    return (
      <div className="popular-product-container">
        <div className="container">
          <div className="popular-product-content">
            <h1>Popular Products</h1>
            <Splide
              options={{
                rewind: true,
                perPage: 3,
                gap: "1rem",
                pagination: false,
                breakpoints: {
                  640: {
                    perPage: 1,
                  },
                },
                padding: {
                  right: "10rem",
                },
                perMove: 1,
              }}
            >
              <SplideSlide>
                <div className="splide_item d:grid">
                  <div className="img-container">
                    <img src="/uploads/product_3.png" alt="1" />
                  </div>
                  <a href="/" className="d:block">
                    Teeth Whitening Kit with LED Light - 1 Year of Whitening
                  </a>
                  <div className="review-container d:flex flex:row">
                    <div className="star d:flex flex:row">
                      <Star className="star-img" />
                      <Star className="star-img" />
                      <Star className="star-img" />
                      <Star className="star-img" />
                      <Star className="star-img" />
                    </div>
                    <p>903 Reviews</p>
                  </div>
                  <button className="cart">Add to cart - $67.00</button>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="splide_item d:grid">
                  <div className="img-container">
                    <img src="/uploads/product_4.png" alt="1" />
                  </div>
                  <a href="/" className="d:block">
                    Teeth Whitening Kit with LED Light - 1 Year of Whitening
                  </a>
                  <div className="review-container d:flex flex:row">
                    <div className="star d:flex flex:row">
                      <Star className="star-img" />
                      <Star className="star-img" />
                      <Star className="star-img" />
                      <Star className="star-img" />
                      <Star className="star-img" />
                    </div>
                    <p>903 Reviews</p>
                  </div>
                  <button className="cart">Add to cart - $67.00</button>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="splide_item d:grid">
                  <div className="img-container">
                    <img src="/uploads/product_5.png" alt="1" />
                  </div>
                  <a href="/" className="d:block">
                    Teeth Whitening Kit with LED Light - 1 Year of Whitening
                  </a>
                  <div className="review-container d:flex flex:row">
                    <div className="star d:flex flex:row">
                      <Star className="star-img" />
                      <Star className="star-img" />
                      <Star className="star-img" />
                      <Star className="star-img" />
                      <Star className="star-img" />
                    </div>
                    <p>903 Reviews</p>
                  </div>
                  <button className="cart">Add to cart - $67.00</button>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="splide_item d:grid">
                  <div className="img-container">
                    <img src="/uploads/product_1.png" alt="1" />
                  </div>
                  <a href="/" className="d:block">
                    Teeth Whitening Kit with LED Light - 1 Year of Whitening
                  </a>
                  <div className="review-container d:flex flex:row">
                    <div className="star d:flex flex:row">
                      <Star className="star-img" />
                      <Star className="star-img" />
                      <Star className="star-img" />
                      <Star className="star-img" />
                      <Star className="star-img" />
                    </div>
                    <p>903 Reviews</p>
                  </div>
                  <button className="cart">Add to cart - $67.00</button>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="splide_item d:grid">
                  <div className="img-container">
                    <img src="/uploads/product_3.png" alt="1" />
                  </div>
                  <a href="/" className="d:block">
                    Teeth Whitening Kit with LED Light - 1 Year of Whitening
                  </a>
                  <div className="review-container"></div>
                  <button className="cart">Add to cart - $67.00</button>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    );
  }
}
