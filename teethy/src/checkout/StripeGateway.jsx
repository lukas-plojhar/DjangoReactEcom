import React, {Component} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
    ElementsConsumer,
    Elements,
    CardNumberElement, CardExpiryElement, CardCvcElement,
} from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_t963k6tCelbOZQuFhNw3xTV9');

class InjectedStripeGatewayForm extends Component {
    handleSubmit = async event => {
        event.preventDefault();
        const {stripe, elements} = this.props;
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardNumberElement);
        const clientSecret = await axios.get(`${process.env.REACT_APP_URL}/orders/intent`).then(response => response.data)

        console.log(clientSecret);

        stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card
            }
        }).then(function (result) {
            if (result.error) {
                console.log('Error');
                console.log(result.error.message);
            } else {
                console.log('Done');
                console.log(result.paymentIntent.id);
            }
        });

    };


    render() {
        return (
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({stripe, elements}) => (
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Číslo karty</label>
                                <CardNumberElement className="form-control mb-1"/>
                            </div>

                            <div className="form-group">
                                <label>Platnost do</label>
                                <CardExpiryElement className="form-control mb-1"/>

                            </div>

                            <div className="form-group">
                                <label>Kód CVC</label>
                                <CardCvcElement className="form-control"/>
                            </div>

                            <button disabled={!this.props.stripe} className="btn-pay">
                                Buy Now
                            </button>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        );
    }

}

export default InjectedStripeGatewayForm;