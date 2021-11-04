import React from "react";
import PropTypes from "prop-types";
import emptyCart from "../../../assets/images/empty-cart.png";
import { connect } from "react-redux";
import { addProductToCart } from "../../../store/actions/cartActions";
import {
  ImageWrapper,
  CartButton,
  ListingItemWrapper,
  ProdDescription,
} from "./PLItem.styles";

class ProductListingItem extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      warningMessage: "Please select options before adding",
      onAddProduct: false,
    };
  }

  // CURRENCY AMOUNT
  convertCurrentPrice = () => {
    return this.props.price.map((item) => {
      if (item.currency === this.props.selectedCurrency) {
        return item.amount.toFixed();
      }
    });
  };
  // selecting a product  ADD TO CART
  productToCartHandler = () => {
    return this.props.products.find((product) => product.id === this.props.idx);
  };
  //ADD TO CART FROM REDUX if only product doesnt have attributes
  addingToCartHandler = (e, prod) => {
    e.preventDefault();
    const chosenProduct = this.productToCartHandler();
    if (chosenProduct.attributes.length === 0) {
      this.setState({ onAddProduct: true });
      this.props.onAddProductToCart(prod);
    }
    if (chosenProduct.attributes.length >= 1) {
      alert("Please select options before adding a product!");
    }
  };
  render() {
    const { image, brand, selectedSymbol, inStock, name } = this.props;
    const { loading, scrollerRef, handleScroll } = this.props;

    //CURRENT PRODUCT
    const chosenProduct = this.productToCartHandler();

    return (
      <ListingItemWrapper ref={scrollerRef} onScroll={handleScroll}>
        <div>
          <ImageWrapper>
            <img alt="img" src={image}></img>
          </ImageWrapper>

          <ProdDescription>
            <div>
              <h3>
                {brand}
                <> {name}</>
              </h3>
            </div>

            <div>
              <span>
                {selectedSymbol} {this.convertCurrentPrice()}
              </span>
            </div>
          </ProdDescription>

          {inStock && (
            <CartButton>
              <img
                alt="empty cart"
                src={emptyCart}
                onClick={(e) => this.addingToCartHandler(e, chosenProduct)}
              ></img>
            </CartButton>
          )}

          {!inStock && (
            <p>
              <span>OUT OF STOCK</span>
            </p>
          )}
        </div>
        {loading && <p>Loading...</p>}
      </ListingItemWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCurrency: state.cart.selectedCurrency,
    cartItems: state.cart.cartItems,
    quantity: state.cart.quantity,
    selectedSymbol: state.cart.selectedSymbol,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProductToCart: (chosenProduct) => {
      dispatch(addProductToCart(chosenProduct));
    },
  };
};

const ComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListingItem);
export default ComponentContainer;

ProductListingItem.propTypes = {
  image: PropTypes.string,
  brand: PropTypes.string,
  selectedSymbol: PropTypes.string,
  inStock: PropTypes.bool,
  name: PropTypes.string,
};
