import React from "react";
import PropTypes from "prop-types";
import ProductListingItem from "./ProductListingItem/ProductListingItem";
import { graphql } from "@apollo/client/react/hoc";
import Spinner from "../UI/Spinner/Spinner";
import { Link } from "react-router-dom";
import { CATEGORY } from "../../Query/Query";
import { connect } from "react-redux";
import { PDPWrapper, PDPCategoryName, PDPCardsWrapper } from "./PLP.styles";
import NotFound from "../UI/NotFound/NotFound";

class ProductListingPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPrice: 0,
      disabledButton: false,
      fetchingMore: false,
      hasMore: true,
      products: this.props.data.category,
      categoryName: this.props.match.params.category,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleOnScroll);
  }

  handleOnScroll = () => {
    var scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    var scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    var clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (!this.props.entries) {
      return;
    }
    if (scrolledToBottom) {
      this.props.onLoadMore();
    }
  };

  //CATEGORY HANDLER
  productsByCatHandler = (data, str) => {
    if (!data) {
      return;
    }
    return this.state.products.products.filter(
      (product) => product.category === str
    );
  };
  //ALL PRODUCTS CATEGORY
  productsAllCatHandler = () => {
    return this.state.products.products;
  };

  sortedProductsByCategory = (categName) => {
    let sortedProductsByCat;
    if (this.state.products) {
      if (categName === "all") {
        sortedProductsByCat = this.productsAllCatHandler(this.state.products);
      }
      if (categName === "tech") {
        sortedProductsByCat = this.productsByCatHandler(
          this.state.products,
          "tech"
        );
      }
      if (categName === "clothes") {
        sortedProductsByCat = this.productsByCatHandler(
          this.state.products,
          "clothes"
        );
      }
      if (
        categName !== "clothes" &&
        categName !== "tech" &&
        categName !== "all"
      ) {
        return (sortedProductsByCat = []);
      }
    }
    return sortedProductsByCat;
  };

  render() {
    const categName = this.props.match.params.category;
    const { selectedCurrency, disabledButton, data } = this.props;
    data.variables.limit = 5;

    if (data.loading) {
      return <Spinner />;
    }
    if (data.error) {
      return <p>Error!</p>;
    }

    const sortedProductsByCat = this.sortedProductsByCategory(categName);

    let withData;

    if (sortedProductsByCat === []) {
      withData = <NotFound />;
    }

    withData = (
      <PDPWrapper>
        <PDPCategoryName>
          <h1>
            Category
            {(this.state.products && categName === "tech") ||
            categName === "all" ||
            categName === "clothes" ? (
              <span> {categName.toUpperCase()}</span>
            ) : (
              <span>
                {categName.toUpperCase()}
                <>
                  <span style={{ color: "black" }}> not found!</span>
                  <Link
                    style={{
                      color: "#5ECE7B",
                      borderBottom: "1px solid #5ECE7B",
                    }}
                    to="/"
                  >
                    Go back
                  </Link>
                </>
              </span>
            )}
          </h1>
        </PDPCategoryName>

        {this.state.products && (
          <PDPCardsWrapper>
            {this.state.products &&
              sortedProductsByCat.map((product) => (
                <Link to={product && `/product/${product.id}`}>
                  <ProductListingItem
                    key={product.id}
                    idx={product.id}
                    brand={product.brand}
                    name={product.name}
                    image={product.gallery[0]}
                    disabled={disabledButton}
                    price={product.prices}
                    inStock={product.inStock}
                    currentCurrency={selectedCurrency}
                    products={this.state.products.products}
                  />
                </Link>
              ))}
          </PDPCardsWrapper>
        )}
      </PDPWrapper>
    );

    return withData;
  }
}

const withQuery = graphql(CATEGORY);

const PLPWithData = withQuery(ProductListingPage);

const mapStateToProps = (state) => {
  return {
    selectedCurrency: state.cart.selectedCurrency,
  };
};

const PLPWithDataComponentContainer = connect(mapStateToProps)(PLPWithData);

export default PLPWithDataComponentContainer;

ProductListingPage.propTypes = {
  categName: PropTypes.string,
  products: PropTypes.object,
};
