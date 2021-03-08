import React, {Component} from "react";
import {Route, Switch, Redirect, BrowserRouter} from "react-router-dom";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Product from "./components/product/Product";
// import Thankyou from './components/Thankyou';
import Navbar from "./components/common/Navbar";

// New Web
import home from "./templates/pages/home/home";
import product from "./templates/pages/product/product";
import Shop from "./templates/pages/shop/shop";
import checkout from "./templates/pages/checkout/checkout";
import Thankyou from "./templates/pages/thankyou/Thankyou";
import TermsOfUse from "./templates/pages/static/TermsOfUse";
import RefundPolicy from "./templates/pages/static/RefundPolicy";
import Contact from "./templates/pages/static/Contact";

// New website
// import nav from "./templates/components/topnavbar/nav";
// import home from "./templates/pages/home/home";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                {/*<Navbar />*/}
                {/*<TopOffer/>*/}
                <Switch>
                    {/*<Route path='/product/:id' component={Product}/>*/}
                    {/*<Route path='/checkout' component={Checkout}/>*/}
                    {/*<Route path='/thankyou' component={Thankyou}/>*/}
                    <Route path="/obchodni-podminky" component={TermsOfUse}/>
                    <Route path="/reklamacni-rad" component={RefundPolicy}/>
                    <Route path="/kontakt" component={Contact}/>

                    <Route path="/obchod" component={Shop}/>
                    <Route path="/produkt/:id" component={product}/>
                    <Route path="/pokladna/:productId" component={checkout}/>
                    <Route path="/dekujeme/:id" component={Thankyou}/>
                    <Route path="/" component={home}/>
                    <Redirect to="not-found"/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;

// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons">
// <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX"  crossOrigin="anonymous">
