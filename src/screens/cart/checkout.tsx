import React from 'react';
import { NavigationInterface } from '../types';
import { useThemeContext } from '../../theme';
import { ProductInterface } from '../../store/product/types';

import { Container } from './styles';

interface CheckOutProps extends NavigationInterface {
  totalCartPrice: number;
}

export default function CheckOut(props: CheckOutProps) {
  const { colors } = useThemeContext();

  return <Container style={{ width: '100%', borderWidth: 1 }}></Container>;
}
