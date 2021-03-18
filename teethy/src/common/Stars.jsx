import React from 'react';

export const Stars = ({rating = 4.7, numberOfReviews = 100}) => {
    return <div className="d-block mb-1 text-center text-md-left">
        <img src="/assets/img/icon_star.svg" style={{maxWidth: 15, marginRight: 5}}/>
        <small>
            ({rating})&nbsp;/&nbsp;{numberOfReviews} hodnocení
        </small>
    </div>
}

export default Stars;


