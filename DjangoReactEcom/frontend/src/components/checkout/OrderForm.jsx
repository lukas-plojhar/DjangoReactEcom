import React from 'react';
import OrderFormField from "./OrderFormField";

const OrderForm = (
    {
        first_name,
        last_name,
        email,
        phone,
        address,
        city,
        postcode,
        handleChange
    }) => {
    return (
        <React.Fragment>
            <h3>OrderForm</h3>
            <form>
                <OrderFormField handleChange={handleChange} fieldLabel="Jmeno" fieldName="first_name" fieldValue={first_name}/>
                <OrderFormField handleChange={handleChange} fieldLabel="Prijmeni" fieldName="last_name" fieldValue={last_name}/>
                <OrderFormField handleChange={handleChange} fieldLabel="Email" fieldName="email" fieldValue={email}/>
                <OrderFormField handleChange={handleChange} fieldLabel="Telefon" fieldName="phone" fieldValue={phone}/>
                <OrderFormField handleChange={handleChange} fieldLabel="Adresa" fieldName="address" fieldValue={address}/>
                <OrderFormField handleChange={handleChange} fieldLabel="Mesto" fieldName="city" fieldValue={city}/>
                <OrderFormField handleChange={handleChange} fieldLabel="PSC" fieldName="postcode" fieldValue={postcode}/>
            </form>
        </React.Fragment>
    )
}

export default OrderForm;