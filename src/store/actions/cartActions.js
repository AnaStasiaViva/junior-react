export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const DISPLAY_CART_ITEM = "DISPLAY_CART_ITEM";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const INCREMENT_CART_ITEM_QUANTITY = "INCREMENT_CART_ITEM_QUANTITY";
export const DECREMENT_CART_ITEM_QUANTITY = "DECREMENT_CART_ITEM_QUANTITY";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const CONVERT_PRODUCT_PRICE = "CONVERT_PRODUCT_PRICE";
export const GET_CURRENCY = "GET_CURRENCY";
export const CHANGE_CURRENCY = "CHANGE_CURRENCY";
export const SET_CURRENCY_SYMBOL = "SET_CURRENCY_SYMBOL";
export const TOTAL_PRICE = "TOTAL_PRICE";
export const DISABLE_BUTTON = "DISABLE_BUTTON";
export const ADD_ATTRIBUTES = "ADD_ATTRIBUTES";
export const UPDATE_ATTRIBUTES = "UPDATE_ATTRIBUTES";

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
