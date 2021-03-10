import React, {Component} from "react";
import axios from 'axios';
import {API} from "../../../../Globals";

const Cart = ({items, handleStateChange}) => {
    const handleClick = (e) => {
        const action = e.target.name;
        if (action === "remove") {
            items.splice(e.target.value, 1);
            return handleStateChange(items);
        }
    }

    return items ? <div className="product-list">
        <table className="product-list-item">
            <tbody>
            {
                items !== undefined && items.length > 0 && items.map((item, index) => (
                    <tr key={index}>
                        <td>
                            <div className="d:flex flex:row align-center">
                                <img src={item.product.featuredImage}
                                     style={{'maxWidth': 200}}/></div>
                        </td>
                        <td>
                            <div className="name"> {item.product.name} x <b>{item.quantity}</b></div>
                            <div className="quantity">
                                <button name="increase"> +</button>
                                <button name="decrease"> -</button>
                            </div>

                            <div className="price">
                                {item.product.regularPrice} {item.product.salePrice}
                            </div>
                        </td>
                        <td>
                            <button className="btn-remove" name="remove" value={index}
                                    onClick={e => handleClick(e)}>X
                            </button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </div> : <React.Fragment/>

// return items ? <div className="product-list">
//     <table className="product-list-item">
//         <thead>
//         <tr>
//             <th></th>
//             <th>Produkt</th>
//             <th>Množství</th>
//             <th>Cena celkem</th>
//         </tr>
//         </thead>
//         <tbody>
//         {
//             items !== undefined && items.length > 0 && items.map((item, index) => (
//                 <tr key={index}>
//                     <td>
//                         <div className="d:flex flex:row align-center"><img src={item.product.featuredImage}
//                                                                            style={{'maxWidth': 200}}/></div>
//                     </td>
//                     <td><span>{item.product.name}</span></td>
//                     <td><input type="number" value={item.quantity}/></td>
//                     <td><p>
//                         {item.product.regularPrice}<br/>
//                         {item.product.salePrice}
//                     </p>
//
//                     </td>
//                     <td>
//                         <button className="btn-remove" name="remove" value={index}
//                                 onClick={e => handleClick(e)}>X
//                         </button>
//                     </td>
//                 </tr>
//             ))
//         }
//         </tbody>
//     </table>
// </div> : <React.Fragment/>

}

export default Cart;

class Upsells extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    async componentDidMount() {
        const items = await axios.get(`${API}/products/upsells`).then(response => response.data);
        this.setState({items});
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