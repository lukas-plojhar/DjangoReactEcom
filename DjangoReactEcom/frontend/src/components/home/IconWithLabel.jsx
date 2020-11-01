import React, { Component } from 'react';

const IconWithLabel = ({src, title, children}) => {
    return(
        <div className="card">
            <img src="{src}" alt="" className="card-img-top"/>
            <div className="card-body">
                <h3 className="card-title text-center">{title}</h3>
                <p className="card-text text-center">{children}</p>
            </div>
        </div>
    );
}

export default IconWithLabel;