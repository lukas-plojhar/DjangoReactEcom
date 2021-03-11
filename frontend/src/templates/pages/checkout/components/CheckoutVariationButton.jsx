import React, {Component} from "react";

export const CheckoutVariationButton = ({selected, handleClick, id, label, price}) => {
    return <div className={selected ? "radio active text-center" : "radio text-center"}
                id={id} onClick={handleClick}>
        {/*{label ? <span className="top-out">{label ? label : ""}</span> : ""}*/}
        <span className="text-center btn-payment">{label} {price ? <span>+{price},-</span> : ""}</span>

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
        return <div className="radio-group text-center payment ">
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