import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import cartFull from "../../assets/images/fullCart.png";
import currencyUp from "../../assets/images/up.png";
import currencyDown from "../../assets/images/down.png";
import CartModalLayout from "../Cart/CartModalLayout/CartModalLayout";
import CustomConverter from "../UI/CurrencySelect/CustomConverter";
import { connect } from "react-redux";
import { HeaderContainer, Actions, Logo } from "./Header.styles";

import { changeProductsCurrency } from "../../store/actions/cartActions";

class Header extends React.PureComponent {
  state = {
    currencyDropdown: false,
    cartShow: false,
    activeStyles: {
      color: "#5ECE7B",
      borderBottom: "1px solid #5ECE7B",
      fontFamily: "Raleway",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "120%",
    },
    isOpened: false,
  };

  //TOGGLE CART
  cartToggleHandler = () => {
    this.setState((prevState) => ({
      cartShow: !prevState.cartShow,
    }));

    if (!this.state.cartShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  //TOTAL AMOUNT OF ITEMS IN THE CART
  cartItemsTotalHandler = () => {
    const total = [];
    this.props.cartItems.map((product) => {
      total.push(product.quantity);
    });

    if (total.length > 1) {
      return total.reduce((a, b) => a + b);
    } else {
      return total;
    }
  };

  render() {
    const { cartItems } = this.props;

    //dymamic variable
    let currencyImg = currencyUp;
    if (this.state.currencyDropdown) {
      currencyImg = currencyDown;
    }

    return (
      <HeaderContainer>
        <nav>
          <ul>
            <li>
              <NavLink
                to={`/category/all`}
                exact
                activeStyle={this.state.activeStyles}
              >
                all
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/category/tech`}
                exact
                activeStyle={this.state.activeStyles}
              >
                tech
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/category/clothes`}
                exact
                activeStyle={this.state.activeStyles}
              >
                clothes
              </NavLink>
            </li>
          </ul>
        </nav>

        <Logo>
          <Link to="/">
            <img alt="logo" src={logo}></img>
          </Link>
        </Logo>
        <Actions>
          <div>
            <CustomConverter />
          </div>
          <div onClick={this.cartToggleHandler}>
            <img alt="cart" src={cartFull}></img>
            {cartItems && cartItems.length > 0 && (
              <span>{this.cartItemsTotalHandler()}</span>
            )}
          </div>
        </Actions>
        {this.state.cartShow && (
          <CartModalLayout closeModal={this.cartToggleHandler} />
        )}
      </HeaderContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currencies: state.cart.currencies,
    cartItems: state.cart.cartItems,
    selectedCurrency: state.cart.selectedCurrency,
    selectedSymbol: state.cart.selectedSymbol,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeProductsCurrency: (newCurrency) => {
      dispatch(changeProductsCurrency(newCurrency));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  cartItems: PropTypes.array,
};
