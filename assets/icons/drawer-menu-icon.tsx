import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function DrawerMenu(props: IconProps) {
  return (
    <Svg width="25" height="50" viewBox="0 0 24 25" fill="none" {...props}>
      <Path
        d="M2 12.5h20M2 17.5h14M2 7.5h20"
        stroke={props.fillColor}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
