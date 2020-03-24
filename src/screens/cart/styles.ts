import styled from 'styled-components/native';
import applyScale from '../../utils/applyScale';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BD_DARK_COLOR};
`;

export const EmptyCartContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const EmptyCartTextContainer = styled.View`
  flex: 0.7;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const EmptyCartTextHolder = styled.View``;

export const EmptyCartTittle = styled.Text`
  width: ${applyScale(250)}px;
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 2}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-align: center;
  padding: 10px;
  text-transform: capitalize;
`;

export const EmptyCartDescription = styled.Text`
  width: ${applyScale(270)}px;
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE + 2}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-align: center;
`;

export const CartItemNumber = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE - 2}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-align: center;
  text-transform: capitalize;
  position: absolute;
  left: ${applyScale(25)}px;
  bottom: ${applyScale(20)}px;
`;

export const trollerCartStyles = {
  width: applyScale(50),
  height: applyScale(40),
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  left: 0,
  bottom: applyScale(150)
};

export const ProductsContainer = styled.View``;

export const CartItemHolder = {
  width: applyScale(350),
  height: applyScale(120),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  borderTopRightRadius: 5,
  borderBottomRightRadius: 5
};

export const CartItemImageHolder = styled.View`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.FONT_LIGHT_COLOR};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CartItemNameAndPriceHolder = styled.View``;

export const CartItemDeleteIconStyles = {
  width: 35,
  height: 35,
  position: 'absolute',
  top: 10,
  right: 10,
  borderRadius: 50
};

export const CartItemPrice = styled.Text`
  color: ${({ theme }) => theme.colors.ACTION_FONT_COLOR};
`;

export const CartItemEditPriceHolder = styled.View`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-around;
  position: absolute;
  bottom: 10;
  right: 10;
`;

export const CartItemTxt = styled.Text``;

export const CartItemQtyStyles = {
  width: applyScale(45),
  height: applyScale(25),
  borderWidth: 1,
  borderColor: 'black',
  borderRadius: 3,
  backgroundColor: ({ theme }) => theme.colors.FONT_DARK_COLOR
};

export const CartItemEditBtnStyles = {
  width: applyScale(25),
  height: applyScale(25),
  borderWidth: 1,
  borderColor: 'black',
  borderRadius: 3
};

export const CartItemName = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE + 2}px;
`;

export const CartItemImage = styled.Image``;

export const CartItemDetailsHolder = styled.View`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.FONT_LIGHT_COLOR};
  padding: ${applyScale(10)}px;
`;

export const FilledCartHolder = styled.View`
  width: 100%;
  height: 100%;
`;

export const FilledCartItem = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
`;

export const FilledCartBtnContainer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const FilledCardBtnOne = {
  width: '40%',
  height: applyScale(70),
  borderRadius: 5,
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
};

export const FilledCartBtnTwo = {
  width: '55%',
  height: applyScale(70),
  borderRadius: 5,
  marginLeft: 10,
  textAlign: 'center',
  backgroundColor: ({ theme }) => theme.colors.DRAWER_COLOR,
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
};
