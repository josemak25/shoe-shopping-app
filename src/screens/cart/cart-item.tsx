import React, { useState } from 'react';
import Animated from 'react-native-reanimated';
import ContentLoader from 'react-native-skeleton-content';
import { Entypo } from '@expo/vector-icons';
import ResponsiveImage from '../../libs/responsiveImage';
import Card from '../../components/card';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import { ProductInterface } from '../../store/product/types';
import TrashIcon from '../../../assets/icons/trash_icon';
import applyScale from '../../utils/applyScale';

import {
  cartContainerStyle,
  CartImageHolder,
  CartDetailsHolder,
  Price,
  QuantityCounterContainer,
  quantityCounterBtnStyles,
  Title,
  cartIDeleteIconStyles,
  QuantityCounter,
  Quantity
} from './styles';

interface CartItemProps extends ProductInterface, NavigationInterface {}

export default function CartItem(props: CartItemProps) {
  const { colors } = useThemeContext();
  const { images, title, price } = props;

  const [animation, setAnimation] = useState({
    hideContentLoader: true
  });

  const handleImageLoading = (error: any) => {
    if (!error) {
      setAnimation({ ...animation, hideContentLoader: false });
    }
  };

  const handleDelete = () => {};

  return (
    <Card
      style={{ ...cartContainerStyle, backgroundColor: colors.BG_LIGHT_COLOR }}
    >
      <CartImageHolder>
        <ContentLoader
          isLoading={animation.hideContentLoader}
          containerStyle={{ width: applyScale(195), height: applyScale(140) }}
          layout={[{ width: applyScale(195), height: applyScale(140) }]}
        />
        <ResponsiveImage
          imageUrl={images[1]}
          width={120}
          height={130}
          onLoad={handleImageLoading}
        />
      </CartImageHolder>

      <CartDetailsHolder>
        <Card
          style={{
            ...cartIDeleteIconStyles,
            backgroundColor: colors.BG_LIGHT_COLOR
          }}
          onPress={handleDelete}
        >
          <TrashIcon
            fillColor={colors.FONT_DARK_COLOR}
            width="16"
            height="20"
          />
        </Card>

        <Title>{title}</Title>
        <Price>{price}</Price>

        <QuantityCounterContainer>
          <Card
            style={{
              ...quantityCounterBtnStyles,
              borderColor: colors.FONT_DARK_COLOR,
              backgroundColor: colors.BG_LIGHT_COLOR
            }}
          >
            <Entypo name="minus" size={15} color={colors.FONT_DARK_COLOR} />
          </Card>
          <QuantityCounter>
            <Quantity>1</Quantity>
          </QuantityCounter>
          <Card
            style={{
              ...quantityCounterBtnStyles,
              borderColor: colors.FONT_DARK_COLOR,
              backgroundColor: colors.BG_LIGHT_COLOR
            }}
          >
            <Entypo name="plus" size={15} color={colors.FONT_DARK_COLOR} />
          </Card>
        </QuantityCounterContainer>
      </CartDetailsHolder>
    </Card>
  );
}
