import React from "react";
import { connect } from "react-redux";
import { ProductCardProps } from "../../@types/ProductTypes";
import ProductCard from "../../components/ProductCard/ProductCard";
import { fetchProducts } from "../../redux/ProductsReducer";
import { withRouter } from "../../withRouter";
import { CardsContainer, CategoryName } from "./ProductsListing.styles";
import { QUERY_PRODUCTS } from "./query";

class ProductListing extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.props.productsUpdate({
      query: QUERY_PRODUCTS,
      name: this.props.params.categoryName,
    });
    this.state = {
      shouldUpdate: false,
      selectedPrice: this.props.currency,
    };
  }
  componentDidUpdate() {}

  componentWillMount() {}

  shouldComponentUpdate() {
    // if (!this.props.products?.category?.name) return false; //fix any url error
    // debugger;
    if (!this.props?.products) return true;
    if (this.props.params.categoryName !== this.props.products.category?.name) {
      this.props.productsUpdate({
        query: QUERY_PRODUCTS,
        name: this.props.params.categoryName,
      });
      return true;
    }
    return false;
  }

  componentWillReceiveProps(receivedProps: any) {
    if (this.state.selectedPrice !== receivedProps.currency.label) {
      this.setState({
        selectedPrice: receivedProps.currency.label,
      });
      this.forceUpdate();
    }
  }

  renderPhotos(photosArr: { products: ProductCardProps[] }) {
    return photosArr?.products?.map((el) => {
      const selectedPrice = el.prices.filter(
        (el) => el.currency.label === this.props.currency.label
      )[0];

      return (
        <ProductCard
          brand={el.brand}
          gallery={el.gallery}
          id={el.id}
          inStock={el.inStock}
          name={el.name}
          prices={el.prices}
          key={el.id}
          selectedPrice={{ ...selectedPrice }}
        />
      );
    });
  }

  render(): React.ReactNode {
    return (
      <>
        <CategoryName>
          {`${this.props.params.categoryName[0].toUpperCase()}${this.props.params.categoryName.substr(
            1
          )}`}
        </CategoryName>
        <CardsContainer>
          {this.renderPhotos(this.props.products?.category)}
        </CardsContainer>
      </>
    );
  }
}

// Redux

function mapStateToProps(state: any, ownProps: any) {
  return {
    products: state.products.data,
    currency: state.currency.data,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    productsUpdate: (query: { query: string; name: string }) =>
      dispatch(fetchProducts(query)),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductListing)
);
