import React, {Component} from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Navigation from "./common/Navigation";
import Homepage from "./homepage/Homepage";
import ShopPage from "./shop/Shop";
import SingleProductPage from "./product/SingleProductPage";
import CheckoutPage from "./checkout/CheckoutPage";
import ThankyouPage from "./checkout/ThankyouPage";
import TermsOfUsePage from "./common/TermsOfUsePage";
import RefundPolicyPage from "./common/RefundPolicyPage";
import ContactPage from "./common/ContactPage";

class Router extends Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Navigation/>
                    <Switch>
                        {/*<Route path="/obchod" component={Shop}/>*/}
                        {/*<Route path="/produkt/:id" component={product}/>*/}
                        {/*<Route path="/pokladna/:productId?/:variationId?" component={checkout}/>*/}
                        {/*<Route path="/dekujeme/:id" component={Thankyou}/>*/}
                        <Route path="/obchodni-podminky" component={TermsOfUsePage}/>
                        <Route path="/reklamacni-rad" component={RefundPolicyPage}/>
                        <Route path="/kontakt" component={ContactPage}/>

                        <Route path="/dekujeme/:id?" component={ThankyouPage}/>
                        <Route path="/pokladna" component={CheckoutPage}/>
                        <Route path="/produkt/:id" component={SingleProductPage}/>
                        <Route path="/obchod" component={ShopPage}/>
                        <Route path="/" component={Homepage}/>
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default Router;