import React from "react";

const OrderFormField = ({fieldLabel, fieldName, fieldValue, handleChange}) => {

    return (
        <div className="form-group">
            <label htmlFor="{fieldValue}">{fieldLabel}</label>
            <input type="text"
                   className="form-control"
                   id={fieldName}
                   value={fieldValue}
                   name={fieldName}
                   onChange={handleChange}
            />
        </div>
    )
}

export default OrderFormField;