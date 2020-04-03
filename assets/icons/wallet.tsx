import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function WalletIcon(props: IconProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 7a2 2 0 012 2v2h-4a3 3 0 100 6h4v2a2 2 0 01-2 2H3a2 2 0 01-2-2V5.5a2 2 0 012-2h14a2 2 0 012 2H4.25a.75.75 0 000 1.5H21zm-2 5.5a1.5 1.5 0 000 3h4v-3h-4z"
        stroke={!props.isFocused ? props.fillColor : null}
        strokeWidth={1.8}
        fill={props.isFocused ? props.fillColor : null}
      />
    </Svg>
  );
}

export function FundWalletIcon(props: IconProps) {
  return (
    <Svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M19 18V8a3 3 0 00-3-3h-1M5 18V8a3 3 0 013-3h1m0 0l.5 1.5h5L15 5M9 5h6"
        stroke={props.fillColor}
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <Path
        d="M12 19c-6.075 0-11-1.79-11-4 0-1.195 1.44-2.267 3.724-3M12 19l-3-3m3 3l-3 2.5m7-2.773c4.097-.582 7-2.031 7-3.727 0-1.195-1.44-2.267-3.724-3"
        stroke={props.fillColor}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
