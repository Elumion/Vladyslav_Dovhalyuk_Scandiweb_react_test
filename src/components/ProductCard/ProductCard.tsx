import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  AttributeType,
  ItemsToAttributeType,
  ProductCardProps,
} from "../../@types/ProductTypes";
import { GQL_URL } from "../../constants";
import { addToCart, selectAttribute } from "../../redux/CartReducer";
import { StyledCard } from "./ProductCard.styles";
import { QUERY_PRODUCT } from "./query";

const cart: string = require("../../assets/Empty Cart White.svg").default;

class ProductCard extends React.Component<ProductCardProps & any, any> {
  async addToCart(id: string | undefined) {
    const response = await axios.post(GQL_URL, {
      query: QUERY_PRODUCT,
      variables: { id: id },
    });

    this.props.addProductToCart(response.data.data.product);

    const pureAttributes = response.data.data.product.attributes.map(
      (el: any) => {
        return {
          id: el.id,
          name: el.name,
          type: el.type,
          items: el.items[0],
        };
      }
    );
    const selectedAttributesObj: {
      productId: string;
      attributes: (AttributeType & { items: ItemsToAttributeType })[];
    } = { productId: this.props.id, attributes: pureAttributes };
    this.props.selectAttribute(selectedAttributesObj);
  }

  render(): React.ReactNode {
    return (
      <StyledCard key={this.props.id}>
        <Link to={`/product/${this.props.id}`}>
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
          </div>
          <p className="card__text">
            {this.props.brand} {this.props.name}
          </p>
          <p className="card__price">
            {this.props.selectedPrice?.currency.symbol}
            {this.props.selectedPrice?.amount}
          </p>
        </Link>
        {this.props.inStock && (
          <span
            data-id={this.props.id}
            className="add-to-cart"
            onClick={(e) => this.addToCart(e.currentTarget.dataset.id)}
          >
            <img className="add-to-cart__img" src={cart} alt="add-to-cart" />
          </span>
        )}
      </StyledCard>
    );
  }
}

//redux
// function mapStateToProps(state: any, ownProps: any){
//   return {
//     cart:
//   };
// }

function mapDispatchToProps(dispatch: any) {
  return {
    addProductToCart: (productObj: any) => dispatch(addToCart(productObj)),
    selectAttribute: (productObj: {
      productId: string;
      attributes: (AttributeType & { items: ItemsToAttributeType })[];
    }) => dispatch(selectAttribute(productObj)),
  };
}

export default connect(null, mapDispatchToProps)(ProductCard);
