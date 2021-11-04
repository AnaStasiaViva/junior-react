import React from "react";
import CartItem from "./CartItem/CartItem";
import { connect } from "react-redux";

import {
  addProductToCart,
  getTotalPrice,
} from "../../store/actions/cartActions";

import { Line, SingleCartWrap, ModalLayout, TotalSum } from "./Cart.styles";

class Cart extends React.PureComponent {
  //TOTAL PRICE
  calcTotalPrice = () => {
    let prices = [];
    this.props.cartItems.map((product) => {
      let prodQ = product.quantity;
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

  // TOTAL AMOUNT OF ITEMS IN THE CART
  itemsAddedHandler = () => {
    const amount = [];
    this.props.cartItems.map((item) => {
      amount.push(item.quantity);
    });

    if (amount.length > 1) {
      return amount.reduce((a, b) => a + b);
    } else {
      return amount.join();
    }
  };

  render() {
    const { cartItems, selectedCurrency, selectedSymbol, closeModal } =
      this.props;

    return (
      <ModalLayout>
        <h1>
          Cart
          <p>
            {cartItems && cartItems.length > 0 ? (
              <> {this.itemsAddedHandler()} </>
            ) : (
              <span> 0 </span>
            )}
            items
          </p>
        </h1>

        <SingleCartWrap>
          {cartItems &&
            cartItems.map((product) => (
              <>
                <Line></Line>
                <CartItem
                  key={product.id}
                  product={product}
                  closeModal={closeModal}
                  cartItem={cartItems}
                  brand={product.brand}
                  attr={product.attributes}
                  images={product.gallery}
                  quantity={product.quantity}
                  price={product.prices}
                  name={product.name}
                  selectedCurrency={selectedCurrency}
                  itemsQuanitity={product.quantity}
                  id={product.id}
                  attrText={product.attrText}
                  attrSwatch={product.attrSwatch}
                ></CartItem>
              </>
            ))}
        </SingleCartWrap>

        {cartItems && cartItems.length > 0 ? (
          <TotalSum>
            <div>
              <span>total</span>
            </div>
            <div>
              <span>
                {selectedSymbol}
                {this.calcTotalPrice()}
              </span>
            </div>
          </TotalSum>
        ) : (
          <span
            style={{ textAlign: "center", color: "grey", fontSize: "2rem" }}
          >
            Your cart is empty
          </span>
        )}
      </ModalLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
    selectedCurrency: state.cart.selectedCurrency,
    selectedSymbol: state.cart.selectedSymbol,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddProductToCart: (prod) => {
      dispatch(addProductToCart(prod));
    },
    onGetTotalPrice: () => {
      dispatch(getTotalPrice());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
