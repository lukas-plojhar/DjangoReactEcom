import React from 'react';

export const Stars = ({rating = 4.7, numberOfReviews = 100}) => {
    return <div className="d-block mb-1">
        <i className="icon-star"></i>
        ---- STARS ----
    </div>
}

export default Stars;


