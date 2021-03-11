import React, {Component} from "react";
import "./assets/css/checkout.css";
import {API, Website} from "../../../Globals";
import axios from "axios";
import Cart from "./components/Cart";
import Form from "./components/Form";
import Summary from "./components/Summary";
import PaymentAndShippingOptions from "./components/Options";
import Upsells from "../../../components/checkout/Upsell";
import CustomerForm from "../../../components/checkout/CustomerForm";
import ServicesForm from "../../../components/checkout/ServicesForm";
import Footer from "../../components/footer/Footer";

export default class checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: JSON.parse(localStorage.getItem(Website)) === null ? {
                customer: {},
                items: [],
                shipping: "1",
                payment: "1",
            } : JSON.parse(localStorage.getItem(Website)),
            errors: {},
        };

        this.getTotal = this.getTotal.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    // Hooks
    componentDidMount() {
        if (!this.props.match.params.productId || !this.props.match.params.variationId) return;

        let productId = this.props.match.params.productId;
        let variationId = this.props.match.params.variationId;
        this.addToCart(productId, variationId);
    }

    componentDidUpdate() {
        localStorage.setItem("teethycz", JSON.stringify(this.state.data));
    }

    // Functions
    getTotal = () => {
        const {items} = this.state.data;
        let total = 0;

        items.forEach(item => {
            item.product.variations.forEach(variation => {
                if (variation.variationId == item.variationId) total += variation.salePrice;
            })
        });

        total += 89; // shipping
        total += 49; // payment

        return total;
    }

    async addToCart(productId, variationId) {
        console.log(productId, variationId);
        let {items} = this.state.data;

        // Is already in cart?
        if (items) {
            const duplicates = items.filter(
                (item) => item.variationId == variationId
            );

            if (duplicates.length > 0) {
                items.forEach((item) => {
                    if (item.variationId == variationId) item.quantity++;
                });
            } else {
                const config = {
                    // 'headers': {
                    //     'Access-Control-Allow-Origin': '*'
                    // }
                };
                const product = await axios
                    .get(`${API}/products/${productId}`, config)
                    .then((response) => response.data);

                items.push({
                    product: product,
                    quantity: 1,
                    variationId: variationId
                });
            }
        }
        // Saving the data
        const {data} = this.state;
        data.items = items;
        this.setState({data});
    }

    // Handlers
    handleCartStateChange(e) {
        const {data} = this.state;
        data.items = e;
        this.setState({data});
    }

    handleFormChange(e) {
        const {data} = this.state;
        data.customer[e.target.name] = e.target.value;
        this.setState({data});
    }

    handleNewOrder(e) {
        const {customer, items, shipping, payment} = this.state.data;
        const url = `${API}/orders/create/`;
        const data = JSON.stringify({
            customer: customer,
            items: items,
            shipping: shipping,
            payment: payment,
        });
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        axios
            .post(url, data, config)
            .then((response) => {
                const {status, data} = response;
                if (status === 201) {
                    localStorage.removeItem("teethycz");
                    this.props.history.push({
                        pathname: `/dekujeme`,
                        state: {data},
                    });
                }
            })
            .catch((error) => console.log(error));
    }

    handlePaymentShippingChange(e) {
        const {data} = this.state;
        data[Object.keys(e)] = e[Object.keys(e)];
        this.setState({data});
    }

    render() {
        const {data} = this.state;
        if (!data) return <React.Fragment/>
        return (
            <div>
                <section className="checkout-container">
                    <div className="container my-4">
                        <div className="checkout-content">
                            {/*<p className="checkout-title">KOŠÍK</p>*/}
                            <h2 className="text-center">Košík</h2>
                            <Cart
                                items={data.items}
                                handleStateChange={(e) => this.handleCartStateChange(e)}
                            />
                            <Upsells addToCart={this.addToCart}/>
                            <div className="form-container d:grid">
                                <div className="left-form">
                                    <Form
                                        customer={data.customer}
                                        handleChange={(e) => this.handleFormChange(e)}
                                    />
                                </div>
                                <div className="right-form">
                                    <div className="bill-data">
                                        {/*<p className="checkout-title mt-4">OBJEDNÁVKA</p>*/}
                                        <h2 className="text-center">Objednávka</h2>
                                        <Summary items={data.items}/>
                                    </div>
                                    <PaymentAndShippingOptions
                                        shipping={data.shipping}
                                        payment={data.payment}
                                        handleStateChange={(e) =>
                                            this.handlePaymentShippingChange(e)
                                        }
                                    />
                                    <div className="total-pay">
                                        <h3 className="text-center">Celkem:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {this.getTotal()},-</h3>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            className="btn btn-primary btn-order"
                                            onClick={(e) => this.handleNewOrder(e)}
                                        >
                                            OBJEDNAT
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<Footer/>*/}
            </div>
        );
    }
}
