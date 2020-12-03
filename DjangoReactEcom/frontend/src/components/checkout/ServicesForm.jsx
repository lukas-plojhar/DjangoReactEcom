import React from 'react';

const ServicesForm = ({shipping, payment, handlePaymentChange, handleShippingChange}) => {

    return (
        <React.Fragment>
            <h3>Shipping and Payment</h3>
            <form action="">
                <label htmlFor="shipping">Ceska posta</label>
                <input onChange={handleShippingChange}
                       checked={shipping == 1 ? 'checked' : ''}
                       type="radio"
                       id="Ceska posta"
                       name="shipping"
                       value="1"/><br/>

                <label htmlFor="age1">Slovenska posta</label>
                <input onChange={handleShippingChange}
                       checked={shipping == 2 ? 'checked' : ''}
                       type="radio"
                       id="Slovenska posta"
                       name="shipping"
                       value="2"/><br/>
            </form>

            <form action="">
                <label htmlFor="cod">Cash on delivery</label>
                <input onChange={handlePaymentChange}
                       checked={payment == 1 ? 'checked' : ''}
                       type="radio"
                       id="cod"
                       name="payment"
                       value="1"/><br/>

                <label htmlFor="cc">Credit card</label>
                <input onChange={handlePaymentChange}
                       checked={payment == 2 ? 'checked' : ''}
                       type="radio"
                       id="cc"
                       name="payment"
                       value="2"/><br/>
            </form>
        </React.Fragment>
    )
}

export default ServicesForm;