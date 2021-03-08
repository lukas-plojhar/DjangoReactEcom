import React, { Component } from "react";
import "./assets/css/popularProducts.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { ReactComponent as Star } from "./assets/svg/star.svg";

const ProductSlide = ({
  image,
  name,
  regularPrice,
  salePrice,
  rating,
  numberOfReview,
}) => {
  return (
    <SplideSlide>
      <div className="splide_item d:grid">
        <div className="img-container">
          <img src={image} alt="slider" />
        </div>
        <a href="/" className="d:block">
          {name}
        </a>
        <div className="review-container d:flex flex:row">
          <div className="star d:flex flex:row">
            <Star className="star-img" />
            <span className="rv-span">
              {rating} / ({numberOfReview})
            </span>
          </div>
        </div>
        <del>{regularPrice} ,-</del>
        <span>
          <b>{salePrice} ,-</b>
        </span>
        <button className="btn-underline">více informací</button>
      </div>
    </SplideSlide>
  );
};

export default class PopularProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 4,
          name: "Belici zubni pudr",
          regularPrice: 499,
          salePrice: 299,
          featuredImage:
            "https://teethy.cz/wp-content/uploads/2021/03/produkt1-teethy.png",
          shortDescription: null,
        },
        {
          id: 5,
          name: "Belici zubni pero",
          regularPrice: 299,
          salePrice: 149,
          featuredImage:
            "https://teethy.cz/wp-content/uploads/2021/03/produkt1-teethy.png",
          shortDescription: "Vhodny k dobeleni hure dostupnych mist.",
        },
        {
          id: 5,
          name: "Belici zubni pero",
          regularPrice: 299,
          salePrice: 149,
          featuredImage:
            "https://teethy.cz/wp-content/uploads/2021/03/produkt1-teethy.png",
          shortDescription: "Vhodny k dobeleni hure dostupnych mist.",
        },
      ],
    };
  }

  // Hooks
  componentDidMount() {}

  render() {
    // Data
    const { products } = this.state;

    // Splide slider options
    const options = {
      rewind: true,
      perPage: 3,
      gap: "1rem",
      pagination: false,
      breakpoints: {
        768: {
          perPage: 1,
          gap: "0rem",
          arrows: false,
        },
        1024: {
          perPage: 2,
        },
      },
      padding: {
        right: "3rem",
      },
      perMove: 1,
    };

    return (
      <div
        className="popular-product-container"
        style={{ backgroundColor: this.props.bg }}
      >
        <div className="container">
          <div className="popular-product-content">
            <h2 className="text:center sm:text:left mb-4">
              Ostatní také zakoupili
            </h2>
            <Splide options={options}>
              {products.map((product, index) => {
                return (
                  <ProductSlide
                    key={index}
                    image={product.featuredImage}
                    name={product.name}
                    regularPrice={product.regularPrice}
                    salePrice={product.salePrice}
                    rating={product.rating || 4.8}
                    numberOfReview={product.numberOfReviews || 905}
                  />
                );
              })}
            </Splide>
          </div>
        </div>
      </div>
    );
  }
}
