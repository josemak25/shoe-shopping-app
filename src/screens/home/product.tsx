import React, { useState } from 'react';
import ContentLoader from 'react-native-skeleton-content';
import { useThemeContext } from '../../theme';
import { ProductInterface } from '../../store/product/types';
import { NavigationInterface } from '../types';
import Card from '../../components/card';
import ResponsiveImage from '../../libs/responsiveImage';

import {
  ProductName,
  ProductPrice,
  ProductImageContainer,
  productContainerStyle,
  ProductDetailsContainer
} from './styles';
import applyScale from '../../utils/applyScale';

interface ProductProps extends NavigationInterface, ProductInterface {}

export default function Product(props: ProductProps) {
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

  return (
    <Card
      style={[
        productContainerStyle,
        { backgroundColor: colors.BG_LIGHT_COLOR }
      ]}
      activeOpacity={0.7}
    >
      <ProductImageContainer>
        <ContentLoader
          isLoading={animation.hideContentLoader}
          containerStyle={{ width: applyScale(180), height: applyScale(100) }}
          layout={[{ width: applyScale(180), height: applyScale(100) }]}
        />
        <ResponsiveImage
          imageUrl={images[1]}
          width={130}
          height={100}
          onLoad={handleImageLoading}
          thumbnailFadeDuration={10}
          imageFadeDuration={10}
          thumbnailBlurRadius={5}
        />
      </ProductImageContainer>
      <ProductDetailsContainer>
        <ProductName>{title}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProductDetailsContainer>
    </Card>
  );
}
