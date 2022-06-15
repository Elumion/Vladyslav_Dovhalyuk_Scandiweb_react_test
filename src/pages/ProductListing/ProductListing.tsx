import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux/ProductsReducer";
import { withRouter } from "../../withRouter";
import { QUERY_PRODUCTS } from "./query";

class ProductListing extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    this.props.productsUpdate({
      query: QUERY_PRODUCTS,
      name: this.props.params.categoryName,
    });
    // console.log(this.props, this.state);
  }

  componentWillMount() {
    this.props.productsUpdate({
      query: QUERY_PRODUCTS,
      name: this.props.params.categoryName,
    });
  }

  componentDidUpdate() {
    console.log(this.props.products);
  }

  render(): React.ReactNode {
    return <div>{this.props.params.categoryName}</div>;
  }
}

// Redux

function mapStateToProps(state: any, ownProps: any) {
  return {
    products: state.products.data,
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
