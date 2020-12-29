import React from 'react';
import Form, {Input} from "../common/Form";
import Joi from "joi-browser";

class OrderForm extends Form {
    constructor(props) {
        super(props);
    }

    state = {
        data: this.props.customer,
        errors: {}
    };


    schema = {
        firstName: Joi.string().required().label("Krestni jmeno"),
        lastName: Joi.string().required(),
        email: Joi.string().email({minDomainAtoms: 2}).required(),
        phone: Joi.string().min(9).required(),
        address: Joi.string().required(),
        city: Joi.string().required(),
        postcode: Joi.number().min(5).required(),
    };

    handleClick = e => {
        e.preventDefault();
        console.log('pressed');
    }

    validateProperty = (e) => {
        console.log(e);
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
    }

    render() {
        const {data, errors} = this.state;
        return (
            <React.Fragment>
                <form>
                    <Input
                        name="firstName"
                        value={data.firstName}
                        label="Křestní jméno"
                        onChange={this.handleChange}
                        error={errors.firstName}
                    />

                    <Input
                        name="lastName"
                        value={data.lastName}
                        label="Příjmení"
                        onChange={this.handleChange}
                        error={errors.lastName}
                    />
                    <button className="btn btn-primary" onClick={this.handleClick}>validate</button>
                </form>
            </React.Fragment>
        )
    }
}


export default OrderForm;