import React from "react";

import { connect } from "react-redux";
import down from "../../../assets/images/down.png";
import up from "../../../assets/images/up.png";

import {
  Main,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from "./Converter.styles";

import { changeProductsCurrency } from "../../../store/actions/cartActions";

class CustomConverter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.state = {
      currCurrency: ["USD", "GBP", "AUD", "JPY", "RUB"],
      currencyOptions: "USD",
      toggleCurrency: false,
      currencies: {
        USD: "$",
        GBP: "£",
        AUD: "$",
        JPY: "¥ ",
        RUB: "₽ ",
      },
      isOpen: false,
      currencySymbol: "$",
    };
  }

  currencyToggleHandler = () => {
    this.setState((prevState) => ({
      toggleCurrency: !prevState.toggleCurrency,
    }));
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  currencyHandler = (e) => {
    e.preventDefault();
    this.props.onChangeProductsCurrency(this.state.currencyOptions);
    this.setState({ currencyOptions: e.target.textContent });
    this.props.onChangeProductsCurrency(e.target.textContent);

    this.currencyToggleHandler();
  };
  setCurrSymbol = (currentCurrency) => {
    for (let curr in this.state.currencies) {
      if (currentCurrency === curr) {
        return this.state.currencies[curr];
      }
    }
  };

  handleClickOutside(event) {
    if (this.ref.current && !this.ref.current.contains(event.target)) {
      this.setState({ toggleCurrency: false });
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
    const { toggleCurrency, currencyOptions, currCurrency } = this.state;

    return (
      <div>
        <Main>
          <DropDownContainer>
            <DropDownHeader onClick={() => this.currencyToggleHandler()}>
              {!toggleCurrency ? (
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    position: "absolute",
                    top: "-4px",
                    left: "47px",
                  }}
                >
                  <img
                    src={up}
                    alt="up"
                    style={{
                      position: "absolute",
                      top: "15px",
                      left: "0",
                      width: "10px",
                    }}
                  ></img>
                </div>
              ) : (
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    position: "absolute",
                    top: "-2px",
                    left: "45px",
                  }}
                  onClick={() => this.currencyToggleHandler()}
                >
                  <img
                    style={{
                      position: "absolute",
                      top: "3px",
                      left: "4px",
                      width: "10px",
                    }}
                    src={down}
                    alt="down"
                    onClick={() => this.currencyToggleHandler()}
                  ></img>
                </div>
              )}

              {!toggleCurrency && currencyOptions.toUpperCase()}
            </DropDownHeader>
            {toggleCurrency ? (
              <DropDownListContainer>
                <DropDownList
                  ref={this.ref}
                  onClick={(e) => this.currencyHandler(e)}
                >
                  {currCurrency.map((item) => (
                    <ListItem
                      key={item}
                      onClick={() => this.setCurrSymbol(item)}
                    >
                      {item}
                    </ListItem>
                  ))}
                </DropDownList>
              </DropDownListContainer>
            ) : (
              ""
            )}
          </DropDownContainer>
        </Main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currencies: state.cart.selectedCurrency,
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomConverter);
