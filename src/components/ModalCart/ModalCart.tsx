import React from "react";
import { connect } from "react-redux";
import { ProductCardProps } from "../../@types/ProductTypes";
import FullProduct from "../FullProduct";
import { ModalCartContainer } from "./ModalCart.styles";

type Props = {
  show: boolean;
  products: ProductCardProps[];
  children?: JSX.Element | JSX.Element[] | string;
  currency?: { label: string; symbol: string };
};

class ModalCart extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  renderProducts(products: ProductCardProps[]): React.ReactNode {
    return this.props.products.map((product: ProductCardProps) => {
      return (
        <FullProduct
          currency={{ label: this.props.currency?.label }}
          product={product}
          key={product.id}
        />
      );
    });
  }

  render(): React.ReactNode {
    return !this.props.show ? null : (
      <ModalCartContainer>
        <p className="bag">
          <span className="bold-text">My Bag,</span>{" "}
          {this.props.products.length} items
        </p>
        <ul className="minicart__products-list">
          {this.renderProducts(this.props.products)}
        </ul>
      </ModalCartContainer>
    );
  }
}

function MapStateToProps(state: any) {
  return {
    currency: state.currency.data,
  };
}

export default connect(MapStateToProps, null)(ModalCart);
