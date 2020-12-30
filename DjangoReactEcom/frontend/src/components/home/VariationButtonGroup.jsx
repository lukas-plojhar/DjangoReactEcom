import React from 'react';
import AddToCartButton from "./AddToCartButton";

const VariationButtonGroup = ({data, selected, handleClick}) => {
    return (
        <React.Fragment>
            <div className="btn-group btn-group-lg" role="group">
                {data.map((item, index) => {
                        const {product_id, label} = item;
                        return (
                            <button
                                key={product_id}
                                value={product_id}
                                onClick={(e)=>handleClick(e.target.value)}
                                className={`btn ${product_id == selected ? "btn-primary" : "btn-secondary btn-outline"}`}>
                                {label}
                            </button>
                        )
                    }
                )}
            </div>
            <AddToCartButton productId={selected}/>
        </React.Fragment>
    )
}

export default VariationButtonGroup;