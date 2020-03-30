import React, { Fragment, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Platform
} from 'react-native';

import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import { useStoreContext } from '../../store';
import EmptyCart from './empty-cart';
import FilledCart from './filled-cart';
import Header from '../../commons/header';
import BackButtonIcon from '../../../assets/icons/back-button';
import CartIcon from '../../../assets/icons/cart-icon';
import applyScale from '../../utils/applyScale';
import boxShadow from '../../utils/boxShadows';

import { Container, CartContainer, CartNotification } from './styles';

interface CartScreenProp extends NavigationInterface {
  testID?: string;
}

export default function Cart({ navigation }: CartScreenProp) {
  const { colors } = useThemeContext();

  const {
    state: { cartState }
  } = useStoreContext();

  const [buttonPressed, setButtonPressed] = useState(false);

  const handleHeaderIconPressed = () => setButtonPressed(!buttonPressed);

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.BD_DARK_COLOR }}>
        <Header
          title="Cart."
          headerLeft={() => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              onPressIn={handleHeaderIconPressed}
              onPressOut={handleHeaderIconPressed}
              style={{
                width: applyScale(50),
                height: applyScale(50),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
                backgroundColor: buttonPressed ? colors.BG_LIGHT_COLOR : null
              }}
            >
              <BackButtonIcon
                width={`${Platform.OS === 'ios' ? '50%' : '40%'}`}
                height={`${Platform.OS === 'ios' ? '50%' : '40%'}`}
              />
            </TouchableOpacity>
          )}
          headerRight={() => (
            <CartContainer
              style={[
                {
                  width: applyScale(42),
                  height: applyScale(42),
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 42 / 2,
                  marginRight: 20,
                  backgroundColor: colors.BG_LIGHT_COLOR
                },
                boxShadow({
                  elevation: 4,
                  width: 0,
                  height: 3,
                  shadowColor: colors.FONT_DARK_COLOR,
                  shadowOpacity: 0.06,
                  shadowRadius: 2
                })
              ]}
            >
              {cartState.cart.length ? (
                <CartNotification
                  style={{
                    width: applyScale(8),
                    height: applyScale(8),
                    borderRadius: 4,
                    left: applyScale(32)
                  }}
                />
              ) : null}
              <CartIcon
                width="60%"
                height="60%"
                fillColor={colors.ACTIVE_TAB_ICON_COLOR}
              />
            </CartContainer>
          )}
          // style={boxShadow({
          //   elevation: 2,
          //   shadowColor: 'rgba(0, 0, 0, 0.5)',
          //   shadowRadius: 2,
          //   shadowOpacity: 0.1,
          //   height: 2
          // })}
        />
        <Container>
          {cartState.cart.length ? (
            <FilledCart navigation={navigation} cart={cartState.cart} />
          ) : (
            <EmptyCart navigation={navigation} />
          )}
        </Container>
      </SafeAreaView>
    </Fragment>
  );
}
