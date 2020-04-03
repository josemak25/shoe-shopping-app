import React, { useReducer, useContext, FunctionComponent } from 'react';

import useCombinedReducers from '../utils/useCombinedReducers';
import StoreContext from './types';

import userReducer, { userInitialState } from './user/reducer';
import cartReducer, { cartInitialState } from './cart/reducer';
import productReducer, { productInitialState } from './product/reducer';
import drawerReducer, { drawerInitialState } from './drawer/reducer';

const StoreProvider: FunctionComponent = ({ children }) => {
  const [store, dispatch] = useCombinedReducers({
    userState: useReducer(userReducer, userInitialState),
    cartState: useReducer(cartReducer, cartInitialState),
    productState: useReducer(productReducer, productInitialState),
    drawerState: useReducer(drawerReducer, drawerInitialState)
  });

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStoreContext = () => useContext(StoreContext);

export { StoreProvider, useStoreContext };
