import React, {Component} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";
import {API} from "../../Globals";

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            products: []
        }
    }

    componentDidMount(props) {
        const {id} = this.state;
        axios.get(`${API}/products/${id}`).then(
            response => {
                console.log(response);
                this.setState({products: response.data});
            }
        )

    }

    render() {
        const {products, id} = this.state;
        return (
            <div className="row">
                <div className="col-6">
                    <img src={products.featuredImage}
                         className="img-fluid"
                         alt={products.name}/>
                </div>
                <div className="col-6">
                    <h1>{products.name}</h1>
                    <h4>{products.headline}</h4>
                    <p>{products.description}</p>
                    <p>
                        {products.regularPrice}<br/>
                        {products.salePrice}
                    </p>
                    <Link to={`/checkout/${id}`}>
                        <button className="btn btn-primary"><Link to={``}>Buy now</Link></button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Product;