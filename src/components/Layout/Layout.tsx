import React from "react";
import { QUERY_CATEGORIES } from "./query";
import { GQL_URL } from "../../constants";
import { connect, useDispatch, useSelector } from "react-redux";
import { store } from "../../redux/store";
import { fetchCategories } from "../../redux/CategoriesReducer";

type PropsLayout = { navsArray: string[] };

class Layout extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  async componentWillMount() {}

  componentDidMount() {
    // this.setState({ data: 43 });
    this.props.categoriesUpdate(QUERY_CATEGORIES);
    console.log();
  }

  componentWillUnmount() {}

  render(): React.ReactNode {
    console.log(this.state, "props: ", this.props);
    return (
      <>
        <div>{this.props.children}</div>;
      </>
    );
  }
}

//redux

function mapStateToProps(state: any, ownProps: any) {
  return {
    categories: ownProps,
    smth: state,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    categoriesUpdate: (query: string) => dispatch(fetchCategories(query)),
  };
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// const connectedComponent = connectToStore(Layout);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
