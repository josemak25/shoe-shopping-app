import { createContext, Dispatch } from 'react';

import { userInitialState } from './user/reducer';
import { cartInitialState } from './cart/reducer';
import { productInitialState } from './product/reducer';

import { UserInitialState, UserAction } from './user/types';
import { CartInitialState, CartAction } from './cart/types';
import { ProductInitialState, ProductAction } from './product/types';

// We define our type for the context properties right here
type DispatchTypes = UserAction | CartAction | ProductAction;

// We define our type for the context properties right here
interface ContextProps {
  state: {
    userState: UserInitialState;
    cartState: CartInitialState;
    productState: ProductInitialState;
  };
  dispatch?: Dispatch<DispatchTypes>;
}

const StoreContext = createContext<ContextProps>({
  state: {
    userState: userInitialState,
    cartState: cartInitialState,
    productState: productInitialState
  }
});

export default StoreContext;
