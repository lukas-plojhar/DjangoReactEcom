import React, {Component} from 'react';
import {loadStripe} from '@stripe/stripe-js'
import {
    CardElement,
    ElementsConsumer,
    Elements,
    useStripe,
    useElements, CardNumberElement, CardExpiryElement, CardCvcElement,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_t963k6tCelbOZQuFhNw3xTV9');

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "#212529",
            fontSize: "16px",
            fontFamily: "Nunito, sans-serif",
            fontSmoothing: "antialiased",
            "::placeholder": {
                color: "#CFD7DF"
            }
        },
        invalid: {
            color: "#e5424d",
            ":focus": {
                color: "#303238"
            }
        }
    }
};

class StripeGateway extends Component {
    handleSubmit = async event => {
        event.preventDefault();
        const {stripe, elements} = this.props;
        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);
        if (result.error) {
            console.log(result.error.message);
        } else {
            console.log(result.token);
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <CardNumberElement options={CARD_ELEMENT_OPTIONS}/>
                    <CardExpiryElement options={CARD_ELEMENT_OPTIONS}/>
                    <CardCvcElement options={CARD_ELEMENT_OPTIONS}/>
                    <button disabled={!this.props.stripe} className="btn-pay">
                        Buy Now
                    </button>
                </form>
            </div>
        );
    }
}

export default function InjectedStripeGatewayForm() {
    return (
        <Elements stripe={stripePromise}>
            <ElementsConsumer>
                {
                    ({stripe, elements}) => (
                        <StripeGateway stripe={stripe} elements={elements}/>
                    )
                }
            </ElementsConsumer>
        </Elements>

    );
}
