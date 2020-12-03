import React, {Component} from 'react';
import Cookies from "universal-cookie";
import CartForm from "./checkout/CartForm";
import OrderForm from './checkout/OrderForm';
import ServicesForm from './checkout/ServicesForm';
import OrderDetails from './checkout/OrderDetails';
import UpsellForm from "./checkout/UpsellForm";

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cookieName: 'teethycz-hash',
            formData: {}
        };
        this.getCartHash = this.getCartHash.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handlePaymentChange = this.handlePaymentChange.bind(this);
        this.handleShippingChange = this.handleShippingChange.bind(this);
        this.handleOrderButtonClick = this.handleOrderButtonClick.bind(this);
        this.handleCartItemDeleteButtonClick = this.handleCartItemDeleteButtonClick.bind(this);
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

    // Handles changes of shipping
    handleShippingChange(event) {
        var data = this.state.formData;
        data.shipping = event.target.value;
        this.setState({formData: data})
        // console.log('shipping = ' + event.target.value);
    }

    // Handles change of payment
    handlePaymentChange(event) {
        var data = this.state.formData;
        data.payment = event.target.value;
        this.setState({formData: data})
        // console.log('payment = ' + event.target.value);
    }

    // Handle click on order button
    handleOrderButtonClick(event) {
        alert('button clicked');
    }

    // Handle click on order button
    handleCartItemDeleteButtonClick(event) {
        var data = this.state.formData;

        data.cart_items = data.cart_items.filter((cartItem) => (
            cartItem.product_id.name != event.target.value
        ))

        this.setState({formData: data})
    }

    render() {
        var customer = this.state.formData.customer;
        var cartItems = this.state.formData.cart_items;
        var data = this.state.formData;

        // console.log(this.state.formData);
        console.log('render is ' + customer);

        if (customer) {
            return (
                <React.Fragment>
                    <p>Cookie name: {this.state.cookieName}</p>
                    <p>Hash: {this.state.formData.hash}</p>
                    <div className="row">
                        <div className="col-12">
                            <CartForm
                                products={cartItems}
                                handleClick={this.handleCartItemDeleteButtonClick}
                            />
                        </div>
                        <div className="col-12">
                            <UpsellForm
                                handleClick={this.handleUpsellButtonClick}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <OrderForm
                                {...customer}
                                handleChange={this.handleCustomerChange}
                            />
                        </div>
                        <div className="col-6">
                            <ServicesForm
                                shipping={data.shipping}
                                payment={data.payment}
                                handlePaymentChange={this.handlePaymentChange}
                                handleShippingChange={this.handleShippingChange}
                            />
                            <hr/>
                            <OrderDetails
                                products = {cartItems}
                                total = {data.total}
                                handleClick={this.handleOrderButtonClick}
                            />
                        </div>
                    </div>
                </React.Fragment>);
        }

        return (<React.Fragment></React.Fragment>)
    }
}

export default Checkout;