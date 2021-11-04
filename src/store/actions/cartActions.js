import {
  ADD_PRODUCT_TO_CART,
  DISPLAY_CART_ITEM,
  REMOVE_PRODUCT_FROM_CART,
  INCREMENT_CART_ITEM_QUANTITY,
  DECREMENT_CART_ITEM_QUANTITY,
  GET_CURRENCY,
  CHANGE_CURRENCY,
  SET_CURRENCY_SYMBOL,
  TOTAL_PRICE,
  DISABLE_BUTTON,
  UPDATE_ATTRIBUTES,
} from "./actionTypes";

export const onUpdateAttributes = (id, attrText, attrSwatch, product) => {
  const newProduct = {
    ...product,
    attrText: attrText,
    attrSwatch: attrSwatch,
  };

  return {
    type: UPDATE_ATTRIBUTES,
    payload: newProduct,
  };
};

export const onAddAttributes = (selectedAttrs) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: selectedAttrs,
  };
};

export const onDisableNav = (disabled) => {
  return {
    type: DISABLE_BUTTON,
    payload: disabled,
  };
};

export const addProductToCart = (product, attrText, attrSwatch) => {
  const newProduct = {
    ...product,
    attrText: attrText,
    attrSwatch: attrSwatch,
  };

  return {
    type: ADD_PRODUCT_TO_CART,
    payload: newProduct,
  };
};

export const getTotalPrice = () => {
  return {
    type: TOTAL_PRICE,
  };
};

export const displayCartProduct = () => {
  return {
    type: DISPLAY_CART_ITEM,
  };
};

export const getProductsCurrency = () => {
  return {
    type: GET_CURRENCY,
  };
};
export const changeProductsCurrency = (newCurrency) => {
  return {
    type: CHANGE_CURRENCY,
    payload: newCurrency,
  };
};

export const removeProductToCart = (productId) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: productId,
  };
};

export const incrementCartQuantity = (productId) => {
  return {
    type: INCREMENT_CART_ITEM_QUANTITY,
    payload: productId,
  };
};

export const decrementCartQuantity = (productId) => {
  return {
    type: DECREMENT_CART_ITEM_QUANTITY,
    payload: productId,
  };
};

export const setCurrencySymbol = (currency) => {
  return {
    type: SET_CURRENCY_SYMBOL,
  };
};
