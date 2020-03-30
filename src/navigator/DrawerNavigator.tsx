import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions, Platform } from 'react-native';
import Constants from 'expo-constants';
import { useThemeContext } from '../theme';

import Screens from '../screens';
import DrawerStack from './DrawerStack';
import BottomNavigator from './BottomNavigator';
import CustomDrawer from './CustomDrawer';
import applyScale from '../utils/applyScale';

import HomeIcon from '../../assets/icons/home-icon';
import PrivacyIcon from '../../assets/icons/privacy-icon';
import TrackOrderIcon from '../../assets/icons/track-order-icon';
import AboutUsIcon from '../../assets/icons/about-us-icon';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { colors, fonts } = useThemeContext();

  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerContent={props => <CustomDrawer {...props} />}
      drawerStyle={{
        width: Dimensions.get('window').width - 60,
        backgroundColor: colors.DRAWER_COLOR,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        ...Platform.select({
          android: {
            height: Dimensions.get('window').height,
            top: Constants.statusBarHeight
          }
        })
      }}
      drawerContentOptions={{
        activeTintColor: colors.BG_LIGHT_COLOR,
        inactiveTintColor: colors.BG_LIGHT_COLOR,
        activeBackgroundColor: colors.FUND_WALLET_COLOR,
        style: { flexGrow: 1, width: '100%' },
        contentContainerStyle: { flex: 1, alignItems: 'center' },
        itemStyle: {
          width: '100%',
          alignItems: 'flex-start',
          justifyContent: 'center',
          height: applyScale(60)
        },
        labelStyle: {
          fontFamily: fonts.NOTOSANS_BOLD,
          fontSize: fonts.MEDIUM_SIZE
        }
      }}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={BottomNavigator}
        options={{
          drawerLabel: 'Home',
          drawerIcon: () => (
            <HomeIcon fillColor={colors.BG_LIGHT_COLOR} isFocused width="20" />
          )
        }}
      />
      <Drawer.Screen
        name="TrackOrdersScreen"
        options={{
          drawerLabel: 'Track Orders',
          drawerIcon: () => (
            <TrackOrderIcon fillColor={colors.BG_LIGHT_COLOR} width="20" />
          )
        }}
        children={props => (
          <DrawerStack
            stackName="TrackOrdersScreen"
            stackTitle="Track Orders"
            component={Screens.TrackOrdersScreen}
            {...props}
          />
        )}
      />
      <Drawer.Screen
        name="PrivacyAndPolicyScreen"
        options={{
          title: 'Privacy & Policy',
          drawerIcon: () => (
            <PrivacyIcon fillColor={colors.BG_LIGHT_COLOR} width="20" />
          )
        }}
        children={props => (
          <DrawerStack
            stackName="PrivacyAndPolicyScreen"
            stackTitle="Privacy & Policy"
            component={Screens.PrivacyAndPolicyScreen}
            {...props}
          />
        )}
      />
      <Drawer.Screen
        name="AboutUsScreen"
        options={{
          title: 'About Us',
          drawerIcon: () => (
            <AboutUsIcon fillColor={colors.BG_LIGHT_COLOR} width="20" />
          )
        }}
        children={props => (
          <DrawerStack
            stackName="AboutUsScreen"
            stackTitle="About Us"
            component={Screens.AboutUsScreen}
            {...props}
          />
        )}
      />
    </Drawer.Navigator>
  );
}
