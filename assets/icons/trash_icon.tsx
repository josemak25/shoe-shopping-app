import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function TrashIcon(props: IconProps) {
  return (
    <Svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 2.1A2.9 2.9 0 008.1 5v.1H4a.9.9 0 100 1.8h1.309l.825 12.272v.002A2.75 2.75 0 008.88 21.75h6.242a2.75 2.75 0 002.745-2.576v-.002L18.69 6.9H20a.9.9 0 000-1.8h-4.1V5A2.9 2.9 0 0013 2.1h-2zm3.1 3H9.9V5A1.1 1.1 0 0111 3.9h2A1.1 1.1 0 0114.1 5v.1zm-3.5 4.861a.9.9 0 10-1.8.078l.3 7a.9.9 0 001.8-.078l-.3-7zm4.6.078a.9.9 0 00-1.8-.078l-.3 7a.9.9 0 101.8.078l.3-7z"
        fill="#262F56"
      />
    </Svg>
  );
}
