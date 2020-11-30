import React from 'react';

const ServicesForm = () => {

    return (
        <React.Fragment>
            <h3>Shipping and Payment</h3>
            <form>
                <input type="radio" id="age1" name="age" value="30" />
                <label for="age1">0 - 30</label>
                <input type="radio" id="age2" name="age" value="60"/>
                <label htmlFor="age1">0 - 30</label>
                <input type="radio" id="age3" name="age" value="90"/>
                <label htmlFor="age1">0 - 30</label>
            </form>
        </React.Fragment>
)
}

export default ServicesForm;