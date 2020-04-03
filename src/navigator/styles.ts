import styled from 'styled-components/native';
import applyScale from '../utils/applyScale';

export const TabBarLabel = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE - 2}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_REGULAR};
  text-transform: capitalize;
`;

export const DrawerContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const DrawerItemsContainer = styled.View`
  width: 90%;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 80px;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: rgba(255, 255, 255, 0.2);
`;

export const SignOutContainer = styled.View`
  flex: 1;
  width: 90%;
`;

export const SignOutButton = styled.TouchableOpacity`
  width: 100%;
  height: ${applyScale(60)}px;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  padding: 0px 10px;
`;

export const SignOutText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 2}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.BG_LIGHT_COLOR};
  text-transform: capitalize;
  margin: 0px 30px;
`;

export const ProfileContainer = styled.View`
  width: 90%;
  height: ${applyScale(200)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 30px;
  z-index: 2;
  border-bottom-width: 1px;
  border-color: rgba(255, 255, 255, 0.2);
`;

export const AvatarContainer = styled.View`
  width: ${applyScale(80)}px;
  height: ${applyScale(80)}px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_COLOR};
`;

export const ProfileName = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.BG_LIGHT_COLOR};
  width: ${applyScale(200)}px;
  text-transform: capitalize;
`;

export const ProfileNumber = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.BG_LIGHT_COLOR};
  opacity: 0.6;
  text-transform: capitalize;
  text-align: left;
`;

export const ProfileDetailsContainer = styled.View`
  height: ${applyScale(80)}px;
  justify-content: center;
  margin: 0px 10px;
`;
