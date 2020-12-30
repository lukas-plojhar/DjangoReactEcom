import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import CartForm from "./checkout/CartForm";
import OrderForm from './checkout/OrderForm';
import ServicesForm from './checkout/ServicesForm';
import OrderDetails from './checkout/OrderDetails';
import axios from "axios";

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
                "errors": {}
            }
            :
            JSON.parse(localStorage.getItem('teethycz')),
        other: {}
    }

    async componentDidMount() {
        let {items} = this.state.data;
        const productId = this.props.location.state !== undefined ? this.props.location.state.productId.productId : false;
        // Updating items in cart
        if (productId) {
            const newProduct = await axios.get(`http://localhost:8000/product/${productId}/detail`).then(response => response.data);
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
        const url = `http://localhost:8000/order/create/`;
        const config = {
            'headers': {
                'Content-Type': 'application/json',
            }
        };
        const data = JSON.stringify({
            "customer": customer,
            "items": items,
            "shipping": shipping,
            "payment": payment
        });

        axios.post(url, data, config)
            .then(response => {
                console.log(response);
                const {status, data} = response;
                if (status === 201) {
                    localStorage.removeItem('teethycz');
                    // console.log('valid rdy 4 redirect');
                    this.props.history.push({
                        pathname:`/order`,
                        state: {data}
                    });
                };
            })
            .catch(error => console.log(error));
    }

    // Component rendering
    render() {
        const {data} = this.state;

        return data.items === undefined || data.items.length === 0 ? <p>Vas kosik je prazdny</p> : (
            <React.Fragment>
                <div className="row">
                    <div className="col-12">
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
                    <div className="col-6">
                        <OrderForm
                            customer={data.customer}
                            handleStateChange={(e) => this.handleCustomerStateChange(e)}
                            handleOrder={(e) => this.handleNewOrder(e)}
                        />
                    </div>
                    <div className="col-6">
                        <ServicesForm
                            shipping={data.shipping}
                            payment={data.payment}
                            handleStateChange={(e) => this.handleOrderStateChange(e)}
                        />
                        <hr/>
                        <OrderDetails
                            items={data.items}
                            handleClick={this.handleOrderButtonClick}

                        />
                    </div>
                </div>
            </React.Fragment>);
    }
}

export default withRouter(Checkout);