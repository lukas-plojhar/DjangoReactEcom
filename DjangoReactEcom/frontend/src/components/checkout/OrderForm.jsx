import React, {Component} from 'react';

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
        console.log(event.target.value)
    }

    handleSubmit(event) {
        alert(this.state.value);
    }

    render() {
        return (
            <React.Fragment>
                <h3>Order Form</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Jmeno:
                    </label>
                    <input type="text" onChange={this.handleChange} value={this.state.value}/>
                    <button className="btn btn-primary" type="submit">
                        Objednej
                    </button>
                </form>
            </React.Fragment>
        )
    }
}

export default OrderForm;