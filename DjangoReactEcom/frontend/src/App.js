import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Checkout from './components/Checkout';
import Navbar from './components/common/Navbar';
import Home from './components/Home';
import Product from './components/product/Product';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <div className='container'>
                    <Switch>
                        <Route path='/product/:id' component={Product}/>
                        <Route path='/checkout' component={Checkout}/>
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



