import React from 'react';
import Form, {Input} from "../common/Form";
import {Redirect} from "react-router-dom";
import Joi from "joi-browser";
import axios from "axios";

var locale= {
        firstName: "Křestní jméno",
        lastName: "Příjmení",
        email: "E-mailová adresa",
        phone: "Telefon",
        address: "Adresa",
        city: "Město",
        postcode: "PSČ",
    }

var schema = {
        firstName: Joi.string().required().label(locale.firstName),
        lastName: Joi.string().required().label(locale.lastName),
        email: Joi.string().email({minDomainAtoms: 2}).required().label(locale.email),
        phone: Joi.string().min(9).required().label(locale.phone),
        address: Joi.string().required().label(locale.address),
        city: Joi.string().required().label(locale.city),
        postcode: Joi.number().min(5).required().label(locale.postcode),
    };

class OrderForm extends Form {
    state = {
        data: this.props.customer,
        errors: {}
    };

    validate = () => {
        const options = {abortEarly: false};
        const {error} = Joi.validate(this.state.data, schema, options);
        const errors = {};

        // No errors
        if (!error) return;

        // Errors found
        for (let item of error.details) {
            errors[item.path[0]] = item.message
        }
        return errors;
    }

    validateProperty = (e) => {
        const errors = this.state.errors;
        const {data} = this.state;
        if (data[e.target.name].trim() === '')
            errors[e.target.name] = `${[e.target.ariaLabel]} is required.`;
        else delete errors[e.target.name];
        this.setState({errors})
    }

    handleChange = e => {
        const {data} = this.state;
        data[e.target.name] = e.target.value;
        this.setState({data});
        this.validateProperty(e);
        this.props.handleStateChange(this.state.data);
    }

    handleOrder = e => {
        e.preventDefault();
        const errors = this.validate();
        if (!errors) this.props.handleOrder();
        else this.setState({errors});
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

                    <div className="text-center">
                        <button disabled={Object.keys(errors).length} id="new-order" className="btn btn-primary"
                                onClick={this.handleOrder}>validate
                        </button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}


export default OrderForm;