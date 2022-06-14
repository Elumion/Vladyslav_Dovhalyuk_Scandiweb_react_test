import React from "react";
import { QUERY_CATEGORIES } from "./query";
import { GQL_URL } from "../../constants";
import { connect, useDispatch, useSelector } from "react-redux";
import { store } from "../../redux/store";
import { fetchCategories } from "../../redux/CategoriesReducer";
import { HeaderContainer } from "./Layout.styles";
import { JsxElement } from "typescript";

type PropsLayout = { navsArray: string[] };

const logo: string = require("../../assets/header_logo.svg").default;
const cart: string = require("../../assets/Empty Cart.svg").default;

class Layout extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  async componentWillMount() {}

  componentDidMount() {
    this.props.categoriesUpdate(QUERY_CATEGORIES);
  }

  componentWillUnmount() {}

  renderItems(listArr: { name: string }[]) {
    return listArr.map((el) => <li key={el.name}>{el.name}</li>);
  }

  render(): React.ReactNode {
    console.log(this.state, "props: ", this.props);
    return (
      <>
        <HeaderContainer>
          <div className="header__inner-container container">
            <nav>
              <ul>
                {this.props.categories &&
                  this.renderItems(this.props.categories)}
              </ul>
            </nav>
            <img className="logo" src={logo} alt="logo" />
            <div className="actions__container">
              <div className="currency">$</div>
              <div>
                <img src={cart} alt="cart" />
              </div>
            </div>
          </div>
        </HeaderContainer>
        <div>{this.props.children}</div>;
      </>
    );
  }
}

function mapStateToProps(state: any, ownProps: any) {
  return {
    categories: state.categories.data.categories,
    smth: ownProps,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    categoriesUpdate: (query: string) => dispatch(fetchCategories(query)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
