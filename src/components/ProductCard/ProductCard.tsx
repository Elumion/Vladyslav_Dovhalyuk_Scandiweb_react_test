import React from "react";
import { ProductCardProps } from "../../@types/ProductCardType";

class ProductCard extends React.Component<ProductCardProps, any> {
  constructor(props: ProductCardProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <li key={this.props.id}>
        <img src={this.props.gallery[0]} alt={this.props.name} width={100} />
      </li>
    );
  }
}

export default ProductCard;
