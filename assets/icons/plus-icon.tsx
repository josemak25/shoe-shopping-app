import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function PlusIcon(props: IconProps) {
  return (
    <Svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 3V12M12 21V12M12 12H21M12 12H3"
        stroke={props.fillColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
