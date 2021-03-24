import React, {Component} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
    ElementsConsumer,
    Elements,
    CardNumberElement, CardExpiryElement, CardCvcElement,
} from '@stripe/react-stripe-js';
import axios from 'axios';

class StripeGateway extends Component {
    constructor(props) {
        super(props);
    }

    // HANDLERS
    handleSubmit = async event => {
        event.preventDefault();
        const {stripe, elements} = this.props;
        if (!stripe || !elements) {
            return;
        }

        // Get client secret from server
        const clientSecret = await axios.post(
            `${process.env.REACT_APP_URL}/orders/intent/`,
            {
                amount: this.props.total,
                currency: 'CZK',
            }).then(response => response.data)

        // Make payment
        stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardNumberElement)
            }
        }).then(function (result) {
            if (result.error) {
                console.log(result.error.message);
                if (result.error.decline_code === "insufficient_funds") alert('Nedostatek prostredku na karte.');
                else alert('Doslo k chybe pri zpracovani platby.');

            } else {
                if (result.paymentIntent.status === 'succeeded') {
                    console.log('Done');
                } else alert('Doslo k interni chybe');
            }
        });
    };

    render() {
        const {isDisabled} = this.props;
        return (
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {
                        ({stripe, elements}) => (
                            <div>
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
                                    <div className="d-block text-center">
                                        <h3 className="mt-2">Celkem:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.total}{process.env.REACT_APP_CURRENCY}</h3>
                                        <button className="btn btn-primary"
                                                disabled={!this.props.stripe || isDisabled}
                                                type="submit">Objednat
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )
                    }
                </ElementsConsumer>
            </Elements>
        );
    }
}


const stripePromise = loadStripe('pk_test_t963k6tCelbOZQuFhNw3xTV9');

export default function InjectedStripeGatewayForm({total, isDisabled}) {
    return (
        <Elements stripe={stripePromise}>
            <ElementsConsumer>
                {
                    ({stripe, elements}) => (
                        <StripeGateway stripe={stripe} elements={elements} total={total} isDisabled={isDisabled}/>
                    )
                }
            </ElementsConsumer>
        </Elements>

    );
}


// class StripeGateway extends Component {
//     handleSubmit = async event => {
//         event.preventDefault();
//         const {stripe, elements} = this.props;
//         if (!stripe || !elements) {
//             return;
//         }
//
//         const card = elements.getElement(CardNumberElement);
//         const clientSecret = await axios.post(
//             `${process.env.REACT_APP_URL}/orders/intent/`,
//             {
//                 amount: 100,
//                 currency: 'CZK',
//             }).then(response => response.data)
//
//         stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: card
//             }
//         }).then(function (result) {
//             if (result.error) {
//                 console.log(result.error.message);
//                 if (result.error.decline_code === "insufficient_funds") alert('Nedostatek prostredku na karte.');
//                 else alert('Doslo k chybe pri zpracovani platby.');
//
//             } else {
//                 if (result.paymentIntent.status === 'succeeded') {
//                     console.log('Done');
//                 }
//                 else alert('Doslo k interni chybe');
//             }
//         });
//     };
//
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <div className="form-group">
//                         <label>Číslo karty</label>
//                         <CardNumberElement className="form-control mb-1"/>
//                     </div>
//                     <div className="form-group">
//                         <label>Platnost do</label>
//                         <CardExpiryElement className="form-control mb-1"/>
//                     </div>
//                     <div className="form-group">
//                         <label>Kód CVC</label>
//                         <CardCvcElement className="form-control"/>
//                     </div>
//                     <button disabled={!this.props.stripe} className="btn-pay">
//                         Buy Now
//                     </button>
//                 </form>
//             </div>
//         );
//     }
// }
//
//
// const stripePromise = loadStripe('pk_test_t963k6tCelbOZQuFhNw3xTV9');
//
// export default function InjectedStripeGatewayForm() {
//     return (
//         <Elements stripe={stripePromise}>
//             <ElementsConsumer>
//                 {
//                     ({stripe, elements}) => (
//                         <StripeGateway stripe={stripe} elements={elements}/>
//                     )
//                 }
//             </ElementsConsumer>
//         </Elements>
//
//     );
// }
//
//
