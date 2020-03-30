import styled from 'styled-components/native';
import applyScale from '../../utils/applyScale';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BD_DARK_COLOR};
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BD_DARK_COLOR};
`;

export const SearchInputWrapper = styled.View`
  height: ${applyScale(110)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 10px;
`;

export const Advert = styled.Image`
  width: 100%;
`;
