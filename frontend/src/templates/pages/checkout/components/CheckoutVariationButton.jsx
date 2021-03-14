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
                <div className={i == selected ? "radio active text-center" : "radio text-center"}
                     id={i} onClick={() => this.handleClick(i)}>
                    {/*{child.props.label ? <span className="top-out">{child.props.label ? child.props.label : ""}</span> : ""}*/}
                    <span className="text-center btn-payment">{child.props.label} {child.props.price ?
                        <span>+{child.props.price},-</span> : ""}</span>

                </div>
            )}
        </div>
    }
}