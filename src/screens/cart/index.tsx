import React, { Fragment, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Platform,
  FlatList
} from 'react-native';

import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import { useStoreContext } from '../../store';
import CartItem from './cart-item';
import FloatingTroller from './flotting-troller';
import EmptyCart from './empty-cart';
import Header from '../../commons/header';
import BackButtonIcon from '../../../assets/icons/back-button';
import CartIcon from '../../../assets/icons/cart-icon';
import applyScale from '../../utils/applyScale';
import boxShadow from '../../utils/boxShadows';

import { Container, CartContainer, CartNotification } from './styles';
import { ProductInterface } from '../../store/product/types';

interface CartScreenProp extends NavigationInterface {
  testID?: string;
}

export default function Cart({ navigation }: CartScreenProp) {
  const { colors } = useThemeContext();

  const { store, dispatch } = useStoreContext();

  const [state, setState] = useState({
    heederHidden: false
  });

  const [buttonPressed, setButtonPressed] = useState(false);

  const handleHeaderIconPressed = () => setButtonPressed(!buttonPressed);

  const handleScroll = ({ nativeEvent }) => {
    const { contentOffset } = nativeEvent;

    if (contentOffset.y >= 5 && !state.heederHidden) {
      setState({ ...state, heederHidden: true });
    }

    if (contentOffset.y <= 10 && state.heederHidden) {
      setState({ ...state, heederHidden: false });
    }
  };

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.BD_DARK_COLOR,
          paddingTop: Platform.select({ android: StatusBar.currentHeight })
        }}
      >
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
                left: -5,
                backgroundColor: buttonPressed ? colors.BG_LIGHT_COLOR : null
              }}
            >
              <BackButtonIcon
                width={`${Platform.OS === 'ios' ? '45%' : '40%'}`}
                height={`${Platform.OS === 'ios' ? '45%' : '40%'}`}
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
              {store.cartState.cart.length ? (
                <CartNotification
                  style={{
                    width: applyScale(8),
                    height: applyScale(8),
                    left: applyScale(32),
                    borderRadius: 4
                  }}
                />
              ) : null}
              <CartIcon
                width="60%"
                height="60%"
                fillColor={colors.FONT_DARK_COLOR}
              />
            </CartContainer>
          )}
          style={
            state.heederHidden
              ? boxShadow({
                  elevation: 2,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                  shadowRadius: 2,
                  shadowOpacity: 0.1,
                  height: 2
                })
              : null
          }
        />
        <Container>
          {store.cartState.cart.length ? (
            <Fragment>
              <FloatingTroller numOfItemsOnCart={store.cartState.cart.length} />
              <FlatList
                data={store.cartState.cart}
                renderItem={({ item }) => (
                  <CartItem {...item} navigation={navigation} />
                )}
                keyExtractor={(item: ProductInterface) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20, paddingTop: 10 }}
                onScroll={handleScroll}
              />
            </Fragment>
          ) : (
            <EmptyCart navigation={navigation} />
          )}
        </Container>
      </SafeAreaView>
    </Fragment>
  );
}
