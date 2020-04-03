import { createContext, Dispatch } from 'react';

import { userInitialState } from './user/reducer';
import { cartInitialState } from './cart/reducer';
import { productInitialState } from './product/reducer';
import { drawerInitialState } from './drawer/reducer';

import { UserInitialState, UserAction } from './user/types';
import { CartInitialState, CartAction } from './cart/types';
import { ProductInitialState, ProductAction } from './product/types';
import { DrawerInitialState, DrawerAction } from './drawer/types';

// We define our type for the context properties right here
type DispatchTypes = UserAction | CartAction | ProductAction | DrawerAction;

// We define our type for the context properties right here
interface ContextProps {
  store: {
    userState: UserInitialState;
    cartState: CartInitialState;
    productState: ProductInitialState;
    drawerState: DrawerInitialState;
  };
  dispatch?: Dispatch<DispatchTypes>;
}

const StoreContext = createContext<ContextProps>({
  store: {
    userState: userInitialState,
    cartState: cartInitialState,
    productState: productInitialState,
    drawerState: drawerInitialState
  }
});

export default StoreContext;
