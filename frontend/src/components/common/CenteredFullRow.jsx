import React from 'react';

const CenteredFullRow = ({ children }) => {
    return(
        <div className="row">
            <div className="col-12 text-center my-5">
                {children}
            </div>
        </div>
    );
}

export default CenteredFullRow;