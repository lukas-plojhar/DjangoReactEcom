import React, {Component} from "react";
import "./assets/css/checkout.css";
import {Link} from "react-router-dom";
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
            data: JSON.parse(localStorage.getItem(Website)) === null ?
                {
                    "customer": {},
                    "items": [],
                    "shipping": "1",
                    "payment": "1",
                }
                :
                JSON.parse(localStorage.getItem(Website)),
            "errors": {}
        }
    }

    // Hooks
    async componentDidMount() {
        let {items} = this.state.data;
        let productId = this.props.match.params.productId;

        // Updating items in carts
        if (productId) {
            const config = {
                // 'headers': {
                //     'Access-Control-Allow-Origin': '*'
                // }
            };
            const newProduct = await axios.get(`${API}/products/${productId}`, config).then(response => response.data);
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

    // Handlers for changes
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
                        pathname: `/dekujeme`,
                        state: {data}
                    });
                }
                ;
            })
            .catch(error => console.log(error));
    }

    handlePaymentShippingChange(e) {
        const {data} = this.state;
        data[Object.keys(e)] = e[Object.keys(e)];
        this.setState({data});
    }

    // Cart handlers
    async addToCart(id) {
        const {items} = this.state.data;
        const isInCart = items.filter(item => item.product.id == id).length;

        if (!isInCart) {
            items.push({
                'product': await axios.get(`${API}/products/${id}`).then(response => response.data),
                'quantity': 1
            });
        } else {
            items.forEach(item => {
                if (item.product.id == id) {
                    item.quantity++;
                    return;
                }
            });
        }

        // Saving the data
        const {data} = this.state;
        data.items = items;
        this.setState({data});
    }

    render() {
        const {data} = this.state;
        return (
            <div>
                <section className="checkout-container">
                    <div className="container my-5">
                        <div className="checkout-content">
                            {/*<p className="checkout-title">Rekapitulace objednavky</p>*/}
                            <h2 className="checkout-title">Vas kosik</h2>
                            <Cart
                                items={data.items}
                                handleStateChange={(e) => this.handleCartStateChange(e)}
                            />
                            <Upsells
                                addToCart={e => this.addToCart(e)}
                            />
                            <div className="form-container d:grid">
                                <div className="left-form">
                                    <Form
                                        customer={data.customer}
                                        handleChange={(e) => this.handleFormChange(e)}
                                    />
                                </div>
                                <div className="right-form">
                                    <div className="bill-data">
                                        <p className="text:center form-title">VASE OBJEDNAVKA</p>
                                        <Summary
                                            items={data.items}
                                        />
                                    </div>
                                    <PaymentAndShippingOptions
                                        shipping={data.shipping}
                                        payment={data.payment}
                                        handleStateChange={(e) => this.handlePaymentShippingChange(e)}
                                    />
                                    <div className="total-pay d:flex flex:row">
                                        <span>Total Cost</span>
                                        <span>4200</span>
                                    </div>
                                    {/*<Link to="">*/}
                                    <button className="btn btn-primary"
                                            onClick={(e) => this.handleNewOrder(e)}>OBJEDNAT
                                    </button>
                                    {/*</Link>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}
