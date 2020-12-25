import React, {Component} from 'react';
import CartForm from "./checkout/CartForm";
import OrderForm from './checkout/OrderForm';
import ServicesForm from './checkout/ServicesForm';
import OrderDetails from './checkout/OrderDetails';
import UpsellForm from "./checkout/UpsellForm";
import axios from "axios";

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse(localStorage.getItem('teethycz')) === null ?
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
                "shipping": 1,
                "payment": 1,
                "total": 0
            }
            :
            JSON.parse(localStorage.getItem('teethycz'));
        ;

        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handlePaymentChange = this.handlePaymentChange.bind(this);
        this.handleShippingChange = this.handleShippingChange.bind(this);
        this.handleOrderButtonClick = this.handleOrderButtonClick.bind(this);
        this.handleItemRemoveButtonClick = this.handleItemRemoveButtonClick.bind(this);
    }

    async componentDidMount() {
        let items = this.state.items;
        let total = 0;
        let productId = this.props.location.state !== undefined ? this.props.location.state.productId.productId : false;

        // Updating items in cart
        if (productId) {
            const newItem = await axios.get(`http://localhost:8000/product/${productId}/detail`).then(response => response.data);
            const isInCart = items.filter(item => item.product.name === newItem.name);
            if (isInCart.length !== 0) {
                items.forEach(item => {
                    if (item.product.name === newItem.name) {
                        item.quantity++;
                    }
                })
            } else {
                items.push({
                    'product': newItem,
                    'quantity': 1
                });
            }
        }

        // Updating total
        items.forEach(item => {
            total += item.product.salePrice * item.quantity;
        });

        // Saving the data
        this.setState({items, total});
    }

    componentDidUpdate() {
        console.log('component updated');
        localStorage.setItem('teethycz', JSON.stringify(this.state));
    }

    handleCustomerChange(e) {
        let customer = this.state.customer;
        customer[e.target.name] = e.target.value;
        this.setState({customer});
    }

    handleShippingChange(e) {
        let shipping = this.state.shipping;
        shipping = e.target.value;
        this.setState({shipping});
    }

    handlePaymentChange(e) {
        let payment = this.state.payment;
        payment = e.target.value;
        this.setState({payment});
    }

    handleOrderButtonClick(e) {
        console.log('validate form');
        const url = `http://localhost:8000/order/create/`;
        const data = JSON.stringify(this.state);
        const config = {};
        // alert(JSON.stringify(this.state));
        axios.post(url, data, config).then(response => {
            alert(response.data);
        });

    }

    handleItemRemoveButtonClick(e) {
        let items = this.state.items;
        let total = 0;

        // Processing changes
        items.splice(e.target.value, 1);
        if (items) items.forEach(item => total += parseInt(item.product.salePrice));

        // Saving data
        this.setState({items, total});
    }

    // Component rendering
    render() {
        let state = this.state;

        return state.items === undefined || state.items.length == 0 ? <p>Vas kosik je prazdny</p> : (
            <React.Fragment>
                <div className="row">
                    <div className="col-12">
                        <CartForm
                            products={state.items}
                            handleClick={this.handleItemRemoveButtonClick}
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
                            {...state.customer}
                            handleChange={this.handleCustomerChange}
                        />
                    </div>
                    <div className="col-6">
                        <ServicesForm
                            shipping={state.shipping}
                            payment={state.payment}
                            handlePaymentChange={this.handlePaymentChange}
                            handleShippingChange={this.handleShippingChange}
                        />
                        <hr/>
                        <OrderDetails
                            products={state.items}
                            total={state.total}
                            handleClick={this.handleOrderButtonClick}
                        />
                    </div>
                </div>
            </React.Fragment>);
    }
}

export default Checkout;