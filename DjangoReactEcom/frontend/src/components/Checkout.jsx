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
    }

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
        console.log('checkout.jsx: component did update');
        localStorage.setItem('teethycz', JSON.stringify(this.state.data));
    }

    handleFormChange(e) {
        // console.log('order form change');
        const { customer } = this.state.data;
        // console.log(data);
    }

    handleOrderChange({shipping, payment}) {
        const {data} = this.state;
        data.shipping = shipping;
        data.payment = payment;
        console.log(data);
        this.setState({data});
    }

    // Component rendering
    render() {
        const {data} = this.state;

        return data.items === undefined || data.items.length == 0 ? <p>Vas kosik je prazdny</p> : (
            <React.Fragment>
                <div className="row">
                    <div className="col-12">
                        <CartForm
                            products={data.items}
                            handleClick={this.handleItemRemoveButtonClick}
                        />
                    </div>
                    <div className="col-12">
                        <p>upsell form</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <OrderForm
                            onChange={(e) => this.handleFormChange(e)}
                            customer={data.customer}
                        />
                    </div>
                    <div className="col-6">
                        <ServicesForm
                            shipping={data.shipping}
                            payment={data.payment}
                            handleChange={(e) => this.handleOrderChange(e)}
                        />
                        <hr/>
                        <OrderDetails
                            products={data.items}
                            handleClick={this.handleOrderButtonClick}
                        />
                    </div>
                </div>
            </React.Fragment>);
    }
}

export default Checkout;