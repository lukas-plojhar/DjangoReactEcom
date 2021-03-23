import React, {Component} from "react";
import qs from 'query-string';
import {Link} from 'react-router-dom';
import {Footer} from "../common/Footer";
import axios from "axios";
import Joi from "joi-browser";
import {ProductCarousel} from "../common/Carousel";
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
        shipping: "cod",
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
        this.handleOrder = this.handleOrder.bind(this);
        this.handleShippingChange = this.handleShippingChange.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFormBlur = this.handleFormBlur.bind(this);

        this.getTotal = this.getTotal.bind(this);
        this.getSubTotal = this.getSubTotal.bind(this);
    }

    // Hooks
    async componentDidMount() {
        const {data, params} = this.state;
        const {cart} = data;

        let isLoading = true;
        if (params.variationId && params.variationId > 2) params.variationId = 0; // Integrity check
        if (params.productId) {

            // Search cart for match
            cart.items.forEach((item, index) => {
                if (item.product.id == params.productId && item.variationId == params.variationId) {
                    cart.items[index].quantity++;
                    isLoading = false;
                }
            })

            // Fetch product
            if (isLoading) {
                const product = await axios(`${process.env.REACT_APP_URL}/products/${params.productId}`).then(response => response.data);
                cart.items.push({
                    product: product,
                    quantity: 1,
                    variationId: params.variationId || 0
                });
                isLoading = false;
            }
        }

        // Save new state
        this.setState({data, isLoading});
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

    //Handlers
    handleRemove() {
        console.log('remove item ');
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

    handleShippingChange(e) {
        const state = this.state;
        state.data.cart.shipping = e.target.id;
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

    handleOrder() {
        const {errors, data} = this.state;
        if (Object.keys(errors).length === 0 && Object.keys(data.customer).length === 7) alert('order sent');

        else alert('order NOT sent');

    }

    // Functions
    getTotal() {
        const {shipping} = this.state.data.cart;
        let total = this.getSubTotal();

        total += parseInt(process.env.REACT_APP_WEBSITE_SHIPPING);
        if (shipping == "cod") total += parseInt(process.env.REACT_APP_WEBSITE_COD);

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
        const {items, shipping} = cart;

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
                                <div className="col-6 col-md-4 col-lg-2 text-center">
                                    <Link to={`/produkt/${id}`}>
                                        <img src={`${process.env.REACT_APP_URL}${featuredImage}`}/>
                                    </Link>
                                    {/*Quantity buttons for mobile*/}
                                    <div className="text-center mt-2 d-md-none">
                                        <button className="btn btn-outline-secondary d-inline-block btn-single"
                                                type="button"
                                                onClick={() => this.handleDecrease(index)}>-
                                        </button>
                                        <p className="d-inline-block mx-1 font-weight-bold">{quantity} ks</p>
                                        <button className="btn btn-outline-secondary d-inline-block btn-single"
                                                type="button"
                                                onClick={() => this.handleIncrease(index)}>+
                                        </button>
                                    </div>
                                </div>
                                <div className="col-6 col-md-8 col-lg-10 mt-1">
                                    <div className="d-block">
                                        <Link to={`/produkt/${id}`}>
                                            <h4 className="d-inline-block mb-1">{name}</h4>
                                        </Link>
                                        {/*REMOVE BUTTON*/}
                                    </div>
                                    <p>
                                        {variation.name}<br/>
                                        {/*<small>{variation.content}</small>*/}
                                    </p>
                                    {/*Quantity buttons for desktop*/}
                                    <div className="text-left mt-2 d-none d-md-block">
                                        <button className="btn btn-outline-secondary d-inline-block btn-single"
                                                type="button"
                                                onClick={() => this.handleDecrease(index)}>-
                                        </button>
                                        <p className="d-inline-block mx-1 font-weight-bold">{quantity} ks</p>
                                        <button className="btn btn-outline-secondary d-inline-block btn-single"
                                                type="button"
                                                onClick={() => this.handleIncrease(index)}>+
                                        </button>
                                    </div>
                                    <hr className="d-lg-none"/>
                                    <p>Cena: {variation.regularPrice * quantity}</p>
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
                            <ProductCarousel/>
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
                        <div className="col-12 col-md-6">
                            <h4 className="text-center">Souhrn</h4>
                            {items.map((item, index) =>
                                <SummaryRow left={`${item.product.name} x ${item.quantity}`}
                                            right={`${item.product.variations[item.variationId].salePrice * item.quantity}${process.env.REACT_APP_CURRENCY}`}
                                            key={index}/>
                            )}

                            <SummaryRow left={`Postovne`}
                                        right={`${this.getShippingCost()}${process.env.REACT_APP_CURRENCY}`}/>

                            <SummaryRow left={`Mezisoucet`}
                                        right={`${this.getSubTotal()}${process.env.REACT_APP_CURRENCY}`}/>


                            {/*Payment and shipping selection*/}
                            <React.Fragment>
                                <hr/>
                                <h4 className="text-center">Platební metoda</h4>

                                {/*COD*/}
                                <div className="d-block my-1 clearfix">
                                    <p className={`d-inline-block float-left`}>
                                        <input id="cod"
                                               type="radio"
                                               className="input-radio mr-2"
                                               name="payment_method"
                                               checked={shipping == 'cod'}
                                               onChange={(e) => this.handleShippingChange(e)}
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
                                               checked={shipping == 'cc'}
                                               onChange={(e) => this.handleShippingChange(e)}
                                        />
                                        <label htmlFor="cc">Platba kartou</label>
                                    </p>
                                    <small className="d-inline-block float-right mr-2">zdarma</small>
                                </div>

                                {/*<StripeGateway/>*/}
                                <InjectedStripeGatewayForm/>

                            </React.Fragment>

                            {/*Order button*/
                            }
                            <div className="d-block text-center">
                                <h3 className="mt-2">Celkem:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.getTotal()}{process.env.REACT_APP_CURRENCY}</h3>
                                <button className="btn btn-primary"
                                        onClick={this.handleOrder}>Objednat
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </React.Fragment>
    }
}

// Component for form
const Input = ({name, label, value, onChange, onBlur, error}) => {
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
                {error && <img src="/assets/img/icon_cross.svg" style={{width: 16, marginRight: 5, marginBottom: 2}}/>}
                {error && <small className="alert-danger" style={{background: 'white'}}>{error}</small>}
            </div>


        </div>
    )
};

// Component for summary
const SummaryRow = ({left, right}) => {
    return <div className="d-block my-1 clearfix">
        <p className="d-inline-block float-left">{left}</p>
        <p className="d-inline-block float-right mr-2">{right}</p>
    </div>
}

// Component for shipping radio buttons


//
//
// const CheckoutPage = () => {
//
//     const [isLoading, setIsLoading] = useState(true);
//     const [state, setState] = useState(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE) || emptyTemplate);
//
//     useEffect(() => {
//         async function fetchData() {
//             console.log(state);
//             if (params.productId) {
//
//                 // Search cart for match
//                 state.cart.items.forEach(item => {
//                     console.log('iteration')
//                     if (item.product.id == params.productId && item.variationId == params.variationId) {
//                         state.item.quantity++;
//                         setIsLoading(false);
//                     }
//                 })
//
//                 // Fetch product
//                 if (isLoading) {
//                     const data = await axios(`${process.env.REACT_APP_URL}/products/${params.productId}`).then(response => response.data);
//                     state.cart.items.push(JSON.parse(data));
//                 }
//             }
//             // Save new state
//             setState(state);
//         }
//     }, []);
//
//     // Handlers
//     const handleIncrease = () => {
//         console.log('increment');
//     }
//
//     const handleDecrease = () => {
//         console.log('decrease');
//     }
//
//     const handleOrder = () => {
//         alert('new order');
//     }
//
//     return <React.Fragment>
//
//         {/*Cart*/}
//         <section>
//             <div className="container">
//                 <div className="row pt-1 mt-1 py-md-2 my-md-2">
//
//                     {/*Items*/}
//                     <div className="col-4 text-center">
//                         {/*<img src={`${process.env.REACT_APP_URL}${item.featuredImage}`}/>*/}
//                     </div>
//                     <div className="col-8">
//                         <h3 className="d-inline-block">Product name</h3>
//                         <button className="btn btn-outline-secondary d-inline-block ml-2 btn-single" type="button">x
//                         </button>
//                         <p>product variation</p>
//                         <div className="text-left">
//                             <button className="btn btn-outline-secondary d-inline-block btn-single" type="button"
//                                     onClick={handleDecrease}>-
//                             </button>
//                             <p className="d-inline-block mx-1 font-weight-bold">1 ks</p>
//                             <button className="btn btn-outline-secondary d-inline-block btn-single" type="button"
//                                     onClick={handleIncrease}>+
//                             </button>
//                         </div>
//                         <p>
//                             cena
//                         </p>
//                     </div>
//
//                 </div>
//             </div>
//         </section>
//         <hr/>
//         <section>
//             <div className="container">
//                 <div className="row py-2 my-2">
//
//                     {/*Form - left side*/}
//                     <div className="col-12 col-md-6">
//                         <form><input type="text" className="form-control"/><input type="text" className="form-control"/><input
//                             type="text" className="form-control"/><input type="text" className="form-control"/></form>
//                     </div>
//
//                     {/*Summary - right side*/}
//                     <div className="col-12 col-md-6">
//                         <div>
//                             <p className="d-inline-block float-left">Paragraph</p>
//                             <p className="d-inline-block float-right mr-2">Paragraph</p>
//                         </div>
//                         <hr className="my-3"/>
//                     </div>
//
//                 </div>
//             </div>
//         </section>
//         <Footer/>
//     </React.Fragment>
// }

export default CheckoutPage;



