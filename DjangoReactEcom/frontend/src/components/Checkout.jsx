import React, {Component} from 'react';
import axios from 'axios'
import OrderForm from './checkout/OrderForm';
import Cookies from "universal-cookie";
import CartForm from "./checkout/CartForm";

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cookieName: 'teethycz-hash',
            hash: '',
            formData: []
        }
    }

    componentDidMount() {
        this.setState({hash: this.getCartHash()});
        this.setState({formData: this.getFormData(this.state.hash)});
    }

    componentWillUnmount() {
        console.log('component will unmount, gotta save')
    }

    // Get form data from API by hash
    getFormData(hash) {
        hash = "5ms06t8vf4v";
        axios.get('http://localhost:8000/cart/' + hash)
            .then(function (response) {
                console.log(response.data)
                return response.data;
            })
    }

    // Fetch cart id from cookie
    getCartHash() {
        let cookies = new Cookies();
        let cartHash = cookies.get(this.state.cookieName);

        if (!cartHash) {
            cookies.set(this.state.cookieName, Math.random().toString(36).slice(2));
        }
        return cookies.get(this.state.cookieName);
    }

    render() {
        console.log(this.state.formData)
        return (
            <React.Fragment>
                <p>Cookie name: {this.state.cookieName}</p>
                <p>Hash: {this.state.hash}</p>
                <OrderForm/>
                <CartForm/>
            </React.Fragment>);
    }
}

export default Checkout;