import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useThemeContext } from './theme';
import DrawerNavigator from './navigator/DrawerNavigator';
import { customHeaderStyle } from './constants';
import Screens from './screens';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="SplashScreen"
        component={Screens.SplashScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="HomeScreen"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
}

export default function AppNavigator() {
  const { fonts } = useThemeContext();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="SplashScreen"
        mode="modal"
        screenOptions={{
          headerStyle: customHeaderStyle,
          headerTitleStyle: {
            fontFamily: fonts.NOTOSANS_BOLD,
            fontSize: fonts.MEDIUM_SIZE - 2
          }
        }}
      >
        <RootStack.Screen
          name="SplashScreen"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
