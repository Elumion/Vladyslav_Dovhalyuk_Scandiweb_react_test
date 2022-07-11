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
import { ModalCart } from "../ModalCart";
import { ProductCardProps } from "../../@types/ProductTypes";

type PropsLayout = { navsArray: string[] };

const logo: string = require("../../assets/header_logo.svg").default;
const cart: string = require("../../assets/Empty Cart.svg").default;

class Layout extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      currencies: [{ label: null, symbol: null }],
      showCart: false,
    };
  }

  async componentDidMount() {
    this.props.categoriesUpdate(QUERY_CATEGORIES);

    const currenciesData = await axios.post(GQL_URL, {
      query: QUERY_CURRENCIES,
    });
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
        onClick={(e: any) => {
          this.updateProducts();
          if (this.state.showCart) {
            this.toggleShowCart();
          }
        }}
      >
        <Link to={`/categories/${el.name}`}> {el.name}</Link>
      </li>
    ));
  }

  selectCurrency(currencyObj: CurrencyType) {
    this.props.selectCurrency(currencyObj);
  }

  renderCurrencies(currenciesArr: CurrencyType[]) {
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

  toggleShowCart() {
    const root = document.querySelector("#root");
    const overlay = document.querySelector("#overlay");
    root?.classList.toggle("hide-scroll");
    overlay?.classList.toggle("overlay");
    this.setState({ showCart: !this.state.showCart });
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
              <div
                onClick={this.toggleShowCart.bind(this)}
                className="cart__layout-container"
              >
                <img src={cart} alt="cart" />
                {this.props.cart.length > 0 && (
                  <span className="items__count">
                    {this.props.cart.reduce(
                      (acc: number, el: ProductCardProps) =>
                        acc + (el.count ? el.count : 0),
                      0
                    )}
                  </span>
                )}
              </div>
              <ModalCart
                toggleShow={this.toggleShowCart.bind(this)}
                show={this.state.showCart}
                products={this.props.cart}
              />
            </div>
          </div>
        </HeaderContainer>
        <main className="container">{this.props.children}</main>
        <div
          id="overlay"
          onClick={this.toggleShowCart.bind(this)}
          className=""
        ></div>
      </>
    );
  }
}

// Redux

function mapStateToProps(state: any, ownProps: any) {
  return {
    categories: state.categories.data?.categories,
    currency: state.currency,
    cart: state.cart.data,
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
