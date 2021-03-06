import React from "react";
import {CheckoutVariationButton, CheckoutVariationButtonGroup} from "./CheckoutVariationButton";

export const PaymentAndShippingOptions = ({shipping, payment, handleStateChange}) => {
    const handleChange = (e) => {
        const data = {}
        data[e.target.name] = e.target.value;
        handleStateChange(data);
    }

    return <div className="payment-method">
        <p className="text:center form-title">Platebni metoda</p>
        <div className="form-payment">
            <CheckoutVariationButtonGroup selected={0} name="payment">
                <CheckoutVariationButton
                    label="Platba kartou"
                    price="ZDARMA"
                />
                <CheckoutVariationButton
                    label="Na dobírku"
                    price="49,-"
                />
            </CheckoutVariationButtonGroup>
            {/*<div className="radio-box">*/}
            {/*    <RadioInput*/}
            {/*        label="Na dobírku"*/}
            {/*        name="payment"*/}
            {/*        value="1"*/}
            {/*        checked={payment == 1 ? 'checked' : ''}*/}
            {/*        handleChange={(e) => handleChange(e)}*/}
            {/*        price="49"*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div className="radio-box">*/}
            {/*    <RadioInput*/}
            {/*        label="Platba kartou"*/}
            {/*        name="payment"*/}
            {/*        value="2"*/}
            {/*        checked={payment == 2 ? 'checked' : ''}*/}
            {/*        handleChange={(e) => handleChange(e)}*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    </div>
}

export default PaymentAndShippingOptions;

const RadioInput = ({label, name, value, checked, handleChange, price}) => {
    return (
        <React.Fragment>
            <div className={`radio-button-border-wrap ${checked ? 'active' : ''}`}>

                <label className="radio-button">
                    <div className="col-8 px-0 d-inline-block">
                        {label}
                    </div>
                    <div className="col-4 d-inline-block text-right">
                        <b>{price ? `${price},-` : ''}</b>
                    </div>
                    <input
                        onChange={handleChange}
                        checked={checked}
                        type="radio"
                        name={name}
                        value={value}
                    />
                    <span className="checkmark"
                          style={checked ? {'background': 'linear-gradient(145deg, rgb(0, 135, 245) 0%, rgb(26, 180, 248) 100%)'} : {}}/>
                </label>

            </div>
        </React.Fragment>
    )
}