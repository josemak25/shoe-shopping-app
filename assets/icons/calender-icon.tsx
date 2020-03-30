import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function CalenderIcon(props: IconProps) {
  return (
    <Svg width="10%" height="25%" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M20.5 8h-17M4 7h16m0-1H4m2 15h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v10a3 3 0 003 3z"
        stroke={props.fillColor}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <Path
        d="M7.5 6.75v-4M16.5 6.75v-4"
        stroke={props.fillColor}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.25 17.5h-1.5m1.5-3h-1.5m1.5-3h-1.5m6 6h-1.5m1.5-3h-1.5m1.5-3h-1.5m6 6h-1.5m1.5-3h-1.5m1.5-3h-1.5"
        stroke={props.fillColor}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </Svg>
  );
}
