import React, {Component} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            products: []
        }
    }

    componentDidMount(props) {
        axios.get('http://127.0.0.1:8000/product/' + this.state.id).then(
            res => {
                this.setState({products: res.data});
            }
        )

    }

    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <img src={this.state.products.main_image}
                         className="img-fluid"
                         alt={this.state.products.name}/>
                </div>
                <div className="col-6">
                    <h1>{this.state.products.name}</h1>
                    <h4>{this.state.products.headline}</h4>
                    <p>{this.state.products.description}</p>
                    <p>
                        {this.state.products.regular_price}<br/>
                        {this.state.products.sale_price}
                    </p>
                    <Link to={"/checkout/" + this.state.id}>
                        <button className="btn btn-primary">Buy now</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Product;