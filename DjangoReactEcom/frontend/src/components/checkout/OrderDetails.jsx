import React from "react";

const OrderDetails = ({products, total, handleClick}) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12 order-details">
                    {products !== undefined && products.length > 0 && products.map((product) => (
                        <p>
                            {product.product.name} - {product.product.salePrice}
                        </p>
                    ))}
                    <p className={'total'}>{total}</p>
                    <button className="btn btn-primary order-button" onClick={handleClick}>Objednej</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OrderDetails;