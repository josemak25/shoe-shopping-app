import styled from 'styled-components/native';

export const Container = styled.TextInput`
  width: 80%;
  height: 100%;
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_COLOR};
  border-radius: 3px;
  padding: 0px 15px;
  padding-left: 25px;
  text-transform: capitalize;
`;

export const InputLabel = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE + 3}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.FONT_LIGHT_COLOR};
  text-transform: capitalize;
  position: absolute;
  top: -25px;
  padding-left: 2px;
`;
