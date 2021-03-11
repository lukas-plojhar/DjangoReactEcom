import React, {Component} from "react";
import "./assets/css/VariationButton.css";

export const VariationButton = ({
                                    selected,
                                    handleClick,
                                    id,
                                    label,
                                    name,
                                    regularPrice,
                                    salePrice
                                }) => {
    return (
        <div className={selected ? "radio active" : "radio"}
             onClick={() => handleClick(id)}
        >

            {label ? <span className="top-out">{label}</span> : null}
            <p className="text-center variation-button-text">{name}</p>
            <p className="text-center variation-button-price">
                <b style={{textDecoration: "line-through"}}> {regularPrice},-<br/></b>
                <b className="text-center">{salePrice},-</b>
            </p>
        </div>
    );
};

export class VariationButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected,
            variations: this.props.variations
        };
    }

    render() {
        const {selected, variations} = this.state;
        return (
            <div className="radio-group">
                {
                    variations.map((variation, index) => {
                        return <VariationButton
                            key={index}
                            id={index}
                            selected={index == selected}
                            name={variation.name}
                            regularPrice={variation.regularPrice}
                            salePrice={variation.salePrice}
                            description={variation.description}
                            handleClick={this.props.handleClick}
                        />
                    })
                }
            </div>
        );
    }
}
