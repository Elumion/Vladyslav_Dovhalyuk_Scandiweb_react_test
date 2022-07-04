import React from "react";
import { withRouter } from "../../withRouter";
import axios from "axios";
import { GQL_URL } from "../../constants";
import { QUERY_PRODUCT_DESCRIPTION } from "./query";
import {
  AttributeType,
  ItemsToAttributeType,
  ProductDescriptionType,
} from "../../@types/ProductTypes";
import { ProductDescriptionContainer } from "./ProductDescription.styles";
import AttributeButton from "../../components/AttributeButton";
import { connect } from "react-redux";
import { addToCart, selectAttribute } from "../../redux/CartReducer";

interface Props {
  params: { productId: string };
  currency: { label: string; symbol: string };
  addProductToCart: (product: ProductDescriptionType) => void;
  selectAttribute: (attributesObj: any) => void;
}

class ProductDescription extends React.Component<
  Props,
  {
    product: ProductDescriptionType;
    selectedImg: string;
    selectedAttributes?: any;
  }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      product: {
        name: "",
        prices: [
          {
            currency: {
              label: "",
              symbol: "",
            },
            amount: 0,
          },
        ],
        attributes: [],
        gallery: [],
        inStock: false,
        brand: "",
        id: "",
        category: "",
        description: "",
      },
      selectedImg: "",
      selectedAttributes: [],
    };
  }

  componentDidMount() {
    axios
      .post(GQL_URL, {
        query: QUERY_PRODUCT_DESCRIPTION,
        variables: {
          id: this.props.params.productId,
        },
      })
      .then((response: any) => {
        this.setState({
          product: response.data.data.product,
          selectedImg: response.data.data.product.gallery[0],
          selectedAttributes: {
            [response.data.data.product.id]:
              response.data.data.product.attributes.map((el: AttributeType) => {
                return {
                  id: el.id,
                  name: el.name,
                  type: el.type,
                  items: [el.items[0]][0],
                };
              }),
          },
        });

        const description = document.querySelector("#descriptionHTML");
        if (description) {
          description.innerHTML = response.data.data.product.description;
        }
      });
  }

  renderAttributes(attributesArr: AttributeType[]) {
    return attributesArr.map((el, index) => (
      <li key={el.id} className="attribute__item">
        <p className="item__name">{el.name}</p>
        <ul className="attribute__buttons">
          {el.items.map((item) => (
            <li key={item.id} className="button__item">
              <AttributeButton
                displayValue={item.displayValue}
                id={item.id}
                value={item.value}
                isSwatch={el.type === "swatch"}
                isChecked={
                  item.id ===
                  this.state.selectedAttributes[this.state.product.id][index]
                    .items.id
                }
                parentId={el.id}
                parentName={el.name}
                parentType={el.type}
                setAttribute={(obj) => {
                  // debugger;
                  // this.setState({selectedAttributes:{[this.state.product.id][index]:obj}})
                  let newObj = { ...this.state.selectedAttributes };
                  let itemsObj = { ...obj.items[0] };
                  // debugger;
                  newObj[this.state.product.id][index] = { ...obj };
                  newObj[this.state.product.id][index].items = { ...itemsObj };

                  this.setState({ selectedAttributes: { ...newObj } });
                }}
                isFullSize
              />
            </li>
          ))}
        </ul>
      </li>
    ));
  }

  addToCart(product: ProductDescriptionType) {
    const tmpObject = { ...product };
    delete tmpObject.description;
    delete tmpObject.category;
    this.props.addProductToCart(tmpObject);

    const selectedAttributesObj: {
      productId: string;
      attributes: (AttributeType & { items: ItemsToAttributeType })[];
    } = {
      productId: this.state.product.id,
      attributes: this.state.selectedAttributes[this.state.product.id],
    };
    // debugger;

    this.props.selectAttribute(selectedAttributesObj);
  }

  render() {
    const selectedPrice = this.state.product.prices.filter(
      (el) => el.currency.label === this.props.currency.label
    )[0];

    return (
      <ProductDescriptionContainer>
        <div className="product__images">
          <img
            className="selected-img"
            src={this.state.selectedImg}
            alt={this.state.selectedImg}
          />
          <ul className="gallery__list">
            {this.state.product.gallery.map((el: string) => (
              <li key={el} className="gallery__item">
                <img
                  className="gallery__img"
                  src={el}
                  alt={el}
                  height={100}
                  onClick={(e) => {
                    this.setState({ selectedImg: e.currentTarget.currentSrc });
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="product__info">
          <h1 className="product__brand">{this.state.product.brand}</h1>
          <p className="product__name">{this.state.product.name}</p>
          <ul className="attributes_list">
            {this.renderAttributes(this.state.product.attributes)}
          </ul>
          <p className="price__text">PRICE:</p>
          <p className="price__number">
            {this.props.currency.symbol}
            {selectedPrice?.amount}
          </p>
          <button
            disabled={!this.state.product.inStock}
            className={`add-to-cart__btn ${
              !this.state.product.inStock && "disabled"
            }`}
            onClick={() => {
              this.addToCart(this.state.product);
            }}
          >
            ADD TO CART
          </button>
          <div id="descriptionHTML"></div>
        </div>
      </ProductDescriptionContainer>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    currency: state.currency.data,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    addProductToCart: (productObj: any) => dispatch(addToCart(productObj)),
    selectAttribute: (attribute: any) => dispatch(selectAttribute(attribute)),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductDescription)
);
