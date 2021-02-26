import React from 'react';
import Form, {Input} from "../common/Form";
import {Redirect} from "react-router-dom";
import Joi from "joi-browser";
import axios from "axios";

// Translated input labels
var locale = {
    firstName: "Křestní jméno",
    lastName: "Příjmení",
    email: "E-mailová adresa",
    phone: "Telefon",
    address: "Adresa",
    city: "Město",
    postcode: "PSČ",
}

// Validation schema
var schema = {
    firstName: Joi.string().required().label(locale.firstName),
    lastName: Joi.string().required().label(locale.lastName),
    email: Joi.string().email({minDomainAtoms: 2}).required().label(locale.email),
    phone: Joi.string().min(9).required().label(locale.phone),
    address: Joi.string().required().label(locale.address),
    city: Joi.string().required().label(locale.city),
    postcode: Joi.number().required().label(locale.postcode),
};

class CustomerForm extends Form {
    state = {
        data: this.props.customer,
        errors: {}
    };

    handleChange = e => {
        this.props.handleChange(e);
    }

    render() {
        const {data, errors} = this.state;

        return (
            <React.Fragment>
                <form>
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

                    <Input
                        name="postcode"
                        value={data.postcode}
                        label={locale.postcode}
                        onChange={this.handleChange}
                        error={errors.postcode}
                    />
                </form>
            </React.Fragment>
        )
    }
}

export default CustomerForm;