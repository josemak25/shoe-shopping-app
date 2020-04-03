import React, { Fragment, useState } from 'react';
import { ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemeContext } from '../../theme';
import { NavigationInterface } from '../types';
import { useStoreContext } from '../../store';
import Transaction from './transaction';
import Beneficiary from './beneficiary';
import Card from '../../components/card';
import applyScale from '../../utils/applyScale';
import PlusIcon from '../../../assets/icons/plus-icon';
import ClipDivider from '../../../assets/icons/clip-divider';
import ProfileIcon from '../../../assets/icons/profile-icon';
import NotificationIcon from '../../../assets/icons/notification-icon';
import CalenderIcon from '../../../assets/icons/calender-icon';
import StatusBar from '../../commons/status-bar';
import DrawerButton from '../../../assets/icons/drawer-menu-icon';
import dummyTransactions from '../../libs/dummy_transaction.json';
import beneficiaries from '../../libs/dummy_funded_users.json';
import Input from '../../components/input';
import { InputLabel } from '../../components/input/styles';

import {
  Container,
  HeaderContainer,
  HeaderContainerTop,
  Title,
  MenuIconContainer,
  NotificationContainer,
  NotificationIconHeight,
  FundWalletContainer,
  FundWalletPlusIcon,
  WalletLabel,
  CurrentBallanceLabel,
  CurrentWalletBallance,
  WalletAddress,
  CardType,
  CardDate,
  WalletCardFooter,
  WalletCardHeader,
  FundOtherWalletContainer,
  WalletContainerLabel,
  FundOtherWalletIcon,
  TransactionHistoryContainer,
  FundOtherWalletIconContainer,
  FundOtherWalletText,
  TransactionHistoryHeader
} from './styles';

interface WalletScreenProp extends NavigationInterface {
  testID?: string;
}

export default function Wallet(props: WalletScreenProp) {
  const { colors } = useThemeContext();

  const { dispatch } = useStoreContext();

  const [state, setState] = useState({
    personalWallet: '',
    headerIconPressed: null
  });

  const handleChange = (value: string) => {
    setState({ ...state, personalWallet: value });
  };

  const handleHeaderIconPressed = (buttonType: string | null) => {
    setState({ ...state, headerIconPressed: buttonType });
  };

  const handleDrawer = () => props.navigation.openDrawer();

  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <Container>
        <HeaderContainer>
          <HeaderContainerTop>
            <MenuIconContainer
              onPress={handleDrawer}
              onPressIn={() => handleHeaderIconPressed('menu')}
              style={{
                backgroundColor:
                  state.headerIconPressed === 'menu'
                    ? colors.FUND_WALLET_COLOR
                    : null
              }}
              onPressOut={() => handleHeaderIconPressed(null)}
              activeOpacity={0.8}
            >
              <DrawerButton fillColor={colors.BG_LIGHT_COLOR} />
            </MenuIconContainer>
            <Title>Wallet</Title>
            <NotificationContainer
              activeOpacity={0.8}
              onPressIn={() => handleHeaderIconPressed('notificationIcon')}
              style={{
                backgroundColor:
                  state.headerIconPressed === 'notificationIcon'
                    ? colors.FUND_WALLET_COLOR
                    : null
              }}
              onPressOut={() => handleHeaderIconPressed(null)}
            >
              <Fragment>
                <NotificationIcon fillColor={colors.BG_LIGHT_COLOR} />
                <NotificationIconHeight />
              </Fragment>
            </NotificationContainer>
          </HeaderContainerTop>
          <FundWalletContainer>
            <Input
              placeholder="Enter amount  __₦1000__"
              defaultValue={state.personalWallet}
              onChangeText={handleChange}
            />
            <InputLabel>fund personal wallet</InputLabel>
            <FundWalletPlusIcon activeOpacity={0.5}>
              <PlusIcon fillColor={colors.BG_LIGHT_COLOR} />
            </FundWalletPlusIcon>
          </FundWalletContainer>
          <ClipDivider
            fillColor={colors.BD_DARK_COLOR}
            style={{
              position: 'absolute',
              top: applyScale(100),
              scale: 1.7
            }}
          />
        </HeaderContainer>
        <ScrollView
          style={{ flexGrow: 1, width: '100%' }}
          contentContainerStyle={{
            alignItems: 'center',
            marginTop: 20,
            paddingBottom: 50
          }}
          showsVerticalScrollIndicator={false}
        >
          <Card
            style={{
              width: '90%',
              borderRadius: 10,
              backgroundColor: colors.BG_LIGHT_COLOR,
              alignItems: null,
              padding: 20
            }}
            activeOpacity={0.8}
          >
            <WalletCardHeader>
              <CurrentBallanceLabel>current balance</CurrentBallanceLabel>
              <Ionicons
                name="ios-arrow-down"
                color={colors.FONT_DARK_COLOR}
                size={15}
                style={{ marginLeft: 6 }}
              />
              <WalletLabel>wallet</WalletLabel>
            </WalletCardHeader>
            <CurrentWalletBallance>₦ 46,584.99</CurrentWalletBallance>
            <WalletAddress>08132584758</WalletAddress>
            <WalletCardFooter>
              <CardType>PeakySneakers Card</CardType>
              <CardDate>28/08</CardDate>
            </WalletCardFooter>
          </Card>

          <FundOtherWalletContainer>
            <WalletContainerLabel>send money to @</WalletContainerLabel>
            <ScrollView
              horizontal
              contentContainerStyle={{ alignItems: 'flex-end' }}
              showsHorizontalScrollIndicator={false}
            >
              <FundOtherWalletIconContainer activeOpacity={0.6}>
                <FundOtherWalletIcon>
                  <ProfileIcon
                    style={{ top: 6 }}
                    fillColor={colors.DRAWER_COLOR}
                  />
                </FundOtherWalletIcon>
                <FundOtherWalletText>add new account</FundOtherWalletText>
              </FundOtherWalletIconContainer>
              {beneficiaries.map(benefactor => (
                <Beneficiary key={benefactor.id} {...benefactor} />
              ))}
            </ScrollView>
          </FundOtherWalletContainer>
          <TransactionHistoryContainer>
            <TransactionHistoryHeader>
              <WalletContainerLabel style={{ paddingLeft: 0 }}>
                recent transactions
              </WalletContainerLabel>
              <CalenderIcon fillColor={colors.DRAWER_COLOR} />
            </TransactionHistoryHeader>
            {dummyTransactions.map(transaction => (
              <Transaction key={transaction.id} {...transaction} />
            ))}
          </TransactionHistoryContainer>
        </ScrollView>
      </Container>
    </Fragment>
  );
}
