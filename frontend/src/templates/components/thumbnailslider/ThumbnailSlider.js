import React from "react";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import ImageGallery from 'react-image-gallery';

export default class ThumbnailSlider extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const images = [
            {
                original: 'https://teethy.cz/wp-content/uploads/2021/03/produkt1-teethy.png',
                thumbnail: 'https://picsum.photos/id/1018/250/150/',
            },
            {
                original: 'https://teethy.cz/wp-content/uploads/2020/12/2020-12-25_16h49_09-min.png',
                thumbnail: 'https://picsum.photos/id/1015/250/150/',
            }]

        return <ImageGallery
            items={this.props.images || images}
            thumbnailPosition="bottom"
            lazyLoad={true}
            showNav={true}
            showPlayButton={false}
            showFullscreenButton={false}
            useBrowserFullscreen={false}
        />
    }
}


// export default class ThumbnailSlider extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.primaryRef = React.createRef();
//         this.secondaryRef = React.createRef();
//     }
//
//     componentDidMount() {
//         this.primaryRef.current.sync(this.secondaryRef.current.splide);
//     }
//
//     renderSlide(url) {
//         return <SplideSlide key={url}>
//             <img src={url}/>
//         </SplideSlide>
//     };
//
//     render() {
//         const primaryOptions = {
//             type: 'loop',
//             perPage: 1,
//             perMove: 1,
//             gap: '1rem',
//             pagination: false,
//             fixedWidth: 600,
//             fixedHeight: 600,
//         };
//
//         const secondaryOptions = {
//             type: 'slide',
//             rewind: true,
//             gap: '1rem',
//             pagination: false,
//             fixedWidth: 110,
//             fixedHeight: 70,
//             cover: true,
//             focus: 'left',
//             isNavigation: true,
//             updateOnMove: true,
//         };
//
//         return (
//             <div className="wrapper">
//                 <Splide options={primaryOptions} ref={this.primaryRef}>
//                     {this.renderSlide('https://teethy.cz/wp-content/uploads/2020/12/2020-12-25_16h49_09-min.png')}
//                     {this.renderSlide('https://teethy.cz/wp-content/uploads/2018/10/p%C5%99ed%C4%9Blan%C3%A9-balen%C3%AD-min.png')}
//                 </Splide>
//
//                 <Splide options={secondaryOptions} ref={this.secondaryRef}>
//                     {this.renderSlide('https://teethy.cz/wp-content/uploads/2020/12/2020-12-25_16h49_09-min.png')}
//                     {this.renderSlide('https://teethy.cz/wp-content/uploads/2018/10/p%C5%99ed%C4%9Blan%C3%A9-balen%C3%AD-min.png')}
//                 </Splide>
//             </div>
//         );
//     }
// }
