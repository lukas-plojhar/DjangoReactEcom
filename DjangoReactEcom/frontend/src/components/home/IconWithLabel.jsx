import React from 'react';

const IconWithLabel = ({img, title, children}) => {
    return(
        <div className="col-12 text-center">
            <img src="{img}" alt=""/>
                <h2 className="bold">{title}</h2>
                <p>{children}</p>
        </div>
    );
}

export default IconWithLabel;