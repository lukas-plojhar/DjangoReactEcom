import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default class ThumbnailSlider extends React.Component {
  constructor(props) {
    super(props);

    this.primaryRef = React.createRef();
    this.secondaryRef = React.createRef();
  }

  componentDidMount() {
    // Set the sync target right after the component is mounted.
    this.primaryRef.current.sync(this.secondaryRef.current.splide);
  }

  render() {
    const primaryOptions = {
      type: "loop",
      perPage: 1,
      perMove: 1,
      pagination: false,
      arrows: false,
    };

    const secondaryOptions = {
      type: "slide",
      rewind: false,
      pagination: false,
      fixedWidth: 70,
      fixedHeight: 70,
      cover: true,
      focus: "left",
      isNavigation: true,
      updateOnMove: true,
      arrows: false,
    };

    return (
      <div className="thumbSlider">
        <Splide
          options={primaryOptions}
          ref={this.primaryRef}
          className="product-img-cover"
        >
          <SplideSlide>
            <img src="/uploads/p1.png" alt="product" />
          </SplideSlide>
          <SplideSlide>
            <img src="/uploads/p2.png" alt="product" />
          </SplideSlide>
          <SplideSlide>
            <img src="/uploads/p3.png" alt="product" />
          </SplideSlide>
          <SplideSlide>
            <img src="/uploads/p4.png" alt="product" />
          </SplideSlide>
          <SplideSlide>
            <img src="/uploads/p5.png" alt="product" />
          </SplideSlide>
        </Splide>

        <Splide options={secondaryOptions} ref={this.secondaryRef}>
          <SplideSlide>
            <img src="/uploads/p1.png" alt="product" />
          </SplideSlide>
          <SplideSlide>
            <img src="/uploads/p2.png" alt="product" />
          </SplideSlide>
          <SplideSlide>
            <img src="/uploads/p3.png" alt="product" />
          </SplideSlide>
          <SplideSlide>
            <img src="/uploads/p4.png" alt="product" />
          </SplideSlide>
          <SplideSlide>
            <img src="/uploads/p5.png" alt="product" />
          </SplideSlide>
        </Splide>
      </div>
    );
  }
}
