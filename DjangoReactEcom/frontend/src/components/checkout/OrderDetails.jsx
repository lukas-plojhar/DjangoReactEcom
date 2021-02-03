import React from "react";

const OrderDetails = ({items, handleClick, isFormValid}) => {

    const total = () => {
        console.log('test');
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12 order-details">
                    {items !== undefined && items.length > 0 && items.map((item, index) => (
                        <p key={index}>
                            {item.product.name} - {item.product.salePrice} x {item.quantity}
                        </p>
                    ))}
                    <p className={'total'}>Celkem: {total}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OrderDetails;