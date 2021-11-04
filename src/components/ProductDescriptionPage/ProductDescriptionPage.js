import React from "react";
import PropTypes from "prop-types";
import { graphql } from "@apollo/client/react/hoc";
import { connect } from "react-redux";
import {
  addProductToCart,
  onAddAttributes,
} from "../../store/actions/cartActions";

import Spinner from "../UI/Spinner/Spinner";
import { CATEGORY } from "../../Query/Query";
import dompurify from "dompurify";
import {
  AttrText,
  AttrSwatch,
  Description,
  Size,
  Price,
  Button,
  Container,
  Left,
  Center,
  Right,
  DangerMessage,
  WarningMessage,
} from "./PDP.styles";

import NotFound from "../UI/NotFound/NotFound";

class ProductDescriptionPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.textRef = React.createRef(null);
    this.swatchRef = React.createRef(null);

    this.state = {
      imageIdx: 0,
      inStock: false,
      disablePurchase: true,
      products: this.props.data.category.products,
      idx: this.props.match.params.id,
      message: "Please select options before purchase...",
      outOfStockMessage: "Out of stock at the moment...",
      selectedAttrText: "",
      selectedAttrSwatch: "",
      selectedAllAttrs: [],
      attrTextStyles: {
        maxWidth: "63px",
        maxHeight: "45px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      selectedAttrTextStyle: {
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    };

    this.productToCartHandler = this.productToCartHandler.bind(this);
  }

  // selecting a product  ADD TO CART
  productToCartHandler = () => {
    return this.state.products.find((product) => product.id === this.state.idx);
  };

  checkIfProductExistsHandler = () => {
    return this.state.products.some((product) => product.id === this.state.idx);
  };

  //selecting exact text value from attr
  onSelectedAttributeTextChange = (value) => {
    this.setState({
      selectedAttrText: value,
    });

    if (this.textRef.current) {
      this.textRef.current.value = value;
    }
  };
  //selecting exact swatch value from attr
  onSelectedAttributeSwatchChange = (value) => {
    this.setState({ selectedAttrSwatch: value });
    if (this.swatchRef.current) {
      this.swatchRef.current.value = value;
    }
  };

  //ATTRIBUTE HANDLER
  attrSetHandler = () => {
    const chosenProduct = this.productToCartHandler();
    return chosenProduct.attributes.map((attr) => {
      if (
        (attr.type === "text" && attr.name === "Capacity") ||
        (attr.type === "text" && attr.name === "Size")
      ) {
        return attr.items.map((item) => (
          <>
            <AttrText
              ref={this.textRef}
              key={item.id}
              style={
                this.state.selectedAttrText === item.displayValue
                  ? this.state.selectedAttrTextStyle
                  : this.state.attrTextStyles
              }
              id={item.id}
              onClick={() =>
                this.onSelectedAttributeTextChange(item.displayValue)
              }
              value={item.displayValue}
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
              key={item.id}
              id={item.id}
              style={
                this.state.selectedAttrSwatch === item.value
                  ? {
                      backgroundColor: `${item.value}`,
                      maxWidth: "20px",
                      maxHeight: "20px",
                      transform: "scale(1.3)",
                      border: "0.2px solid grey",
                    }
                  : {
                      backgroundColor: `${item.value}`,
                      maxWidth: "20px",
                      maxHeight: "20px",
                      border: "0.3px solid grey",
                    }
              }
              onClick={() => this.onSelectedAttributeSwatchChange(item.value)}
            ></AttrSwatch>
          </>
        ));
      }
    });
  };

  // CURRENCY + AMOUNT
  convertCurrentPrice = () => {
    let price;
    const chosenProduct = this.productToCartHandler();
    return chosenProduct.prices.map((item) => {
      if (item.currency === this.props.selectedCurrency) {
        price = item.amount.toFixed();
        return price;
      }
    });
  };

  //ADD TO CART FROM REDUX
  addToCartHandler = (prod, attrText, attrSwatch) => {
    if (!this.state.disablePurchase) {
      this.enablePurchase();
      this.props.onAddProductToCart(prod, attrText, attrSwatch);
    }

    //REDIRECT to home page after adding a product ?..
    //this.props.history.push("/");
  };

  //enable purchase when all attrs selected
  enablePurchase = () => {
    this.setState({ disablePurchase: false });
  };

  //check if attrs were selected
  checkLengthAttrs = () => {
    const attributeSet = this.attrSetHandler().length;
    if (attributeSet === 0) {
      this.enablePurchase();
    }
    if (
      (attributeSet === 1 && this.state.selectedAttrText !== "") ||
      this.state.selectedAttrSwatch !== ""
    ) {
      this.enablePurchase();
    }
    if (
      attributeSet >= 2 &&
      this.state.selectedAttrText !== "" &&
      this.state.selectedAttrSwatch !== ""
    ) {
      this.enablePurchase();
    }
  };

  componentDidUpdate() {
    const ifProdExist = this.checkIfProductExistsHandler();

    if (ifProdExist) {
      this.checkLengthAttrs();
    }
  }
  componentDidMount() {
    const ifProdExist = this.checkIfProductExistsHandler();

    if (ifProdExist) {
      this.checkLengthAttrs();
    }
  }

  render() {
    const sanitizer = dompurify.sanitize;

    const { data, selectedSymbol } = this.props;
    const { outOfStockMessage, message, disablePurchase, imageIdx } =
      this.state;

    if (data.loading) {
      return <Spinner />;
    }
    if (data.error) {
      return <p>Error!</p>;
    }

    const checkIfProdExist = this.checkIfProductExistsHandler();

    let productToRender;
    if (!checkIfProdExist) {
      productToRender = <NotFound />;
    } else {
      productToRender = (
        <div>
          <Container>
            <Left>
              {this.productToCartHandler() &&
                this.productToCartHandler().gallery.map((pic, idx) => (
                  <div>
                    <img
                      alt="img"
                      src={pic}
                      onClick={() => this.setState({ imageIdx: idx })}
                    ></img>
                  </div>
                ))}
            </Left>
            <Center>
              {this.productToCartHandler() && (
                <img
                  alt="img"
                  src={this.productToCartHandler().gallery[imageIdx]}
                ></img>
              )}
            </Center>
            <Right>
              <div>
                <h2>
                  {this.productToCartHandler() &&
                    this.productToCartHandler().brand}
                </h2>
              </div>
              <div>
                <h3>
                  {this.productToCartHandler() &&
                    this.productToCartHandler().name}{" "}
                </h3>
              </div>

              {data && this.productToCartHandler().inStock && (
                <Size>
                  <h4>
                    {this.productToCartHandler() &&
                      this.productToCartHandler().attributes.map((item) => {
                        if (
                          item.id === "Capacity" ||
                          item.id === "Size" ||
                          item.id === "Color"
                        ) {
                          return <span> {item.name.toUpperCase()} </span>;
                        }
                      })}
                  </h4>
                  <div>
                    {this.productToCartHandler() && this.attrSetHandler()}
                  </div>
                </Size>
              )}
              <Price>
                <div>PRICE</div>
                {this.productToCartHandler() && (
                  <span>
                    <> {this.productToCartHandler() && selectedSymbol} </>
                    {this.productToCartHandler() && this.convertCurrentPrice()}
                  </span>
                )}
              </Price>

              {data && this.productToCartHandler().inStock && (
                <Button
                  disabled={disablePurchase}
                  onClick={() =>
                    this.addToCartHandler(
                      this.productToCartHandler(),
                      this.state.selectedAttrText,
                      this.state.selectedAttrSwatch
                    )
                  }
                >
                  Add to cart
                </Button>
              )}
              {disablePurchase && this.productToCartHandler().inStock && (
                <DangerMessage>
                  <span>{message}</span>
                </DangerMessage>
              )}
              {!this.productToCartHandler().inStock && (
                <WarningMessage>
                  <span>{outOfStockMessage}</span>
                </WarningMessage>
              )}
              <Description>
                {this.productToCartHandler() && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sanitizer(
                        this.productToCartHandler().description
                      ),
                    }}
                  ></div>
                )}
              </Description>
            </Right>
          </Container>
        </div>
      );
    }
    return productToRender;
  }
}

const withQuery = graphql(CATEGORY);

const PDPWithData = withQuery(ProductDescriptionPage);

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
    onAddProductToCart: (chosenProduct, attrText, attrSwatch) => {
      dispatch(addProductToCart(chosenProduct, attrText, attrSwatch));
    },
    onAddAttributes: (chosenAttributes) => {
      dispatch(onAddAttributes(chosenAttributes));
    },
  };
};

const PDPWithDataComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PDPWithData);

export default PDPWithDataComponentContainer;

ProductDescriptionPage.propTypes = {
  image: PropTypes.string,
  brand: PropTypes.string,
  name: PropTypes.string,
  selectedSymbol: PropTypes.string,
  inStock: PropTypes.bool,
};
