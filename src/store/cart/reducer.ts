import { CART_TYPES, CartAction, CartInitialState } from './types';
import dummyProduct from '../../libs/product-data';

export const cartInitialState: CartInitialState = {
  cart: [...dummyProduct]
};

export default function cartReducer(
  state = cartInitialState,
  action: CartAction
) {
  switch (action.type) {
    case CART_TYPES.ADD_TO_CART: {
      return [...state.cart, action.payload];
    }

    case CART_TYPES.REMOVE_FROM_CART: {
      const newProduct = state.cart.filter(({ id }) => id !== action.payload);
      return [...newProduct];
    }

    default:
      return state;
  }
}
