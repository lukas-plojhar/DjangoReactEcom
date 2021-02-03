import React from 'react';

const IconWithLabel = ({source, title, children}) => {
    return(
        <div className="col-12 col-sm-4 text-center">
            <img src={source} alt={title}/>
                <p className="font-weight-bold bigger mt-3">{title}</p>
                <p className="text-justify">{children}</p>
        </div>
    );
}

export default IconWithLabel;