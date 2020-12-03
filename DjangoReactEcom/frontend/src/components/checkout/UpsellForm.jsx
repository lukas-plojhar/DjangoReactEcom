import React from 'react';

const UpsellForm = (
    {
        first_name,
        last_name,
        email,
        phone,
        address,
        city,
        postcode,
        handleChange
    }) => {
    return (
        <div className="row">
            <div className="upsell col-12">
                <hr/>
                upsell product
                <hr/>
            </div>
        </div>
    )
}

export default UpsellForm;