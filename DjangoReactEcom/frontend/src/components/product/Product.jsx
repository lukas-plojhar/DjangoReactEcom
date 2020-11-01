import React, { Component } from 'react';
import axios from 'axios'

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            products: []
        }
    }

    componentDidMount(props) {
        axios.get('http://127.0.0.1:8000/product/'+ this.state.id).then(
            res => {
                const products = res.data;
                this.setState({ products });
            }
        )
    }

    render() { 
        return ( 
            <React.Fragment>
                {this.state.products.map( product => <li key={product.id}>{product.id}</li>)}  
            </React.Fragment>
         )
    }
}
 
export default Product;