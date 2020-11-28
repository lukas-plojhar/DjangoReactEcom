import React, {Component} from 'react';
import axios from 'axios'
import OrderForm from './checkout/OrderForm';
import Cookies from "universal-cookie";

class Checkout extends Component {
    state = {
        cookieName: 'teethycz-hash',
        cartId: '',
        formData: {
            first_name: '',
            last_name:'',
            email: '',
            phone: '',
            postcode:'',
        }
    }

    constructor() {
        super();
    }

    getFormData(cartId){
        axios.get('http://localhost:8000/cart/1')
            .then(function(response){
                //console.log(response.data);
                return response.data;
            })

    }

    // Fetches a cart id from cookies or generates a new one
    getCartId() {
        let cookies = new Cookies();
        let cartId = cookies.get(this.state.cookieName);

        if (!cartId) {
            cookies.set(this.state.cookieName, Math.random().toString(36).slice(2));
        }
        return cookies.get(this.state.cookieName);
    }

    componentDidMount() {
        this.setState({cartId: this.getCartId()});
        this.setState({formData: this.getFormData(this.state.cartId)});
    }


    render() {
        console.log(this.state.formData)
        return (
            <React.Fragment>
                <h1>{this.state.cookieName}</h1>
                <h1>{this.state.cartId}</h1>
                <OrderForm/>
            </React.Fragment>);
    }
}

export default Checkout;