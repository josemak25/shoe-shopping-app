import { DRAWER_TYPES, DrawerAction, DrawerInitialState } from './types';

export const drawerInitialState: DrawerInitialState = {
  isDrawerOpen: false
};

export default function cartReducer(
  state = drawerInitialState,
  action: DrawerAction
) {
  switch (action.type) {
    case DRAWER_TYPES.OPEN_DRAWER: {
      return { ...state, ...action.payload };
    }

    case DRAWER_TYPES.CLOSE_DRAWER: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
}
