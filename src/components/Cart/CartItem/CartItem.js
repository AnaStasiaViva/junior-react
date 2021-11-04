import React from "react";
import PropTypes from "prop-types";

import {
  AttrText,
  AttrSwatch,
  CartItemContainer,
  CartItemAction,
  CartItemWrapper,
  CartItemDescr,
} from "./CartItem.styles";

import Slider from "../../UI/Slider/Slider";
import { connect } from "react-redux";
import {
  decrementCartQuantity,
  incrementCartQuantity,
  onUpdateAttributes,
} from "../../../store/actions/cartActions";

class CartItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.textRef = React.createRef(null);
    this.swatchRef = React.createRef(null);

    this.state = {
      showSlider: true,
      attrTextStyles: {
        maxWidth: "63px",
        maxHeight: "45px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #1D1F22",
      },
      selectedAttrTextStyle: {
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      selectedAttrText: this.props.attrText,
      selectedAttrSwatch: this.props.attrSwatch,
    };
  }

  componentDidMount() {
    if (this.props.images.length <= 1) {
      this.setState({ showSlider: false });
    }
  }
  //CURRENCY HANDLER
  productPriceConverter = () => {
    return this.props.price.map((item) => {
      if (item.currency === this.props.selectedCurrency) {
        return item.amount.toFixed();
      }
    });
  };

  //selecting attr text
  onSelectedAttributeTextChange = (value) => {
    this.setState({ selectedAttrText: value });

    if (this.textRef.current) {
      this.textRef.current.value = value;
    }

    this.props.onUpdateAttributes(
      this.props.id,
      value,
      this.state.selectedAttrSwatch,
      this.props.product
    );
  };
  //selecting attr swatch
  onSelectedAttributeSwatchChange = (value) => {
    this.setState({ selectedAttrSwatch: value });

    if (this.swatchRef.current) {
      this.swatchRef.current.value = value;
    }

    this.props.onUpdateAttributes(
      this.props.id,
      this.state.selectedAttrText,
      value,
      this.props.product
    );
  };

  //ATTRIBUTE HANDLER
  attrSetHandler = () => {
    return this.props.attr.map((attr) => {
      if (
        (attr.type === "text" && attr.name === "Capacity") ||
        attr.name === "Size"
      ) {
        return attr.items.map((item) => (
          <>
            <AttrText
              ref={this.textRef}
              style={
                this.state.selectedAttrText === item.displayValue
                  ? this.state.selectedAttrTextStyle
                  : this.state.attrTextStyles
              }
              id={item.id}
              onClick={() =>
                this.onSelectedAttributeTextChange(item.displayValue)
              }
            >
              {item.displayValue}
            </AttrText>
          </>
        ));
      }

      if (attr.type === "swatch") {
        return attr.items.map((item) => (
          <>
            <AttrSwatch
              ref={this.swatchRef}
              id={item.id}
              style={
                this.state.selectedAttrSwatch === item.value
                  ? {
                      backgroundColor: `${item.value}`,
                      maxWidth: "20px",
                      maxHeight: "20px",
                      transform: "scale(1.3)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }
                  : {
                      backgroundColor: `${item.value}`,
                      maxWidth: "20px",
                      maxHeight: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }
              }
              onClick={() => this.onSelectedAttributeSwatchChange(item.value)}
            ></AttrSwatch>
          </>
        ));
      }
    });
  };

  //redux decrement cart item
  decreaseItemQuantity = (prodId) => {
    this.props.onDecrementCartItem(prodId);
  };
  //redux increment cart item
  incrementItemQuantity = (prodId) => {
    this.props.onIncrementCartItem(prodId);
  };

  render() {
    const { brand, images, name, id, selectedSymbol, itemsQuanitity } =
      this.props;

    const { showSlider } = this.state;

    return (
      <CartItemContainer>
        <CartItemWrapper>
          <CartItemDescr>
            <h3>{brand}</h3>
            <h4>{name}</h4>
            <span>
              {selectedSymbol} {this.productPriceConverter()}
            </span>

            <div>{this.attrSetHandler()}</div>
          </CartItemDescr>

          <CartItemAction>
            <div>
              <>
                <a onClick={() => this.incrementItemQuantity(id)}>+</a>
              </>
              <span>{itemsQuanitity}</span>
              <>
                <a onClick={() => this.decreaseItemQuantity(id)}>-</a>
              </>
            </div>

            <div>
              <Slider
                images={images}
                showSlider={showSlider}
                defaultWidth="141px"
                defaultHeight="185px"
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
    cartItems: state.cart.cartItems,
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
    onUpdateAttributes: (id, attrText, attrSwatch, product) => {
      dispatch(onUpdateAttributes(id, attrText, attrSwatch, product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);

CartItem.propTypes = {
  images: PropTypes.array,
  brand: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  selectedSymbol: PropTypes.string,
  selectedCurrency: PropTypes.string,
  itemsQuanitity: PropTypes.number,
  price: PropTypes.array,
  quantity: PropTypes.number,
  product: PropTypes.object,
  attr: PropTypes.array,
  cartItem: PropTypes.array,
  attrText: PropTypes.string,
  attrSwatch: PropTypes.string,
  closeModal: PropTypes.func,
};
