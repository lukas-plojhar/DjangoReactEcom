import React from "react";

const OrderDetails = ({products, handleClick, isFormValid}) => {

    function getTotal(products) {
        return "something";
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12 order-details">
                    {products !== undefined && products.length > 0 && products.map((item) => (
                        <p>
                            {item.product.name} - {item.product.salePrice} x {item.quantity}
                        </p>
                    ))}
                    <p className={'total'}>Celkem: {getTotal()}</p>
                    <button className="btn btn-primary order-button"
                            disabled={isFormValid}
                            onClick={handleClick}>Objednej
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OrderDetails;