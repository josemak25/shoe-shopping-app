import React, { Fragment } from 'react';
import { FlatList } from 'react-native';
import Button from '../../components/button';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import boxShadow from '../../utils/boxShadows';
import { ProductInterface } from '../../store/product/types';
import TrollerCartIcon from '../../../assets/icons/troller-icon';

import {
  Container,
  trollerCartStyles,
  CartItemNumber,
  FilledCartHolder,
  FilledCartItem,
  FilledCartBtnContainer,
  FilledCardBtnOne,
  FilledCartBtnTwo,
  ProductsContainer
} from './styles';
import Card from '../../components/card';
import CartItem from './CartItem';

interface CartProp extends NavigationInterface {
  testID?: string;
  cart: ProductInterface[];
}

export default function FilledCart(props: CartProp) {
  const { colors } = useThemeContext();
  const { cart } = props;

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
            fillColor={colors.ACTIVE_TAB_ICON_COLOR}
            style={{ top: 5 }}
          />
        </Fragment>
      </Card>

      <FilledCartHolder>
        <ProductsContainer>
          <FlatList
            data={cart}
            renderItem={({ item }) => (
              <CartItem product={item} navigation={props.navigation} />
            )}
          />
        </ProductsContainer>
        <FilledCartBtnContainer>
          <Card
            style={[
              {
                ...FilledCardBtnOne,
                backgroundColor: '#FBFBFC'
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
            <FilledCartItem>Total: </FilledCartItem>
          </Card>

          <Card
            style={[
              { ...FilledCartBtnTwo },

              boxShadow({
                elevation: 2,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowRadius: 2,
                shadowOpacity: 0.1,
                height: 2
              })
            ]}
          >
            <FilledCartItem style={{ color: 'white' }}>
              CHECK OUT
            </FilledCartItem>
          </Card>
        </FilledCartBtnContainer>
      </FilledCartHolder>
    </Container>
  );
}
