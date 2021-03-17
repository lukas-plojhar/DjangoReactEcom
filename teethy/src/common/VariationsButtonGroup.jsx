import React, {useState} from "react";
import {Link} from "react-router-dom";

const VariationsButtonGroup = ({id, variations}) => {
    const [selected, setSelected] = useState(1);

    // Single product
    return variations.length == 1 ? <React.Fragment>
            {/*Content*/}
            <small className="text-center text-md-left">Balení obsahuje: {variations[0].content || 'Not found'}</small>

            {/*Price*/}
            <div className="b-block text-center mt-1">
                <h1 className="d-inline-block strikethrough my-1">{variations[0].regularPrice}{process.env.REACT_APP_CURRENCY}</h1>
                <h3 className="mb-1" style={{fontWeight: 'bolder'}}>{variations[0].salePrice}{process.env.REACT_APP_CURRENCY}</h3>
            </div>


            {/*Group of variation buttons*/}
            <div className="text-center">
                {/*Add to cart button*/}
                <Link to={`/pokladna/?productId=${id}`}>
                    <button className="btn-lg btn-primary bg-shadow mb-1" type="button">Přidat do košíku
                    </button>
                </Link>
            </div>
        </React.Fragment>

        // Variable product
        : <React.Fragment>
            {/*Content*/}
            <small className="text-center text-md-left">Balení
                obsahuje: {variations[selected].content || 'Not found'}</small>

            {/*Price*/}
            <div className="b-block text-center mt-1">
                <h1 className="d-inline-block strikethrough my-1"
                    style={{textDecoration: 'line-through'}}>{variations[selected].regularPrice}{process.env.REACT_APP_CURRENCY}</h1>
                <h3 className="mb-2">{variations[selected].salePrice}{process.env.REACT_APP_CURRENCY}</h3>
            </div>

            {/*Group of variation buttons*/}
            <div className="variations-button-group text-center">
                <div className="btn-group d-block pt-0 mt-0 mb-2" role="group">
                    {variations.map((variation, index) => {
                        return <button key={index}
                                       className={
                                           `btn-sm ` +
                                           (selected === index ? 'btn-primary ' : 'btn-outline-primary ') +
                                           (index !== 2 ? 'mr-1' : ' mr-0')
                                       }
                                       type="button"
                                       onClick={() => setSelected(index)}>{variation.name}</button>
                    })}
                </div>

                {/*Add to cart button*/}
                <Link to={`/pokladna/?productId=${id}&variationId=${selected}`}>
                    <button className="btn-lg btn-primary bg-shadow mb-1" type="button">Přidat do košíku</button>
                </Link>
            </div>
        </React.Fragment>
}

export default VariationsButtonGroup;
