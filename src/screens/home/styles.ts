import styled from 'styled-components/native';
import applyScale from '../../utils/applyScale';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BD_DARK_COLOR};
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const HeaderLeftContainer = styled.View`
  height: 100%;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FilterContainer = styled.TouchableOpacity`
  width: ${applyScale(50)}px;
  height: ${applyScale(50)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_COLOR};
  border-radius: 5px;
`;

export const Advert = styled.Image`
  width: 100%;
  height: ${applyScale(120)}px;
  z-index: 9999;
`;

export const ProductImageContainer = styled.View`
  width: 100%;
  height: ${applyScale(100)}px;
  justify-content: center;
  align-items: center;
`;

export const ProductListContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ProductDetailsContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

export const ProductName = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: capitalize;
`;

export const ProductPrice = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.ACTION_FONT_COLOR};
  letter-spacing: 1px;
  opacity: 0.5;
`;

export const productContainerStyle = {
  width: applyScale(180),
  height: applyScale(160),
  borderRadius: 5,
  margin: 6
};
