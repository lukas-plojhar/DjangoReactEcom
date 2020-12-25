import React from 'react';
import OrderFormField from "./OrderFormField";

const OrderForm = (
    {
        firstName,
        lastName,
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
                <OrderFormField handleChange={handleChange} fieldLabel="Jméno" fieldName="firstName" fieldValue={firstName}/>
                <OrderFormField handleChange={handleChange} fieldLabel="Příjmení" fieldName="lastName" fieldValue={lastName}/>
                <OrderFormField handleChange={handleChange} fieldLabel="E-mailová adresa" fieldName="email" fieldValue={email}/>
                <OrderFormField handleChange={handleChange} fieldLabel="Telefon" fieldName="phone" fieldValue={phone}/>
                <OrderFormField handleChange={handleChange} fieldLabel="Ulice a číslo popisné" fieldName="address" fieldValue={address}/>
                <OrderFormField handleChange={handleChange} fieldLabel="Město" fieldName="city" fieldValue={city}/>
                <OrderFormField handleChange={handleChange} fieldLabel="PSČ" fieldName="postcode" fieldValue={postcode}/>
            </form>
        </React.Fragment>
    )
}

export default OrderForm;