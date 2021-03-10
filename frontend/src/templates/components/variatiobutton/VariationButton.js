import React, { Component } from "react";
import "./assets/css/VariationButton.css";

export const VariationButton = ({
  selected,
  handleClick,
  id,
  label,
  name,
  price,
  salePrice,
  secondPrice,
}) => {
  return (
    <div
      className={
        selected ? "radio active" : "radio"
      }
      id={id}
      onClick={handleClick}
    >
        {label ? <span className="top-out">{label}</span> : null}
      <p className="text-center variation-button-text">{name}</p>
      <p className="text-center variation-button-price">
        {salePrice ? (
          <b style={{ textDecoration: "line-through" }}> {salePrice},-<br/></b>
        ) : null}
        <b className="text-center">{price},-</b>

      </p>
    </div>
  );
};

export class VariationButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected || 1,
    };
  }

  handleClick = (index) => {
    this.setState({ selected: index });
  };

  render() {
    const { selected } = this.state;
    return (
      <div className="radio-group">
        {React.Children.map(this.props.children, (child, i) => (
          <VariationButton
            id={i}
            selected={i == selected ? true : false}
            label={child.props.label}
            name={child.props.name}
            price={child.props.price}
            salePrice={child.props.salePrice}
            secondPrice={child.props.secondPrice}
            handleClick={() => this.handleClick(i)}
          />
        ))}
      </div>
    );
  }
}
