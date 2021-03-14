import React, {Component} from "react";
import Joi from "joi-browser";

const Input = ({name, label, value, onChange, error, onBlur}) => {
        return (
            <div className="input-with-label d:flex flex:col">
                <label htmlFor="{name}">{label}</label>
                <input type="text"
                       id={name}
                       name={name}
                       value={value}
                       onChange={onChange}
                       aria-label={label}
                       onBlur={onBlur}
                />
                {error && <div className="input-error-text"><p className="small-caps">{error}</p></div>}
            </div>
        )
    }
;

// Localized input labels
let fields = ['email', 'phone', 'firstName', 'lastName', 'address', 'city', 'postcode'];

let locale =
    {
        firstName: "Křestní jméno",
        lastName: "Příjmení",
        email: "E-mailová adresa",
        phone: "Telefon",
        address: "Adresa",
        city: "Město",
        postcode: "PSČ",
    };

// Validation schema
let schema =
    {
        firstName: Joi.string().required().label(locale.firstName),
        lastName: Joi.string().required().label(locale.lastName),
        email: Joi.string().email({minDomainAtoms: 2}).required().label(locale.email),
        phone: Joi.string().required().label(locale.phone).min(9),
        address: Joi.string().required().label(locale.address),
        city: Joi.string().required().label(locale.city),
        postcode: Joi.number().required().label(locale.postcode).min(5),
    };

let errorText =
    {
        'any.empty': 'Prosím, vyplňte políčko.',
        'string.min': 'Udaj je prilis kratky',
        'string.email': 'Adresa neni platna.',
        'number.base': 'Chybne vyplnene.'
    }

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.customer,
            errors: []
        };
    }

    // Handlers
    handleChange = e => {
        this.props.handleChange(e);
        this.validate(e.target.name, e.target.value, schema, true);

    }

    handleBlur = e => {
        this.validate(e.target.name, e.target.value, schema);
    }

    // Functions
    validate = (name, value, schema, removeOnly = false) => {
        const {errors} = this.state;
        const obj = {[name]: value};
        const fieldSchema = {[name]: schema[name]};
        const result = Joi.validate(obj, fieldSchema);

        // console.log(result);
        if (result.error) {
            if (!removeOnly) errors[name] = errorText[result.error.details[0].type];
        } else errors[name] = undefined;

        this.setState({errors});
    }


    render() {
        const {data, errors} = this.state;
        return <div className="input-group d:grid two-col">
            {fields.map((field, i) => <div className="input-with-label d:flex flex:col" key={i}>
                <label htmlFor={field}>{locale[field]}</label>
                <input type="text"
                       id={field}
                       name={field}
                       value={data[field]}
                       onChange={this.handleChange}
                       onBlur={this.handleBlur}
                />
                {errors[field] && <div className="input-error-text">{errors[field]}</div>}
            </div>)}
        </div>
    }
}

export default Form;