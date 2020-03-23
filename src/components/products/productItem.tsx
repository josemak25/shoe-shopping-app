import * as React from 'react';
import { ProductItemText, ProductItemImage, ProductItem } from './styles';
import { FlatList } from 'react-native';
import { useStoreContext } from '../../store';
import boxShadow from '../../utils/boxShadows';
import { useThemeContext } from '../../theme';

type ProductsProps = {
  style?: {};
  testID?: string;
  onPress?(): void;
};

const Products: React.SFC<ProductsProps> = () => {
  const { colors } = useThemeContext();
  const {
    state: {
      productState: { products }
    }
  } = useStoreContext();
  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({ item }) => (
        <ProductItem
          style={[
            boxShadow({
              elevation: 6,
              width: 0,
              height: 3,
              shadowColor: colors.FONT_DARK_COLOR,
              shadowOpacity: 0.06,
              shadowRadius: 2
            })
          ]}
        >
          <ProductItemImage source={item.images[0]} />
          <ProductItemText>{item.title}</ProductItemText>
          <ProductItemText>{item.price}</ProductItemText>
        </ProductItem>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default Products;
