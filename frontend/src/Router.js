import React, {Component} from "react";
import {Route, Switch, Redirect, BrowserRouter} from "react-router-dom";

// Pages
import home from "./templates/pages/home/home";
import product from "./templates/pages/product/product";
import Shop from "./templates/pages/shop/shop";
import checkout from "./templates/pages/checkout/checkout";
import Thankyou from "./templates/pages/thankyou/Thankyou";
import TermsOfUse from "./templates/pages/static/TermsOfUse";
import RefundPolicy from "./templates/pages/static/RefundPolicy";
import Contact from "./templates/pages/static/Contact";


class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                    <Switch location={this.props.location}>
                        <Route path="/obchodni-podminky" component={TermsOfUse}/>
                        <Route path="/reklamacni-rad" component={RefundPolicy}/>
                        <Route path="/kontakt" component={Contact}/>

                        <Route path="/obchod" component={Shop}/>
                        <Route path="/produkt/:id" component={product}/>
                        <Route path="/pokladna/:productId?/:variationId?" component={checkout}/>
                        <Route path="/dekujeme/:id" component={Thankyou}/>
                        <Route path="/" component={home}/>
                        <Redirect to="/"/>
                    </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;


// class Router extends Component {
//     render() {
//         return (
//             <BrowserRouter>
//                 <Switch>
//                     <Route path="/obchodni-podminky" component={TermsOfUsePage}/>
//                     <Route path="/reklamacni-rad" component={RefundPolicy}/>
//                     <Route path="/kontakt" component={Contact}/>
//
//                     <Route path="/obchod" component={Shop}/>
//                     <Route path="/produkt/:id" component={product}/>
//                     <Route path="/pokladna/:productId?/:variationId?" component={checkout}/>
//                     <Route path="/dekujeme/:id" component={Thankyou}/>
//                     <Route path="/" component={home}/>
//                     <Redirect to="not-found"/>
//                 </Switch>
//             </BrowserRouter>
//         );
//     }
// }
