import React from 'react';
import AddToCartButton from "./AddToCartButton";

const VariationButtonGroup = ({data, selected, handleClick}) => {
    return (
        <React.Fragment>
            <div className="col-12 mt-2 mb-1">
                {data.map((item, index) => {
                        const {product_id, label} = item;
                        return (
                            <button
                                key={index}
                                value={product_id}
                                onClick={(e) => handleClick(e.target.value)}
                                className={`btn btn-variation${product_id == selected ? " selected" : ""}`}>
                                {label}
                            </button>
                        )
                    }
                )}
            </div>
            <div className="col-12">
                <AddToCartButton productId={selected}/>
            </div>
        </React.Fragment>
    )
}

export default VariationButtonGroup;