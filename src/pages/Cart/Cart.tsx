import React from "react";
import { connect } from "react-redux";
import { ProductCardProps } from "../../@types/ProductTypes";
import FullProduct from "../../components/FullProduct";
import {
  counterProductAdd,
  counterProductRemove,
  selectAttribute,
} from "../../redux/CartReducer";
import { CartContainer } from "./Cart.styles";

interface Props {
  cart: ProductCardProps[];
  currency: { label: string | undefined; symbol: string | undefined };
  checkedAttributes?: any;
  setProductAttributes: (productId: string, attributes: any) => void;
  addProduct: (productId: string) => void;
  removeProduct: (productId: string) => void;
}

class Cart extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  getTotalPrice() {
    return this.props.cart.reduce((acc: number, curr) => {
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

  renderItems(cart: ProductCardProps[]) {
    return (
      <>
        {cart?.map((product: ProductCardProps) => {
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
              isFullSize
            />
          );
        })}
      </>
    );
  }

  render() {
    return (
      <CartContainer>
        <h1 className="title">Cart</h1>
        <ul className="cart-items">{this.renderItems(this.props.cart)}</ul>
        <div className="tax">
          <p className="name">Tax 21%:</p>
          <p className="price">
            {this.props.currency.symbol}
            {(this.getTotalPrice() * 0.21).toFixed(2)}
          </p>
        </div>
        <div className="quantity">
          <p className="text">Quantity:</p>
          <p className="number">
            {this.props.cart.reduce(
              (acc, el) => (el.count ? el.count + acc : 0),
              0
            )}
          </p>
        </div>
        <div className="cart-total">
          <p className="text">Total:</p>
          <p className="price">
            {this.props.currency.symbol}
            {this.getTotalPrice().toFixed(2)}
          </p>
        </div>
        <button className="order-btn">ORDER</button>
      </CartContainer>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    cart: state.cart.data,
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

export default connect(mapStateToProps, MapDispatchToProps)(Cart);
