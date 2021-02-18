import React, {Component} from 'react';
import axios from 'axios';

// const API = 'https://identcz.herokuapp.com';
const API = 'http://localhost:8000';

class Upsells extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        items: []
    }

    async componentDidMount() {
        const url = `${API}/products/upsells`;
        const items = await axios.get(url).then(response => response.data);
        this.setState({items});
    }

    render() {
        const {items} = this.state;
        return <div className="row">
            {items.map(item => {
                return <Upsell
                    id={item.id}
                    image={item.featuredImage}
                    name={item.name}
                    description={item.description}
                    price={item.salePrice}
                    handleClick={(e => this.props.addToCart(e.target.value))}
                />
            })}

        </div>
    }
}

export default Upsells;

// Component for single upsell product
const Upsell = ({id, image, name, description, price, handleClick}) => {
    return <div className="col-4 center">
        <img src={image} alt=""/>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price},-</p>
        <button className="btn btn-secondary" value={id} onClick={handleClick}>Pridat do kosiku</button>
    </div>
}
