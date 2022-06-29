import React from "react";
import { AttributeType, ProductCardProps } from "../../@types/ProductTypes";
import AttributeButton from "../AttributeButton";
import { FullProductContainer } from "./FullProduct.styles";

interface Props {
  product: ProductCardProps;
  currency: { label: string | undefined };
  checkedItems: any;
  count: number | undefined;
  setAttribute: (productId: string, attributes: AttributeType) => void;
  addProduct: (productId: string) => void;
  removeProduct: (productId: string) => void;
}

class FullProduct extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {};
    // debugger;
  }

  dispatchAttribute(attribute: AttributeType) {
    // debugger;s
    this.props.setAttribute(this.props.product.id, attribute);
  }

  renderAttributes(attributesArr: AttributeType[] | undefined) {
    // debugger;
    // console.log(attributesArr);

    if (typeof attributesArr === "undefined") return null;
    return attributesArr.map((el, index) => {
      // debugger;
      return (
        <li key={el.id} className="attributes__item">
          <p className="attribute__name">{el.name}:</p>
          <ul className="buttons">
            {el.items.map((item) => {
              // debugger;
              return (
                <li key={item.id} className="buttons__item">
                  {" "}
                  <AttributeButton
                    parentId={el.id}
                    parentName={el.name}
                    parentType={el.type}
                    setAttribute={(attribute) =>
                      this.dispatchAttribute(attribute)
                    }
                    isChecked={
                      item.id ===
                      this.props.checkedItems[this.props.product.id][index]
                        .items.id
                    }
                    displayValue={item.displayValue}
                    isSwatch={el.type === "swatch"}
                    key={item.id}
                    value={item.value}
                    id={item.id}
                  />{" "}
                </li>
              );
            })}
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
            onClick={() => this.props.addProduct(this.props.product.id)}
          ></button>
          {this.props.count}
          <button
            className="counter__button minus"
            onClick={() => this.props.removeProduct(this.props.product.id)}
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
