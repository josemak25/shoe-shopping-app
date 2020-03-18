import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function TrollerIcon(props: IconProps) {
  return (
    <Svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.1 4a.9.9 0 01.9-.9h2a.9.9 0 01.868.663l.65 2.381 14.541.958A.9.9 0 0119.9 8v6a.9.9 0 01-.831.897l-13 1a.9.9 0 01-.937-.66l-2.182-8L2.313 4.9H1A.9.9 0 01.1 4zm7.773 4.782a.9.9 0 10-1.746.436l1 4a.9.9 0 101.746-.436l-1-4zm3.5-.423a.9.9 0 011.018.764l.5 3.5a.9.9 0 01-1.782.254l-.5-3.5a.9.9 0 01.764-1.018zM16.9 9.5a.9.9 0 10-1.8 0v3a.9.9 0 001.8 0v-3zM10 19a2 2 0 11-4 0 2 2 0 014 0zm6 2a2 2 0 100-4 2 2 0 000 4z"
        fill={props.fillColor}
      />
    </Svg>
  );
}
