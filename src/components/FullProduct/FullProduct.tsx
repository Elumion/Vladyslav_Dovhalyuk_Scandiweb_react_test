import React from "react";
import { AttributeType, ProductCardProps } from "../../@types/ProductTypes";
import AttributeButton from "../AttributeButton";
import { FullProductContainer } from "./FullProduct.styles";

interface Props {
  product: ProductCardProps;
  currency: { label: string | undefined };
}

class FullProduct extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 1 };
  }

  renderAttributes(attributesArr: AttributeType[] | undefined) {
    console.log(attributesArr);

    if (typeof attributesArr === "undefined") return null;
    return attributesArr.map((el) => {
      return (
        <li key={el.id} className="attributes__item">
          <p className="attribute__name">{el.name}</p>
          <ul className="buttons">
            {el.items.map((item) => (
              <li className="buttons__item">
                {" "}
                <AttributeButton
                  displayValue={item.displayValue}
                  isSwatch={el.type === "swatch"}
                  key={item.id}
                  value={item.value}
                  id={item.id}
                />{" "}
              </li>
            ))}
          </ul>
        </li>
      );
    });
  }

  render() {
    const selectedPrice = this.props.product.prices.filter(
      (el) => el.currency.label === this.props.currency.label
    )[0];

    return (
      <FullProductContainer>
        <div className="product__info">
          <p className="product__name">
            {this.props.product.brand}
            <br />
            {this.props.product.name}
          </p>
          <p className="price">
            {selectedPrice.currency.symbol}
            {selectedPrice.amount}
          </p>
          <ul className="attributes">
            {this.renderAttributes(this.props.product.attributes)}
          </ul>
        </div>
        <div className="counter">
          <button
            className="counter__button plus"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          ></button>
          {this.state.count}
          <button
            className="counter__button minus"
            onClick={() => this.setState({ count: this.state.count - 1 })}
          ></button>
        </div>
        <img
          className="product__image"
          src={this.props.product.gallery[0]}
          alt={this.props.product.name}
          width={121}
        />
      </FullProductContainer>
    );
  }
}

export default FullProduct;
