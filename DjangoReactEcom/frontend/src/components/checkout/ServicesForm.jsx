import React from 'react';

const ServicesForm = ({shipping, payment, handleStateChange}) => {

    const handleChange = (e) => {
        const data = {}
        data[e.target.name] = e.target.value;
        handleStateChange(data);
    }

    return (
        <React.Fragment>
            <h3>Shipping and Payment</h3>
            <form action="">
                <RadioInput
                    label="Česká pošta"
                    name="shipping"
                    value="1"
                    checked={shipping === "1" ? 'checked' : ''}
                    handleChange={(e) => handleChange(e)}
                />

                <RadioInput
                    label="Slovenska posta"
                    name="shipping"
                    value="2"
                    checked={shipping === "2" ? 'checked' : ''}
                    handleChange={(e) => handleChange(e)}
                />
            </form>

            <form>
                <RadioInput
                    label="Dobirka"
                    name="payment"
                    value="1"
                    checked={payment === "1" ? 'checked' : ''}
                    handleChange={(e) => handleChange(e)}
                />
                <RadioInput
                    label="Kartou"
                    name="payment"
                    value="2"
                    checked={payment === "2" ? 'checked' : ''}
                    handleChange={(e) => handleChange(e)}
                />
            </form>
        </React.Fragment>)
}

export default ServicesForm;

const RadioInput = ({label, name, value, checked, handleChange}) => {
    return (
        <React.Fragment>
            <label>{label}</label>
            <input onChange={handleChange}
                   checked={checked}
                   type="radio"
                   name={name}
                   value={value}
            /><br/>
        </React.Fragment>
    )
}