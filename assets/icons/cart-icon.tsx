import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function CartIcon(props: IconProps) {
  const activePath =
    'M8.9 7a3.1 3.1 0 116.2 0v3.1H8.9V7zm8 0v3.1H19a.9.9 0 01.883.723l2 10A.9.9 0 0121 21.9H3a.9.9 0 01-.883-1.076l2-10A.9.9 0 015 10.1h2.1V7a4.9 4.9 0 119.8 0z';

  const inActivePath =
    'M8 10H5L3 21h18l-2-11h-3m-8 0V7a4 4 0 014-4v0a4 4 0 014 4v3m-8 0h8m-8 0v3m8-3v3';

  return (
    <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d={!props.isFocused ? inActivePath : activePath}
        stroke={!props.isFocused ? props.fillColor : null}
        fill={props.isFocused ? props.fillColor : null}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
}
