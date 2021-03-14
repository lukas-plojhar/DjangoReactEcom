import React, {Component} from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Navigation from "./common/Navigation";
import Homepage from "./homepage/Homepage";
import SingleProductPage from "./product/SingleProductPage";
import Footer from "./common/Footer";

class Router extends Component {
    render() {
        return (
            <React.Fragment>
                <body>
                <BrowserRouter>
                    <Navigation/>
                    <Switch>
                        {/*<Route path="/obchodni-podminky" component={TermsOfUse}/>*/}
                        {/*<Route path="/reklamacni-rad" component={RefundPolicy}/>*/}
                        {/*<Route path="/kontakt" component={Contact}/>*/}

                        {/*<Route path="/obchod" component={Shop}/>*/}
                        {/*<Route path="/produkt/:id" component={product}/>*/}
                        {/*<Route path="/pokladna/:productId?/:variationId?" component={checkout}/>*/}
                        {/*<Route path="/dekujeme/:id" component={Thankyou}/>*/}
                        <Route path="/produkt" component={SingleProductPage}/>
                        <Route path="/" component={Homepage}/>
                    </Switch>
                </BrowserRouter>
                <Footer/>

                </body>
            </React.Fragment>
        );
    }
}

export default Router;