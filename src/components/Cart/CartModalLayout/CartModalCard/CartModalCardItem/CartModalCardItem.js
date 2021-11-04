import React from "react";
import {
  AttrText,
  AttrSwatch,
  CartItemContainer,
  CartItemAction,
  CartItemDescr,
  CartItemWrapper,
} from "./CartModalCardItem.styles";
import PropTypes from "prop-types";

import Slider from "../../../../UI/Slider/Slider";
import { connect } from "react-redux";
import {
  decrementCartQuantity,
  incrementCartQuantity,
} from "../../../../../store/actions/cartActions";

class CartModalCardItem extends React.PureComponent {
  state = {
    showSlider: false,
    attrTextStyles: {
      marginRight: "10px",
      border: "1px solid grey",
      padding: "0.3rem 0.3rem",
      fontSize: "12px",
      textAlign: "center",
      cursor: "pointer",
    },
    selectedAttrTextStyle: {
      backgroundColor: "black",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  //REDUX DECREMENT
  decreaseItemQuantity = (prodId) => {
    this.props.onDecrementCartItem(prodId);
  };
  //REDUX INCREMENT
  incrementItemQuantity = (prodId) => {
    this.props.onIncrementCartItem(prodId);
  };

  //ATTRIBUTE HANDLER
  attrSetHandler = () => {
    return this.props.attr.map((attr) => {
      if (
        (attr.type === "text" && attr.name === "Capacity") ||
        attr.name === "Size"
      ) {
        return attr.items.map((item) => (
          <AttrText
            style={
              this.props.attrText === item.displayValue
                ? this.state.selectedAttrTextStyle
                : this.state.attrTextStyles
            }
            id={item.id}
          >
            {item.displayValue}
          </AttrText>
        ));
      }

      if (attr.type === "swatch") {
        return attr.items.map((item) => (
          <AttrSwatch
            id={item.id}
            style={
              this.props.attrSwatch === item.value
                ? {
                    maxWidth: "20px",
                    maxHeight: "20px",
                    backgroundColor: `${item.value}`,
                    border: "0.5px solid grey",
                    borderRadius: "100%",
                    marginRight: "0.3rem",
                    padding: "5px",
                    cursor: "pointer",
                    transform: "scale(1.5)",
                  }
                : {
                    backgroundColor: `${item.value}`,
                    maxWidth: "20px",
                    maxHeight: "20px",
                  }
            }
          ></AttrSwatch>
        ));
      }
    });
  };

  //CURRENT PRICE
  productPriceConverter = () => {
    return this.props.price.map((item) => {
      if (item.currency === this.props.selectedCurrency) {
        return item.amount.toFixed();
      }
    });
  };

  render() {
    const { brand, images, name, selectedSymbol, itemsQuanitity } = this.props;

    return (
      <CartItemContainer>
        <CartItemWrapper>
          <CartItemDescr>
            <h3>{brand}</h3>
            <h4>{name}</h4>
            <span>
              {selectedSymbol} {this.productPriceConverter()}
            </span>

            <div>
              <div>{this.attrSetHandler()}</div>
            </div>
          </CartItemDescr>

          <CartItemAction>
            <div>
              <>
                <a onClick={() => {}}>+</a>
              </>
              <span>{itemsQuanitity}</span>
              <>
                <a onClick={() => {}}>-</a>
              </>
            </div>

            <div>
              <Slider
                images={images}
                defaultWidth="105px"
                defaultHeight="137px"
                showSlider={this.state.showSlider}
              />
            </div>
          </CartItemAction>
        </CartItemWrapper>
      </CartItemContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCurrency: state.cart.selectedCurrency,
    selectedSymbol: state.cart.selectedSymbol,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDecrementCartItem: (prodId) => {
      dispatch(decrementCartQuantity(prodId));
    },
    onIncrementCartItem: (prodId) => {
      dispatch(incrementCartQuantity(prodId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModalCardItem);

CartModalCardItem.propTypes = {
  images: PropTypes.array,
  brand: PropTypes.string,
  attrText: PropTypes.string,
  attrSwatch: PropTypes.string,
  name: PropTypes.string,
  selectedSymbol: PropTypes.string,
  itemsQuanitity: PropTypes.number,
  price: PropTypes.array,
};
