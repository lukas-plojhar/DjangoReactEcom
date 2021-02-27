import React, {Component} from 'react';

export const Input = ({name, label, value, onChange, error}) => {
    return (
        <div className="form-group">
            <label htmlFor="{name}">{label}</label>
            <input type="text"
                   className="form-control"
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


class Form extends Component {
    validate = () => {
        console.log('validation starts');
        const errors = {};
        const {customer} = this.state.data;
        console.log(this.state);
        if (customer.firstName.trim() === '')
            errors.firstName = 'firstName is required.';

        return Object.keys(errors).length === 0 ? null : errors;

        // const options = {abortEarly: false};
        // const {error} = Joi.validate(this.state.data, schema, options);
        // console.log(error);
        // if (!error) return null;
        // const errors = {};
        // for (let item of error.details)
        //     errors[item.path[0]] = item.message;
        // return errors;
    }

    // validateProperty(name, value) {
    //     const object = {[name]: value};
    //     const schema = {[name]: this.schema[name]};
    //     const {error} = Joi.validate(object, schema);
    //     console.log(error);
    //     return error ? error.details[0].message : null;
    // };

    handleChange = (e) => {
        console.log('change');
        console.log(e);
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(e);
        if (errorMessage) errors[e.name] = errorMessage;
        else delete errors[e.name];

        const data = {...this.state.data};
        data[e.name] = e.value;

        this.setState({data, errors});
    }
}

export default Form;