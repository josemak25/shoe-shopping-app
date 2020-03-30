import { PRODUCT_TYPES, ProductAction, ProductInitialState } from './types';
import { DATA } from '../../libs/product-data';

export const productInitialState: ProductInitialState = {
  isLoading: false,
  error: null,
  products: [...DATA]
};

export default function cartReducer(
  state = productInitialState,
  action: ProductAction
) {
  switch (action.type) {
    case PRODUCT_TYPES.GET_PRODUCT_STARTED: {
      return { ...state, isLoading: true };
    }

    case PRODUCT_TYPES.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        products: [...state.products, ...action.payload]
      };
    }

    case PRODUCT_TYPES.GET_PRODUCT_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }

    default:
      return state;
  }
}
