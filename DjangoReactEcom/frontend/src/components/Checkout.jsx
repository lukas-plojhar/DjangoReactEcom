import React, { Component } from 'react';
import OrderForm from './checkout/OrderForm';
import Cookies from "universal-cookie";

class Checkout extends Component {
    state = {
        formData: {

        }
    }

    componentDidMount() {
        const cookies = new Cookies();
        let cartId = cookies.get('teethycz-hash');

        if(!cartId){
            let hash = 1;
            cookies.set('teethycz-hash', hash);
            cartId = hash;
        }
    }


    render() {

        return ( <OrderForm/> );
    }
}
 
export default Checkout;