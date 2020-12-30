import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Checkout from './components/Checkout';
import Navbar from './components/common/Navbar';
import Home from './components/Home';
import Product from './components/product/Product';
import Order from './components/Order';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <div className='container'>
                    <Switch>
                        <Route path='/product/:id' component={Product}/>
                        <Route path='/checkout' component={Checkout}/>
                        <Route path='/order' component={Order}/>
                        <Route path='not-found' component={() => <h1>Not Found</h1>}/>
                        <Route path='/' component={Home}/>
                        <Redirect to='not-found'/>
                    </Switch>
                </div>
            </React.Fragment>

        );
    }
}

export default App;


// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons">
// <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX"  crossOrigin="anonymous">