
export const DUMMY_ACTION = 'DUMMY_ACTION';
export const SHOPPING_CART_ADD_PRODUCT = 'SHOPPING_CART_ADD_PRODUCT';
export const ACTION_RESET = 'ACTION_RESET';
//action creator
export const dummyAction = data => {
  return {
    type: DUMMY_ACTION,
    data,
    hello: [1,2,"hello World"],
  };
};

export const addToCart = product => {
  return {
    type: SHOPPING_CART_ADD_PRODUCT,
    product,
  };
};

export const resetCart = () => {
  return {
    type: ACTION_RESET,
  };
};
