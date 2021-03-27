import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Router from "./Router";

// CSS imports
import "react-image-gallery/styles/css/image-gallery.css";
import 'swiper/swiper.scss';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


ReactDOM.render(<Router/>, document.getElementById('root'));

reportWebVitals();


