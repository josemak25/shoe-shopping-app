import styled from 'styled-components/native';
import applyScale from '../../utils/applyScale';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BD_DARK_COLOR};
`;

export const StatusBarContainer = styled.View`
  width: 100%;
  height: ${Constants.statusBarHeight}px;
  background-color: ${({ theme }) => theme.colors.DRAWER_COLOR};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 2}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.FONT_LIGHT_COLOR};
  text-transform: capitalize;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  height: ${applyScale(200)}px;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.DRAWER_COLOR};
`;

export const HeaderContainerTop = styled.View`
  width: 100%;
  height: ${applyScale(40)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  bottom: 20px;
`;

export const MenuIconContainer = styled.TouchableOpacity`
  width: 11%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

export const NotificationContainer = styled.TouchableOpacity`
  width: 11%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

export const NotificationIconHeight = styled.View`
  width: ${applyScale(9)}px;
  height: ${applyScale(9)}px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 8px;
  background-color: ${({ theme }) => theme.colors.NOTIFICATION_HIGHLIGHT_COLOR};
  border-radius: 9px;
`;

export const FundWalletContainer = styled.View`
  width: 100%;
  height: ${applyScale(50)}px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  bottom: 20px;
`;

export const WalletInput = styled.TextInput`
  flex: 0.8;
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

export const WalletInputLabel = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE + 3}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.FONT_LIGHT_COLOR};
  text-transform: capitalize;
  position: absolute;
  top: -25px;
  padding-left: 2px;
`;

export const FundWalletPlusIcon = styled.TouchableOpacity`
  width: ${applyScale(50)}px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.FUND_WALLET_COLOR};
`;

export const WalletCardHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const CurrentBallanceLabel = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE + 1}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: capitalize;
  letter-spacing: 0.25px;
`;

export const WalletLabel = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 10}px;
  font-family: ${({ theme }) => theme.fonts.EFFORT_REGULAR};
  color: ${({ theme }) => theme.colors.DRAWER_COLOR};
  position: absolute;
  right: 0;
  letter-spacing: 0.25px;
`;

export const CurrentWalletBallance = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE + 10}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.DRAWER_COLOR};
  text-transform: capitalize;
  padding-top: 10px;
  letter-spacing: 1px;
`;

export const WalletAddress = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE + 1}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: capitalize;
  padding: 30px 0px;
  letter-spacing: 1px;
`;

export const CardType = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  letter-spacing: 1px;
`;

export const CardDate = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE + 1}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  opacity: 0.5;
`;

export const WalletCardFooter = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  bottom: -5px;
`;

export const FundOtherWalletContainer = styled.View`
  width: 100%;
  height: ${applyScale(140)}px;
  justify-content: space-between;
  margin-top: 30px;
`;

export const WalletContainerLabel = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.DRAWER_COLOR};
  text-transform: capitalize;
  padding-left: 20px;
`;

export const FundOtherWalletIconContainer = styled.TouchableOpacity`
  width: ${applyScale(80)}px;
  height: ${applyScale(80)}px;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 3px;
  border: 1px ${({ theme }) => theme.colors.FONT_DARK_COLOR} dashed;
  margin: 0px 20px;
`;

export const FundOtherWalletIcon = styled.View`
  width: 40%;
  height: 40%;
  justify-content: center;
  align-items: center;
  border: 2px ${({ theme }) => theme.colors.DRAWER_COLOR} solid;
  border-radius: 20px;
  overflow: hidden;
`;

export const FundOtherWalletText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: capitalize;
  text-align: center;
  padding: 0px 10px;
`;

export const BeneficiaryIconText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: capitalize;
  text-align: center;
  padding: 0px 15px;
`;

export const TransactionHistoryContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  margin-top: 30px;
`;

export const TransactionHistoryHeader = styled.View`
  width: 100%;
  height: ${applyScale(80)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

export const TransactionContainer = styled.View`
  width: 100%;
  height: ${applyScale(70)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  border-top-width: 1px;
  border-color: rgba(108, 117, 119, 0.3);
`;

export const TransactionDetailsContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TransactionTypeIconContainer = styled.View`
  width: ${applyScale(35)}px;
  height: ${applyScale(35)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BG_LIGHT_COLOR};
  border-radius: ${35 / 2}px;
  margin-right: 20px;
`;

export const TransactionTypeContainer = styled.View`
  height: 100%;
  justify-content: center;
`;

export const TransactionPrice = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.DRAWER_COLOR};
  text-transform: capitalize;
  text-align: center;
  letter-spacing: 1px;
`;

export const TransactionType = styled.Text`
  font-size: ${({ theme }) => theme.fonts.MEDIUM_SIZE}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.DRAWER_COLOR};
  text-transform: capitalize;
  text-align: center;
  letter-spacing: 0.5px;
`;

export const TransactionWalletAddress = styled.Text`
  font-size: ${({ theme }) => theme.fonts.SMALL_SIZE - 1}px;
  font-family: ${({ theme }) => theme.fonts.NOTOSANS_BOLD};
  color: ${({ theme }) => theme.colors.FONT_DARK_COLOR};
  text-transform: capitalize;
  letter-spacing: 1px;
`;
