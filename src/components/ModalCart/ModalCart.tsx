import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ProductCardProps } from "../../@types/ProductTypes";
import {
  counterProductAdd,
  counterProductRemove,
  selectAttribute,
} from "../../redux/CartReducer";
import FullProduct from "../FullProduct";
import { ModalCartContainer } from "./ModalCart.styles";

type Props = {
  show: boolean;
  products: (ProductCardProps & { storeId: string })[];
  children?: JSX.Element | JSX.Element[] | string;
  currency?: { label: string; symbol: string };
  checkedAttributes?: any;
  setProductAttributes: (productId: string, attributes: any) => void;
  addProduct: (productId: string) => void;
  removeProduct: (productId: string) => void;
  toggleShow: () => void;
};

class ModalCart extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  renderProducts(
    products: (ProductCardProps & { storeId: string })[]
  ): React.ReactNode {
    return products.map((product) => {
      // debugger;
      return (
        <FullProduct
          setAttribute={this.props.setProductAttributes}
          checkedItems={product.sellectedAttributes}
          currency={{ label: this.props.currency?.label }}
          product={product}
          key={product.storeId}
          addProduct={this.props.addProduct}
          removeProduct={this.props.removeProduct}
          count={product.count}
        />
      );
    });
  }

  getTotalPrice() {
    return this.props.products.reduce((acc: number, curr) => {
      // this.props.currency?.label === curr.
      let result = acc;
      if (Array.isArray(curr.prices)) {
        // debugger;
        const price = curr.prices.filter(
          (el) => el.currency.label === this.props.currency?.label
        )[0];

        if (typeof curr.count !== "undefined") {
          result += price.amount * curr.count;
        }
      }
      return result;
    }, 0);
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
        <div className="minicart__total">
          <p className="total__text">Total:</p>
          <p className="total__price">
            {this.props.currency?.symbol}
            {this.getTotalPrice().toFixed(2)}
          </p>
        </div>
        <div className="minicart__links">
          <Link
            to={"/cart"}
            className="minicart__link"
            onClick={this.props.toggleShow}
          >
            View bag
          </Link>
          <Link
            to={"check-out-page"}
            className="minicart__link"
            onClick={this.props.toggleShow}
          >
            CHECK OUT
          </Link>
        </div>
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
    addProduct: (productId: string) => {
      dispatch(counterProductAdd(productId));
    },
    removeProduct: (productId: string) => {
      dispatch(counterProductRemove(productId));
    },
  };
}

export default connect(MapStateToProps, MapDispatchToProps)(ModalCart);
