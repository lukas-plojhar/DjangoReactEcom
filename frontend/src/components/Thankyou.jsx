import React, {Component} from 'react';
import axios from 'axios';
import Loading from "./common/Loading";

const API = 'https://identcz.herokuapp.com';

class Thankyou extends Component {
    constructor(props) {
        super(props);
    }

    googleApiKey = "AIzaSyDoaUMam36O9t_ezNo1s6e3O6a3NaEcAFk";

    shippingOptions = Object.freeze({
        '1': 'Česká pošta',
        '2': 'Slovenská pošta'
    });

    paymentOptions = Object.freeze({
        '1': 'Dobírka',
        '2': 'Platba kartou'
    });

    state = {}

    async componentDidMount() {
        const {data} = this.props.location.state;
        const url = `${API}/orders/${data}`;
        const response = await axios.get(url).then(response => response.data);


        this.setState({
            id: response.id,
            customer: response.customer,
            items: response.cart.items,
            shipping: response.cart.shipping,
            payment: response.cart.payment,
            created: response.created
        });
    }

    render() {
        const {customer, items, shipping, payment, created} = this.state;

        if (customer === undefined) return <Loading/>

        return <div className="container">
            <div className="row pt-5">
                <div className="col-12">
                    <h1 className="text-center font-weight-bold">Dekujeme za Vasi objednavku</h1>
                    <h2 className="text-center pb-3">Odesleme v co nejkratsim case blablablalba</h2>
                    <p>Potvrzeni posilame i na email</p>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <p>
                        <b>Preprava</b>: {this.state.shipping}<br/>
                        <b>Platba</b>: {this.state.payment}<br/>
                    </p>
                </div>
                <div className="col-6">
                    <p>
                        {items.map((item, index) => {
                            return <span key={index}>{item.product.name}</span>
                        })}
                    </p>
                </div>
            </div>

            <hr/>

            <div className="row">
                <div className="col-6">
                    <iframe className="img-fluid" style={{border: 0, frameBorder: 0, minHeight: 200}}
                            src={`https://www.google.com/maps/embed/v1/place?q=Jizni%202513%2F16&key=${this.googleApiKey}`}
                            allowFullScreen></iframe>
                </div>
                <div className="col-6">
                    <h6>Dorucovaci adresa</h6>
                    <p>
                        <b>Adresát</b>: {customer.firstName} {customer.lastName}<br/>
                        <b>Adresa</b>: {customer.address}, {customer.city} {customer.postcode}<br/>
                        <b>Telefon</b>: {customer.phone}<br/>
                    </p>
                </div>
            </div>

            <hr/>

            <div className="row">
                <div className="col-8">
                    <h1 className="font-weight-bold">Sledování objednávky</h1>
                </div>
                <div className="col-4">
                    <p>
                        Číslo objednávky: #{this.state.id}<br/>
                        Datum objednávky: {this.state.created}<br/>
                        <a href="">Doklad o zaplacení</a>
                    </p>
                </div>
            </div>

            <hr/>

            <div className="row">
                <div className="col-4">
                    <img src="http://localhost:3000/static/media/krabicka_side.4c6712cb.png" alt=""
                         className="img-fluid"/>
                </div>
                <div className="col-8">
                    <h2 className="font-weight-bolder">Předpokládané doručení do 02.03.2021</h2>
                    <p>
                        <a href="">Sledovat objednávku</a>
                    </p>
                    <p>Vaše objednávka byla podána na České poště.</p>
                </div>
            </div>
        </div>
    }
}

export default Thankyou;