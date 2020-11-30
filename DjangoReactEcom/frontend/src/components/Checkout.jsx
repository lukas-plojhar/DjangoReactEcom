import React, {Component} from 'react';
import Cookies from "universal-cookie";
import CartForm from "./checkout/CartForm";
import OrderForm from './checkout/OrderForm';
import ServicesForm from './checkout/ServicesForm';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cookieName: 'teethycz-hash',
            formData: {}
        };
        this.getCartHash = this.getCartHash.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
    }

    componentDidMount() {
        var hash = this.getCartHash();

        fetch('http://localhost:8000/cart/' + hash)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    formData: data
                })
            });
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

    // Handles changes in OrderForm
    handleCustomerChange(event) {
        var data = this.state.formData;
        data.customer[event.target.name] = event.target.value;
        this.setState({formData: data})
    }

    render() {
        var customer = this.state.formData.customer;
        if (customer) {
            return (
                <React.Fragment>
                    <div className="row">
                        <div className="col-12">
                            <CartForm/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <OrderForm {...customer} handleChange={this.handleCustomerChange}/>
                        </div>
                        <div className="col-6">
                            <ServicesForm/>
                        </div>
                    </div>

                    <p>Cookie name: {this.state.cookieName}</p>
                    <p>Hash: {this.state.formData.hash}</p>


                </React.Fragment>);
        }

        return (<React.Fragment></React.Fragment>)
    }
}

export default Checkout;