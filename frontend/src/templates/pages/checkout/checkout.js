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
        this.getSubtotal = this.getSubtotal.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    // Hooks
    componentDidMount() {
        if (!this.props.match.params.productId) return;

        let productId = this.props.match.params.productId;
        let variationId = this.props.match.params.variationId || 0;
        this.addToCart(productId, variationId);
    }

    componentDidUpdate() {
        localStorage.setItem("teethycz", JSON.stringify(this.state.data));
    }

    // Functions
    getTotal = () => {
        const {items} = this.state.data;
        let total = 0;

        if (items.length > 0) {
            items.forEach(item => {
                total += item.product.variations[item.variationId].salePrice * item.quantity;
            });

            total += 89; // shipping
            total += 49; // payment

            return total;
        }

    }

    getSubtotal = () => {
        const {items} = this.state.data;
        let total = 0;

        if (items.length > 0) {
            items.forEach(item => {
                total += item.product.variations[item.variationId].salePrice * item.quantity;
            });

            return total;
        }
    }

    async addToCart(productId, variationId = 0) {
        console.log(productId + " , " + variationId);
        let {items} = this.state.data;
        let isInCart = false;

        for (let i = 0; i < items.length; i++) {
            console.log('Searching ...');
            if (items[i].product.id == productId && items[i].variationId == variationId) {
                items[i].quantity++;
                isInCart = true;
                console.log('Match found');
                break;
            }
        }

        if (!isInCart) {
            console.log('Fetching API ...');
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

        // Save data
        console.log('Saving results');
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

    // Rendering
    render() {
        const {data, errors} = this.state;
        const {items, customer, shipping, payment} = data;
        if (data.items.length == 0) return <React.Fragment/>
        if (!data.items.length) return <React.Fragment/>
        return (
            <div>
                <section className="checkout-container">
                    <div className="container my-4">
                        <div className="checkout-content">
                            {/*<p className="checkout-title">KOŠÍK</p>*/}
                            <h2 className="text-center">Košík</h2>

                            <Cart
                                items={items}
                                handleStateChange={(e) => this.handleCartStateChange(e)}
                            />

                            <Upsells addToCart={this.addToCart}/>

                            <div className="form-container d:grid">
                                <div className="left-form">
                                    <h2 className="text-center">Doručovací adresa</h2>
                                    <Form
                                        customer={customer}
                                        handleChange={(e) => this.handleFormChange(e)}
                                    />
                                </div>

                                <div className="right-form">
                                    <div className="bill-data">
                                        <h2 className="text-center">Objednávka</h2>
                                        <div className="bill-rows">
                                            {items.map((item, index) => (
                                                <div className="bill d:flex flex:row" key={index}>
                                                    <span>{item.product.name} <b>x {item.quantity}</b></span>
                                                    <span>{item.product.variations[item.variationId].salePrice * item.quantity},-</span>
                                                </div>
                                            ))}
                                            <div className="bill d:flex flex:row row-bold">
                                                <span><b>Mezisoučet: </b></span>
                                                <span><b>{this.getSubtotal()},-</b></span>
                                            </div>

                                            <div className="bill d:flex flex:row row-total">
                                                <span><b>Poštovné: </b></span>
                                                <span><b><span>Česká pošta:  </span> + 89,-</b></span>
                                            </div>
                                        </div>
                                    </div>

                                    <PaymentAndShippingOptions
                                        shipping={shipping}
                                        payment={payment}
                                        handleStateChange={(e) =>
                                            this.handlePaymentShippingChange(e)
                                        }
                                    />
                                    <div className="total-pay">
                                        <h3 className="text-center">Celkem:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.getTotal()},-</h3>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            className="btn btn-primary btn-order"
                                            onClick={(e) => this.handleNewOrder(e)}
                                            disabled={errors.length == 0}
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
