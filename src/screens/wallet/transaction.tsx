import React from 'react';
import WalletIcon, { FundWalletIcon } from '../../../assets/icons/wallet';
import { useThemeContext } from '../../theme';
import CartIcon from '../../../assets/icons/cart-icon';

import {
  TransactionContainer,
  TransactionTypeIconContainer,
  TransactionDetailsContainer,
  TransactionTypeContainer,
  TransactionPrice,
  TransactionWalletAddress,
  TransactionType
} from './styles';

interface TransactionProp {
  testID?: string;
  transactionType: string;
  walletAddress: string;
  amount: string;
}

export default function Transaction(props: TransactionProp) {
  const { colors } = useThemeContext();
  const { transactionType, walletAddress, amount } = props;

  return (
    <TransactionContainer>
      <TransactionDetailsContainer>
        <TransactionTypeIconContainer>
          {transactionType === 'fund wallet' && (
            <WalletIcon
              fillColor={colors.FONT_DARK_COLOR}
              width="50%"
              height="50%"
              isFocused
            />
          )}

          {transactionType === 'shopping' && (
            <CartIcon
              fillColor={colors.FONT_DARK_COLOR}
              isFocused
              width="50%"
              height="50%"
            />
          )}

          {transactionType === 'fund transfer' && (
            <FundWalletIcon fillColor={colors.FONT_DARK_COLOR} />
          )}
        </TransactionTypeIconContainer>
        <TransactionTypeContainer>
          <TransactionType>{transactionType}</TransactionType>
          <TransactionWalletAddress>{walletAddress}</TransactionWalletAddress>
        </TransactionTypeContainer>
      </TransactionDetailsContainer>
      <TransactionPrice>{amount}</TransactionPrice>
    </TransactionContainer>
  );
}
