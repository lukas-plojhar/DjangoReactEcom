import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import reportWebVitals from './reportWebVitals';

import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
    <React.StrictMode>
        <Router/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
