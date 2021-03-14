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
                {/*<b style={{textDecoration: "line-through"}}> {regularPrice},-<br/></b>*/}
                {/*<b className="text-center">{id+1}x </b>{salePrice / (id+1)},-*/}
                {/*<span className="regular-price" style={{fontSize: 20}}>{regularPrice} ,-</span><br/>*/}
                <span className="sale-price" style={{fontSize: 16}}><b>{id + 1}x</b> {salePrice/id} ,-</span><br/>
            </p>
        </div>
    );
};

export class VariationButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selectedVariation || 1,
            variations: this.props.variations
        };
    }

    // Hooks
    componentDidUpdate() {
        if (this.props.selectedVariation != this.state.selected) {
            const state = this.state;
            state.selected = this.props.selectedVariation;
            this.setState(state);
        }
    }


    render() {
        const {selected, variations} = this.state;
        const {label} = this.props;

        if (variations.length == 1) {
            return <p className="text-center">
                <span className="regular-price">{variations[0].regularPrice} ,-</span><br/>
                <span className="sale-price">{variations[0].salePrice} ,-</span>
            </p>
        }

        return (
            <div className="radio-group">
                {
                    variations.map((variation, index) => {
                        return <VariationButton
                            key={index}
                            id={index}
                            selected={index == selected}
                            label={index == 1 ? label : null}
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
