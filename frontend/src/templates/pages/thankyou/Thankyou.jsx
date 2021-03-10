import React, {Component} from 'react';
import axios from 'axios';
import {API, GoogleAPIKey} from "../../../Globals";
import Footer from "../../components/footer/Footer";
import TopNav from "../../components/topnavbar/nav";


class Thankyou extends Component {
    constructor(props) {
        super(props);
    }

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
        const {id} = this.props.match.params;
        const url = `${API}/orders/${id}`;
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

        if (customer === undefined) return null;

        return <React.Fragment>
            <TopNav/>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-12">
                        <h1 className="text-center font-weight-bold">Děkujeme za Vaši objednávku</h1>
                        <h2 className="text-center pb-3">Zásilku odešleme v co nejkratším čase.</h2>
                        {this.state.payment == "Na dobirku" ? (<h2 className="text-center pb-3">
                            Při převzetí zaplatíte kurýrovi XXX
                        </h2>) : null}
                    </div>
                    <div className="col-12 col-md-6">
                        <p>Potvrzení posíláme i na email, a o dalším průběhu Vás
                            budeme informovat.</p>
                        <p>
                            Číslo objednávky: <b>#{this.state.id}</b><br/>
                            Datum objednávky: <b>{this.state.created}</b><br/>
                        </p>
                        <p>
                            <iframe className="img-fluid" style={{border: 0, frameBorder: 0, minHeight: 200}}
                                    src={`https://www.google.com/maps/embed/v1/place?q=Jizni%202513%2F16&key=${GoogleAPIKey}`}
                                    allowFullScreen></iframe>
                        </p>
                    </div>

                    <div className="col-12 col-md-6">
                        <h6>Kam zásilku doručíme?</h6>
                        <hr/>
                        <p>
                            <b>Adresát</b>: {customer.firstName} {customer.lastName}<br/>
                            <b>Adresa</b>: {customer.address}, {customer.city} {customer.postcode}<br/>
                            <b>Telefon</b>: {customer.phone}<br/>
                        </p>
                        <p>
                            <b>Doprava</b>: {this.state.shipping}<br/>
                            <b>Platba</b>: {this.state.payment}<br/>
                        </p>
                        <hr/>
                        <p>
                            <h6>Co bude zásilka obsahovat?</h6>
                            {items.map((item, index) => {
                                return <span key={index}>{item.product.name} x <b>{item.quantity}</b></span>
                            })}
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    }
}

export default Thankyou;