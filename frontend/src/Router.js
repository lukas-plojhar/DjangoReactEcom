import React, {Component} from 'react';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom'
import Checkout from './components/Checkout';
import Home from './components/Home';
import Product from './components/product/Product';
import Thankyou from './components/Thankyou';
import Navbar from "./components/common/Navbar";

// New Web
import shop from './templates/pages/shop/shop'

// New website
// import nav from "./templates/components/topnavbar/nav";
// import shop from "./templates/pages/shop/shop";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                {/*<Navbar />*/}

                <Switch>
                    <Route path='/product/:id' component={Product}/>
                    <Route path='/checkout' component={Checkout}/>
                    <Route path='/thankyou' component={Thankyou}/>
                    <Route path='/' component={shop}/>
                    <Redirect to='not-found'/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;


// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons">
// <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX"  crossOrigin="anonymous">