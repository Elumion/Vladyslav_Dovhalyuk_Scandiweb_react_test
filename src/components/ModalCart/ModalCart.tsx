import React from "react";
import { connect } from "react-redux";
import { ProductCardProps } from "../../@types/ProductTypes";
import { selectAttribute } from "../../redux/CartReducer";
import FullProduct from "../FullProduct";
import { ModalCartContainer } from "./ModalCart.styles";

type Props = {
  show: boolean;
  products: ProductCardProps[];
  children?: JSX.Element | JSX.Element[] | string;
  currency?: { label: string; symbol: string };
  checkedAttributes?: any;
  setProductAttributes: (productId: string, attributes: any) => void;
};

class ModalCart extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  renderProducts(products: ProductCardProps[]): React.ReactNode {
    return this.props.products.map((product: ProductCardProps) => {
      return (
        <FullProduct
          setAttribute={this.props.setProductAttributes}
          checkedItems={this.props.checkedAttributes}
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
    checkedAttributes: state.cart.selectedAttributes,
  };
}

function MapDispatchToProps(dispatch: any) {
  return {
    setProductAttributes: (productId: string, attributes: any) => {
      dispatch(selectAttribute({ productId, attributes }));
    },
  };
}

export default connect(MapStateToProps, MapDispatchToProps)(ModalCart);
