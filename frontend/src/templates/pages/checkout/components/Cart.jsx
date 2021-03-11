import React, {Component} from "react";
import axios from 'axios';
import {API} from "../../../../Globals";

const Cart = ({items, handleStateChange}) => {
    // Functions
    const getVariationName = (item) => {
        let {variationId, product} = item;
        let name;

        product.variations.forEach(variation => {
            if (variation.variationId == variationId) name = variation.name;
        });
        return name;
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
        let price = 0;

        item.product.variations.forEach(variation => {
            if (variation.variationId == item.variationId) price = item.quantity * variation.salePrice;
        });

        return price;
    }

    return items ? <div className="product-list">
        <table className="product-list-item">
            <tbody>
            {
                items !== undefined && items.length > 0 && items.map((item, index) => (
                    <tr key={index}>
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
                                {item.product.regularPrice} {item.product.salePrice}
                            </div>
                        </td>
                        <td>
                            <button className="btn-remove" onClick={() => removeItem(index)}>X</button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </div> : <React.Fragment/>
}

export default Cart;