import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const VariationButton = ({id, handleClick, children}) => {
    return (
        <button key={id}
                value={id}
                onClick={(e) => handleClick(e.target.value)}
                className="btn btn-secondary"
                >
                {children}
        </button>
    )
}

const PriceButtons = ({data, handleClick, selectedProductId}) => {

 return(
     <React.Fragment>
        <div className="btn-group btn-group-lg" role="group">
            {data.map(variation => 
                <VariationButton id={variation.product_id} 
                                key={variation.product_id}
                                handleClick={handleClick}>
                                    {variation.label}
                                </VariationButton>
            )}
        </div>

        <Link to={"/product/" + selectedProductId}>
            <button className="btn btn-primary">Přidat do košíku</button>
        </Link>
    </React.Fragment>
 )
}

export default PriceButtons;