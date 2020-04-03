import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function FilterIcon(props: IconProps) {
  return (
    <Svg width="40%" height="100%" viewBox="0 0 13.13 11.671" {...props}>
      <Path
        data-name="Filter (filled)"
        d="M5.784 3.465a2.918 2.918 0 110-1.094h5.887a.547.547 0 110 1.094zM.912 8.754a.547.547 0 01.547-.547h5.887a2.918 2.918 0 110 1.094H1.459a.547.547 0 01-.547-.547z"
        fill={props.fillColor}
        fillRule="evenodd"
      />
    </Svg>
  );
}
