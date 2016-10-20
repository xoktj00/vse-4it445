import { combineReducers } from 'redux';

const dummy = (state = null, action) => {
  console.log('---- action:', action, 'state:',state);
  switch (action.type) {
    case 'DUMMY_ACTION':
      return state + 1;


    default:
      return state + 2;
  }
}

// const defaultShoppingCart = {
//   1: {
//     product: { title: 'abc', id: 1 },
//     count: 1,
//   },
//   2: {
//     product: { title: '123', id: 2 },
//     count: 10,
//   },
// };
import {SHOPPING_CART_ADD_PRODUCT} from '../actions';
import {ACTION_RESET} from '../actions';

const shoppingCart = (state={}, action) => {
  switch (action.type) {
    case SHOPPING_CART_ADD_PRODUCT:
      const {product} = action;
      const  {count: oldCount} = state[product.id] || {count:0};
      const newCartItem = {
        count: 1+ oldCount,
        product,
      }

      return {
        ...state,
        [product.id]: newCartItem,

      };
    case ACTION_RESET:
      return {};
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  dummy,
  shoppingCart,
});
