import React, {Component} from 'react';
import axios from 'axios';

// const Globals = 'https://identcz.herokuapp.com';
const API = 'http://localhost:8000';

class Upsells extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        items: [],
    }

    async componentDidMount() {
        const items = await axios.get(`${API}/products/upsells`).then(response => response.data);

        this.setState({items});
    }

    componentDidUpdate() {
    }

    render() {
        const {items} = this.state;
        return <React.Fragment>
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
        </React.Fragment>
    }
}

export default Upsells;

// Component for single upsell product
const Upsell = ({id, image, name, description, price, handleClick}) => {
    return (
        <div className="row py-4 upsells">
            <div className="col-6 col-md-4 center">
                <img src={image} alt=""/>
                <h5>{name}</h5>
                <p>{description}</p>
                <p>{price},-</p>
                <button className="btn btn-primary btn-upsell" value={id} onClick={handleClick}>Pridat do kosiku
                </button>
            </div>
        </div>
    )
}


