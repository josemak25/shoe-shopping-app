import React from 'react';
import { View, Text } from 'react-native';
import { ProductInterface } from '../../store/product/types';
import { NavigationInterface } from '../types';
import {
  CartItemHolder,
  CartItemImageHolder,
  CartItemImage,
  Container,
  CartItemDetailsHolder,
  CartItemNameAndPriceHolder,
  CartItemName,
  CartItemPrice,
  CartItemEditPriceHolder,
  CartItemEditBtnStyles,
  CartItemQtyStyles,
  CartItemTxt,
  CartItemDeleteIconStyles
} from './styles';
import Animated from 'react-native-reanimated';
import Card from '../../components/card';
import boxShadow from '../../utils/boxShadows';
import applyScale from '../../utils/applyScale';
import TrashIcon from '../../../assets/icons/trash_icon';
import { useThemeContext } from '../../theme';

const ProgressiveImage = Animated.createAnimatedComponent(CartItemImage);

type ResponsiveImageProps = {
  width?: number;
  height?: number;
  resizeMode?: string;
  style?: any;
  imageUrl: string;
  testID?: string;
  imageFadeDuration?: number;
  thumbnailSource?: object;
  thumbnailFadeDuration?: number;
  thumbnailBlurRadius?: number;
  onLoadStart?(T: void): void;
  onLoad?(T: void): void;
  onError?(T: void): void;
  onLoadEnd?(T: void): void;
};

interface CartItemProps extends NavigationInterface {
  product: ProductInterface;
}

export default function CartItem(props: CartItemProps) {
  const { colors } = useThemeContext();
  const { product } = props;
  return (
    <Container>
      <Card
        style={[
          {
            ...CartItemHolder
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
        <CartItemImageHolder>
          <ProgressiveImage
            source={{ uri: product.images[0], cache: 'force-cache' }}
            style={[
              {
                width: applyScale(100),
                height: applyScale(100)
              }
            ]}
          />
        </CartItemImageHolder>

        <CartItemDetailsHolder>
          <CartItemNameAndPriceHolder>
            <CartItemName>{product.name}</CartItemName>
            <CartItemPrice>${product.price}</CartItemPrice>
          </CartItemNameAndPriceHolder>

          <Card
            style={[
              {
                ...CartItemDeleteIconStyles
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
            <TrashIcon
              fillColor={colors.ACTIVE_TAB_ICON_COLOR}
              style={{ top: 5 }}
            />
          </Card>

          <CartItemEditPriceHolder>
            {/* decrease button  */}
            <Card
              style={[
                {
                  ...CartItemEditBtnStyles
                }
              ]}
            >
              <CartItemTxt>--</CartItemTxt>
            </Card>
            {/* Qty card  */}

            <Card
              style={[
                {
                  ...CartItemQtyStyles
                }
              ]}
            >
              <CartItemTxt style={{ color: 'white' }}>3</CartItemTxt>
            </Card>

            {/* Increase button  */}

            <Card
              style={[
                {
                  ...CartItemEditBtnStyles
                }
              ]}
            >
              <CartItemTxt>+</CartItemTxt>
            </Card>
          </CartItemEditPriceHolder>
        </CartItemDetailsHolder>
      </Card>
    </Container>
  );
}
