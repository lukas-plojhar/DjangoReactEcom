import React, {Component} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    ElementsConsumer,
    Elements,
    CardNumberElement, CardExpiryElement, CardCvcElement,
} from '@stripe/react-stripe-js';
import axios from 'axios';


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
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardNumberElement);
        const clientSecret = await axios.get(`${process.env.REACT_APP_URL}/orders/intent`).then(response => response.data)

        console.log(clientSecret);

        // const card = elements.getElement(CardNumberElement);
        // const result = await stripe.createToken(card);
        // if (result.error) {
        //     console.log(result.error.message);
        // } else {
        //     console.log(result.token);
        //     let headers = {'Content-Type': 'application/json'};
        //     axios.post(`${process.env.REACT_APP_URL}/orders/charge/`, JSON.stringify(result.token.id));
        // }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/*<CardElement options={CARD_ELEMENT_OPTIONS}></CardElement>*/}
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

const stripePromise = loadStripe('pk_test_t963k6tCelbOZQuFhNw3xTV9');

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


// class StripeGateway extends React.Component {
//     handleSubmit = (ev) => {
//         ev.preventDefault();
//
//         const cardElement = this.props.elements.getElement('card');
//
//         this.props.stripe
//             .createPaymentMethod({
//                 type: 'card',
//                 card: cardElement,
//                 billing_details: {name: 'Jenny Rosen'},
//             })
//             .then(({paymentMethod}) => {
//                 console.log('Received Stripe PaymentMethod:', paymentMethod);
//             });
//
//         this.props.stripe.confirmCardPayment('{PAYMENT_INTENT_CLIENT_SECRET}', {
//             payment_method: {
//                 card: cardElement,
//             },
//         });
//
//         this.props.stripe.confirmCardSetup('{PAYMENT_INTENT_CLIENT_SECRET}', {
//             payment_method: {
//                 card: cardElement,
//             },
//         });
//
//         this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
//
//         this.props.stripe.createSource({
//             type: 'card',
//             owner: {
//                 name: 'Jenny Rosen',
//             },
//         });
//     };
//
//     render() {
//         return (
//             <StripeProvider apiKey="pk_test_t963k6tCelbOZQuFhNw3xTV9">
//                 <Elements>
//                     <label>
//                         Card details
//                         <form onSubmit={this.handleSubmit}>
//                             <CardNumberElement className="card"/>
//                             <CardExpiryElement/>
//                             <CardCvcElement/>
//                             <button>Confirm order</button>
//                         </form>
//                     </label>
//                 </Elements>
//             </StripeProvider>
//         );
//     }
// }

// export default StripeGateway;

