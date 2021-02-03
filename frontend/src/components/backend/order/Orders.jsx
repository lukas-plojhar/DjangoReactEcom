import React, {Component} from 'react';
import axios from 'axios';
import Loading from '../../common/Loading'

export class OrderList extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        orders: []
    }

    async componentDidMount() {
        const url = `http://localhost:8000/order/all/`;
        const response = await axios.get(url).then(response => response.data);

        this.setState({
            orders: response
        });
    }

    render() {
        const {orders} = this.state;
        return orders == [] ? <Loading/> : <React.Fragment>
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
                                            href={`/orders/${order.id}/detail`}>{order.id}</a></th>

                                        <td><a
                                            href={`/orders/${order.id}/detail`}>{order.created}</a></td>
                                        <td><a
                                            href={`/orders/${order.id}/detail`}>{order.orderState}</a></td>
                                        <td><a
                                            href={`/orders/${order.id}/detail`}>{order.cart.customer.firstName + " " + order.cart.customer.lastName}</a>
                                        </td>
                                        <td><a href={`mailto:${order.cart.customer.email}`}>{order.cart.customer.email}</a></td>
                                        <td>{order.cart.customer.phone}</td>
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

export class OrderDetail extends Component {
    constructor(props) {
        super(props);
    }

    state = {}

    async componentDidMount() {
        const url = `http://localhost:8000/order/1/detail`;
        const response = await axios.get(url).then(response => response.data);
        this.setState({...response});
    }

    render() {
        if (!this.state.cart) {
            return <Loading/>
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Objednavka {this.state.id} ze dne {this.state.created}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h3>Detaily</h3>
                        Doruceni:
                    </div>
                    <div className="col-6">
                        <h3>Adresa</h3>
                        <p>
                            {this.state.cart.customer.firstName}&nbsp;{this.state.cart.customer.lastName}<br/>
                            {this.state.cart.customer.address}<br/>
                            {this.state.cart.customer.city}&nbsp;{this.state.cart.customer.postcode}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
