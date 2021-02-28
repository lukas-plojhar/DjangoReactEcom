import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import reportWebVitals from './reportWebVitals';

// CSS imports
// import './static/css/style.css'
import 'bootstrap/dist/css/bootstrap.css';
import "./assets/css/global.css";
import "./assets/css/tiny-slider.css";

// const API = 'https://identcz.herokuapp.com';
export const API = 'http://localhost:8000';

ReactDOM.render(<Router/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
