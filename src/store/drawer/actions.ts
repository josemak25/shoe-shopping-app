import { DRAWER_TYPES, DrawerAction, DrawerInitialState } from './types';

export const openDrawer = (payload: DrawerInitialState): DrawerAction => ({
  type: DRAWER_TYPES.OPEN_DRAWER,
  payload
});

export const closeDrawer = (payload: DrawerInitialState): DrawerAction => ({
  type: DRAWER_TYPES.CLOSE_DRAWER,
  payload
});
