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
        this.handlePaymentChange = this.handlePaymentChange.bind(this);
        this.handleShippingChange = this.handleShippingChange.bind(this);
        this.handleOrderButtonClick = this.handleOrderButtonClick.bind(this);
        this.handleItemRemoveButtonClick = this.handleItemRemoveButtonClick.bind(this);
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
        // nutno updatovat provozni variables jako total, discount, etc.
        localStorage.setItem('teethycz', JSON.stringify(this.state.data));
    }

    handleShippingChange(e) {
        const {data} = this.state;
        data.shipping = e.target.value;
        this.setState({data});
    }

    handlePaymentChange(e) {
        const {data} = this.state;
        data.payment = e.target.value;
        this.setState({data});
    }

    handleOrderButtonClick(e) {
        alert('ORDER SENT');
        return;

        const url = `http://localhost:8000/order/create/`;
        const config = {
            'headers': {
                'Content-Type': 'application/json',
            }
        };
        const data = JSON.stringify({
            "customer": this.state.customer,
            "items": this.state.items,
            "shipping": this.state.shipping,
            "payment": this.state.payment,

        });

        axios.post(url, data, config).then(response => {
            alert(response.data);
        });
    }

    handleItemRemoveButtonClick(e) {
        let {items, total} = this.state.data;

        // Processing changes
        items.splice(e.target.value, 1);
        if (items) items.forEach(item => total += parseInt(item.product.salePrice));

        // Saving data
        const {data} = this.statel
        data.items = items;
        data.total = total;
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
                            customer={data.customer}
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
                            products={data.items}
                            handleClick={this.handleOrderButtonClick}
                        />
                    </div>
                </div>
            </React.Fragment>);
    }
}

export default Checkout;