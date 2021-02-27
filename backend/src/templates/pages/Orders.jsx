import React, {Component} from 'react';
import axios from 'axios';
import API from "../../API";

// Components
import {Input} from '../components/common/Form'

// GET: List all orders
export class OrderList extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        orders: []
    }

    async componentDidMount() {
        const url = `${API}/orders/`;
        const response = await axios.get(url).then(response => response.data);

        this.setState({
            orders: response
        });
    }

    render() {
        const {orders} = this.state;
        return <React.Fragment>
            <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Datum</th>
                            <th scope="col">Stav</th>
                            <th scope="col">Jmeno</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Telefon</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            orders.map((order) => {
                                return (
                                    <tr>
                                        <th scope="row" key={order.id}><a
                                            href={`/orders/${order.id}`}>{order.id}</a></th>

                                        <td><a
                                            href={`/orders/${order.id}`}>{order.created}</a></td>
                                        <td><a
                                            href={`/orders/${order.id}`}>{order.state}</a></td>
                                        <td><a
                                            href={`/orders/${order.id}`}>{order.customer.firstName + " " + order.customer.lastName}</a>
                                        </td>
                                        <td><a
                                            href={`mailto:${order.customer.email}`}>{order.customer.email}</a>
                                        </td>
                                        <td>{order.customer.phone}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    }
}

// GET: Show order details
export class OrderDetail extends Component {
    constructor(props) {
        super(props);
    }

    state = {}

    async componentDidMount() {
        const url = `${API}/orders/${this.props.match.params['id']}/`;
        const response = await axios.get(url).then(response => response.data);
        this.setState({...response});
    }

    handleChange = e => {
        const {cart, customer} = this.state;
        customer[e.target.name] = e.target.value;
        this.setState({cart})
    }

    handleSubmit = () => {
        const url = `${API}/orders/${this.state.id}/update`;
        const data = JSON.stringify(this.state);
        const config = {
            'headers': {'Content-Type': 'application/json'}
        };

        axios.put(url, data, config)
            .then(response => {
                const {status, data} = response;
                console.log(status);
                console.log(data);
            })
            .catch(error => console.log(error));
    }

    render() {
        if (!this.state.cart) {
            return null;
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Objednavka {this.state.id}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        Vytvoreno: {this.state.created}<br/>
                        Posledni aktualizace: {this.state.updated}<br/>
                        Doruceni: {this.state.cart.shipping}<br/>
                        Platba: {this.state.cart.payment}<br/>
                        <hr/>
                        Stav: {this.state.state}<br/>
                        Celkem: {this.state.cart.total}<br/>
                        <hr/>
                    </div>

                    {/*Address and customer data*/}
                    <div className="col-6">
                        <form>
                            <Input
                                name="firstName"
                                value={this.state.customer.firstName}
                                label="Jmeno"
                                onChange={this.handleChange}
                            />
                            <Input
                                name="lastName"
                                value={this.state.customer.lastName}
                                label="Prijmeni"
                                onChange={this.handleChange}
                            />
                            <Input
                                name="email"
                                value={this.state.customer.email}
                                label="Emailova adresa"
                                onChange={this.handleChange}
                            />
                            <Input
                                name="phone"
                                value={this.state.customer.phone}
                                label="Telefon"
                                onChange={this.handleChange}
                            />
                            <Input
                                name="address"
                                value={this.state.customer.address}
                                label="Adresa"
                                onChange={this.handleChange}
                            />
                            <Input
                                name="city"
                                value={this.state.customer.city}
                                label="Mesto"
                                onChange={this.handleChange}
                            />
                            <Input
                                name="postcode"
                                value={this.state.customer.postcode}
                                label="PSC"
                                onChange={this.handleChange}
                            />
                        </form>
                        <button type="submit" value="Odeslat" onClick={this.handleSubmit}>Odeslat</button>
                    </div>

                    {/*Cart data*/}
                    <div className="col-6">
                        {this.state.cart.items.map(item => {
                            return <p>{item.product.name} * {item.quantity}</p>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
