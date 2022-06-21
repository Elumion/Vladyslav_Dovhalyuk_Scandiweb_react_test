import React from "react";
import { ProductCardProps } from "../../@types/ProductCardType";
import { StyledCard } from "./ProductCard.styles";

class ProductCard extends React.Component<ProductCardProps, any> {
  constructor(props: ProductCardProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <StyledCard key={this.props.id}>
        <img
          className="card__img"
          src={this.props.gallery[0]}
          alt={this.props.name}
          width={354}
          height={330}
        />
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
