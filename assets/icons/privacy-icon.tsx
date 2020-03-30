import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function PrivacyIcon(props: IconProps) {
  return (
    <Svg width="20%" height="80%" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.1a5.4 5.4 0 00-5.4 5.4v2.501c-1.227.006-1.916.048-2.462.326a3 3 0 00-1.311 1.311C2.5 11.28 2.5 12.12 2.5 13.8v3.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C4.78 22 5.62 22 7.3 22h9.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311c.327-.642.327-1.482.327-3.162v-3.4c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311c-.546-.278-1.235-.32-2.462-.326V6.5A5.4 5.4 0 0012 1.1zM15.6 9V6.5a3.6 3.6 0 00-7.2 0V9h7.2zM13 16.232a2 2 0 00-1-3.732 2 2 0 00-1 3.732V18a1 1 0 102 0v-1.768z"
        fill={props.fillColor}
      />
    </Svg>
  );
}
