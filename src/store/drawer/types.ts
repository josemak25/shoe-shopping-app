/*
 **************************************************************
 *********************** DRAWER TYPES *************************
 **************************************************************
 */

// DRAWER TYPES
export enum DRAWER_TYPES {
  OPEN_DRAWER = 'OPEN_DRAWER',
  CLOSE_DRAWER = 'CLOSE_DRAWER'
}

// TYPESCRIPT TYPES
export type DrawerInitialState = { isDrawerOpen: boolean };

// TYPESCRIPT DRAWER TYPES
export type DrawerAction =
  | { type: DRAWER_TYPES.OPEN_DRAWER; payload: DrawerInitialState }
  | { type: DRAWER_TYPES.CLOSE_DRAWER; payload: DrawerInitialState };
