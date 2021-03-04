import React, {Component} from "react";
import "./assets/css/VariationButton.css"

export const VariationButton = ({selected, handleClick, id, label, name, price, secondPrice}) => {
    return <div className={selected ? "radio d:inline-block active" : "radio d:inline-block"}
                id={id} onClick={handleClick}>
        {label ? <span className="top-out">{label ? label : ""}</span> : ""}
        <p className="txt text:center">{name}</p>
        <p className="d:grid bottom-txt text:center">
            <b>{price},-</b>
            {secondPrice ? <small>{secondPrice} ,- / ošetření</small> : ""}
        </p>
    </div>
}

export class VariationButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected
        }
    }

    handleClick = (index) => {
        this.setState({selected: index})
    }

    render() {
        const {selected} = this.state;
        return <div className="radio-group d:flex flex:row">
            {React.Children.map(this.props.children, (child, i) =>
                <VariationButton
                    id={i}
                    selected={i == selected ? true : false}
                    label={child.props.label}
                    name={child.props.name}
                    price={child.props.price}
                    secondPrice={child.props.secondPrice}
                    handleClick={() => this.handleClick(i)}
                />)}
        </div>
    }
}