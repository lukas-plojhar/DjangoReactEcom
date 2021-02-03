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
                    price="79"
                />

                <RadioInput
                    label="Slovenska posta"
                    name="shipping"
                    value="2"
                    checked={shipping === "2" ? 'checked' : ''}
                    handleChange={(e) => handleChange(e)}
                    price="69"
                />
            </form>
            <hr/>
            <form>
                <RadioInput
                    label="Na dobírku"
                    name="payment"
                    value="1"
                    checked={payment === "1" ? 'checked' : ''}
                    handleChange={(e) => handleChange(e)}
                    price="30"
                />
                <RadioInput
                    label="Platba kartou"
                    name="payment"
                    value="2"
                    checked={payment === "2" ? 'checked' : ''}
                    handleChange={(e) => handleChange(e)}
                />
            </form>
        </React.Fragment>)
}

export default ServicesForm;

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

// const RadioInput = ({label, name, value, checked, handleChange}) => {
//     return (
//         <React.Fragment>
//             <label>{label}</label>
//             <input onChange={handleChange}
//                    checked={checked}
//                    type="radio"
//                    name={name}
//                    value={value}
//             /><br/>
//         </React.Fragment>
//     )
// }