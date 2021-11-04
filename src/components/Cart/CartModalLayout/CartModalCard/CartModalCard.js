import React from "react";
import PropTypes from "prop-types";
import CartModalCardItem from "./CartModalCardItem/CartModalCardItem";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ModalLayout, Actions, TotalSum } from "./CartModalCard.styles";

class CartModalCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  itemsAddedHandler = () => {
    const amount = [];
    this.props.cartItems.map((item) => {
      amount.push(item.quantity);
    });

    if (amount.length > 1) {
      return amount.reduce((a, b) => a + b);
    } else {
      return amount;
    }
  };
  // TOTAL PRICE
  calcTotalPrice = () => {
    const prices = [];
    this.props.cartItems.map((product) => {
      const prodQ = product.quantity;
      return product.prices.map((price) => {
        if (price.currency === this.props.selectedCurrency) {
          prices.push(price.amount.toFixed() * prodQ);
        }
      });
    });

    if (prices.length > 1) {
      return prices.reduce((a, b) => a + b);
    } else {
      return prices;
    }
  };

  handleClickOutside(event) {
    const close = this.props.closeModal;
    if (this.ref.current && !this.ref.current.contains(event.target)) {
      close();
      document.body.style.overflow = "auto";
    }
  }
  componentDidMount() {
    document.addEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }

  render() {
    const { cartItems, closeModal, selectedSymbol } = this.props;
    const totalPrice = this.calcTotalPrice();

    return (
      <ModalLayout ref={this.ref} onClick={(e) => this.handleClickOutside(e)}>
        <h2>My bag {this.itemsAddedHandler()} items</h2>
        {cartItems ? (
          cartItems.map((product) => (
            <CartModalCardItem
              cartItem={cartItems}
              brand={product.brand}
              attr={product.attributes}
              images={product.gallery}
              quantity={product.quantity}
              price={product.prices}
              key={product.id}
              name={product.name}
              id={product.id}
              itemsQuanitity={product.quantity}
              attrSwatch={product.attrSwatch}
              attrText={product.attrText}
            ></CartModalCardItem>
          ))
        ) : (
          <p>Your cart is empty..</p>
        )}

        {cartItems && cartItems.length > 0 ? (
          <TotalSum>
            <div>
              <span>Total</span>
            </div>
            <div>
              <span>
                {selectedSymbol}
                {totalPrice}
              </span>
            </div>
          </TotalSum>
        ) : (
          <span
            style={{
              textAlign: "center",
              color: "grey",
              fontSize: "1rem",
              marginBottom: "1rem",
            }}
          >
            Your cart is empty
          </span>
        )}

        <Actions>
          <Link to="/cart">
            <button onClick={closeModal}>view bag</button>
          </Link>
          <button onClick={closeModal}>check out</button>
        </Actions>
      </ModalLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
    quantity: state.cart.quantity,
    selectedCurrency: state.cart.selectedCurrency,
    selectedSymbol: state.cart.selectedSymbol,
  };
};

export default connect(mapStateToProps)(CartModalCard);

CartModalCard.propTypes = {
  cartItems: PropTypes.array,
  closeModal: PropTypes.func,
  selectedSymbol: PropTypes.string,
};
