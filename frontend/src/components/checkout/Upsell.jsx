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

<<<<<<< Updated upstream
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
=======
        return (
            <div className="popular-product-container" style={{backgroundColor: this.props.bg}}>
                    <div className="popular-product-content">
                        <h2>Ostatní také zakoupili</h2>
                        <Splide options={options}>
                            {products.map((product, index) => {
                                return <UpsellSlide
                                    key={index}
                                    image={product.featuredImage}
                                    name={product.name}
                                    regularPrice={product.regularPrice}
                                    salePrice={product.salePrice}
                                    rating={product.rating || 4.8}
                                    numberOfReview={product.numberOfReviews || 905}
                                />
                            })}
                        </Splide>
                    </div>
            </div>
        );
>>>>>>> Stashed changes
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


