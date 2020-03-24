import styled from 'styled-components/native';
import Card from '../card';

export const ProductItemImage = styled.Image`
  width: 100%;
  height: 57%;
  margin-bottom: 10px;
`;

export const ProductItemText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  font-weight: ${({ theme }) => theme.fonts.FONT_WEIGHT_HEAVY};
  text-transform: capitalize;
`;

export const ProductItem = styled(Card)`
  width: 155px;
  height: 136px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_COLOR};
  padding: 10px;
  margin: 8px;
`;
