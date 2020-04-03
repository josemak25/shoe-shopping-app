import React, { Fragment } from 'react';
import { useThemeContext } from '../../theme';
import boxShadow from '../../utils/boxShadows';
import TrollerCartIcon from '../../../assets/icons/troller-icon';
import Card from '../../components/card';

import { trollerCartStyles, CartItemNumber } from './styles';

type FloatingTrollerProps = {
  numOfItemsOnCart: number;
};

export default function FloatingTroller(props: FloatingTrollerProps) {
  const { colors } = useThemeContext();

  return (
    <Card
      activeOpacity={0.6}
      style={[
        {
          ...trollerCartStyles,
          backgroundColor: colors.BG_LIGHT_COLOR
        },
        boxShadow({
          elevation: 10,
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowRadius: 0.1,
          shadowOpacity: 0.1,
          height: 2
        })
      ]}
    >
      <Fragment>
        <CartItemNumber>{props.numOfItemsOnCart}</CartItemNumber>
        <TrollerCartIcon
          fillColor={colors.FONT_DARK_COLOR}
          style={{ top: 5 }}
        />
      </Fragment>
    </Card>
  );
}
