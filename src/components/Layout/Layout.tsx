import React from "react";
import { QUERY_CATEGORIES, QUERY_CURRENCIES } from "./query";
import { GQL_URL } from "../../constants";
import { connect, useDispatch, useSelector } from "react-redux";
import { store } from "../../redux/store";
import { fetchCategories } from "../../redux/CategoriesReducer";
import { HeaderContainer } from "./Layout.styles";
import { JsxElement } from "typescript";
import { withRouter } from "../../withRouter";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../redux/ProductsReducer";
import { QUERY_PRODUCTS } from "../../pages/ProductListing/query";
import axios from "axios";
import { CurrencyType } from "../../@types/CurrenciesListType";
import { selectCurrency } from "../../redux/CurrencyReducer";

type PropsLayout = { navsArray: string[] };

const logo: string = require("../../assets/header_logo.svg").default;
const cart: string = require("../../assets/Empty Cart.svg").default;

class Layout extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      currencies: [{ label: null, symbol: null }],
    };
  }

  async componentWillMount() {}

  async componentDidMount() {
    this.props.categoriesUpdate(QUERY_CATEGORIES);

    const currenciesData = await axios.post(GQL_URL, {
      query: QUERY_CURRENCIES,
    });
    console.log(currenciesData.data.data);
    this.setState({ currencies: currenciesData.data.data.currencies });
  }

  updateProducts() {
    this.props.productsUpdate({
      query: QUERY_PRODUCTS,
      name: this.props.params.categoryName,
    });
  }

  componentWillUnmount() {}

  renderItems(listArr: { name: string }[]) {
    return listArr.map((el) => (
      <li
        className={
          el.name === this.props.params.categoryName ? "active__url" : ""
        }
        key={el.name}
        onClick={() => this.updateProducts()}
      >
        <Link to={`/categories/${el.name}`}> {el.name}</Link>
      </li>
    ));
  }

  selectCurrency(currencyObj: CurrencyType) {
    this.props.selectCurrency(currencyObj);
  }

  renderCurrencies(currenciesArr: CurrencyType[]) {
    console.log(currenciesArr);
    return currenciesArr.map((el) => (
      <li
        key={el.label}
        onClick={(e: any) => {
          const targetDataset = e.currentTarget.dataset;
          const currencyObj = {
            label: targetDataset.label,
            symbol: targetDataset.symbol,
          };
          this.selectCurrency(currencyObj);
        }}
        data-label={el.label}
        data-symbol={el.symbol}
        className="currency__item"
      >
        {el.symbol} {el.label}
      </li>
    ));
  }

  toggleShowList(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.currentTarget.classList.toggle("show");
  }

  render(): React.ReactNode {
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
              <div onClick={(e) => this.toggleShowList(e)} className="currency">
                {this.props.currency.data.symbol}
                <ul className="currencies__list">
                  {this.renderCurrencies(this.state.currencies)}
                </ul>
              </div>
              <div>
                <img src={cart} alt="cart" />
              </div>
            </div>
          </div>
        </HeaderContainer>
        <main className="container">{this.props.children}</main>;
      </>
    );
  }
}

// Redux

function mapStateToProps(state: any, ownProps: any) {
  return {
    categories: state.categories.data?.categories,
    currency: state.currency,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    categoriesUpdate: (query: string) => dispatch(fetchCategories(query)),
    productsUpdate: (query: { query: string; name: string }) =>
      dispatch(fetchProducts(query)),
    selectCurrency: (currency: CurrencyType) =>
      dispatch(selectCurrency(currency)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
