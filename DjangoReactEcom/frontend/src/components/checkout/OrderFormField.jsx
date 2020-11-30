import React from "react";

const OrderFormField = ({fieldLabel, fieldName, fieldValue, handleChange}) => {
    return (
        <React.Fragment>
            <label htmlFor={fieldValue}>{fieldLabel}</label>
            <input type="text" value={fieldValue} name={fieldName} id={fieldName} onChange={handleChange}/>
        </React.Fragment>
    )
}

export default OrderFormField;