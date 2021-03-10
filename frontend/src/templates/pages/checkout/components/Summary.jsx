import React from "react";

const Summary = ({items, handleClick, isFormValid}) => {
    const getTotal = () => {
        let total = 0;
        items.forEach(item => {
            total += item.quantity * item.product.salePrice
        });

        return total;
    }
    return <div className="bill-rows">
            {items !== undefined && items.length > 0 && items.map((item, index) => (
                <div className="bill d:flex flex:row" key={index}>
                    <span>{item.product.name} <b>x {item.quantity}</b></span>
                    <span>{item.product.salePrice * item.quantity},-</span>
                </div>
            ))}

            <div className="bill d:flex flex:row row-bold">
                <span><b>Mezisoučet: </b></span>
                <span><b>{getTotal()},-</b></span>
            </div>

            <div className="bill d:flex flex:row row-total">
                <span><b>Poštovné: </b></span>
                <span><b><span>Česká pošta:  </span> + 89,-</b></span>
            </div>
        </div>
}

export default Summary;
