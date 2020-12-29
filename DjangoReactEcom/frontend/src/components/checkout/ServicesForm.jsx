import React, {Component} from 'react';

class ServicesForm extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        shipping: this.props.shipping,
        payment: this.props.payment,
    }

    handleClick = (e) => {
        const data = this.state;
        data[e.target.name] = e.target.value;
        this.setState({data});
        this.props.handleChange(data);
    }

    render() {
        const {shipping, payment} = this.state;

        return (
            <React.Fragment>
                <h3>Shipping and Payment</h3>
                <form action="">
                    <RadioInput
                        label="Česká pošta"
                        name="shipping"
                        value="1"
                        checked={shipping == 1 ? 'checked' : ''}
                        handleClick={this.handleClick}
                    />

                    <RadioInput
                        label="slovenska posta"
                        name="shipping"
                        value="2"
                        checked={shipping == 2 ? 'checked' : ''}
                        handleClick={this.handleClick}
                    />
                </form>

                <form>
                    <RadioInput
                        label="Dobirka"
                        name="payment"
                        value="1"
                        checked={payment == 1 ? 'checked' : ''}
                        handleClick={this.handleClick}
                    />
                    <RadioInput
                        label="Kartou"
                        name="payment"
                        value="2"
                        checked={payment == 2 ? 'checked' : ''}
                        handleClick={this.handleClick}
                    />
                </form>


                {/*<form action="">*/}
                {/*    <label>Dobírka</label>*/}
                {/*    <input onChange={handlePaymentChange}*/}
                {/*           checked={payment == 1 ? 'checked' : ''}*/}
                {/*           type="radio"*/}
                {/*           name="payment"*/}
                {/*           value="1"/><br/>*/}

                {/*    <label>Platba kartou</label>*/}
                {/*    <input onChange={handlePaymentChange}*/}
                {/*           checked={payment == 2 ? 'checked' : ''}*/}
                {/*           type="radio"*/}
                {/*           name="payment"*/}
                {/*           value="2"/><br/>*/}
                {/*</form>*/}
            </React.Fragment>
        )
    }
}

export default ServicesForm;

const RadioInput = ({label, name, value, checked, handleClick}) => {
    return (
        <React.Fragment>
            <label>{label}</label>
            <input onClick={handleClick}
                   checked={checked}
                   type="radio"
                   name={name}
                   value={value}
            /><br/>
        </React.Fragment>
    )
}