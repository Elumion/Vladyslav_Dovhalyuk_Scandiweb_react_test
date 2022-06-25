import React from "react";
import { ProductCardProps } from "../../@types/ProductTypes";
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
        </div>
        <div className="counter">
          <button
            className="counter__button"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +
          </button>
          {this.state.count}
          <button
            className="counter__button"
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            -
          </button>
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
