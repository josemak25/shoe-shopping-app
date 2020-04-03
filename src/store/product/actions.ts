import dummyProducts from '../../libs/product-data';
import {
  PRODUCT_TYPES,
  PRODUCT_ACTION_TYPES,
  ProductAction,
  ProductInterface
} from './types';

const getProductStarted = (): ProductAction => ({
  type: PRODUCT_TYPES.GET_PRODUCT_STARTED
});

const getProductSuccess = (payload: ProductInterface[]): ProductAction => ({
  type: PRODUCT_TYPES.GET_PRODUCT_SUCCESS,
  payload
});

const getProductError = (error: string): ProductAction => ({
  type: PRODUCT_TYPES.GET_PRODUCT_ERROR,
  payload: error
});

export default function productActions(
  dispatch: any,
  payload: object,
  actionType: string
) {
  // test calling for more post
  dispatch(getProductStarted());

  switch (actionType) {
    case PRODUCT_ACTION_TYPES.GET_LASTED_PRODUCTS:
      try {
        // make network request here
        dispatch(getProductSuccess(dummyProducts));
      } catch (error) {
        dispatch(getProductError('ERROR'));
      }
      break;

    case PRODUCT_ACTION_TYPES.LOAD_MORE_PRODUCTS:
      try {
        // make network request here
        dispatch(getProductSuccess(dummyProducts));
      } catch (error) {
        dispatch(getProductError('ERROR'));
      }
      break;

    default:
      break;
  }
}
