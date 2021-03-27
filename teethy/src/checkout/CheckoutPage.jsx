import React, {Component, useRef} from "react";
import qs from 'query-string';
import {Link, useHistory} from 'react-router-dom';
import {Footer} from "../common/Footer";
import {Collapse} from 'react-bootstrap';
import axios from "axios";
import Joi from "joi-browser";
import {UpsellCarousel} from "../common/Carousel";
import InjectedStripeGatewayForm from "./StripeGateway";


// Translated input labels
let locale = {
    firstName: "Křestní jméno",
    lastName: "Příjmení",
    email: "E-mailová adresa",
    phone: "Telefon",
    address: "Adresa",
    city: "Město",
    postcode: "PSČ",
};

// Validation schema for Joi
let schema = {
    firstName: Joi.string().required().label(locale.firstName),
    lastName: Joi.string().required().label(locale.lastName),
    email: Joi.string().email({minDomainAtoms: 2}).required().label(locale.email),
    phone: Joi.string().min(8).required().label(locale.phone),
    address: Joi.string().required().label(locale.address),
    city: Joi.string().required().label(locale.city),
    postcode: Joi.number().min(4).max(6).required().label(locale.postcode)
};

let fields = ['email', 'phone', 'firstName', 'lastName', 'address', 'city', 'postcode'];


// Empty data template
const emptyTemplate = {
    cart: {
        items: [],
        payment: "cod",
    },
    customer: {},
}

class CheckoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            isLoading: true,
            params: qs.parse(this.props.location.search),
            data: localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE)
                ? JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE))
                : emptyTemplate,
            errors: {},
        });

        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleOrder = this.handleOrder.bind(this);
        this.handlePaymentChange = this.handlePaymentChange.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFormBlur = this.handleFormBlur.bind(this);

        this.addToCart = this.addToCart.bind(this);

        this.getTotal = this.getTotal.bind(this);
        this.getSubTotal = this.getSubTotal.bind(this);
    }

    // Hooks
    async componentDidMount() {
        const {params} = this.state;
        if (Object.keys(params).length > 0) {
            this.addToCart(params.productId, params.variationId);
        }
        this.setState({isLoading: false});
    }

    componentDidUpdate() {
        localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE, JSON.stringify(this.state.data));
    }

    // Functions
    validateProperty(name, value) {
        const object = {[name]: value};
        const schemaLocal = {[name]: schema[name]};
        const {error} = Joi.validate(object, schemaLocal);
        return error ? error.details[0].message : null;
    };

    async addToCart(productId, variationId = 0) {
        const {data} = this.state;
        const {cart} = this.state.data;

        let isLoading = true;
        // Search cart for match
        cart.items.forEach((item, index) => {
            if (item.product.id == productId && item.variationId == variationId) {
                cart.items[index].quantity++;
                isLoading = false;
            }
        })

        // Fetch product
        if (isLoading) {
            const product = await axios(`${process.env.REACT_APP_URL}/products/${productId}`).then(response => response.data);
            cart.items.push({
                product: product,
                quantity: 1,
                variationId: variationId
            });
            isLoading = false;
        }

        // Save new state
        this.setState({data});
    }

    // Handlers
    handleDelete(index) {
        const {data} = this.state;
        data.cart.items = data.cart.items.splice(index - 1, 1);
        this.setState({data});
    }

    handleIncrease(index) {
        const {data} = this.state;
        data.cart.items[index].quantity++;
        this.setState({data});
    }

    handleDecrease(index) {
        const state = this.state;
        const {items} = state.data.cart;

        if (items[index].quantity == 1) items.splice(index, 1);
        else items[index].quantity--;

        this.setState(state);
    }

    handlePaymentChange(e) {
        const state = this.state;
        state.data.cart.payment = e.target.id;
        this.setState(state);
    }

    handleFormChange(e) {
        const {name, value} = e.target;
        const {data, errors} = this.state;
        const {customer} = data;

        // Change
        customer[name] = value;

        // Validation
        const errorMessage = this.validateProperty(name, value);
        if (!errorMessage) delete errors[name];

        this.setState({data, errors});
    }

    handleFormBlur(e) {
        const {name, value} = e.target;
        const {errors} = this.state;

        // Validation
        const errorMessage = this.validateProperty(name, value);
        if (errorMessage) errors[name] = 'Zkontrolujte tento údaj.';
        else delete errors[name];

        this.setState({errors});
    }

    async handleOrder(e) {
        e.preventDefault();
        const {errors, data} = this.state;
        const {customer, cart} = data;

        // Parsing enums
        if (cart.payment == 'cod') cart.payment = 1;
        if (cart.payment == 'cc') cart.payment = 2;

        // Creating order
        const url = `${process.env.REACT_APP_URL}/orders/create/`;
        const config = {
            headers: {'Content-Type': 'application/json'},
        };
        const body = {
            customer: customer,
            cart: cart
        };

        const response = await axios.post(url, JSON.stringify(body), config);
        if (response.status === 201) {
            this.props.history.push(`/dekujeme/${response.data}`)
        }
    }

    // Functions
    getTotal() {
        const {payment} = this.state.data.cart;
        let total = this.getSubTotal();

        total += parseInt(process.env.REACT_APP_WEBSITE_SHIPPING);
        if (payment == "cod") total += parseInt(process.env.REACT_APP_WEBSITE_COD);

        return total;
    }

    getSubTotal() {
        let total = 0;
        const {items} = this.state.data.cart;
        items.forEach(item => {
            total += item.product.variations[item.variationId].salePrice * item.quantity
        })
        return total;
    }

    getShippingCost() {
        return 89;
    }

    render() {
        if (this.state.isLoading) return <p>Loading ... </p>

        // Destructualization of cart
        const {data, errors} = this.state;
        const {cart, customer} = data;
        const {items, payment} = cart;

        const isDisabled = !(Object.keys(errors).length === 0 && Object.keys(data.customer).length === 7);

        return <React.Fragment>
            {/*Cart*/}
            <section>
                <div className="container pt-1 mt-1 py-md-2 my-md-2">
                    <h4 className="text-center">Košík</h4>
                    {/*Items*/}
                    {
                        items.map((item, index) => {
                            const {product, quantity, variationId} = item;
                            const {id, name, featuredImage, variations} = product;
                            const variation = variations[variationId];
                            return <div className="row mb-2" key={index}>
                                <div className="col-12 col-md-6 col-lg-2 text-center align-self-center">
                                    <Link to={`/produkt/${id}`}>
                                        <img src={`${process.env.REACT_APP_URL}${featuredImage}`}/>
                                    </Link>
                                </div>
                                <div className="col-12 col-md-6 col-lg-10 mt-1">
                                    <div className="d-block">
                                        <Link to={`/produkt/${id}`}>
                                            <h6 className="mb-1 d-inline-block">{name}</h6>
                                        </Link>
                                        {/*Remove button*/}
                                        <img src="/assets/img/icon_remove.svg"
                                             className="mb-1 d-inline-block"
                                             style={{maxWidth: '1.1rem', marginLeft: 10, marginTop: 6}}
                                             onClick={() => this.handleDelete(index)}/>

                                        {/*Variation description*/}
                                        <small
                                            className="mb-1 d-block"
                                            style={{color: 'black'}}>
                                            - {variation.name}<br/>
                                            - {variation.content}
                                        </small>
                                    </div>

                                    {/*Quantity buttons*/}
                                    <div className="my-1">
                                        <img src="/assets/img/icon_minus.svg" style={{maxWidth: '1.25rem'}}
                                             onClick={() => this.handleDecrease(index)}/>
                                        <p className="d-inline-block"
                                           style={{margin: '5px'}}>{quantity} ks</p>
                                        <img src="/assets/img/icon_plus.svg" style={{maxWidth: '1.25rem'}}
                                             onClick={() => this.handleIncrease(index)}/>
                                    </div>
                                    <p className="font-weight-bold">Cena: {variation.salePrice * quantity}{process.env.REACT_APP_CURRENCY}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </section>

            {/*Upsells*/}
            <section className="bg-light py-2 mt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="text-center">Přidej k objednávce se slevou</h4>
                            <UpsellCarousel buttonText="Přidat do košíku" handleClick={this.addToCart}/>
                        </div>
                    </div>
                </div>
            </section>

            {/*Address form*/}
            <section className="pb-2">
                <div className="container">
                    <div className="row py-2 my-2">

                        {/*Form - left side*/}
                        <div className="col-12 col-md-6">
                            <h4 className="text-center">Doručovací adresa</h4>
                            <form>
                                {fields.map((field, i) =>
                                    <Input
                                        key={i}
                                        name={field}
                                        value={customer[field]}
                                        label={locale[field]}
                                        onChange={this.handleFormChange}
                                        onBlur={this.handleFormBlur}
                                        error={errors[field]}
                                    />
                                )}
                            </form>
                        </div>

                        {/*Summary - right side*/}
                        <div className="col-12 col-md-6 mt-2">
                            <h4 className="text-center">Souhrn</h4>
                            {items.map((item, index) =>
                                <SummaryRow left={`${item.product.name} x ${item.quantity}`}
                                            right={`${item.product.variations[item.variationId].salePrice * item.quantity}${process.env.REACT_APP_CURRENCY}`}
                                            key={index}/>
                            )}

                            <SummaryRow left={`Poštovné`}
                                        right={`${this.getShippingCost()}${process.env.REACT_APP_CURRENCY}`}
                                        icon="/assets/img/icon_gls.png"
                                        boldText={true}
                            />

                            {/*<SummaryRow left={`Mezisoučet`}*/}
                            {/*            right={`${this.getSubTotal()}${process.env.REACT_APP_CURRENCY}`}/>*/}


                            {/*Payment and shipping selection*/}
                            <React.Fragment>
                                <hr/>
                                <h4 className="text-center mt-2">Platební metoda</h4>

                                {/*COD*/}
                                <div className="d-block my-1 clearfix">
                                    <p className={`d-inline-block float-left`}>
                                        <input id="cod"
                                               type="radio"
                                               className="input-radio mr-2"
                                               name="payment_method"
                                               checked={payment == 'cod'}
                                               onChange={(e) => this.handlePaymentChange(e)}
                                        />
                                        <label htmlFor="cod">Dobírku</label>
                                    </p>

                                    <p className="d-inline-block float-right mr-2">+&nbsp;{process.env.REACT_APP_WEBSITE_COD}{process.env.REACT_APP_CURRENCY}</p>

                                </div>

                                {/*CC*/}
                                <div className="d-block my-1 clearfix">
                                    <p className="d-inline-block float-left">
                                        <input id="cc"
                                               type="radio"
                                               className="input-radio mr-2"
                                               name="payment_method"
                                               checked={payment == 'cc'}
                                               onChange={(e) => this.handlePaymentChange(e)}
                                        />
                                        <label htmlFor="cc">Platba kartou</label>
                                    </p>
                                    <small className="d-inline-block float-right mr-2">zdarma</small>
                                </div>

                                {/* Collapsibles for payments */}
                                <Collapse in={payment == 'cod'}>
                                    <div id="cod">
                                        <div className="d-block text-center">
                                            <h3 className="mt-2">Celkem:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.getTotal()}{process.env.REACT_APP_CURRENCY}</h3>
                                            <button className="btn btn-primary"
                                                    onClick={this.handleOrder}
                                                    disabled={isDisabled}
                                            >Objednat
                                            </button>
                                        </div>
                                    </div>
                                </Collapse>

                                <Collapse in={payment == 'cc'}>
                                    <div id="cc">
                                        <InjectedStripeGatewayForm total={this.getTotal()}
                                                                   isDisabled={isDisabled}
                                                                   handleOrder={this.handleOrder}
                                        />
                                    </div>
                                </Collapse>w
                            </React.Fragment>

                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </React.Fragment>
    }
}

// Component for form
const
    Input = ({name, label, value, onChange, onBlur, error}) => {
        return (
            <div className="form-group">
                {!error && value && <img src="/assets/img/icon_check.svg" style={{width: 16, marginRight: 5}}/>}
                <label htmlFor={name}>{label}</label>

                <input type="text"
                       className="form-control"
                       id={name}
                       name={name}
                       value={value}
                       onChange={onChange}
                       onBlur={onBlur}
                />
                <div className="d-block">
                    {error &&
                    <img src="/assets/img/icon_cross.svg" style={{width: 16, marginRight: 5, marginBottom: 2}}/>}
                    {error && <small className="alert-danger" style={{background: 'white'}}>{error}</small>}
                </div>


            </div>
        )
    };

// Component for summary
export const
    SummaryRow = ({left, right, icon, boldText}) => {
        return <div className={`d-block my-1 clearfix ` + (boldText && 'font-weight-bold')}>
            <p className="d-inline-block float-left">{left}</p>
            {icon && <img src={icon} style={{maxWidth: 60, marginLeft: 10, marginTop: -9}}
                          className="d-inline-block float-left"/>}
            <p className="d-inline-block float-right mr-2">{right}</p>
        </div>
    }


export default CheckoutPage;



