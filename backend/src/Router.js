import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Navbar from './templates/components/Navbar'
import Sidebar from "./templates/components/Sidebar";
import Home from './templates/pages/Home';
import {OrderList, OrderDetail} from './templates/pages/Orders'

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <Navbar/>
                    <div className="row">
                        <Sidebar/>
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <Switch>
                                <Route path='/orders/:id' component={OrderDetail}/>
                                <Route path='/orders' component={OrderList}/>
                                <Route path='/' component={Home}/>
                            </Switch>
                        </main>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;


