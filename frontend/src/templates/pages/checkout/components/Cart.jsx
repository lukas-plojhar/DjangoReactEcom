import React from "react";
import {API} from "../../../../Globals";
import {CSSTransition, TransitionGroup,} from 'react-transition-group';


const Cart = ({items, handleStateChange}) => {
    // Functions
    const getVariationName = (item) => {
        return item.product.variations[item.variationId].name;
    }

    const removeItem = (index) => {
        console.log('remove item ' + index);
        items.splice(index, 1);
        return handleStateChange(items);
    }

    const increaseQuantity = (index) => {
        items[index].quantity++;
        return handleStateChange(items);
    }

    const decreaseQuantity = (index) => {
        if (items[index].quantity == 1) return removeItem(index);
        items[index].quantity--;
        return handleStateChange(items);
    }

    const getItemPrice = (item) => {
        return item.product.variations[item.variationId].salePrice;
    }

    return items ? <div className="product-list">
        <table className="product-list-item">
            <tbody>
            <TransitionGroup>
                {items.map((item, index) => (
                    <CSSTransition timeout={350} classNames="item" key={index}>
                        <div>
                            <tr>
                                <td>
                                    <div className="d:flex flex:row align-center">
                                        <img src={API + item.product.featuredImage[0].image}
                                             style={{'maxWidth': 200}}/></div>
                                </td>
                                <td>
                                    <div className="name">
                                        {item.product.name} x <b>{item.quantity}</b><br/>
                                        {getVariationName(item)}<br/>
                                        {getItemPrice(item)},-
                                    </div>
                                    <div className="quantity">
                                        <button name="decrease" onClick={() => decreaseQuantity(index)}> -</button>
                                        <button name="increase" onClick={() => increaseQuantity(index)}> +</button>
                                    </div>

                                    <div className="price">
                                        {item.product.regularPrice} {item.product.salePrice} / ks
                                    </div>
                                </td>
                                <td>
                                    <button className="btn-remove" onClick={() => removeItem(index)}>X</button>
                                </td>
                            </tr>
                        </div>
                    </CSSTransition>
                ))}
                {}
            </TransitionGroup>
            </tbody>
        </table>
    </div> : <React.Fragment/>
}

export default Cart;