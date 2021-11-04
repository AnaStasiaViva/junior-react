import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  cartItems: [],
  totalPrice: 0,
  defaultCurrency: "USD",
  currencies: {
    USD: "$",
    GBP: "£",
    AUD: "$",
    JPY: "¥ ",
    RUB: "₽ ",
  },
  selectedCurrency: "USD",
  selectedSymbol: "$",
  onDisable: true,
  selectedAttrs: [],
  selectedTextAttr: "",
  selectedSwatchAttr: "",
};

const cartReducer = (state = INITIAL_STATE, action) => {
  let updatedCart;
  let updatedItemIndex;

  switch (action.type) {
    case actionTypes.DISABLE_BUTTON:
      return {
        ...state,
        onDisable: false,
      };

    case actionTypes.ADD_PRODUCT_TO_CART:
      updatedCart = [...state.cartItems];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );

      let updatedItem;

      if (updatedItemIndex < 0) {
        updatedCart.push({
          ...action.payload,

          quantity: 1,
        });
      } else {
        updatedItem = {
          ...updatedCart[updatedItemIndex],
        };

        updatedItem.quantity++;
        updatedItem.attrText = action.payload.attrText;
        updatedItem.attrSwatch = action.payload.attrSwatch;
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return {
        ...state,
        cartItems: updatedCart,
      };

    case actionTypes.UPDATE_ATTRIBUTES:
      updatedCart = [...state.cartItems];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );

      updatedCart[updatedItemIndex] = action.payload;
      return {
        ...state,
        cartItems: updatedCart,
      };

    case actionTypes.DECREMENT_CART_ITEM_QUANTITY:
      updatedCart = [...state.cartItems];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload
      );

      const decrementedItem = {
        ...updatedCart[updatedItemIndex],
      };

      if (decrementedItem.quantity > 0) {
        decrementedItem.quantity--;
        updatedCart[updatedItemIndex] = decrementedItem;
      }
      if (decrementedItem.quantity === 0) {
        updatedCart.splice(updatedItemIndex, 1);
      }

      return { ...state, cartItems: updatedCart };

    case actionTypes.INCREMENT_CART_ITEM_QUANTITY:
      updatedCart = [...state.cartItems];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload
      );

      const incrementedItem = {
        ...updatedCart[updatedItemIndex],
      };

      incrementedItem.quantity++;

      updatedCart[updatedItemIndex] = incrementedItem;

      return { ...state, cartItems: updatedCart };

    case actionTypes.CLEAR_CART:
      return {
        ...state,
        ...INITIAL_STATE,
      };

    case actionTypes.GET_CURRENCY: {
      return {
        ...state.currencies,
      };
    }
    case actionTypes.CHANGE_CURRENCY: {
      let newSymbol;

      for (let item in state.currencies) {
        if (action.payload === item) {
          newSymbol = state.currencies[item];
        }
      }
      return {
        ...state,
        selectedCurrency: action.payload,
        selectedSymbol: newSymbol,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
