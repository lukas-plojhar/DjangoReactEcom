import React from 'react';
import AddToCartButton from "./AddToCartButton";

const VariationButton = ({className, id, handleClick, children}) => {
    return (
        <button key={id}
                value={id}
                onClick={(e) => handleClick(e.target.value)}
                className={"btn " + className}
        >
            {children}
        </button>
    )
}

const VariationButtonGroup = ({data, handleClick, selectedProductId}) => {

    return (
        <React.Fragment>
            <div className="btn-group btn-group-lg" role="group">
                {data.map(variation =>
                    <VariationButton
                        id={variation.product_id}
                        key={variation.product_id}
                        handleClick={handleClick}
                        className={variation.product_id == selectedProductId ? 'btn-primary' : 'btn-secondary btn-outline'}>
                        {variation.label}
                    </VariationButton>
                )}
            </div>
            <AddToCartButton productId={selectedProductId}/>
        </React.Fragment>
    )
}

export default VariationButtonGroup;