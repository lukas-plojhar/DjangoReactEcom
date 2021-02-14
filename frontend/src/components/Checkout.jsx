import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Loading from "./common/Loading";
import CartForm from "./checkout/CartForm";
import OrderForm from './checkout/OrderForm';
import ServicesForm from './checkout/ServicesForm';
import OrderDetails from './checkout/OrderDetails';
import axios from "axios";

// const API = 'https://identcz.herokuapp.com';
const API = 'http://localhost:8000';

class Checkout extends Component {
    state = {
        data: JSON.parse(localStorage.getItem('teethycz')) === null ?
            {
                "customer": {
                    "firstName": "",
                    "lastName": "",
                    "email": "",
                    "phone": "",
                    "address": "",
                    "city": "",
                    "postcode": ""
                },
                "items": [],
                "shipping": "1",
                "payment": "1",
            }
            :
            JSON.parse(localStorage.getItem('teethycz')),
        "errors": {}
    }

    async componentDidMount() {
        let {items} = this.state.data;
        let productId;

        if (this.props.location.state !== undefined)
            productId = this.props.location.state.productId.productId;
            this.props.history.replace({
                pathname: this.props.location.pathname,
                state: undefined
            });

        // Updating items in carts
        if (productId) {
            const newProduct = await axios.get(`${API}/products/${productId}`).then(response => response.data);
            const duplicates = items.filter(item => item.product.id === newProduct.id);
            if (duplicates.length > 0) {
                items.forEach(item => {
                    if (item.product.id === newProduct.id) {
                        item.quantity++;
                    }
                })
            } else {
                items.push({
                    'product': newProduct,
                    'quantity': 1
                });
            }
        }

        // Saving the data
        const {data} = this.state;
        data.items = items;
        this.setState({data});
    }

    componentDidUpdate() {
        localStorage.setItem('teethycz', JSON.stringify(this.state.data));
    }

    handleOrderStateChange(e) {
        const {data} = this.state;
        data[Object.keys(e)] = e[Object.keys(e)];
        this.setState({data});
    }

    handleCustomerStateChange(e) {
        const {data} = this.state;
        data.customer = e;
        this.setState({data});
    }

    handleCartStateChange(e) {
        const {data} = this.state;
        data.items = e;
        this.setState({data});
    }

    handleNewOrder(e) {
        const {customer, items, shipping, payment} = this.state.data;
        const url = `${API}/orders/create/`;
        const data = JSON.stringify({
            "customer": customer,
            "items": items,
            "shipping": shipping,
            "payment": payment
        });
        const config = {
            'headers': {
                'Content-Type': 'application/json',
            }
        };

        axios.post(url, data, config)
            .then(response => {
                const {status, data} = response;
                if (status === 201) {
                    localStorage.removeItem('teethycz');
                    this.props.history.push({
                        pathname: `/thankyou`,
                        state: {data}
                    });
                }
                ;
            })
            .catch(error => console.log(error));
    }

    // Component rendering
    render() {
        const {data} = this.state;

        if (data.items === undefined || data.items.length === 0) return <Loading/>
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12" id="cart-form">
                        <CartForm
                            items={data.items}
                            handleStateChange={(e) => this.handleCartStateChange(e)}
                        />
                    </div>
                    <div className="col-12">
                        <p>upsell form</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6" id="order-form">
                        <OrderForm
                            customer={data.customer}
                            handleStateChange={(e) => this.handleCustomerStateChange(e)}
                            handleOrder={(e) => this.handleNewOrder(e)}
                        />
                    </div>
                    <div className="col-12 col-md-6" id="order-details">
                        <h3 className="checkout-title">Vase objednavka</h3>
                        <OrderDetails
                            items={data.items}
                            handleClick={this.handleOrderButtonClick}

                        />
                        <h3>Doruceni a platba</h3>
                        <ServicesForm
                            shipping={data.shipping}
                            payment={data.payment}
                            handleStateChange={(e) => this.handleOrderStateChange(e)}
                        />
                        <hr/>

                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Checkout);