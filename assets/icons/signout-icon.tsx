import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { IconProps } from './types';

export default function SignOutIcon(props: IconProps) {
  return (
    <Svg width="20%" height="100%" viewBox="0 0 19.178 21.3" {...props}>
      <G data-name="Group 23">
        <Path
          data-name="Path 28"
          d="M.042 12.631A9.575 9.575 0 013.555 4.27a1.419 1.419 0 012.322 1.087 1.439 1.439 0 01-.548 1.117 6.761 6.761 0 108.518 0 1.433 1.433 0 01-.543-1.113 1.415 1.415 0 012.291-1.117A9.587 9.587 0 11.042 12.631zM9.586 0a1.413 1.413 0 00-1.413 1.413v6.509a1.413 1.413 0 002.826 0V1.413A1.413 1.413 0 009.586 0z"
          fill={props.fillColor}
        />
      </G>
    </Svg>
  );
}
