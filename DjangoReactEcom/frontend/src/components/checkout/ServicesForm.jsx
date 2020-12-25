import React from 'react';

const ServicesForm = ({shipping, payment, handlePaymentChange, handleShippingChange}) => {

    return (
        <React.Fragment>
            <h3>Shipping and Payment</h3>
            <form action="">
                <label>Česká pošta</label>
                <input onChange={handleShippingChange}
                       checked={shipping == 1 ? 'checked' : ''}
                       type="radio"
                       name="shipping"
                       value="1"/><br/>

                <label>Slovenská pošta</label>
                <input onChange={handleShippingChange}
                       checked={shipping == 2 ? 'checked' : ''}
                       type="radio"
                       name="shipping"
                       value="2"/><br/>
            </form>

            <form action="">
                <label>Dobírka</label>
                <input onChange={handlePaymentChange}
                       checked={payment == 1 ? 'checked' : ''}
                       type="radio"
                       name="payment"
                       value="1"/><br/>

                <label>Platba kartou</label>
                <input onChange={handlePaymentChange}
                       checked={payment == 2 ? 'checked' : ''}
                       type="radio"
                       name="payment"
                       value="2"/><br/>
            </form>
        </React.Fragment>
    )
}

export default ServicesForm;