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
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE - 1}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-align: center;
  text-transform: capitalize;
  position: absolute;
  left: ${applyScale(20)}px;
  bottom: ${applyScale(20)}px;
`;

export const trollerCartStyles = {
  width: applyScale(40),
  height: applyScale(40),
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  left: 0,
  bottom: applyScale(150),
  borderRadius: 3,
  zIndex: 999
};

export const CartContainer = styled.View`
  width: ${applyScale(27)}px;
  justify-content: center;
  align-items: center;
`;

export const CartNotification = styled.View`
  width: ${applyScale(5)}px;
  height: ${applyScale(5)}px;
  border-radius: ${5 / 2}px;
  background-color: ${({ theme }) => theme.colors.ACTION_FONT_COLOR};
  position: absolute;
  top: 1px;
  left: 1px;
`;

export const cartContainerStyle = {
  width: applyScale(380),
  height: applyScale(140),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  borderRadius: 3,
  marginTop: 10,
  marginBottom: 10,
  zIndex: -1
};

export const CartImageHolder = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.FONT_LIGHT_COLOR};
  justify-content: center;
  align-items: center;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`;

export const CartDetailsHolder = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.CART_CARD_COLOR};
  justify-content: center;
  align-items: center;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;

export const cartIDeleteIconStyles = {
  width: applyScale(35),
  height: applyScale(35),
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 10,
  right: 10,
  borderRadius: 50
};

export const Title = styled.Text`
  width: ${applyScale(150)}px;
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE - 2}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-align: left;
  bottom: ${applyScale(15)}px;
  padding-right: 15px;
`;

export const Price = styled.Text`
  width: ${applyScale(150)}px;
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.ACTION_FONT_COLOR};
  letter-spacing: 1px;
  text-align: left;
  opacity: 0.7;
`;

export const QuantityCounterContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const quantityCounterBtnStyles = {
  width: applyScale(27),
  height: applyScale(25),
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  borderRadius: 3
};

export const QuantityCounter = styled.View`
  width: ${applyScale(40)}px;
  height: ${applyScale(25)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  margin: 0px 5px;
  border-radius: 3px;
`;

export const Quantity = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE - 2}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.BG_LIGHT_COLOR};
`;
