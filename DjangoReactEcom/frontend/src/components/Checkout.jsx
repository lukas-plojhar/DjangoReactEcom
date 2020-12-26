import React, {Component} from 'react';
import CartForm from "./checkout/CartForm";
import OrderForm from './checkout/OrderForm';
import ServicesForm from './checkout/ServicesForm';
import OrderDetails from './checkout/OrderDetails';
import UpsellForm from "./checkout/UpsellForm";
import Joi from 'joi-browser';
import axios from "axios";

class Checkout extends Component {
    constructor(props) {
        super(props);

        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handlePaymentChange = this.handlePaymentChange.bind(this);
        this.handleShippingChange = this.handleShippingChange.bind(this);
        this.handleOrderButtonClick = this.handleOrderButtonClick.bind(this);
        this.handleItemRemoveButtonClick = this.handleItemRemoveButtonClick.bind(this);
    }

    state = JSON.parse(localStorage.getItem('teethycz')) === null ?
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
            "errors": {}
        }
        :
        JSON.parse(localStorage.getItem('teethycz'));
    ;

    schema = {
        firstName: Joi.string().required().label("User name"),
        lastName: Joi.string().required(),
        email: Joi.string().email({minDomainAtoms: 2}).required(),
        phone: Joi.string().min(9).required(),
        address: Joi.string().required(),
        city: Joi.string().required(),
        postcode: Joi.number().min(5).required(),

    };


    validate() {
        const options = {abortEarly: false};
        const {error} = Joi.validate(this.state.customer, this.schema, options);
        if (!error) return null;
        const errors = {};
        for (let item of error.details)
            errors[item.path[0]] = item.message;
        return errors;
    }

    validateProperty(name, value){
        const object = {[name]: value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(object, schema);
        console.log(error);
        return error ? error.details[0].message : null;
    };

    async componentDidMount() {
        let items = this.state.items;
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
                    // 'product': {'id': newProduct.id},
                    'product': newProduct,
                    'quantity': 1
                });
            }
        }

        // Saving the data
        this.setState({items});
    }

    componentDidUpdate() {
        // nutno updatovat provozni variables jako total, discount, etc.
        console.log('component updated');
        localStorage.setItem('teethycz', JSON.stringify(this.state));
    }

    handleCustomerChange(e) {
        this.validateProperty(e.target.name, e.target.value);
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
        const errors = this.validate();
        if (errors) {
            this.setState({errors});
            console.log(this.state.errors);
        }
        return null;

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
                            errors = {this.state.errors}
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
                            isFormValid={this.validate()}
                            handleClick={this.handleOrderButtonClick}
                        />
                    </div>
                </div>
            </React.Fragment>);
    }
}

export default Checkout;