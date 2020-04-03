import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function TrackOrderIcon(props: IconProps) {
  return (
    <Svg width="20%" height="80%" viewBox="0 0 26 29" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.322 5.657a1 1 0 10.517 1.931l.966-.258a1 1 0 011.225.707L7.168 19.75a4.002 4.002 0 003.004 7.346 4.002 4.002 0 002.966-3.9l9.298-2.492a1 1 0 10-.518-1.931l-9.298 2.491a4.007 4.007 0 00-3.52-2.032L5.962 7.519a3 3 0 00-3.674-2.121l-.966.259zM8.619 21.3a2 2 0 111.036 3.863 2 2 0 01-1.036-3.863zm2.785-14.723a4 4 0 00-2.829 4.9l1.295 4.83a4 4 0 004.899 2.828l4.83-1.295a4 4 0 002.828-4.899l-1.294-4.83a4 4 0 00-4.9-2.828l-4.83 1.294zm3.9 2.438a.9.9 0 00-1.23.33l-1.414 2.449a.9.9 0 001.56.9l.327-.568.732 2.73a.9.9 0 001.738-.465l-.731-2.731.567.328a.9.9 0 00.9-1.56l-2.449-1.413z"
        fill={props.fillColor}
      />
    </Svg>
  );
}
