import React from "react";
import { ProductCardProps } from "../../@types/ProductTypes";
import { StyledCard } from "./ProductCard.styles";

const cart: string = require("../../assets/Empty Cart White.svg").default;

class ProductCard extends React.Component<ProductCardProps, any> {
  constructor(props: ProductCardProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <StyledCard key={this.props.id}>
        {!this.props.inStock && <div className="out-of-stock__sheet"></div>}
        <div className="card__upper-container">
          {!this.props.inStock && (
            <p className="out-of-stock__text"> Out of stock </p>
          )}
          <img
            className="card__img"
            src={this.props.gallery[0]}
            alt={this.props.name}
            width={354}
            height={330}
          />
          {this.props.inStock && (
            <div className="add-to-cart">
              <img className="add-to-cart__img" src={cart} alt="add-to-cart" />
            </div>
          )}
        </div>
        <p className="card__text">
          {this.props.brand} {this.props.name}
        </p>
        <p className="card__price">
          {this.props.selectedPrice?.currency.symbol}
          {this.props.selectedPrice?.amount}
        </p>
      </StyledCard>
    );
  }
}

export default ProductCard;
