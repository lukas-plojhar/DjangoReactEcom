import React, {Component} from "react";
import Joi from "joi-browser";

const Input = ({name, label, value, onChange, error}) => {
    return (
        <div className="input-with-label d:flex flex:col">
            <label htmlFor="{name}">{label}</label>
            <input type="text"
                   id={name}
                   name={name}
                   value={value}
                   onChange={onChange}
                   aria-label={label}
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
};

// Localized input labels
let locale = {
    firstName: "Křestní jméno",
    lastName: "Příjmení",
    email: "E-mailová adresa",
    phone: "Telefon",
    address: "Adresa",
    city: "Město",
    postcode: "PSČ",
}

// Validation schema
let schema = {
    firstName: Joi.string().required().label(locale.firstName),
    lastName: Joi.string().required().label(locale.lastName),
    email: Joi.string().email({minDomainAtoms: 2}).required().label(locale.email),
    phone: Joi.string().min(9).required().label(locale.phone),
    address: Joi.string().required().label(locale.address),
    city: Joi.string().required().label(locale.city),
    postcode: Joi.number().required().label(locale.postcode),
};


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.customer,
            errors: {}
        };
    }

    handleChange = e => {
        this.props.handleChange(e);
    }


    render() {
        const {data, errors} = this.state;

        return <React.Fragment>
            {/*<p className="text:center form-title">Fakturace a doprava</p>*/}
            <div className="input-group d:grid two-col">
                <Input
                    name="email"
                    value={data.email}
                    label={locale.email}
                    onChange={this.handleChange}
                    error={errors.email}
                    required
                />

                <Input
                    name="phone"
                    value={data.phone}
                    label={locale.phone}
                    onChange={this.handleChange}
                    error={errors.phone}
                />
            </div>
            <div className="input-group d:grid two-col">
                <Input
                    name="firstName"
                    value={data.firstName}
                    label={locale.firstName}
                    onChange={this.handleChange}
                    error={errors.firstName}
                />

                <Input
                    name="lastName"
                    value={data.lastName}
                    label={locale.lastName}
                    onChange={this.handleChange}
                    error={errors.lastName}
                />
            </div>
            <div className="input-group d:grid two-col">
                <Input
                    name="address"
                    value={data.address}
                    label={locale.address}
                    onChange={this.handleChange}
                    error={errors.address}
                />

                <Input
                    name="city"
                    value={data.city}
                    label={locale.city}
                    onChange={this.handleChange}
                    error={errors.city}
                />
            </div>
            <div className="input-group d:grid">
                <Input
                    name="postcode"
                    value={data.postcode}
                    label={locale.postcode}
                    onChange={this.handleChange}
                    error={errors.postcode}
                />
            </div>
        </React.Fragment>
    }
}

export default Form;