//@ts-nocheck
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useThemeContext } from '../theme';
import { useStoreContext } from '../store';
import Screens from '../screens';
import HomeIcon from '../../assets/icons/home-icon';
import ProfileIcon from '../../assets/icons/profile-icon';
import WalletIcon from '../../assets/icons/wallet';
import CartIcon from '../../assets/icons/cart-icon';

import { TabBarLabel } from './styles';
import { CartContainer, CartNotification } from '../screens/cart/styles';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  const { colors } = useThemeContext();

  const {
    store: { cartState }
  } = useStoreContext();

  return (
    <Tab.Navigator
      activeColor={colors.ACTIVE_TAB_ICON_COLOR}
      inactiveColor={colors.ACTIVE_TAB_ICON_COLOR}
      barStyle={{ backgroundColor: colors.BG_LIGHT_COLOR }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Screens.HomeScreen}
        options={{
          tabBarLabel: <TabBarLabel>home</TabBarLabel>,
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon fillColor={color} isFocused={focused} />
          )
        }}
      />
      <Tab.Screen
        name="WalletScreen"
        component={Screens.WalletScreen}
        options={{
          tabBarLabel: <TabBarLabel>wallet</TabBarLabel>,
          tabBarIcon: ({ color, focused }) => (
            <WalletIcon fillColor={color} isFocused={focused} />
          )
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Screens.CartScreen}
        options={{
          tabBarLabel: <TabBarLabel>cart</TabBarLabel>,
          tabBarIcon: ({ color, focused }) => {
            return (
              <CartContainer>
                {cartState.cart.length ? <CartNotification /> : null}
                <CartIcon fillColor={color} isFocused={focused} />
              </CartContainer>
            );
          }
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={Screens.ProfileScreen}
        options={{
          tabBarLabel: <TabBarLabel>profile</TabBarLabel>,
          tabBarIcon: ({ color, focused }) => (
            <ProfileIcon fillColor={color} isFocused={focused} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
