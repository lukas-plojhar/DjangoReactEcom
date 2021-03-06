import React, {Component} from "react";

export const CheckoutVariationButton = ({selected, handleClick, id, label, price}) => {
    return <div className={selected ? "radio d:inline-block active" : "radio d:inline-block"}
                id={id} onClick={handleClick}>
        {/*{label ? <span className="top-out">{label ? label : ""}</span> : ""}*/}
        <p className="txt text:center">{label}</p>
        <p className="d:grid bottom-txt text:center">
            <b>{price}</b>
        </p>
    </div>
}

export class CheckoutVariationButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected || 1
        }
    }

    // Handlers
    handleClick = (index) => {
        this.setState({selected: index})
    }

    render() {
        const {selected} = this.state;
        return <div className="radio-group d:flex flex:row">
            {React.Children.map(this.props.children, (child, i) =>
                <CheckoutVariationButton
                    id={i}
                    selected={i == selected ? true : false}
                    label={child.props.label}
                    price={child.props.price}
                    handleClick={() => this.handleClick(i)}
                />)}
        </div>
    }
}