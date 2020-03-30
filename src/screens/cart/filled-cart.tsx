import React, { Fragment } from 'react';
import { ScrollView } from 'react-native';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import boxShadow from '../../utils/boxShadows';
import { ProductInterface } from '../../store/product/types';
import TrollerCartIcon from '../../../assets/icons/troller-icon';
import Card from '../../components/card';

import { Container, trollerCartStyles, CartItemNumber } from './styles';

interface CartProp extends NavigationInterface {
  testID?: string;
  cart: ProductInterface[];
}

export default function FilledCart(props: CartProp) {
  const { colors } = useThemeContext();

  return (
    <Container style={{ width: '100%' }}>
      <Card
        activeOpacity={0.6}
        style={[
          {
            ...trollerCartStyles,
            backgroundColor: colors.BG_LIGHT_COLOR
          },
          boxShadow({
            elevation: 2,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowRadius: 2,
            shadowOpacity: 0.1,
            height: 2
          })
        ]}
      >
        <Fragment>
          <CartItemNumber>{props.cart.length}</CartItemNumber>
          <TrollerCartIcon
            fillColor={colors.FONT_DARK_COLOR}
            style={{ top: 5 }}
          />
        </Fragment>
      </Card>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, width: '100%' }}
      ></ScrollView>
    </Container>
  );
}
